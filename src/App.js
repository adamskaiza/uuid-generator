import "./App.css";
import { v4 as uuidv4 } from "uuid";
import Generator from "./components/generator";

const generateV4 = uuidv4();

const data = {
	intro: "Generate your Unique Indentifier",
	identifier: generateV4,
	info: "Refresh page to generate another",
};

const mainStyles = {
	minHeight: "100vh",
	padding: "2rem",
	display: "flex",
	flexDirection: "column",
	justifyContent: "center",
	alignItems: "center",
	backgroundColor: "#222",
	heading: {
		marginTop: 0,
		fontSize: "4rem",
		textAlign: "center",
		color: "#eee",
	},
};

function App() {
	const { intro, identifier, info } = data;
	return (
		<section style={mainStyles} className="App">
			<h1 style={mainStyles.heading}>Online UUID Generator</h1>
			<Generator
				key={identifier}
				intro={intro}
				identifier={identifier}
				info={info}
			/>
		</section>
	);
}

export default App;
