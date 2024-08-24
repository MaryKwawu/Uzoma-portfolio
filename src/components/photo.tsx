"use client";
import React from "react";

import { easeInOut, motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
	return (
		<div className="w-full h-full relative">
			<motion.div
				initial={{ opacity: 0 }}
				animate={{
					opacity: 1,
					transition: { delay: 2, duration: 0.4, ease: easeInOut },
				}}>
				<motion.div
					initial={{ opacity: 0 }}
					animate={{
						opacity: 1,
						transition: { delay: 2, duration: 0.4, ease: easeInOut },
					}}
					className=" mix-blend-normal">
					<Image
						src="/assets/uzoma-head-shot.png"
						style={{
							backgroundImage: "url('/assets/flower.png')",

							backgroundSize: "530px",
							backgroundRepeat: "no-repeat",
							backgroundPosition: "top",
						}}
						priority
						quality={100}
						width={500}
						height={200}
						// fill
						alt={""}
						className=" w-[600px]"
					/>
				</motion.div>
			</motion.div>
		</div>
	);
};

export default Photo;
