import { Dropdown, Menu, MenuButton, MenuItem } from "@mui/base";
import { NumEmployeesProps } from "./Props";
import "./style.css";

const NumEmployees = ({ employee, setEmployee }: NumEmployeesProps) => {
	const employees = ["1-10", "11-20", "21-50", "51-100", "101-200", "201-500", "500+"];
	return (
		<Dropdown>
			<MenuButton>{employee === "" ? "Number of Employees" : employee}</MenuButton>
			<Menu
				slotProps={{
					listbox: { className: "CustomMenuSimple--listbox" }
				}}
			>
				{employees.map((employeeData) => (
					<MenuItem
						className="CustomMenuSimple--item"
						onClick={() => {
							setEmployee(employeeData.toLowerCase());
						}}
					>
						{employeeData}
					</MenuItem>
				))}
			</Menu>
		</Dropdown>
	);
};

export default NumEmployees;
