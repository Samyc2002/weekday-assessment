import React from "react";

const style = {
	root: {
		display: "flex",
		flexDirection: "column",
		gap: "20px",
		alignItems: "flex-start",
		justifyContent: "flex-start"
	} as React.CSSProperties,
	filters: {
		display: "flex",
		alignItems: "center",
		justifyContent: "flex-start",
		overflowX: "auto",
		overflowY: "hidden",
		width: "fit-content",
		gap: "10px",
		padding: "30px 0 30px 30px"
	} as React.CSSProperties,
	cards: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		flexWrap: "wrap",
		gap: "10px"
	} as React.CSSProperties
};

export default style;
