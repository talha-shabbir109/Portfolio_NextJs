import React from "react";
import { TypeAnimation } from "react-type-animation";

const TypeWriteEffect = () => {
	return (
		<TypeAnimation
			sequence={[
				"a React Developer",
				1000,
				"a Next.js Developer",
				1000,
				"a Digital Marketing Expert",
				1000,
				"a UX/UI Designer",
				1000,
				"a Trainer",
				1000,
			]}
			wrapper="span"
			speed={50}
			className="xl:text-[50px] lg:text-[40px] sm:text-[35px] text-[25px] text-white font-bold"
			repeat={Infinity}
		/>
	);
};

export default TypeWriteEffect;
