import { useCallback, useEffect, useState } from "react";
import LoaderCard from "./components/LoaderCard";
import JobCard from "./components/JobCard";
import { Jobdata } from "./jobData";
import style from "./style";
import "./App.css";

function App() {
	const [jobData, setJobdata] = useState<Jobdata>({
		jdList: [],
		totalCount: 1
	});
	const [totalFetched, setTotalFetched] = useState(0);
	const limit = 10;

	const performApiCall = useCallback(async () => {
		const myHeaders = new Headers();
		myHeaders.append("Content-Type", "application/json");

		const body = JSON.stringify({
			limit,
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
	}, [totalFetched, limit]);

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

	return (
		<div style={style.root}>
			<div style={style.cards}>
				{jobData.jdList.map((jd) => (
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
