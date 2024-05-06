import React from "react";

// Props for role filter
export type RoleProps = {
	role: string;
	setRole: React.Dispatch<React.SetStateAction<string>>;
};

// Props for employee filter
export type NumEmployeesProps = {
	employee: string;
	setEmployee: React.Dispatch<React.SetStateAction<string>>;
};

// Props for experience filter
export type ExperienceProps = {
	experience: number;
	setExperience: React.Dispatch<React.SetStateAction<number>>;
};

// Props for location filter
export type LocationProps = {
	location: string;
	setLocation: React.Dispatch<React.SetStateAction<string>>;
};

// Props for tech stack filter
export type TechStackProps = {
	techStack: string;
	setTechStack: React.Dispatch<React.SetStateAction<string>>;
};

// Props for salary filter
export type MinSalaryProps = {
	minSalary: number;
	setMinSalary: React.Dispatch<React.SetStateAction<number>>;
};

// Props for search bar
export type SearchProps = {
	companyName: string;
	setCompanyName: React.Dispatch<React.SetStateAction<string>>;
};
