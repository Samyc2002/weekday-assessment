import { NumEmployeesProps } from "./Props";

const NumEmployees = ({ employee, setEmployee }: NumEmployeesProps) => {
	const employees = ["1-10", "11-20", "21-50", "51-100", "101-200", "201-500", "500+"];
	return (
		<select
			name="numEmployees"
			onChange={(e) => {
				setEmployee(e.target.value);
			}}
		>
			{employees.map((employeeData) => (
				<option
					value={employeeData.toLowerCase()}
					selected={employee === employeeData.toLowerCase()}
				>
					{employeeData}
				</option>
			))}
		</select>
	);
};

export default NumEmployees;
