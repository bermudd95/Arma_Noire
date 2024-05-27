import React from "react";
import Title from "../components/Title";
import Footer from "../components/Footer";
import AboutPage from "./AboutPage";
import ReviewsPage from "./ReviewsPage";
import ContactForm from "../components/Contact Form";

const HomePage = () => {
	return (
		<div className="h-full bg-black min-h-screen">
			<Title />
			<AboutPage />
			<ReviewsPage />
			<ContactForm />
			<Footer />
		</div>
	);
};

export default HomePage;
