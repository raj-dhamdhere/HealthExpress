import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import Test from "./Components/Test.js";
import About from "./Components/About";
// import Login from "./Components/Login";
// import Terms from "./Components/Terms";
// import Privacy from "./Components/Privacy";
// import Refund from "./Components/Refund";
// import Disclaimer from "./Components/Disclaimer";

// import Contact from "./Components/Contact";
// import Pricing from "./Components/Pricing";
// import Rif from "./Components/Refundnew";
// import Signup from "./Components/Signup.js";
// import Drowsyinfo from "./Information/Drowsyinfo.js";
// import Shortestrouteinfo from "./Information/Shortestrouteinfo.js";
// import VehicleExinfo from "./Information/VehicleExinfo.js";
// import Stopinfo from "./Information/Stopinfo.js";
// import Dashboard from "./Components/Dashboard/Dashboard.js";
// import VehicleControl from "./Components/Dashboard/VehicleControl.js"
// import SummaryControl from "./Components/Dashboard/SummaryControl.js"
// import DrowsyControl from "./Components/Dashboard/DrowsyControl.js"
// import ShortestControl from "./Components/Dashboard/ShortestControl.js"
// import MAGScoresheetcontrol from "./Components/Dashboard/MAGScoresheetcontrol.js"
// import WAGScoresheetcontrol from "./Components/Dashboard/WAGScoresheetcontrol.js"
// import MAGConsolidatedcontrol from "./Components/Dashboard/MAGConsolidatedcontrol.js"
// import WAGConsolidatedcontrol from "./Components/Dashboard/WAGConsolidatedcontrol.js"
// import InventoryControl from "./Components/Dashboard/InventoryControl.js"
// import InventorySummaryControl from "./Components/Dashboard/InventorySummaryControl.js"
// import itemsellControl from "./Components/Dashboard/itemsellControl.js"
// import RevenueControl from "./Components/Dashboard/RevenueControl.js"
// import FaqControl from "./Components/Dashboard/FaqControl.js"
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends React.Component {
	render() {
		return (
			<Router>
				<div className="App">
					<Route exact path="/" component={Test} />
					<Route path="/about" component={About} />
					{/* <Route path="/contact" component={Contact} />
					<Route path="/pricing" component={Pricing} />
					<Route path="/Terms" component={Terms} />
					<Route path="/privacy" component={Privacy} />
					<Route path="/refund" component={Refund} />
					<Route path="/Disclaimer" component={Disclaimer} />
					<Route path="/Efund" component={Rif} />
					<Route path="/login" component={Login} />
					<Route path="/signup"component={Signup} />
					<Route path="/drowsyinfo"component={Drowsyinfo} />
					<Route path="/shortestrouteinfo"component={Shortestrouteinfo} />
					<Route path="/vehicleExinfo"component={VehicleExinfo} />
					<Route path="/stopinfo"component={Stopinfo} />
					<Route path="/dashboard"component={Dashboard} />
					<Route path="/VehicleControl" component ={VehicleControl} />
					<Route path="/FaqApi" component ={FaqControl} />
					<Route path="/SummaryControl" component ={SummaryControl} />
					<Route path="/DrowsyControl" component ={DrowsyControl} />
					<Route path="/ShortestControl" component ={ShortestControl} />
					<Route path="/MAGScoresheetcontrol" component ={MAGScoresheetcontrol} />
					<Route path="/WAGScoresheetcontrol" component ={WAGScoresheetcontrol} />
					<Route path="/MAGConsolidatedcontrol" component ={MAGConsolidatedcontrol} />
					<Route path="/WAGConsolidatedcontrol" component ={WAGConsolidatedcontrol} />
					<Route path="/InventoryControl" component ={InventoryControl} />
					<Route path="/InventorySummaryControl" component={InventorySummaryControl} />
					<Route path="/itemsellControl" component={itemsellControl} />
					<Route path="/RevenueControl" component={RevenueControl} /> */}
				</div>
			</Router>
		);
	}
}

export default App;
