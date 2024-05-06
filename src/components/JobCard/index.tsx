import { Button, Card, CardActions, CardContent } from "@mui/material";
import { Job } from "../../jobData";
import style from "./style";

// Card to showe job details and take the user to the job application page
const JobCard = ({
	jdUid,
	jdLink,
	jobDetailsFromCompany,
	maxJdSalary,
	minJdSalary,
	salaryCurrencyCode,
	location,
	minExp,
	jobRole,
	companyName,
	logoUrl
}: Job) => {
	return (
		<Card
			elevation={3}
			sx={{
				borderRadius: 5,
				margin: 0
			}}
		>
			<CardContent>
				<div style={style.root}>
					<div style={style.innerRoot}>
						<div style={style.company}>
							<img src={logoUrl || ""} alt={`${companyName} logo`} style={style.companyLogo} />
							<div style={style.companyData}>
								<p style={style.salary}>{companyName}</p>
								<p>{(jobRole?.slice(0, 1).toUpperCase() || "") + (jobRole?.slice(1) || "")}</p>
								<p>{(location?.slice(0, 1).toUpperCase() || "") + (location?.slice(1) || "")}</p>
							</div>
						</div>
						<p style={style.salary}>
							Expected Salary: {minJdSalary} {salaryCurrencyCode} - {maxJdSalary}{" "}
							{salaryCurrencyCode}
						</p>
						<div style={style.about}>
							<b>About Company:</b>
							<p>{jobDetailsFromCompany?.substring(0, 500) + "..."}</p>
						</div>
						<div style={style.exp}>
							<p style={style.salary}>Minimum Experience</p>
							<p>
								{minExp} year{Number(minExp) > 1 ? "s" : ""}
							</p>
						</div>
					</div>
				</div>
				<Button
					variant="contained"
					fullWidth
					sx={{
						borderRadius: 3
					}}
					onClick={() => document.getElementById(jdUid || "")?.click()}
				>
					<a id={jdUid || ""} href={jdLink || ""} target="_blank" style={style.jobLink}>
						Apply
					</a>
				</Button>
			</CardContent>
		</Card>
	);
};

export default JobCard;
