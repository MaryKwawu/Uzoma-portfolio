"use client";

import React, { useState } from "react";
import { easeInOut, motion } from "framer-motion";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/work-slider-btn";

const projects = [
	{
		num: "01",
		category: "Mobalysis, Online Analytics Application",
		title: "project 3",
		stack: [
			{
				name: "Terraform",
			},

			{
				name: "Ansible",
			},
		],
		image: "/assets/work/project-image.jpg",
		live: "",
		github: "",
	},
	{
		num: "02",
		category: "Aston Villa HolteBar",
		title: "project 4",

		stack: [
			{
				name: "ArgoCd",
			},
			{
				name: "Terraform",
			},
			{
				name: "Kustomize",
			},
		],
		image: "/assets/work/project-image-2.jpg",
		live: "",
		github: "",
	},
	{
		num: "03",
		category: "Configuration of Continuous Delivery Pipeline",
		title: "project 2",
		stack: [
			{
				name: "CircleCI",
			},
			{
				name: " AWS CloudFormation",
			},
			{
				name: "Ansible",
			},
		],
		image: "/assets/work/project-image-3.jpg",
		live: "",
		github: "",
	},
	{
		num: "04",
		category: "Operationalizing a Microservice API",
		title: "project 2",
		stack: [
			{
				name: "Docker",
			},
			{
				name: "Kubernetes",
			},
		],
		image: "/assets/work/project-image-4.jpg",
		live: "",
		github: "",
	},
];

const Projects = () => {
	const [project, setPtroject] = useState(projects[0]);

	const handleSlideChange = (swiper: any) => {
		//get current slide index
		const currentIndex = swiper.activeIndex;
		//update project state based on current slide index
		setPtroject(projects[currentIndex]);
	};
	return (
		<div>
			<motion.section
				initial={{ opacity: 0 }}
				animate={{
					opacity: 1,
					transition: { delay: 2.4, duration: 0.4, ease: easeInOut },
				}}
				className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0">
				<div className="container mx-auto">
					<div className="flex flex-col xl:flex-row xl:gap-[30px]">
						<div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
							<div className="flex flex-col gap-[30px] h-[50%]">
								{/* outline num */}
								<div className="text-8xl leading-none font-extrabold text-transparent text-outline">
									{project.num}
								</div>
							</div>

							{/* project category */}
							<h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
								{project.category} projects
							</h2>
							{/*project.description*/}
							{/* <p className="text-white/60">{project.de}</p> */}
							{/* stack */}
							<ul className="flex gap-4">
								{project.stack.map((item, index) => {
									return (
										<div key={index}>
											<li className="text:xl text-accent">
												{item.name}
												{/* remove the last comma */}
												{index !== project.stack.length - 1 && ","}
											</li>
										</div>
									);
								})}
							</ul>
							{/* border */}
							<div className="border border-white/20"></div>
							{/* button */}
							<div className="flex items-center gap-4">
								{/* live project button */}
								<Link href={project.live}>
									<TooltipProvider delayDuration={100}>
										<Tooltip>
											<TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
												<BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
											</TooltipTrigger>
											<TooltipContent>
												<p>Live project</p>
											</TooltipContent>
										</Tooltip>
									</TooltipProvider>
								</Link>
								{/* github project button */}
								<Link href={project.github}>
									<TooltipProvider delayDuration={100}>
										<Tooltip>
											<TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
												<BsGithub className="text-white text-3xl group-hover:text-accent" />
											</TooltipTrigger>
											<TooltipContent>
												<p>Github repository</p>
											</TooltipContent>
										</Tooltip>
									</TooltipProvider>
								</Link>
							</div>
						</div>
						<div className="w-full xl:w-[50%]">
							<Swiper
								spaceBetween={30}
								slidesPerView={1}
								className="xl:h-[520px]"
								onSlideChange={handleSlideChange}>
								{projects.map((item, index) => {
									return (
										<div key={index}>
											<SwiperSlide className="w-full">
												<div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
													{/* overlay */}
													<div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
													{/* image */}
													<div className="relative w-full h-full">
														<Image
															src={project.image}
															alt={""}
															fill
															className="object-cover"
														/>
													</div>
												</div>
											</SwiperSlide>
										</div>
									);
								})}
								{/* slider buttons */}
								<WorkSliderBtns
									containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
									btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px h-[44px] flex justify-center items-center transition-all"
								/>
							</Swiper>
						</div>
					</div>
				</div>
			</motion.section>
		</div>
	);
};

export default Projects;
