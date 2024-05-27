import Logo from "../images/Arma noire logo black.jpg";
import Navigation from "./Navigation";

const Title = () => {
	return (
		<div className="h-full md:pt-5 md:pb-3 py-3 mx-auto bg-amber-500">
			<div className="flex justify-evenly">
				<h1
					id="Home"
					className="md:hidden w-full font-bold text-3xl pt-2 px-4"
				>
					Arma Noire
				</h1>
				<img
					src={Logo}
					className="max-md:hidden mx-4 w-36 h-32"
				/>
				<Navigation />
			</div>
		</div>
	);
};

export default Title;
