import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

export default function MoviesDetails() {
    const { id } = useParams();
    const [details, setDetails] = useState([]);
	useEffect(() => {
		fetch(`http://localhost:2345/users/${id}`)
			.then((x) => x.json())
			.then((d) => setDetails(d));
    }, []);
    const style = {
        border: "1px solid black",
        background: "#be9191",
        margin:"auto 20%"

    }
    // console.log(details);
    console.log('details:', details)
    return <div>
        <h1>Movie Details</h1>
        <div style={style}>
            <img src={details.url} alt="" />
            <h3>{details.name}</h3>
            <p>{details.genre}</p>
        </div>
    </div>;
}
