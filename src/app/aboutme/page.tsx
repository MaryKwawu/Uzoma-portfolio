"use client";
import { FaDocker, FaAws } from "react-icons/fa";
import {
	SiKubernetes,
	SiAnsible,
	SiTerraform,
	SiArgo,
	SiGit,
	SiFlask,
} from "react-icons/si";
import React from "react";
import { title } from "process";
import { Description } from "@radix-ui/react-dialog";

//about data
const about = {
	title: "Resume",
	Description:
		"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur quod",
	info: [
		{
			fieldName: "Name",
			fieldValue: "Ozi Uzoma",
		},
		{
			fieldName: "Phone",
			fieldValue: "(+233) 555 555 5555",
		},
		{
			fieldName: "Experience",
			fieldValue: "5+ Years",
		},
		{
			fieldName: "Nationality",
			fieldValue: "Ghanaian",
		},
		{
			fieldName: "Email",
			fieldValue: "Ozi@gmail.com",
		},
		{
			fieldName: "Freelance",
			fieldValue: "Available",
		},
		{
			fieldName: "Languages",
			fieldValue: "English & French",
		},
	],
};

//expericence data
const experience = {
	icons: "assets/experience/badge.png",
	title: "My experience",
	Description:
		"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur quo",
	items: [
		{
			company: "AmaliTech",
			position: "DevOps Engineer",
			duration: "Feb 2024 - Present",
		},
		{
			company: "TiaCloud",
			position: "DevOps Engineer",
			duration: "Jun 2022 - Feb 2024",
		},
		{
			company: "Aifi",
			position: "Deployment Engineer",
			duration: "Jun 2022 - Present",
		},

		{
			company: "Azubi Africa",
			position: "AWS Cloud Engineer",
			duration: "Sep 2021 - Oct 2022",
		},
		{
			company: "Aimchess",
			position: "Analytics Intern",
			duration: "Jan 2021 - Sep 2022",
		},
		{
			company: "International Fertilizer Development Center",
			position: "2SCALE Administrative Assistant",
			duration: "Jan 2020 - Dec 2020",
		},
		{
			company: "Summit Square",
			position: "Facilities Officer",
			duration: "Jan 2019 - Dec 2019",
		},
		{
			company: "Uber Partner",
			position: "Analytics Intern",
			duration: "Oct 2016 - Sep 2017",
		},
		{
			company: "IT/Admin Assistant",
			position: "Ministry of Roads and Highway Accra",
			duration: "Nov 2015 - Nov 2016",
		},
		{
			company: "Tata Motors Ghana",
			position: "Intern",
			duration: "Feb 2015 - March 2015",
		},
	],
};

//education data
const education = {
	icon: "assets/resume/graduation-cap.png",
	title: "My education",
	Description:
		"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur quo",
	items: [
		{
			Institution: "Amazon Web Services",
			Certification: "AWS Certified Solution Architect - Associate",
			duration: " April 2022 - present",
		},
		{
			Institution: "Microsoft",
			Certification: "Microsoft Certified: Azure Fundamentals",
			duration: "April 2022 - Present",
		},
		{
			Institution: "Udacity",
			Certification: "Cloud DevOps Engineer",
			duration: "May 2022 - Aug 2022",
		},
		{
			Institution: "Alliance française d'Accra",
			Certification: "French Language and Literature",
			duration: "2017 - 2018",
		},
		{
			Institution: "CWG Ghana",
			Certification: "Systems Engineering",
			duration: "2016 - 2016",
		},
		{
			Institution: "University of Ghana",
			Degree: "Bachelor's Degree Computer Engineering",
			duration: "2010 - 2014",
		},
	],
};

