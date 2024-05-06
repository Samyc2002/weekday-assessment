import { Dropdown, Menu, MenuButton, MenuItem } from "@mui/base";
import { TechStackProps } from "./Props";
import "./style.css";

// Filter for tech stack
const TechStack = ({ techStack, setTechStack }: TechStackProps) => {
	const stack = ["Python", "Java", "GoLang"];
	return (
		<Dropdown>
			<MenuButton>
				{techStack === "" ? "Tech Stack" : techStack.slice(0, 1) + techStack.slice(1)}
			</MenuButton>
			<Menu
				slotProps={{
					listbox: { className: "CustomMenuSimple--listbox" }
				}}
			>
				{stack.map((stackData) => (
					<MenuItem
						value={stackData.toLowerCase()}
						className="CustomMenuSimple--item"
						onClick={() => {
							setTechStack(stackData.toLowerCase());
						}}
					>
						{stackData}
					</MenuItem>
				))}
			</Menu>
		</Dropdown>
	);
};

export default TechStack;
