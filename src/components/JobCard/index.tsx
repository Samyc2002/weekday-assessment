import { Button, Card, CardActions, CardContent } from "@mui/material";
import { Job } from "../../jobData";
import style from "./style";

const JobCard = ({
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
								{minExp} year{minExp > 1 ? "s" : ""}
							</p>
						</div>
					</div>
				</div>
			</CardContent>
			<CardActions>
				<Button
					variant="contained"
					fullWidth
					sx={{
						borderRadius: 5
					}}
				>
					Apply
				</Button>
			</CardActions>
		</Card>
	);
};

export default JobCard;