//skills data
const skills = {
	title: "My skills",
	Description:
		"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur quo",
	skillList: [
		{
			icon: <FaDocker />,
			name: "docker",
		},
		{
			icon: <FaAws />,
			name: "aws",
		},
		{
			icon: <SiAnsible />,
			name: "ansible",
		},
		{
			icon: <SiArgo />,
			name: "argocd",
		},
		{
			icon: <SiKubernetes />,
			name: "kubernetes",
		},
		{
			icon: <SiTerraform />,
			name: "terraform",
		},
		{
			icon: <SiGit />,
			name: "git",
		},
		{
			icon: <SiFlask />,
			name: "flask",
		},
	],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const AboutMe = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{
				opacity: 1,
				transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" },
			}}
			className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0">
			<div className="container mx-auto">
				<Tabs
					defaultValue="experience"
					className="flex flex-col xl:flex-row gap-[60px]">
					<TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
						<TabsTrigger value={"experience"}>Experience</TabsTrigger>
						<TabsTrigger value={"education"}>Education</TabsTrigger>
						<TabsTrigger value={"skills"}>Skills</TabsTrigger>
						<TabsTrigger value={"resume"}>Resume</TabsTrigger>
					</TabsList>

					{/* content */}
					<div className="min-h-[70vh] w-full">
						{/* experience */}
						<TabsContent value={"experience"} className="w-full">
							<div className="flex flex-col gap-[30px] text-center xl:text-left">
								<h3 className="text-4xl font-bold">{experience.title}</h3>
								<p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
									{experience.description}
								</p>
								<ScrollArea className="h-[400px]">
									<ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
										{experience.items.map((item, index) => {
											return (
												<div key={index}>
													<li className="bg-[#7c7ce3] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
														<span className="text-accent">{item.duration}</span>
														<h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
															{item.position}
														</h3>
														<div className="flex items-center gap-3">
															{/* dot */}
															<span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
															<p className="text-white/60">{item.company}</p>
														</div>
													</li>
												</div>
											);
										})}
									</ul>
								</ScrollArea>
							</div>
						</TabsContent>

						{/* education */}
						<TabsContent value={"education"} className="w-full">
							<div className="flex flex-col gap-[30px] text-center xl:text-left">
								<h3 className="text-4xl font-bold">{education.title}</h3>
								<p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
									{education.Description}
								</p>
								<ScrollArea className="h-[400px]">
									<ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
										{education.items.map((item, index) => {
											return (
												<div key={index}>
													<li className="bg-[#7c7ce3] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
														<span className="text-accent">{item.duration}</span>
														<h3 className="text-xl max-w-[265px] min-h-[60px] text-center lg:text-left">
															{item.Degree}
															{item.Certification}
														</h3>
														<div className="flex items-center gap-3">
															{/* dot */}
															<span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
															<p className="text-white/60">
																{item.Institution}
															</p>
														</div>
													</li>
												</div>
											);
										})}
									</ul>
								</ScrollArea>
							</div>
						</TabsContent>
						{/* skills */}
						<TabsContent value={"skills"} className="w-full h-full">
							<div className="flex flex-col gap-[30px]">
								<div className="flex flex-col gap-[30px] text-center xl:text-left">
									<h3 className="text-4xl font-bold">{skills.title}</h3>
									<p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
										{skills.Description}
									</p>
								</div>
								<ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
									{skills.skillList.map((skill, index) => {
										return (
											<div key={index}>
												<li>
													<TooltipProvider delayDuration={100}>
														<Tooltip>
															<TooltipTrigger className="w-full h-[150px] bg-[#7c7ce3] rounded-xl flex justify-center items-center group">
																<div className="text-6xl group-hover:text-accent transition-all duration-300">
																	{skill.icon}
																</div>
															</TooltipTrigger>
															<TooltipContent>
																<p className="capitalize">{skill.name}</p>
															</TooltipContent>
														</Tooltip>
													</TooltipProvider>
												</li>
											</div>
										);
									})}
								</ul>
							</div>
						</TabsContent>
						{/* resume */}
						<TabsContent
							value={"resume"}
							className="w-full text-center xl:text-left">
							<div className="flex flex-col gap-[30px]">
								<h3 className="text-4xl font-bold">{about.title}</h3>
								<p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
									{about.Description}
								</p>
								<ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
									{about.info.map((item, index) => {
										return (
											<div key={index}>
												<li className="flex items-center justify-center xl:justify-start gap-4">
													<span className="text-white/60">
														{item.fieldName}
													</span>
													<span className="text-xl">{item.fieldValue}</span>
												</li>
											</div>
										);
									})}
								</ul>
							</div>
						</TabsContent>
					</div>
				</Tabs>
			</div>
		</motion.div>
	);
};

export default AboutMe;
