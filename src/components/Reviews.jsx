import { useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import {
	getFirestore,
	collection,
	addDoc,
	getDocs,
} from "firebase/firestore";
import FirebaseConfigSecret from "../server/FirebaseConfigSecret";

const firebaseConfig = {
	apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
	...FirebaseConfigSecret,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const Reviews = () => {
	const [reviews, setReviews] = useState([]);
	const [name, setName] = useState("");
	const [review, setReview] = useState("");
	const [rating, setRating] = useState(0);
	const [latestReview, setLatestReview] = useState(null);

	useEffect(() => {
		const fetchReviews = async () => {
			try {
				const querySnapshot = await getDocs(
					collection(db, "reviews"),
				);
				const reviewData = querySnapshot.docs.map(
					(doc) => ({
						id: doc.id,
						...doc.data(),
					}),
				);
				setReviews(reviewData);
			} catch (error) {
				console.error(
					"Error fetching reviews: ",
					error,
				);
			}
		};
		fetchReviews();
	}, [db, latestReview]);

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const docRef = await addDoc(
				collection(db, "reviews"),
				{
					name: name,
					review: review,
					rating: rating,
				},
			);
			setName("");
			setReview("");
			setRating(0);
			setLatestReview({
				id: docRef.id,
				name: name,
				review: review,
				rating: rating,
			});
		} catch (error) {
			console.error("Error adding review: ", error);
		}
	};

	return (
		<>
			<div className="py-6 bg-black">
				{reviews.length > 0 && (
					<h2 className="text-2xl font-semibold mb-6 text-center text-yellow-500">
						What our clients say
					</h2>
				)}
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 bg-gray-800">
					{reviews.map((review) => (
						<div
							key={review.id}
							className="bg-white rounded-xl mx-auto p-8 text-center border-transparent border-2 shadow-xl transform transition-transform duration-300 hover:scale-105 w-full max-w-sm h-64 flex flex-col justify-between"
						>
							<h3 className="font-bold text-lg mb-4 text-black">
								{review.name}
							</h3>
							<div className="flex justify-center mb-4">
								{[
									...Array(review.rating),
								].map((_, index) => (
									<svg
										key={index}
										className="w-5 h-5 text-yellow-500"
										fill="currentColor"
										viewBox="0 0 20 20"
									>
										<path d="M9.049 2.927C9.329 2.138 10.671 2.138 10.951 2.927L12.334 6.725C12.447 7.052 12.746 7.276 13.087 7.276H17.18C18.053 7.276 18.417 8.396 17.682 8.895L14.379 11.1C14.112 11.274 13.994 11.624 14.107 11.951L15.49 15.748C15.77 16.537 14.813 17.204 14.078 16.705L10.775 14.5C10.508 14.326 10.171 14.326 9.904 14.5L6.601 16.705C5.866 17.204 4.909 16.537 5.189 15.748L6.572 11.951C6.685 11.624 6.567 11.274 6.3 11.1L2.997 8.895C2.262 8.396 2.626 7.276 3.499 7.276H7.592C7.933 7.276 8.232 7.052 8.345 6.725L9.728 2.927H9.049z" />
									</svg>
								))}
							</div>
							<p className="text-black mb-6 overflow-hidden overflow-ellipsis h-16">
								{review.review}
							</p>
						</div>
					))}
				</div>
			</div>
			<div className="container mx-auto py-8">
				<h1 className="text-3xl font-bold mb-4 text-center text-yellow-500">
					Reviews
				</h1>
				<div className="p-6 lg:mb-4 m-4 rounded-md shadow-md bg-gray-800 text-white">
					<form
						onSubmit={handleSubmit}
						className="mt-4"
					>
						<div className="flex flex-col space-y-4">
							<label
								htmlFor="name"
								className="text-lg font-semibold"
							>
								Name:
							</label>
							<input
								type="text"
								id="name"
								name="name"
								value={name}
								onChange={(e) =>
									setName(e.target.value)
								}
								required
								className="p-2 rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring focus:ring-yellow-500 focus:ring-opacity-50"
							/>

							<label
								htmlFor="review"
								className="text-lg font-semibold"
							>
								Review:
							</label>
							<textarea
								id="review"
								name="review"
								rows="4"
								value={review}
								onChange={(e) =>
									setReview(
										e.target.value,
									)
								}
								required
								className="p-2 rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring focus:ring-yellow-500 focus:ring-opacity-50"
							/>

							<label className="text-lg font-semibold">
								Rating:
							</label>
							<div className="flex space-x-2">
								{[1, 2, 3, 4, 5].map(
									(star) => (
										<label
											key={star}
											className="flex items-center"
										>
											<input
												type="radio"
												name="rating"
												value={star}
												onChange={(
													e,
												) =>
													setRating(
														Number(
															e
																.target
																.value,
														),
													)
												}
												required
												className="hidden"
											/>
											<svg
												className={`w-8 h-8 cursor-pointer ${
													rating >=
													star
														? "text-yellow-500"
														: "text-gray-300"
												}`}
												fill="currentColor"
												viewBox="0 0 20 20"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path d="M9.049 2.927C9.329 2.138 10.671 2.138 10.951 2.927L12.334 6.725C12.447 7.052 12.746 7.276 13.087 7.276H17.18C18.053 7.276 18.417 8.396 17.682 8.895L14.379 11.1C14.112 11.274 13.994 11.624 14.107 11.951L15.49 15.748C15.77 16.537 14.813 17.204 14.078 16.705L10.775 14.5C10.508 14.326 10.171 14.326 9.904 14.5L6.601 16.705C5.866 17.204 4.909 16.537 5.189 15.748L6.572 11.951C6.685 11.624 6.567 11.274 6.3 11.1L2.997 8.895C2.262 8.396 2.626 7.276 3.499 7.276H7.592C7.933 7.276 8.232 7.052 8.345 6.725L9.728 2.927H9.049z" />
											</svg>
										</label>
									),
								)}
							</div>

							<button
								type="submit"
								className="bg-yellow-500 text-black px-4 py-2 rounded-md hover:bg-yellow-600"
							>
								Submit Review
							</button>
						</div>
					</form>
				</div>
			</div>
		</>
	);
};

export default Reviews;
