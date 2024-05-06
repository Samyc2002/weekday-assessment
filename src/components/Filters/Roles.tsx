import { Dropdown, Menu, MenuButton, MenuItem } from "@mui/base";
import { RoleProps } from "./Props";
import "./style.css";

// Filter for roles
const Roles = ({ role, setRole }: RoleProps) => {
	const roles = ["Backend", "Frontend", "Fullstack", "IOS", "Flutter", "React Native", "Android"];
	return (
		<Dropdown>
			<MenuButton>{role === "" ? "Roles" : role.slice(0, 1) + role.slice(1)}</MenuButton>
			<Menu
				slotProps={{
					listbox: { className: "CustomMenuSimple--listbox" }
				}}
			>
				{roles.map((roleData) => (
					<MenuItem
						className="CustomMenuSimple--item"
						onClick={() => {
							setRole(roleData.toLowerCase());
						}}
					>
						{roleData}
					</MenuItem>
				))}
			</Menu>
		</Dropdown>
	);
};

export default Roles;
