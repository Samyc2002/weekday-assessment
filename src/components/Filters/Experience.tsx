import { ExperienceProps } from "./Props";

const Experience = ({ experience, setExperience }: ExperienceProps) => {
	const experiences = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
	return (
		<select
			name="experience"
			onChange={(e) => {
				setExperience(Number(e.target.value));
			}}
		>
			{experiences.map((experienceData) => (
				<option value={experienceData} selected={experience === experienceData}>
					{experienceData}
				</option>
			))}
		</select>
	);
};

export default Experience;
