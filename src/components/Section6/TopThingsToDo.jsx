// src/components/TopThingsToDo.jsx
import React from "react";
import style from "./Section6.module.css";

const TopThingsToDo = ({ activities }) => {
	return (
		<div>
			<div className={style.park}>
				<h2>Top Things to Do in the Park</h2>
				<ul>
					{activities.map((item, index) => (
						<li
							key={index}
							style={{
								display: "flex",
								flexDirection: item.isTree ? "row" : "row-reverse",
							}}
						>
							<img src={item.imageUrl} alt={item.activity} />
							<div
								style={{
									display: "grid",
								}}
							>
								<span className={style.activity}>{item.activity}</span>
								<span>
									<img src={item.starsUrl} alt={item.activity} />
								</span>
								<span className={style.about}>{item.about}</span>
								<button className={style.btn}>See Details</button>
								<span>Starts at ${item.price}</span>
							</div>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default TopThingsToDo;
