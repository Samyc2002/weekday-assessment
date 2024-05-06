import { RoleProps } from "./Props";

const Roles = ({ role, setRole }: RoleProps) => {
	const roles = ["Backend", "Frontend", "Fullstack", "IOS", "Flutter", "React Native", "Android"];
	return (
		<select
			name="roles"
			onChange={(e) => {
				setRole(e.target.value);
			}}
		>
			{roles.map((roleData) => (
				<option value={roleData.toLowerCase()} selected={role === roleData.toLowerCase()}>
					{roleData}
				</option>
			))}
		</select>
	);
};

export default Roles;
