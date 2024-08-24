"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import { Link } from "lucide-react";
import { useRouter } from "next/navigation";

//components
import Social from "@/components/social";
import Photo from "@/components/photo";
import Stats from "@/components/stats";

export default function Home() {
	const router = useRouter();
	return (
		<section className="min-h-[70vh] flex">
			<div className="flex flex-col gap-0 items-start px-8 p-4">
				<span className="text-white text-5xl leading-[0.7]">.</span>
				<span className="text-white text-5xl leading-[0.7]">.</span>
				<span className="text-white text-5xl leading-[0.7]">.</span>
				<span className="text-white text-5xl leading-[0.7]">.</span>
				<span className="text-white text-5xl leading-[0.7]">.</span>
			</div>
			<div className="container mx-auto h-full">
				<div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-20">
					{/* text */}
					<div className="text-center xl:text-left order-2 xl:order-none">
						<span className="text-xl">DevOps Engineer</span>
						<h1 className="h1 mb-6">
							My name is <br />
							<span className="text-accent">Ozi Uzoma</span>
						</h1>
						<p className="max-w-[500px] mb-9 text-white/80">
							Cloud DevOps Engineer with expertise in optimizing development and{" "}
						</p>
						{/* buttons and socials */}

						<div className="flex flex-col xl:flex-row items-center gap-8">
							<Button
								variant="outline"
								onClick={() => router.push("/contact")}
								size="lg"
								className="uppercase flex items-center gap-2 font-extrabold">
								Hire me
							</Button>
							<div className="mb-8 xl:mb-0">
								<Social
									containerStyles="flex gap-6"
									iconsStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
								/>
							</div>
						</div>
					</div>
					{/* photo */}
					<div className="order-1 xl:order-none mb-8 xl:mb-0">
						<Photo />
					</div>
				</div>
				<div className="">
					<Stats />
				</div>
			</div>

			<div className="flex flex-col items-end gap-0 mt-40 px-8">
				<span className="text-white text-5xl leading-[0.7]">.</span>
				<span className="text-white text-5xl leading-[0.7]">.</span>
				<span className="text-white text-5xl leading-[0.7]">.</span>
				<span className="text-white text-5xl leading-[0.7]">.</span>
				<span className="text-white text-5xl leading-[0.7]">.</span>
			</div>
		</section>
	);
}
