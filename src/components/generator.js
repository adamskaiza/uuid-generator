import React from "react";

const generatortyles = {
	maxWidth: 700,
	margin: "0 auto",
	fontFamily: "Arial, Helvetica, sans-serif",
	textAlign: "center",
	intro: {
		color: "#aaa",
		fontSize: "1rem",
	},
	info: {
		color: "#aaa",
		fontSize: "2rem",
	},
	identifier: {
		margin: "1rem",
		color: "#ddd",
		fontSize: "3rem",
	},
	copyButton: {
		fontSize: "1rem",
		padding: "1rem 2rem",
		backgroundColor: "hotpink",
		color: "#eee",
		cursor: "pointer",
	},
};

const Generator = ({ intro, identifier, info }) => {
	return (
		<article style={generatortyles}>
			<p style={generatortyles.intro}>{intro}</p>
			<article>
				<p style={generatortyles.identifier}>{identifier}</p>
				<button style={generatortyles.copyButton}>Copy</button>
			</article>
			<p style={generatortyles.info}>{info}</p>
		</article>
	);
};

export default Generator;
