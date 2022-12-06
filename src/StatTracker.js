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
import Footer from "./StatTrackerFooter";
import Navbar from "./StatTrackerNavbar";

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
            positions: {"C": "C", "PG": "PG", "PF": "PF", "SG": "SG", "SF": "SF"},
            teams: {},
            types: {
                "Rookie": "Rookie", "Veteran": "Veteran", "Bot": "Bot"
            },
            years: {}
        }
    }

    async componentDidMount() {
        // const resp = await fetch('https://wsbl-admin-backend.herokuapp.com/player/stats/season')
        // let text = await resp.text()
        // let json = eval(text)
        // let teams_list = []
        // let seasons_list = []
        // let teams = {}
        // let seasons = {}
        // json.forEach((player) => {
        //     this.state.players.push(player);
        //     if(!teams_list.includes(player.team)) {
        //         teams_list.push(player.team)
        //     }
        //     if(!seasons_list.includes(player.year)) {
        //         seasons_list.push(player.year)
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
        // this.state.years = seasons;
        // this.forceUpdate()
    }

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
                {/*        { title: 'Year', field: 'year', type: "numeric", lookup: this.state.years},*/}
                {/*        { title: 'Name', field: 'name', defaultSort: "asc" },*/}
                {/*        { title: 'Position', field: 'pos', lookup: this.state.positions},*/}
                {/*        { title: 'Type', field: 'type', lookup: this.state.types},*/}
                {/*        { title: 'Team', field: 'team', lookup: this.state.teams},*/}
                {/*        { title: 'GP', field: 'gp', type: "numeric"},*/}
                {/*        { title: 'GS', field: 'gs', type: "numeric"},*/}
                {/*        { title: 'MIN', field: 'min', type: "numeric"},*/}
                {/*        { title: 'FGM', field: 'fgm', type: "numeric"},*/}
                {/*        { title: 'FGA', field: 'fga', type: "numeric"},*/}
                {/*        { title: 'FG%', field: 'fg_pct', type: "numeric"},*/}
                {/*        { title: '3PM', field: 'three_pm', type: "numeric"},*/}
                {/*        { title: '3PA', field: 'three_pa', type: "numeric"},*/}
                {/*        { title: '3P%', field: 'three_pct', type: "numeric"},*/}
                {/*        { title: 'FTM', field: 'ftm', type: "numeric"},*/}
                {/*        { title: 'FTA', field: 'fta', type: "numeric"},*/}
                {/*        { title: 'FT%', field: 'ft_pct', type: "numeric"},*/}
                {/*        { title: 'ORB', field: 'orb', type: "numeric"},*/}
                {/*        { title: 'DRB', field: 'drb', type: "numeric"},*/}
                {/*        { title: 'TRB', field: 'trb', type: "numeric"},*/}
                {/*        { title: 'AST', field: 'ast', type: "numeric"},*/}
                {/*        { title: 'STL', field: 'stl', type: "numeric"},*/}
                {/*        { title: 'BLK', field: 'blk', type: "numeric"},*/}
                {/*        { title: 'TOV', field: 'tov', type: "numeric"},*/}
                {/*        { title: 'PF', field: 'pf', type: "numeric"},*/}
                {/*        { title: 'PTS', field: 'pts', type: "numeric"},*/}
                {/*        { title: '2PA', field: 'two_pa', type: "numeric"},*/}
                {/*        { title: '0-3A', field: 'zero_to_three_a', type: "numeric"},*/}
                {/*        { title: '3-10A', field: 'three_to_ten_a', type: "numeric"},*/}
                {/*        { title: '10-16A', field: 'ten_to_sixteen_a', type: "numeric"},*/}
                {/*        { title: '16-3A', field: 'sixteen_to_three_a', type: "numeric"},*/}
                {/*        { title: '2P%', field: 'two_p_pct', type: "numeric"},*/}
                {/*        { title: '0-3%', field: 'zero_to_three_pct', type: "numeric"},*/}
                {/*        { title: '3-10%', field: 'three_to_ten_pct', type: "numeric"},*/}
                {/*        { title: '10-16%', field: 'ten_to_sixteen_pct', type: "numeric"},*/}
                {/*        { title: '16-3%', field: 'sixteen_to_three_pct', type: "numeric"},*/}
                {/*        { title: 'ON', field: 'on', type: "numeric"},*/}
                {/*        { title: 'OFF', field: 'off', type: "numeric"},*/}
                {/*        { title: 'NET', field: 'net', type: "numeric"},*/}
                {/*        { title: 'PER', field: 'per', type: "numeric"},*/}
                {/*        { title: 'TS%', field: 'ts_pct', type: "numeric"},*/}
                {/*        { title: 'EFG%', field: 'efg_pct', type: "numeric"},*/}
                {/*        { title: 'ORB%', field: 'orb_pct', type: "numeric"},*/}
                {/*        { title: 'DRB%', field: 'drb_pct', type: "numeric"},*/}
                {/*        { title: 'TRB%', field: 'trb_pct', type: "numeric"},*/}
                {/*        { title: 'AST%', field: 'ast_pct', type: "numeric"},*/}
                {/*        { title: 'STL%', field: 'stl_pct', type: "numeric"},*/}
                {/*        { title: 'BLK%', field: 'blk_pct', type: "numeric"},*/}
                {/*        { title: 'TO%', field: 'to_pct', type: "numeric"},*/}
                {/*        { title: 'A/TO', field: 'a_by_to_pct', type: "numeric"},*/}
                {/*        { title: 'USG%', field: 'usg_pct', type: "numeric"},*/}
                {/*        { title: 'DRVS', field: 'drvs', type: "numeric"},*/}
                {/*        { title: 'DRVF', field: 'drvf', type: "numeric"},*/}
                {/*        { title: 'STP%', field: 'stp', type: "numeric"},*/}
                {/*        { title: 'TOFC', field: 'tofc', type: "numeric"},*/}
                {/*        { title: 'PTAL', field: 'ptal', type: "numeric"},*/}
                {/*        { title: 'SHTF', field: 'shtf', type: "numeric"},*/}
                {/*        { title: 'PA/SF', field: 'pa_by_sf', type: "numeric"},*/}
                {/*        { title: 'TCHS', field: 'tchs', type: "numeric"},*/}
                {/*        { title: 'TO/TCH', field: 'to_by_tch', type: "numeric"},*/}
                {/*        { title: 'A/TCH', field: 'a_by_tch', type: "numeric"},*/}
                {/*        { title: 'CHRG', field: 'chrg', type: "numeric"},*/}
                {/*        { title: 'TECH', field: 'tech', type: "numeric"},*/}
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
                {/*    title="WSBL Stat Tracker"*/}
                {/*/>*/}
                </center>
                <Footer/>
            </div>
        );
    }
}

export default App;
