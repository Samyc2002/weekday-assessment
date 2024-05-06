import { MinSalaryProps } from "./Props";

const MinSalary = ({ minSalary, setMinSalary }: MinSalaryProps) => {
	const minSalaryArr = ["0L", "10L", "20L", "30L", "40L", "50L", "60L", "70L"];
	return (
		<select
			name="minSalary"
			onChange={(e) => {
				setMinSalary(Number(e.target.value.slice(0, e.target.value.length - 1)));
			}}
		>
			{minSalaryArr.map((salaryData) => (
				<option
					value={salaryData.slice(0, salaryData.length - 1)}
					selected={minSalary === Number(salaryData.slice(0, salaryData.length - 1))}
				>
					{salaryData}
				</option>
			))}
		</select>
	);
};

export default MinSalary;
