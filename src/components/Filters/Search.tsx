import { TextField } from "@mui/material";
import { SearchProps } from "./Props";
import "./style.css";

const Search = ({ companyName, setCompanyName }: SearchProps) => {
	return (
		<TextField
			variant="outlined"
			label="Search Company name"
			value={companyName}
			onChange={(e) => setCompanyName(e.target.value)}
		/>
	);
};

export default Search;
