import { LocationProps } from "./Props";

const Locations = ({ location, setLocation }: LocationProps) => {
	const locations = ["Remote", "Hybrid", "In-Office"];
	return (
		<select
			name="locations"
			onChange={(e) => {
				setLocation(e.target.value);
			}}
		>
			{locations.map((locationData) => (
				<option
					value={locationData.toLowerCase()}
					selected={location === locationData.toLowerCase()}
				>
					{locationData}
				</option>
			))}
		</select>
	);
};

export default Locations;
