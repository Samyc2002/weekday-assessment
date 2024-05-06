import { Dropdown, Menu, MenuButton, MenuItem } from "@mui/base";
import { ExperienceProps } from "./Props";
import "./style.css";

// Filter for experience
const Experience = ({ experience, setExperience }: ExperienceProps) => {
	const experiences = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
	return (
		<Dropdown>
			<MenuButton>{experience}</MenuButton>
			<Menu
				slotProps={{
					listbox: { className: "CustomMenuSimple--listbox" }
				}}
			>
				{experiences.map((experienceData) => (
					<MenuItem
						className="CustomMenuSimple--item"
						onClick={() => {
							setExperience(Number(experienceData));
						}}
					>
						{experienceData}
					</MenuItem>
				))}
			</Menu>
		</Dropdown>
	);
};

export default Experience;
