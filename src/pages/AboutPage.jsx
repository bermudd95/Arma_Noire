import { useState, useEffect, useRef } from "react";
import Guard2 from "../images/Arma-Noire Guard.jpg";
import Guard3 from "../images/Arma Noire Guard Group3.jpg";

import "tailwindcss/tailwind.css";

const AboutPage = () => {
	const [loaded, setLoaded] = useState(false);
	const sectionRefs = useRef([]);
	const images = [Guard2, Guard3];
	const [currentImageIndex, setCurrentImageIndex] =
		useState(0);
	const [heroVisible, setHeroVisible] = useState(true);

	useEffect(() => {
		const interval = setInterval(() => {
			setHeroVisible(false);
			setTimeout(() => {
				setCurrentImageIndex(
					(prevIndex) =>
						(prevIndex + 1) % images.length,
				);
				setHeroVisible(true);
			}, 1000); // Match the duration of your CSS transition
		}, 5000); // Duration for each image display

		return () => clearInterval(interval);
	}, []);

	useEffect(() => {
		const delay = setTimeout(() => {
			setLoaded(true);
		}, 1000);

		return () => clearTimeout(delay);
	}, []);

	useEffect(() => {
		setHeroVisible(true);

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.classList.add(
							"fade-in",
						);
					} else {
						entry.target.classList.remove(
							"fade-in",
						);
					}
				});
			},
			{ threshold: 0.1 },
		);

		sectionRefs.current.forEach((section) => {
			if (section) {
				observer.observe(section);
			}
		});

		return () => {
			sectionRefs.current.forEach((section) => {
				if (section) {
					observer.unobserve(section);
				}
			});
		};
	}, []);

	return (
		<div className="pb-5 bg-black text-yellow-500">
			<section className="relative h-full w-full overflow-hidden">
				<div className="relative z-10 container mx-auto text-center py-5 md:py-12">
					<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
						Welcome to Arma Noire
					</h1>
					<p className="text-lg md:text-xl lg:text-2xl mb-4 text-center">
						Your Trusted Partner in Security
						Solutions
					</p>
				</div>
				<img
					src={images[currentImageIndex]}
					alt="Background"
					className={`transition-opacity duration-1000 ${
						heroVisible
							? "opacity-100"
							: "opacity-0"
					}`}
				/>
			</section>

			<section
				id="About"
				className="container mx-auto px-4 py-10"
			>
				<h1 className="text-3xl font-bold text-center mb-6">
					About Us
				</h1>
				<div className="text-center p-6">
					{[
						{
							title: "Experience You Can Trust",
							content:
								"Our team delivers unparalleled expertise to every project we undertake. From small businesses to large corporations, we have successfully secured a diverse range of clients, earning their trust through our proven track record of reliability and professionalism.",
						},
						{
							title: "Tailored Solutions for Your Needs",
							content:
								"We recognize that every client has unique security requirements. That's why we take a personalized approach, working closely with you to understand your specific needs and develop tailored solutions that provide maximum protection without compromising efficiency or convenience.",
						},
						{
							title: "Cutting-Edge Technology",
							content:
								"In an ever-evolving landscape of threats, staying ahead requires the latest in security technology. At Arma Noire, we leverage state-of-the-art equipment and innovative strategies to deliver unparalleled security solutions that adapt to the changing needs of our clients.",
						},
						{
							title: "Dedicated Support",
							content:
								"Our commitment to your security doesn't end with the installation of systems. We provide ongoing support and maintenance to ensure that your security infrastructure remains robust and effective, giving you the peace of mind you deserve.",
						},
						{
							title: "Your Safety, Our Priority",
							content:
								"At Arma Noire, we don't just provide security solutions – we deliver peace of mind. With a steadfast dedication to professionalism, integrity, and customer satisfaction, we stand ready to be your trusted partner in safeguarding what matters most. Choose Arma Noire for security solutions you can rely on. Contact us today to learn more about how we can protect your assets and peace of mind.",
						},
					].map((section, index) => (
						<div
							key={index}
							className="my-8 opacity-0 transition-opacity duration-1000"
							ref={(el) =>
								(sectionRefs.current[
									index
								] = el)
							}
						>
							<h3 className="text-xl font-bold">
								{section.title}
							</h3>
							<p className="py-3 text-lg">
								{section.content}
							</p>
						</div>
					))}
				</div>
			</section>
		</div>
	);
};

export default AboutPage;
