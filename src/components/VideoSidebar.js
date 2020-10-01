import { Avatar } from "@material-ui/core";
import {Favorite, Share, Sms } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import "./VideoSidebar.css";

const VideoSidebar = ({likes, comments, isLiked }) => {
	const[liked, setLiked] = useState(false)

	useEffect(() => {
		setLiked(isLiked)
	}, [isLiked])


	return (
		<div className="VideoSidebar">
			<Avatar className="VideoSidebar__button" />
			<div className="VideoSidebar__button"
			onClick={() => setLiked(!liked)}>
				<Favorite style={liked ? {color: "red"} : {color: "white"}}/>
				{likes}
			</div>

			<div className="VideoSidebar__button">
				<Sms />
				{comments}
			</div>

			<div className="VideoSidebar__button">
				<Share />
				Share
			</div>

			<img
				className="VideoSidebar__albumLogo"
				src="/disco.jpg"
			/>
		</div>
	);
};

export default VideoSidebar;
