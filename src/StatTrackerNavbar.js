import React from 'react';
import './App.css';

class App extends React.Component {
    render() {
        return (
            <div className="topnav">
                <a href="/"><img src="https://i.imgur.com/5r1JyQj.png" height="15px" width="15px"/></a>
                <a href="/stats/batters">Batters</a>
                <a href="/stats/pitchers">Pitchers</a>
                <a href="/stats/leaders/season">League Leaders</a>
                <a href="/stats/leaders/career">Career Leaders</a>
            </div>
        );
    }
}

export default App;
