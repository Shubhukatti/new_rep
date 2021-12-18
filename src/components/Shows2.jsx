import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";

export default function Shows2() {
	const [details, setDetails] = useState([]);
	const [book, setBook] = useState([]);
	useEffect(() => {
		getData();
	}, []);

	const style = {
		display: "flex",
		justifyContent: "space-between",
		margin: "auto 35%",
		border: "1px solid black",
		background: "#be9191",
		padding: "1%",
	};
	const style2 = {
		display: "flex",
		justifyContent: "space-between",
		// margin: "auto 35%",
		border: "1px solid black",
		background: "#be9191",
		padding: "1%",
	};

	const getData = async () => {
		try {
			const movies = await axios
				.get("http://localhost:3003/movies")
				.then((d) => setDetails(d)); //setDetails(d.data)
		} catch (error) {
			console.log("error:", error);
		}
	};
	console.log(details);
	return (
		// <div>
		//     <h1>Movies</h1>
		//     {details.map((e) => {
		//         div
		//     })}
		// </div>
		<>
			{book.length === 0 ? (
				<div></div>
			) : (
				<div>
					<h3>Booked</h3>
					<div style={style}>
						<h5>{book.title}</h5>
						<h5>{book.time}</h5>
					</div>
				</div>
			)}
			<h1>Shows</h1>
			<div style={style}>
				<h5>Show</h5>
				<h5>Show Time</h5>
			</div>
			{details.map((e) => {
				return (
					<div key={e.id} style={style}>
						<img src={e.url} alt="" />
						<h5>
							<Link to={`/shows/${e.id}`}>{e.name}</Link>
							<> </>
							{e.id === book.id ? (
								<button>Download Ticket</button>
							) : (
								<button
									onClick={() => {
										setTimeout(() => {
											alert("You have Booked");
											setBook(e);
										}, 2000);
									}}
								>
									Book now
								</button>
							)}
						</h5>
						<p>{e.time}</p>
					</div>
				);
			})}
			;
		</>

		// 	<div style={style}>
		// 		<h5>Movies</h5>
		// 		<h5>timing</h5>
		// 	</div>
		// 	<div style={style}>
		//         <p>Inception</p>

		// 		<p>9 pm</p>
		// 	</div>
		// 	<div style={style}>
		// 		<p>Maze Runner</p>
		// 		<p>6 pm</p>
		// 	</div>
		// 	<div style={style}>
		// 		<p>Shang Chi</p>
		// 		<p>3 pm</p>
		// 	</div>
		// </div>
	);
}
