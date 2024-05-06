import { Dropdown, Menu, MenuButton, MenuItem } from "@mui/base";
import { LocationProps } from "./Props";
import "./style.css";

const Locations = ({ location, setLocation }: LocationProps) => {
	const locations = ["Remote", "Hybrid", "In-Office"];
	return (
		<Dropdown>
			<MenuButton>
				{location
					.split("-")
					.map((part) => part.slice(0, 1).toUpperCase() + part.slice(1))
					.join("-")}
			</MenuButton>
			<Menu
				slotProps={{
					listbox: { className: "CustomMenuSimple--listbox" }
				}}
			>
				{locations.map((locationData) => (
					<MenuItem
						className="CustomMenuSimple--item"
						onClick={() => {
							setLocation(locationData.toLowerCase());
						}}
					>
						{locationData}
					</MenuItem>
				))}
			</Menu>
		</Dropdown>
	);
};

export default Locations;
