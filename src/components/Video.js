import React, { useEffect, useRef, useState } from "react";
import "./Video.css";
import VideoFooter from "./VideoFooter";
import VideoSidebar from "./VideoSidebar";

const Video = ({ src, song, user, likes, comments, description }) => {
	const videoRef = useRef(null);
	const [isPlaying, setIsPlaying] = useState(true);
	const [isLiked, setIsLiked] = useState(false);


	const onVideoPress = () => {
		if (isPlaying) {
			videoRef.current.pause();
			setIsPlaying(false);
		} else {
			videoRef.current.play();
			setIsPlaying(true);
		}
	};

	return (
		<div className="Video">
			<video
				playsInline
				className="video__player"
				ref={videoRef}
				onClick={onVideoPress}
				loop
				muted
				preload="auto"
				controls={false}
				autoPlay={true}
				src={src}
				// type="video/mp4"
				onDoubleClick={async () => setIsLiked(true)}
			/>

			<VideoFooter user={user} description={description} song={song} />

			<VideoSidebar isLiked={isLiked} likes={likes} comments={comments} />
		</div>
	);
};

export default Video;
