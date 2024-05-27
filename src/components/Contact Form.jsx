import { useRef } from "react";
import sendEmail from "../Server/Email";

const ContactForm = () => {
	const form = useRef();

	return (
		<div
			id="Contact"
			className="container mx-auto py-8"
		>
			<h1 className="text-3xl font-bold mb-4 text-center text-yellow-500">
				Contact Us
			</h1>

			<form
				ref={form}
				onSubmit={sendEmail}
				className="bg-gray-800 rounded-md p-6 shadow-md lg:mb-4 m-4 text-white"
			>
				<div className="flex flex-col space-y-4">
					<label
						htmlFor="user_name"
						className="text-lg font-semibold"
					>
						Name:
					</label>
					<input
						type="text"
						id="user_name"
						name="user_name"
						required
						className="p-2 rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring focus:ring-yellow-500 focus:ring-opacity-50"
					/>

					<label
						htmlFor="user_email"
						className="text-lg font-semibold"
					>
						Email:
					</label>
					<input
						type="email"
						id="user_email"
						name="user_email"
						required
						className="p-2 rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring focus:ring-yellow-500 focus:ring-opacity-50"
					/>

					<label
						htmlFor="subject"
						className="text-lg font-semibold"
					>
						Subject:
					</label>
					<input
						type="text"
						id="subject"
						name="subject"
						required
						className="p-2 rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring focus:ring-yellow-500 focus:ring-opacity-50"
					/>

					<label
						htmlFor="message"
						className="text-lg font-semibold"
					>
						Message:
					</label>
					<textarea
						id="message"
						name="message"
						rows="4"
						required
						className="p-2 rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring focus:ring-yellow-500 focus:ring-opacity-50"
					></textarea>

					<button
						type="submit"
						className="bg-yellow-500 text-black px-4 py-2 rounded-md hover:bg-yellow-600"
					>
						Send
					</button>
				</div>
			</form>
		</div>
	);
};

export default ContactForm;
