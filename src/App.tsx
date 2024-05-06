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
import Search from "./components/Filters/Search";

// Main App Component
function App() {
	// All States
	// State to store the entire job data
	const [jobData, setJobdata] = useState<Jobdata>({
		jdList: [],
		totalCount: 1
	});
	// State to store the total number of jobs fetched
	const [totalFetched, setTotalFetched] = useState(0);
	// State to store the role filter data
	const [role, setRole] = useState("");
	// State to store the employee filter data
	const [employee, setEmployee] = useState("");
	// State to store the experience filter data
	const [experience, setExperience] = useState(1);
	// State to store the location filter data
	const [location, setLocation] = useState("remote");
	// State to store the tech stack filter data
	const [techStack, setTechStack] = useState("");
	// State to store the salary filter data
	const [minSalary, setMinSalary] = useState(0);
	// State to store the company name search data
	const [companyName, setCompanyName] = useState("");
	// State to store the filtered jobs based on filters
	const [filteredJobs, setFilteredJobs] = useState<Job[]>([]);
	// Limit of the number of jobs to be fetched
	const limit = 10;

	// Function to perform the API call to fetcg jobs based on the offset (total jobs fetched) and the limit
	const fetchJobs = useCallback(async () => {
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

	// Use Effect to declare intersection observer
	// This is responsible for the infinite scrolling behavior
	// When the Loading cards are in the viewport, we fetch the next {limit} jobs
	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries: { isIntersecting: boolean }[]) => {
				entries.forEach(async (entry: { isIntersecting: boolean }) => {
					if (entry.isIntersecting && totalFetched < jobData.totalCount) {
						const data = await fetchJobs();
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
				// This tells the intersection observer to start fetching when the loading cards are within 100px of the viewport
				rootMargin: "-100px",
				// Declaares a threshold for the intersection
				threshold: [0.1]
			}
		);

		// Observing the loading cards div
		if (document.getElementById("loader"))
			observer.observe(document.getElementById("loader") as HTMLElement);
	}, [jobData, fetchJobs, totalFetched]);

	// Use Effect for filtering the jobs
	useEffect(() => {
		setFilteredJobs(
			jobData.jdList
				// If no role is selected, show all jobs
				.filter((job) => (role === "" ? true : job.jobRole === role))
				// Filter by min experience
				.filter((job) => job.minExp === experience)
				// Filter by job location. If the location is In-Office, get all jobs that are not "remote" or "hybrid"
				.filter((job) => {
					if (location === "remote") return job.location === "remote";
					else if (location === "hybrid") return job.location === "hybrid";
					else return job.location !== "remote" && job.location === "hybrid";
				})
				// Filter by min salary
				.filter((job) =>
					minSalary === -1 || !job.minJdSalary ? true : job.minJdSalary >= minSalary
				)
				// Search by company name
				.filter((job) => job.companyName?.toLowerCase()?.startsWith(companyName))
		);
	}, [role, employee, experience, location, techStack, minSalary, companyName, jobData]);

	return (
		<div style={style.root}>
			{/* Filters */}
			<div style={style.filters}>
				<Roles {...{ role, setRole }} />
				<NumEmployees {...{ employee, setEmployee }} />
				<Experience {...{ experience, setExperience }} />
				<Locations {...{ location, setLocation }} />
				<TechStack {...{ techStack, setTechStack }} />
				<MinSalary {...{ minSalary, setMinSalary }} />
				<Search {...{ companyName, setCompanyName }} />
			</div>

			{/* Job Cards */}
			<div style={style.cards}>
				{/* All Jobs that match the filter */}
				{filteredJobs.map((jd) => (
					<JobCard {...jd} />
				))}

				{/* Loading Cards. New data is fetched when these are within 100px of the viewport */}
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
