import React from "react";

const style = {
	root: {
		width: "360px",
		height: "600px"
	} as React.CSSProperties,
	innerRoot: {
		display: "flex",
		flexDirection: "column",
		gap: "20px",
		width: "100%"
	} as React.CSSProperties,
	company: {
		display: "flex",
		gap: "20px"
	} as React.CSSProperties,
	companyLogo: {
		width: "100px",
		height: "auto"
	} as React.CSSProperties,
	companyData: {
		display: "flex",
		flexDirection: "column",
		alignItems: "flex-start",
		justifyContent: "space-between",
		gap: "5px"
	} as React.CSSProperties,
	salary: {
		fontWeight: 600,
		color: "darkslategrey"
	} as React.CSSProperties,
	about: {
		display: "flex",
		flexDirection: "column"
	} as React.CSSProperties,
	exp: {
		display: "flex",
		flexDirection: "column"
	} as React.CSSProperties
};

export default style;
