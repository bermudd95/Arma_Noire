import React from "react";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";

const Footer = () => {
	return (
		<div className="pb-3 bg-amber-500">
			<div className="flex justify-evenly">
				<FaSquareXTwitter className="w-10 h-20" />
				<p className="pt-10 font-semibold">
					Copyright 2023 by Arma Noire
				</p>
				<FaSquareInstagram className="w-10 h-20" />
			</div>
		</div>
	);
};

export default Footer;
