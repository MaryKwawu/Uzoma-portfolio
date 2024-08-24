"use client";

import React from "react";
import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";

const services = [
	{
		num: "01",
		title: "Infrastructure-as-Code",
		description:
			"Managing and provisioning IT infrastructure using code and automation tools, rather than manual processes",
		href: "",
	},
	{
		num: "02",
		title: "Containers, Microservices & Orchestration",
		description:
			"Packaging applications as images for consistency across environments. Breaking them into smaller, scalable components. Orchestration tools like Kubernetes manage their deployment and coordination for seamless operation",
		href: "",
	},
	{
		num: "03",
		title: "Continuous Integration & Deployment",
		description:
			"Continuous Integration (CI) automates frequent code integration for early issue detection, while Continuous Deployment (CD) streamlines automated release to production for faster, reliable delivery",
		href: "",
	},
	{
		num: "04",
		title: "Observability & Monitoring",
		description:
			"Observability provides deep insights; monitoring offers real-time alerts.",
		href: "",
	},
];

import { easeInOut, motion } from "framer-motion";

const Services = () => {
	return (
		<section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py">
			<div className="container mx-auto">
				<motion.div
					initial={{ opacity: 0 }}
					animate={{
						opacity: 1,
						transition: { delay: 2.4, duration: 0.4, ease: easeInOut },
					}}
					className="grid grid-cols-1 md:grid-cols-2 gap-[60px]">
					{services.map((service, index) => {
						return (
							<div key={index} className="flex-1 flex flex-col gap-6 group">
								{/* top */}
								<div className="w-full flex justify-between items-center">
									<div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
										{service.num}
									</div>
									<Link
										href={service.href}
										className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45">
										<BsArrowDownRight className="text-primary text-3xl" />
									</Link>
								</div>
								{/* title */}
								<h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
									{service.title}
								</h2>
								{/* description */}
								<p className="text-white/60">{service.description}</p>
								{/* border */}
								<div className="border-b border-white/20 w-full">{}</div>
							</div>
						);
					})}
				</motion.div>
			</div>
		</section>
	);
};

export default Services;
