import React from "react";
import TopThingsToDo from "./TopThingsToDo";

const thingsToDo = [
	{
		activity: "Special Private Tour",
		imageUrl: "src/assets/images/2bus.jpeg",
		about:
			"Whether you're secking a romantic getaway, a family adventure, oraio exciton, cur private tours onsur that your jour through ourpork becomes an unforgettablo and truy exceptional escape.Discover the paris secrets at your own pace anlimmerse yourshabesurywinthe sas endef oomtortandepiowion. ",
		price: "599/day",
		starsUrl: "src/assets/images/5stars.jpeg",
		isTree: true,
	},
	{
		activity: "Customized Group Hiking",
		imageUrl: "src/assets/images/childmam.jpeg",
		about:
			"Whether you're secking a romantic getaway, a family adventure, oraio exciton, cur private tours onsur that your jour through ourpork becomes an unforgettablo and truy exceptional escape.Discover the paris secrets at your own pace anlimmerse yourshabesurywinthe sas endef oomtortandepiowion. ",
		price: "399/group",
		starsUrl: "src/assets/images/5stars.jpeg",
		isTree: false,
	},
	{
		activity: "Kayak & Drifting Journey",
		imageUrl: "src/assets/images/boat.png",
		about:
			"Whether you're secking a romantic getaway, a family adventure, oraio exciton, cur private tours onsur that your jour through ourpork becomes an unforgettablo and truy exceptional escape.Discover the paris secrets at your own pace anlimmerse yourshabesurywinthe sas endef oomtortandepiowion. ",
		price: "99/person",
		starsUrl: "src/assets/images/4stars.jpeg",
		isTree: true,
	},
];
const Section6 = () => {
	return (
		<div>
			<TopThingsToDo activities={thingsToDo} />
		</div>
	);
};

export default Section6;
