import { TechStackProps } from "./Props";

const TechStack = ({ techStack, setTechStack }: TechStackProps) => {
	const stack = ["Python", "Java", "GoLang"];
	return (
		<select
			name="techStack"
			onChange={(e) => {
				setTechStack(e.target.value);
			}}
		>
			{stack.map((stackData) => (
				<option value={stackData.toLowerCase()} selected={techStack === stackData.toLowerCase()}>
					{stackData}
				</option>
			))}
		</select>
	);
};

export default TechStack;
