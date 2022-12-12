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
            positions: {"C": "C", "1B": "1B", "2B": "2B", "3B": "3B", "SS": "SS", "LF": "LF", "CF": "CF", "RF": "RF",
                "SP": "SP", "RP": "RP", "CP": "CP"},
            teams: {},
            archetypes: {},
            seasons: {},
            leagues: {},
            conferences: {},
            divisions: {}
        }

    }

    formatPlayers = function() {
        let formatted_players = []
        this.state.players.forEach((player) => formatted_players.push(
            {
                "player_forum_code": player['player_forum_code'],
                "forum_name": player['forum_name'],
                "team": player['team'],
                "league": player['league'],
                "conference": player['conference'],
                "division": player['division'],
                "season": player['season'].replace("S", ""),
                "tpe": player['tpe'],
                "user_forum_code": player['user_forum_code'],
                "last_updated": player['last_updated'],
                "player_name": player['player_name'],
                "normalized_name": player['normalized_name'],
                "position": player['position'],
                "discord": player['discord'],
                "tpe_banked": player['tpe_banked']
            }))
        return formatted_players
    }

    async componentDidMount() {
        const resp = await fetch('https://pbe-backend.herokuapp.com/players/basic/active')
        const data = await resp.json()
        let teams_list = []
        let seasons_list = []
        let league_list = []
        let conference_list = []
        let division_list = []
        let position_list = []
        let teams = {}
        let seasons = {}
        let leagues = {}
        let conferences = {}
        let divisions = {}
        // let positions = {}

        data.forEach((player) => {
            this.state.players.push(player);
            if(!teams_list.includes(player.team)) {
                teams_list.push(player.team)
            }
            if(!seasons_list.includes(player.season)) {
                seasons_list.push(player.season.replace("S", ""))
            }
            if(!league_list.includes(player.league)) {
                league_list.push(player.league)
            }
            if(!conference_list.includes(player.conference)) {
                conference_list.push(player.conference)
            }
            if(!division_list.includes(player.division)) {
                division_list.push(player.division)
            }
            // if(!position_list.includes(player.position)) {
            //     position_list.push(player.position)
            // }
        })

        teams_list.sort();
        seasons_list.sort();
        league_list.sort();
        conference_list.sort();
        division_list.sort();
        // position_list.sort();

        teams_list.forEach((team) => {
            teams[team] = team
        })
        seasons_list.forEach((season) => {
            seasons[season] = season
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
        // position_list.forEach((position) => {
        //     positions[position] = position
        // })

        this.state.teams = teams;
        this.state.seasons = seasons;
        this.state.leagues = leagues;
        this.state.conferences = conferences;
        this.state.divisions = divisions;
        // this.state.positions = positions;
        this.state.formatted_players = this.formatPlayers()
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
                            pageSize: 10,
                            pageSizeOptions: [5, 10, 25, 50, 100, this.state.players.length]
                        }}
                        icons={tableIcons}
                        columns={[
                            { title: 'Username', field: 'forum_name' },
                            { title: 'Name', field: 'player_name' },
                            { title: 'TPE Total', field: 'tpe', type: "numeric", defaultSort: "desc"},
                            { title: 'TPE Banked', field: 'tpe_banked', type: "numeric"},
                            { title: 'Season', field: 'season', lookup: this.state.seasons, type: "numeric" },
                            { title: 'Team', field: 'team', lookup: this.state.teams },
                            { title: 'Position', field: 'position', lookup: this.state.positions},
                            // { title: 'Archetype', field: 'arch', lookup: this.state.archetypes},
                            { title: 'League', field: 'league', lookup: this.state.leagues },
                            { title: 'Conference', field: 'conference', lookup: this.state.conferences },
                            { title: 'Division', field: 'division', lookup: this.state.divisions },
                            { title: 'Last Updated', field: 'last_updated', type: "date" },
                            { title: 'Player Page', field: 'player_forum_code', hidden: true}
                        ]}
                        actions={[
                            {
                                icon: ViewColumn,
                                tooltip: "Player Page",
                                onClick: (event, rowData) =>
                                    window.open("https://probaseballexperience.jcink.net/index.php?showtopic=" + rowData.player_forum_code)
                            }
                        ]}
                        data={this.state.formatted_players}
                        title="PBE Active Player TPE Tracker"
                    />
                </center>
                <Footer/>
            </div>
        );
    }
}

export default App;
