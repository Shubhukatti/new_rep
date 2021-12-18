import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, Redirect,useHistory } from "react-router-dom";
import "../App.css";

export default function Movies() {
	const [details, setDetails] = useState([]);
    const [book, setBook] = useState([]);
    const [state, setState] = useState(false);

	console.log("book", book);
	useEffect(() => {
		getData();
    }, []);
    const handleState = () => {
        setState(true);
    }

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
				.then((d) => setDetails(d.data)); //setDetails(d.data)
		} catch (error) {
			console.log("error:", error);
		}
	};
	// console.log(details);
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
			<h1>Movie</h1>
			<div style={style}>
				<h5>Movie</h5>
				<h5>Show Time</h5>
			</div>
			{details.map((e) => {
				return (
					<div key={e.id} style={style}>
						<h5>
                            <Link to={`/movies/${e.id}`}>{e.name}</Link>
							
                            {state?<Redirect to="/qr"/>:""}
							<> </>
							{e.id === book.id ? (
								<button
                                    onClick={handleState}
									// onClick={() => {
									//     {console.log("take")}
									// 	<Redirect to="/"/>;
									// }}
								>
									Download Ticket
                                </button>
                                
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
