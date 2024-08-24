"use client";
import React, { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";

const info = [
	{
		icon: <FaPhoneAlt />,
		title: "Phone",
		descriptiion: "+233242736007",
	},
	{
		icon: <FaEnvelope />,
		title: "Email",
		descriptiion: "oziuzoma@gmail.com",
	},
];

import { easeInOut, motion } from "framer-motion";

const Contact = () => {
	const [firstName, setFirstname] = useState("");
	const [lasttName, setLastname] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [service, setService] = useState("");
	const [message, setMessage] = useState("");

	function sendMessage() {
		window.location.href = `mailto:${email}`;
	}
	return (
		<motion.section
			initial={{ opacity: 0 }}
			animate={{
				opacity: 1,
				transition: { delay: 2.4, duration: 0.4, ease: easeInOut },
			}}
			className="py-6">
			<div className="container mx-auto">
				<div className="flex flex-col xl:flex-row gap-[30px]">
					{/* form */}
					<div className="xl:w-[54%] order-2 xl:order-none">
						<form
							action=""
							className="flex flex-col gap-6 p-10 bg-[#7c7ce3] rounded-xl"
							onSubmit={sendMessage}>
							<h3 className="text-4xl text-accent">
								Like my services? Come let us work together
							</h3>
							<p className="text-white/60">
								I’m ready to deliver exceptional results whenever called upon.
								If you like what you see and want to explore how I can bring
								value to your projects, hit the “Send Message” button to get in
								touch. Let’s make your vision a reality!{" "}
							</p>
							{/* input */}
							<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
								<Input
									type="firstname"
									required
									placeholder="Firstname"
									onChange={(e) => {
										setFirstname(e.target.value);
									}}
								/>
								<Input
									type="lastname"
									placeholder="Lastname"
									onChange={(e) => {
										setLastname(e.target.value);
									}}
								/>
								<Input
									type="email"
									required
									placeholder="Email address"
									onChange={(e) => {
										setEmail(e.target.value);
									}}
								/>
								<Input
									type="tel"
									required
									placeholder="Phone number"
									onChange={(e) => {
										setPhone(e.target.value);
									}}
								/>
							</div>
							{/* select */}
							<Select>
								<SelectTrigger className="w-full">
									<SelectValue placeholder="Select a service" />
								</SelectTrigger>
								<SelectContent>
									<SelectGroup>
										<SelectLabel>Select a service</SelectLabel>
										<SelectItem value="est">Infrastructure-as-Code</SelectItem>
										<SelectItem value="cst">
											Continuous Integration & Deployment
										</SelectItem>
										<SelectItem value="mst">
											Containers, Microservices & Orchestration
										</SelectItem>
										<SelectItem value="mst">
											Observability & Monitoring
										</SelectItem>
										<SelectItem value="cst">
											Configuration Management
										</SelectItem>
									</SelectGroup>
								</SelectContent>
							</Select>
							{/* textarea */}
							<Textarea
								className="h-[200px]"
								placeholder="Type your message here"
							/>
							{/* btn */}
							<Button size="md" className="max-w-40">
								Send Message
							</Button>
						</form>
					</div>
					{/* info */}
					<div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
						<ul className="flex flex-col gap-10">
							{info.map((item, index) => {
								return (
									<div key={index}>
										<li className="flex items-center gap-6">
											<div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#7c7ce3] text-accent rounded-md flex items-center justify-center">
												<div className="text-[28px]">{item.icon}</div>
											</div>
											<div className="flex-1">
												<p className="text-white/60">{item.title}</p>
												<h3 className="text-xl">{item.descriptiion}</h3>
											</div>
										</li>
									</div>
								);
							})}
						</ul>
					</div>
				</div>
			</div>
		</motion.section>
	);
};

export default Contact;
