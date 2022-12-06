import React from 'react';
import './App.css';

class App extends React.Component {
    render() {
        return (
            <div className="topnav">
                <a href="/"><img src="https://i.imgur.com/5r1JyQj.png" height="15px" width="15px"/></a>
                <a href="/tpe/players">Active Players</a>
                <a href="/tpe/players/all">All Players</a>
                <a href="/tpe/teams">Teams</a>
                {/*<a href="/tpe/attributes/batters">Batter Attributes</a>*/}
                {/*<a href="/tpe/attributes/pitchers">Pitcher Attributes</a>*/}
            </div>
        );
    }
}

export default App;
