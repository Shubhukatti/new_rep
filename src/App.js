import { Switch, Route, Link } from "react-router-dom";

import "./App.css";
import About from "./components/About";
import { Back } from "./components/Back";
import Dashboard from "./components/Dashboard";
import Movies from "./components/Movies";
import MoviesDetails from "./components/MoviesDetails";
import Newshows from "./components/Newshows";
import Qr from "./components/Qr";
import ShowsDetails from "./components/ShowsDetails";

function App() {
	return (
		<div className="App">
			<div className="nav">
				<Link to="/">About</Link>
				<Link to="/newshow">Newshow</Link>
				<Link to="/dashboard">Dashboard</Link>
				<Link to="/movies"></Link>
				<Back></Back>
			</div>
			<Switch>
				{/* <Route path="/" element={<About />} />
        <Route path="/newshow" element={<Newshows />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/movies/:id" element={<MoviesDetails/>}></Route> */}
				<Route exact path="/">
					<About />
				</Route>
				<Route exact path="/newshow">
					<Newshows />
				</Route>
				<Route exact path="/dashboard">
					<Dashboard />
				</Route>
				<Route exact path="/movies/:id">
					<MoviesDetails />
				</Route>
				<Route exact path="/shows/:id">
					<ShowsDetails />
				</Route>
				<Route exact path="/qr">
					<Qr></Qr>
				</Route>
			</Switch>
			{/* <Movies></Movies> */}
		</div>
	);
}

export default App;
