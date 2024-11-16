import React from "react";

import style from "./Section9.module.css";

const Section9 = () => {
	return (
		<div>
			<div className={style.footer}>
				<div>ParkScape Adventures</div>

				<div>
					<ul>
						<li>About Camp</li>
						<li>Events</li>
						<li>Animals</li>
						<li>FAQs</li>
						<li>The Team</li>
					</ul>
				</div>
				<div className={style.sosial}>
          
         <li><img width="20px"src="src/assets/images/5296499_fb_facebook_facebook logo_icon.png" alt=""/></li>
         <li><img width="20px" src="src/assets/images/5296765_camera_instagram_instagram logo_icon.png"/></li>
         <li><img width="20px" src="src/assets/images/5296521_play_video_vlog_youtube_youtube logo_icon.png" /></li>
         <li><img width="20px" src="src/assets/images/5296516_tweet_twitter_twitter logo_icon.png"/></li>
        </div>
			</div>
		</div>
	);
};

export default Section9;
