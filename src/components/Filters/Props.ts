import React from "react";

export type RoleProps = {
	role: string;
	setRole: React.Dispatch<React.SetStateAction<string>>;
};

export type NumEmployeesProps = {
	employee: string;
	setEmployee: React.Dispatch<React.SetStateAction<string>>;
};

export type ExperienceProps = {
	experience: number;
	setExperience: React.Dispatch<React.SetStateAction<number>>;
};

export type LocationProps = {
	location: string;
	setLocation: React.Dispatch<React.SetStateAction<string>>;
};

export type TechStackProps = {
	techStack: string;
	setTechStack: React.Dispatch<React.SetStateAction<string>>;
};

export type MinSalaryProps = {
	minSalary: number;
	setMinSalary: React.Dispatch<React.SetStateAction<number>>;
};

export type SearchProps = {
	companyName: string;
	setCompanyName: React.Dispatch<React.SetStateAction<string>>;
};
