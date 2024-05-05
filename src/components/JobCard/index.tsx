import { Job } from "../../jobData";
import style from "./style";

const JobCard = ({
	jdUid,
	jdLink,
	jobDetailsFromCompany,
	maxJdSalary,
	minJdSalary,
	salaryCurrencyCode,
	location,
	minExp,
	maxExp,
	jobRole,
	companyName,
	logoUrl
}: Job) => {
	return (
		<div style={style.root}>
			<p>{jdUid}</p>
			<p>{jdLink}</p>
			<p>{jobDetailsFromCompany?.substring(0, 500) + "..."}</p>
			<p>{maxJdSalary}</p>
			<p>{minJdSalary}</p>
			<p>{salaryCurrencyCode}</p>
			<p>{location}</p>
			<p>{minExp}</p>
			<p>{maxExp}</p>
			<p>{jobRole}</p>
			<p>{companyName}</p>
			<p>{logoUrl}</p>
		</div>
	);
};

export default JobCard;
