import axios from "axios";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Routes, Route } from "react-router-dom";
import { submit } from "../Redux/LoginStore.jsx/action";
import Movies from "./Movies";
import Shows2 from "./Shows2";

export default function Dashboard() {
	const dispatch = useDispatch();
	const { token } = useSelector((store) => store);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [check, setCheck] = useState("");

	const handleEmail = (e) => {
		setEmail(e.target.value);
	};
	const handlePassword = (e) => {
		setPassword(e.target.value);
	};

	if (!token) {
		return (
			<div className="App">
				<h4>Login to continue</h4>
				<label htmlFor="em">Email</label>
				<input type="text" id="em" onChange={handleEmail} />
				<label htmlFor="ps">Password</label>
				<input type="text" id="ps" onChange={handlePassword} />
				<button
					onClick={async () => {
						// console.log("inside");
						const payload = {
							email: email,
							password,
						};
						const token = await axios
							.post("https://reqres.in/api/login", payload)
							// .then((d) => setCheck(d.data.token));
						dispatch(submit(token));
						// try {
						// 	const token = await axios
						// 		.post("https://reqres.in/api/login", payload)
						// 		.then((d) => setCheck(d.data.token));
						// 	dispatch(submit(check));
						// } catch (error) {
						// 	console.log("error:", error);
						// }
					}}
				>
					Submit
				</button>
				<pre>email:eve.holt@reqres.in</pre>
				<pre>password:1234</pre>
			</div>
		);
	}

	return (
		<div>
			{/* <h1>Dashboard</h1> */}
            <Movies></Movies>
			<Shows2></Shows2>
			

			{/* <div className="nav">
				<Link to="/dashboard/movies">Movies</Link>
				<Link to="/dashboard/newshow">Shows</Link>
				<Link to="/event">Events</Link>
			</div>
			<Routes>
				<Route path="/dashboard/movies" element={<Movies />} />
				<Route path="/dashboard/newshow" element={<Shows />} />
			</Routes> */}
		</div>
	);
}
