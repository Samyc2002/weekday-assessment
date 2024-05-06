import { Dropdown, Menu, MenuButton, MenuItem } from "@mui/base";
import { MinSalaryProps } from "./Props";
import "./style.css";

const MinSalary = ({ minSalary, setMinSalary }: MinSalaryProps) => {
	const minSalaryArr = ["0L", "10L", "20L", "30L", "40L", "50L", "60L", "70L"];
	return (
		<Dropdown>
			<MenuButton>{minSalary + "L"}</MenuButton>
			<Menu
				slotProps={{
					listbox: { className: "CustomMenuSimple--listbox" }
				}}
			>
				{minSalaryArr.map((salaryData) => (
					<MenuItem
						className="CustomMenuSimple--item"
						onClick={() => {
							setMinSalary(Number(salaryData.slice(0, salaryData.length - 1)));
						}}
					>
						{salaryData}
					</MenuItem>
				))}
			</Menu>
		</Dropdown>
	);
};

export default MinSalary;
