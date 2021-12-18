import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

export default function ShowsDetails() {
    const { id } = useParams();
    const [details, setDetails] = useState([]);
	useEffect(() => {
		fetch(`http://localhost:3003/shows/${id}`)
			.then((x) => x.json())
			.then((d) => setDetails(d));
    }, []);
    const style = {
        border: "1px solid black",
        background: "#be9191",
        margin:"auto 20%"

    }
    return <div>
        <h1>Movie Details</h1>
        <div style={style}>
            <h3>{details.title}</h3>
            <p>{details.description}</p>
        </div>
    </div>;
}
