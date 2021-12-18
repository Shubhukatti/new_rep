import { useHistory } from "react-router-dom";

export const Back = () => {
	let history = useHistory();
	return (
		<div>
			<button onClick={()=>history.goBack()}>Back</button>
		</div>
	);
}
