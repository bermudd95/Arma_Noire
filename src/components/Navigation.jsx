import { useState, useRef } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";
import sendEmail from "../Server/Email";

const Navigation = () => {
	const [isOpen, setIsOpen] = useState(false);
	const form = useRef();
	const [isModalOpen, setIsModalOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	const openModal = () => {
		setIsModalOpen(true);
		setIsOpen(false); // Close the menu when the modal opens
	};

	const closeModal = () => {
		setIsModalOpen(false);
	};

	return (
		<div className="w-full px-4 h-full">
			<div className="flex justify-end md:py-4 py-6">
				<section>
					<div className="md:hidden">
						<button onClick={toggleMenu}>
							{isOpen ? (
								<FaTimes className="text-2xl" />
							) : (
								<FaBars className="text-2xl" />
							)}
						</button>
					</div>
					<div className="hidden md:flex pt-5 space-x-10">
						<Link
							to="Home"
							smooth={true}
							duration={500}
							className="hover:text-gray-300 hover:cursor-pointer text-xl font-semibold"
						>
							Home
						</Link>
						<Link
							to="About"
							smooth={true}
							duration={500}
							className="hover:text-gray-300 hover:cursor-pointer text-xl font-semibold"
						>
							About
						</Link>
						<Link
							to="Reviews"
							smooth={true}
							duration={500}
							className="hover:text-gray-300 hover:cursor-pointer text-xl font-semibold"
						>
							Reviews
						</Link>
						<button
							onClick={openModal}
							className="hover:text-gray-300 hover:cursor-pointer text-xl font-semibold"
						>
							Contact
						</button>
					</div>
				</section>
			</div>
			<div
				className={`fixed top-0 right-0 z-50 h-full text-center bg-gray-300 w-64 transform transition-transform duration-300 ease-in-out ${
					isOpen
						? "translate-x-0"
						: "translate-x-full"
				} md:hidden`}
			>
				<button
					onClick={toggleMenu}
					className="p-4 flex justify-end w-full"
				>
					<FaTimes className="text-2xl" />
				</button>
				<div className="flex flex-col space-y-2 mt-8 p-4">
					<Link
						to="Home"
						smooth={true}
						duration={500}
						onClick={toggleMenu}
						className="hover:text-gray-500 hover:cursor-pointer text-lg font-semibold"
					>
						Home
					</Link>
					<Link
						to="About"
						smooth={true}
						duration={500}
						onClick={toggleMenu}
						className="hover:text-gray-500 hover:cursor-pointer text-lg font-semibold"
					>
						About
					</Link>
					<Link
						to="Reviews"
						smooth={true}
						duration={500}
						onClick={toggleMenu}
						className="hover:text-gray-500 hover:cursor-pointer text-lg font-semibold"
					>
						Reviews
					</Link>
					<button
						onClick={openModal}
						className="hover:text-gray-500 hover:cursor-pointer text-lg font-semibold"
					>
						Contact
					</button>
				</div>
			</div>
			{isModalOpen && (
				<div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
					<div className="bg-white p-8 rounded-lg shadow-lg w-80">
						<h2 className="text-2xl font-bold mb-4">
							Contact Us
						</h2>
						<form
							ref={form}
							onSubmit={sendEmail}
						>
							<div className="mb-4">
								<label
									className="block text-sm font-semibold mb-2"
									htmlFor="name"
								>
									Name
								</label>
								<input
									type="text"
									id="name"
									className="w-full px-3 py-2 border rounded"
									required
								/>
							</div>
							<div className="mb-4">
								<label
									className="block text-sm font-semibold mb-2"
									htmlFor="email"
								>
									Email
								</label>
								<input
									type="email"
									id="email"
									className="w-full px-3 py-2 border rounded"
									required
								/>
							</div>
							<div className="mb-4">
								<label
									className="block text-sm font-semibold mb-2"
									htmlFor="message"
								>
									Message
								</label>
								<textarea
									id="message"
									className="w-full px-3 py-2 border rounded"
									rows="4"
									required
								></textarea>
							</div>
							<div className="flex justify-end">
								<button
									type="button"
									onClick={closeModal}
									className="bg-gray-500 text-white px-4 py-2 rounded mr-2"
								>
									Cancel
								</button>
								<button
									type="submit"
									className="bg-blue-500 text-white px-4 py-2 rounded"
								>
									Submit
								</button>
							</div>
						</form>
					</div>
				</div>
			)}
		</div>
	);
};

export default Navigation;
