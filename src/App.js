import './css/App.css';
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";

// UNDER CONSTRUCTION
// This just leads to dashboard lol
function App() {
	let navigate = useNavigate();

	useEffect(() => {
		let loggedIn = true;

		if (loggedIn) {
			navigate("/dashboard");
		} else {
			navigate("/login")
		}
	}, []);
	return (
		<div></div>
	);
}

export default App;
