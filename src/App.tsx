import { useCallback, useEffect, useState } from "react";
import Roles from "./components/Filters/Roles";
import NumEmployees from "./components/Filters/NumEmployees";
import Experience from "./components/Filters/Experience";
import Locations from "./components/Filters/Location";
import TechStack from "./components/Filters/TechStack";
import MinSalary from "./components/Filters/MinSalary";
import LoaderCard from "./components/LoaderCard";
import JobCard from "./components/JobCard";
import { Job, Jobdata } from "./jobData";
import style from "./style";
import "./App.css";

function App() {
	const [jobData, setJobdata] = useState<Jobdata>({
		jdList: [],
		totalCount: 1
	});
	const [totalFetched, setTotalFetched] = useState(0);
	const [role, setRole] = useState("");
	const [employee, setEmployee] = useState("");
	const [experience, setExperience] = useState(1);
	const [location, setLocation] = useState("remote");
	const [techStack, setTechStack] = useState("");
	const [minSalary, setMinSalary] = useState(-1);
	const [filteredJobs, setFilteredJobs] = useState<Job[]>([]);
	const limit = 10;

	const performApiCall = useCallback(async () => {
		const myHeaders = new Headers();
		myHeaders.append("Content-Type", "application/json");

		const body = JSON.stringify({
			limit: Math.min(limit, jobData.totalCount - totalFetched),
			offset: totalFetched
		});

		const requestOptions = {
			method: "POST",
			headers: myHeaders,
			body
		};

		const response = await fetch(
			"https://api.weekday.technology/adhoc/getSampleJdJSON",
			requestOptions
		);
		const result = await response.json();

		return result;
	}, [jobData, totalFetched]);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries: { isIntersecting: boolean }[]) => {
				entries.forEach(async (entry: { isIntersecting: boolean }) => {
					if (entry.isIntersecting && totalFetched < jobData.totalCount) {
						const data = await performApiCall();
						setJobdata((prev) => {
							return {
								jdList: [...prev.jdList, ...data.jdList],
								totalCount: data.totalCount
							};
						});
						setTotalFetched((prev) => Math.min(prev + limit, jobData.totalCount));
					}
				});
			},
			{
				rootMargin: "-50px",
				threshold: [0.2]
			}
		);

		if (document.getElementById("loader"))
			observer.observe(document.getElementById("loader") as HTMLElement);
	}, [jobData, performApiCall, totalFetched]);

	useEffect(() => {
		setFilteredJobs(
			jobData.jdList
				.filter((job) => (role === "" ? true : job.jobRole === role))
				.filter((job) => job.minExp === experience)
				.filter((job) => {
					if (location === "remote") return job.location === "remote";
					else if (location === "hybrid") return job.location === "hybrid";
					else return job.location !== "remote" && job.location === "hybrid";
				})
				.filter((job) => (minSalary === -1 ? true : job.minJdSalary === minSalary))
		);
	}, [role, employee, experience, location, techStack, minSalary, jobData]);
	console.log(totalFetched);

	return (
		<div style={style.root}>
			<div style={style.filters}>
				<Roles {...{ role, setRole }} />
				<NumEmployees {...{ employee, setEmployee }} />
				<Experience {...{ experience, setExperience }} />
				<Locations {...{ location, setLocation }} />
				<TechStack {...{ techStack, setTechStack }} />
				<MinSalary {...{ minSalary, setMinSalary }} />
			</div>
			<div style={style.cards}>
				{filteredJobs.map((jd) => (
					<JobCard {...jd} />
				))}
				<div style={style.cards} id="loader">
					{Array.from({ length: 5 }, (_, i) => (
						<div key={i}>
							<LoaderCard />
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default App;
