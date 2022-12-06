import './App.css';
import Home from "./Home"
import TPEPlayerTrackerActive from "./TPEPlayerTrackerActive"
import TPEPlayerTrackerAll from "./TPEPlayerTrackerAll"
import TPEPlayerAttrTracker from "./TPEPlayerAttrTracker"
import TPETeamTracker from "./TPETeamTracker"
import StatTracker from "./StatTracker"
import StatTrackerBasic from "./StatTrackerBasic";
import StatTrackerAdvanced from "./StatTrackerAdvanced";

import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {

  return (
      <Router>
        <Route path = "/" exact component={Home} />
        <Route path = "/tpe" exact component={TPEPlayerTrackerActive} />
        <Route path = "/tpe/players" exact component={TPEPlayerTrackerActive} />
        <Route path = "/tpe/players/all" exact component={TPEPlayerTrackerAll} />
        <Route path = "/player/:id" exact component={TPEPlayerTrackerActive} />
        <Route path = "/user/:id" exact component={TPEPlayerTrackerActive} />
        <Route path = "/tpe/teams" exact component={TPETeamTracker} />
        <Route path = "/team/:name" exact component={TPETeamTracker} />
        <Route path = "/tpe/attributes/batters" exact component={TPEPlayerAttrTracker} />
        <Route path = "/tpe/attributes/pitchers" exact component={TPEPlayerAttrTracker} />
        <Route path = "/stats" exact component={StatTracker} />
        <Route path = "/stats/batters" exact component={StatTracker} />
        <Route path = "/stats/pitchers" exact component={StatTracker} />
        <Route path = "/stats/leaders/season" exact component={StatTracker} />
        <Route path = "/stats/leaders/career" exact component={StatTracker} />
      </Router>
  );
}

export default App;
