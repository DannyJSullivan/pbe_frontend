import React from 'react';
import './App.css';
import { useTable, useSortBy, useFilters, useGlobalFilter, useAsyncDebounce } from 'react-table';
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
            teams: [],
            formatted_teams: [],
            team_names: {},
            leagues: {},
            conferences: {},
            divisions: {}
        }
    }

    formatTeams = function() {
        let formatted_teams = []

        // this.state.team_list.forEach((team) => formatted_teams.push(
        //     {
        //         "name": team['name'],
        //         "league": team['league'],
        //         "conference": team['conference'],
        //         "division": team['division'],
        //         "tpe": team['tpe'],
        //         "average_tpe": team['average_tpe'],
        //         "player_count": team['player_count'],
        //     }
        // ))
        //
        // return formatted_teams

        this.state.teams.forEach((team) => formatted_teams.push(team))
        return formatted_teams
    }

    async componentDidMount() {
        const resp = await fetch('https://pbe-backend.herokuapp.com/teams/active')
        const data = await resp.json()

        let teams_list = []
        let league_list = []
        let conference_list = []
        let division_list = []
        let teams = {}
        let leagues = {}
        let conferences = {}
        let divisions = {}

        data.forEach((team) => {
            this.state.teams.push(team);
            if(!teams_list.includes(team.name)) {
                teams_list.push(team.name)
            }
            if(!league_list.includes(team.league)) {
                league_list.push(team.league)
            }
            if(!conference_list.includes(team.conference)) {
                conference_list.push(team.conference)
            }
            if(!division_list.includes(team.division)) {
                division_list.push(team.division)
            }
        })

        teams_list.sort();
        league_list.sort();
        conference_list.sort();
        division_list.sort();

        teams_list.forEach((team) => {
            teams[team] = team
        })
        league_list.forEach((league) => {
            leagues[league] = league
        })
        conference_list.forEach((conference) => {
            conferences[conference] = conference
        })
        division_list.forEach((division) => {
            divisions[division] = division
        })

        this.state.team_names = teams;
        this.state.leagues = leagues;
        this.state.conferences = conferences;
        this.state.divisions = divisions;
        this.state.formatted_teams = this.formatTeams()
        this.forceUpdate()
    }

    // TODO: SET UP A CUSTOM FILTER FOR THE TPE COLUMN, anything greater than or equal to the number input
    render() {
        return (
            <div className="center" style={{ maxWidth: '100%' }}>
                <Navbar/>
                <center>
                    <MaterialTable
                        style={{ maxWidth: '90%', marginTop: '20px' }}
                        options={{
                            filtering: true,
                            exportButton: true,
                            exportAllData: true,
                            pageSize: 26,
                            pageSizeOptions: [5, 10, this.state.formatted_teams.length]
                        }}
                        icons={tableIcons}
                        columns={[
                            { title: 'Team', field: 'name', lookup: this.state.team_names },
                            { title: 'Total TPE', field: 'tpe', type: "numeric", defaultSort: "desc" },
                            { title: 'League', field: 'league', lookup: this.state.leagues },
                            { title: 'Conference', field: 'conference', lookup: this.state.conferences},
                            { title: 'Division', field: 'division', lookup: this.state.divisions},
                            { title: 'Players', field: 'player_count', type: "numeric"},
                            { title: 'Avg TPE / Player', field: 'average_tpe', type: "numeric"}
                        ]}
                        data={this.state.formatted_teams}
                        title="PBE Team TPE Tracker"
                    />
                </center>
                <Footer/>
            </div>
        );
    }
}

export default App;
