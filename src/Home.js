import React from 'react';
import './App.css';

// TODO: make a bank viewer/players/transactions/salary/teams etc...
class App extends React.Component {

    render() {
        return (
            <div className={App} style={{ maxWidth: '100%' }}>
                <center>
                    <img src="https://i.imgur.com/5r1JyQj.png" width="10%" height="10%" />
                    <h1>PBE Center</h1>
                    <h2>Forum</h2>
                    <h3><a href="https://probaseballexperience.jcink.net/index.php">Visit the forum here!</a></h3>
                    <h2>Twitch</h2>
                    <h3><a href="https://www.twitch.tv/pbesim">Watch the streams on Twitch!</a></h3>
                    <h2>Index</h2>
                    <h3><a href="http://pbesim.com/leagues/league_100_home.html">PBE Index</a></h3>
                    <h3><a href="http://pbesim.com/leagues/league_101_home.html">MiLPBE Index</a></h3>
                    <h2>Player Tools</h2>
                    <h3><a href="http://www.pbesim.com/creator/">Player Creator</a></h3>
                    <h3><a href="https://tpeupdater.com/">Player Updater</a></h3>
                    <h2>TPE Tracking</h2>
                    <h3><a href="/tpe">Active Players TPE Tracker</a></h3>
                    <h3><a href="/tpe/players/all">All Players TPE Tracker</a></h3>
                    <h3><a href="/tpe/teams">Team TPE Tracker</a></h3>
                    <h3><a href="/tpe/attributes/batters">Batter Attribute Tracker</a></h3>
                    <h3><a href="/tpe/attributes/pitchers">Pitcher Attribute Tracker</a></h3>
                    <h2>Stat Tracking</h2>
                    <h3><a href="/stats">Stat Tracker</a></h3>
                </center>
            </div>
        );
    }
}

export default App;
