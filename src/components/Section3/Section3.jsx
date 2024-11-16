import React from "react";
import style from "./Section3.module.css";

const Bear = () => {
	return (
		<div>
			<div className={style.bear}>
				<div className={style.monkey}>
					<img src="src/assets/images/min3.jpeg" />
					<h4>Discover Captivating Wildlife</h4>
					<div>
						From graceful deer grazing in meadows to the melodious songs of
						birds. schoing through the trees, our park 3 haven for both native
						and exotic: species. Our commitment o conservation ensures that youl
						encounter croatures thriving in ebitats carefully designed to mir
						thel natural environments. Observe the intricate behaviors of
						piayful otters as they froin heir aquatic playground, or witness the
						majestic ight of eages soaring high above.
					</div>
					<button className={style.brownbutton}>Show All Animals</button>
				</div>
				<div className={style.bearpic}>
					<img src="src/assets/images/ayi2.jpeg" />
				</div>
				<div className={style.yelloman}>
					<img src="src/assets/images/yelloman.jpeg" />

					<div className={style.yellotext}>
						Join us on a journey that promises not Justa glimpse of the animal
						realm, but animmersive adventure that leaves you with a newfound
					reverence for the intricate tapestry of life
					<br/>
					<div>Richard Zong</div>	
					<h5 >PARK GUIDE</h5>
					</div>
					
				</div>
			</div>
		</div>
	);
};

export default Bear;
