import React from "react";
import style from "./Hero.module.css";
const Hero = () => {
	return (
		<div className={style.manCamp}>
			<div>
				<h1>Your Adventure Begins Here!</h1>
				<p>Discover the Great Outdoors</p>
			</div>
			<div className={style.discover}>
				<p>
					Discover the magic of untouched landscapes, connect with Nature in;
					its purest form, nd weaken your sense of wonder as you! through rugged
					trails, lush forests, and tranquil lakes
				</p>
				<button>Reserve a Spot</button>
				<p>Starts at $299 night</p>
			</div>
		</div>
	);
};

export default Hero;
