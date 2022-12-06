import React from 'react';
import './App.css';
import { forwardRef } from 'react';
import MaterialTable from 'material-table'
import AddBox from '@mui/icons-material/AddBox';
import ArrowDownward from '@mui/icons-material/ArrowDownward';
import Check from '@mui/icons-material/Check';
import ChevronLeft from '@mui/icons-material/ChevronLeft';
import ChevronRight from '@mui/icons-material/ChevronRight';
import Clear from '@mui/icons-material/Clear';
import DeleteOutline from '@mui/icons-material/DeleteOutline';
import Edit from '@mui/icons-material/Edit';
import FilterList from '@mui/icons-material/FilterList';
import FirstPage from '@mui/icons-material/FirstPage';
import LastPage from '@mui/icons-material/LastPage';
import Remove from '@mui/icons-material/Remove';
import SaveAlt from '@mui/icons-material/SaveAlt';
import Search from '@mui/icons-material/Search';
import ViewColumn from '@mui/icons-material/ViewColumn';
import Footer from "./TPEFooter";
import Navbar from "./TPENavbar";

const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
    ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
};


class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            players: [],
            formatted_players: [],
            positions: {"Center": "C", "Point Guard": "PG", "Power Forward": "PF", "Shooting Guard": "SG",
                "Small Forward": "SF"},
            teams: {},
            archetypes: {
                "Balanced Center (Bam Adebayo, Myles Turner)": "C - Balanced",
                "Floor Spacer Center (Al Horford, Brook Lopez)": "C - Floor Spacer",
                "Inside Monster Center (Clint Capela, Deandre Ayton)": "C - Inside Monster",
                "Rim Protector Center (Jakob Poeltl, Rudy Gobert)": "C - Rim Protector",
                "Balanced Power Forward (Domantas Sabonis, Draymond Green)": "PF - Balanced",
                "Defender Power Forward (Zach Collins, Ed Davis)": "PF - Defender",
                "Scorer Power Forward (Pascal Siakam, Jerami Grant)": "PF - Scorer",
                "Stretch 4 Power Forward (Nikola Vucevic, Dirk Nowitzki)": "PF - Stretch 4",
                "Balanced Point Guard (Chris Paul, De’Aaron Fox)": "PG - Balanced",
                "Driver Point Guard (Kyrie Irving, Damian Lillard)": "PG - Driver",
                "Floor General Point Guard (Rajon Rondo, Ricky Rubio)": "PG - Floor General",
                "Sniper Point Guard (Patrick Beverly, Jrue Holiday)": "PG - Sniper",
                "Balanced Shooting Guard (Jimmy Butler, Fred VanVleet)": "SG - Balanced",
                "Scorer Shooting Guard (Bradley Beal, Devin Booker)": "SG - Scorer",
                "Spark Plug Shooting Guard (Marcus Smart, Norman Powell)": "SG - Spark Plug",
                "Three and D Shooting Guard (Klay Thompson, Danny Green)": "SG - Three and D",
                "Balanced Small Forward (Gordon Hayward, Khris Middleton)": "SF - Balanced",
                "Ball Hog Small Forward (Demar Derozan, TJ Warren)": "SF - Ball Hog",
                "Defense First Small Forward (OG Anunoby, Matisse Thybulle)": "SF - Defense First",
                "Shooting Small Forward (Michael Porter Jr, Bojan Bogdanovic)": "SF - Shooting"
            },
            seasons: {}
        }
    }

    cleanArch(a) {
        if(a === "Balanced Center (Bam Adebayo, Myles Turner)"){
            return "Balanced Center (Bam Adebayo, Myles Turner)"
        } else if(a === "Floor Spacer (Al Horford, Brook Lopez)") {
            return "Floor Spacer Center (Al Horford, Brook Lopez)"
        } else if(a === "Balanced PF (Domantas Sabonis, Draymond Green)") {
            return "Balanced Power Forward (Domantas Sabonis, Draymond Green)"
        } else if (a === "Defender PF (Zach Collins, Ed Davis)") {
            return "Defender Power Forward (Zach Collins, Ed Davis)"
        } else if (a === "Scorer PF (Pascal Siakam, Jerami Grant)") {
            return "Scorer Power Forward (Pascal Siakam, Jerami Grant)"
        } else if (a === "Stretch 4 (Nikola Vucevic, Dirk Nowitzki)") {
            return "Stretch 4 Power Forward (Nikola Vucevic, Dirk Nowitzki)"
        } else if (a === "Balanced PG (Chris Paul, De’Aaron Fox)") {
            return "Balanced Point Guard (Chris Paul, De’Aaron Fox)"
        } else if (a === "Driver PG (Kyrie Irving, Damian Lillard)") {
            return "Driver Point Guard (Kyrie Irving, Damian Lillard)"
        } else if (a === "Floor General PG (Rajon Rondo, Ricky Rubio)") {
            return "Floor General Point Guard (Rajon Rondo, Ricky Rubio)"
        } else if (a === "Sniper PG (Patrick Beverly, Jrue Holiday)" || a === "Sniper PG Point Guard (Patrick Beverly, Jrue Holiday)") {
            return "Sniper Point Guard (Patrick Beverly, Jrue Holiday)"
        } else if (a === "Balanced SG (Jimmy Butler, Fred VanVleet)") {
            return "Balanced Shooting Guard (Jimmy Butler, Fred VanVleet)"
        } else if (a === "Scorer SG (Bradley Beal, Devin Booker)") {
            return "Scorer Shooting Guard (Bradley Beal, Devin Booker)"
        } else if (a === "Spark Plug SG (Marcus Smart, Norman Powell)") {
            return "Spark Plug Shooting Guard (Marcus Smart, Norman Powell)"
        } else if (a === "Three and D SG (Klay Thompson, Danny Green)") {
            return "Three and D Shooting Guard (Klay Thompson, Danny Green)"
        } else if (a === "Balanced SF (Gordon Hayward, Khris Middleton)") {
            return "Balanced Small Forward (Gordon Hayward, Khris Middleton)"
        } else if (a === "Ball Hog SF (Demar Derozan, TJ Warren)") {
            return "Ball Hog Small Forward (Demar Derozan, TJ Warren)"
        } else if (a === "Defense First (OG Anunoby, Matisse Thybulle)") {
            return "Defense First Small Forward (OG Anunoby, Matisse Thybulle)"
        } else if (a === "Shooting SF (Michael Porter Jr, Bojan Bogdanovic)") {
            return "Shooting Small Forward (Michael Porter Jr, Bojan Bogdanovic)"
        } else {
            return a
        }
    }

    async componentDidMount() {
        // const resp = await fetch('https://wsbl-admin-backend.herokuapp.com/playerlist')
        // const data = await resp.json()
        // let teams_list = []
        // let seasons_list = []
        // let teams = {}
        // let seasons = {}
        // data.forEach((player) => {
        //     player.arch = this.cleanArch(player.arch)
        //     this.state.players.push(player);
        //     if(!teams_list.includes(player.team)) {
        //         teams_list.push(player.team)
        //     }
        //     if(!seasons_list.includes(player.season)) {
        //         seasons_list.push(player.season)
        //     }
        // })
        //
        // teams_list.sort();
        // seasons_list.sort();
        //
        // teams_list.forEach((team) => {
        //     teams[team] = team
        // })
        // seasons_list.forEach((season) => {
        //     seasons[season] = season
        // })
        //
        // this.state.teams = teams;
        // this.state.seasons = seasons;
        // this.forceUpdate()
    }

    // TODO: SET UP A CUSTOM FILTER FOR THE TPE COLUMN, anything greater than or equal to the number input
    render() {
        return (
            <div className="center" style={{ maxWidth: '100%' }}>
                <Navbar/>
                <center>
                    <h1>Coming soon...</h1>
                {/*<MaterialTable*/}
                {/*    options={{*/}
                {/*        filtering: true,*/}
                {/*        exportButton: true,*/}
                {/*        exportAllData: true,*/}
                {/*        pageSize: 10,*/}
                {/*        pageSizeOptions: [5, 10, 25, 50, 100, this.state.players.length]*/}
                {/*    }}*/}
                {/*    icons={tableIcons}*/}
                {/*    columns={[*/}
                {/*        { title: 'Username', field: 'forum_name' },*/}
                {/*        { title: 'Name', field: 'name' },*/}
                {/*        { title: 'Season', field: 'season', lookup: this.state.seasons},*/}
                {/*        { title: 'Position', field: 'position', lookup: this.state.positions},*/}
                {/*        { title: 'Archetype', field: 'arch', lookup: this.state.archetypes},*/}
                {/*        { title: 'Team', field: 'team', lookup: this.state.teams},*/}
                {/*        { title: 'FG - Restricted Area', field: 'fg_ra'},*/}
                {/*        { title: 'FG - Inside Paint', field: 'fg_ip'},*/}
                {/*        { title: 'FG - Midrange', field: 'fg_mr'},*/}
                {/*        { title: 'FG - Corner', field: 'fg_cor'},*/}
                {/*        { title: 'FG - Above Break', field: 'fg_ab'},*/}
                {/*        { title: 'Free Throw', field: 'ft'},*/}
                {/*        { title: 'Scoring', field: 'scoring'},*/}
                {/*        { title: 'Passing', field: 'passing'},*/}
                {/*        { title: 'Handling', field: 'handling'},*/}
                {/*        { title: 'Offensive Rebound', field: 'off_reb'},*/}
                {/*        { title: 'Defensive Rebound', field: 'def_reb'},*/}
                {/*        { title: 'Blocking', field: 'blocking'},*/}
                {/*        { title: 'Stealing', field: 'stealing'},*/}
                {/*        { title: 'Defender', field: 'defender'},*/}
                {/*        { title: 'Discipline', field: 'iq'},*/}
                {/*        { title: 'PS - Pass', field: 'ps_pass'},*/}
                {/*        { title: 'PS - Drive and Pass', field: 'ps_dap'},*/}
                {/*        { title: 'PS - Drive and Shoot', field: 'ps_das'},*/}
                {/*        { title: 'PS - Post Up', field: 'ps_pu'},*/}
                {/*        { title: 'PS - Pull up Jumper', field: 'ps_puj'},*/}
                {/*        { title: 'PS - Catch and Shoot', field: 'ps_cas'},*/}
                {/*        { title: 'FR - Post', field: 'fr_post'},*/}
                {/*        { title: 'FR - Midrange', field: 'fr_mr'},*/}
                {/*        { title: 'FR - Corner', field: 'fr_cor'},*/}
                {/*        { title: 'FR - Above the Break', field: 'fr_atb'},*/}
                {/*        { title: 'TPE Banked', field: 'tpe_banked', type: "numeric"},*/}
                {/*        { title: 'TPE Total', field: 'tpe_total', type: "numeric", defaultSort: "desc"},*/}
                {/*        { title: 'Last Updated', field: 'last_updated', type: "date" },*/}
                {/*        { title: 'Player Page', field: 'url', hidden: true}*/}
                {/*    ]}*/}
                {/*    actions={[*/}
                {/*        {*/}
                {/*            icon: ViewColumn,*/}
                {/*            tooltip: "Player Page",*/}
                {/*            onClick: (event, rowData) => window.open(rowData.url)*/}
                {/*        }*/}
                {/*    ]}*/}
                {/*    data={this.state.players}*/}
                {/*    title="WSBL Attribute Tracker"*/}
                {/*/>*/}
                </center>
                <Footer/>
            </div>
        );
    }
}

export default App;
