"use client";
import { FaDocker, FaAws } from "react-icons/fa";
import {
	SiKubernetes,
	SiAnsible,
	SiTerraform,
	SiArgo,
	SiGit,
	SiPrometheus,
	SiRedhatopenshift,
	SiHelm,
	SiGrafana,
	SiCircleci,
} from "react-icons/si";
import React from "react";
import { title } from "process";
import { Description } from "@radix-ui/react-dialog";

//personal data
const personal = {
	title: "Personal details",
	Description:
		"With over 3 years of experience and expertise in Bash scripting, Docker, Kubernetes, Terraform, and more, to name a few, I am confident in my ability to deliver exceptional results on projects. My track record of enhancing efficiency and scalability ensures I consistently meet and exceed expectations.",
	info: [
		{
			fieldName: "Name",
			fieldValue: "Ozi Uzoma",
		},
		{
			fieldName: "Phone",
			fieldValue: "(+233) 24 273 6007",
		},
		{
			fieldName: "Experience",
			fieldValue: "2+ Years",
		},
		{
			fieldName: "Nationality",
			fieldValue: "Ghanaian",
		},
		{
			fieldName: "Email",
			fieldValue: "oziuzoma@gmail.com",
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
		"As a Cloud DevOps Engineer, I enhance efficiency and scalability by optimizing development and operations. With expertise in infrastructure as code, monitoring, containers, and cloud computing, I ensure smooth transitions from development to production, driving system performance and reliability.",
	items: [
		{
			company: "AIFI Inc",
			position: "Deployment Engineer",
			duration: "July 2022 - Date",
		},
		{
			company: "Azubi",
			position: "AWS Cloud Engineer",
			duration: "Sep 2021 - Oct 2021",
		},
		{
			company: "Upkey/Aimchess",
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
	title: "",
	Description:
		"I hold a BSc in Computer Engineering from the University of Ghana, where I gained a solid foundation in IT and computing. This education provided me with essential skills and knowledge in system design and optimization, shaping my career in Cloud DevOps and technology.",
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
		"With hands-on experience across leading companies and diverse projects, I’ve honed my skills in Bash scripting and a broad array of DevOps tools like Docker, Kubernetes, Terraform, Ansible, ArgoCD, Azure, AWS, Prometheus, Grafana, and OpenShift. My expertise in configuration management, infrastructure as code, monitoring and observability, container technologies, and cloud computing enables me to drive efficiency and scalability, transforming complex systems into streamlined, high-performance environments.",
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
			icon: <SiRedhatopenshift />,
			name: "openshift",
		},
		{
			icon: <SiPrometheus />,
			name: "prometheus",
		},
		{
			icon: <SiHelm />,
			name: "helm",
		},
		{
			icon: <SiGrafana />,
			name: "grafana",
		},
		{
			icon: <SiCircleci />,
			name: "circleci",
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
						<TabsTrigger value={"resume"}>Personal Details</TabsTrigger>
					</TabsList>

					{/* content */}
					<div className="min-h-[70vh] w-full">
						{/* experience */}
						<TabsContent value={"experience"} className="w-full">
							<div className="flex flex-col gap-[30px] text-center xl:text-left">
								<h3 className="text-4xl font-bold">{experience.title}</h3>
								<p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
									{experience.Description}
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
									<p className="max-w-[800px] text-white/60 mx-auto xl:mx-0">
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
								<h3 className="text-4xl font-bold">{personal.title}</h3>
								<p className="max-w-[800px] text-white/60 mx-auto xl:mx-0">
									{personal.Description}
								</p>
								<ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
									{personal.info.map((item, index) => {
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
