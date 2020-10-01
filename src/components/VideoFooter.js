import { MusicNote } from "@material-ui/icons";
import React from "react";
import Ticker from "react-ticker";
import "./VideoFooter.css";

const VideoFooter = ({ user, description, song }) => {
	return (
		<div className="VideoFooter">
			<strong className="VideoFooter__username">{user}</strong>
			<p className="VideoFooter__description">{description}</p>

			<div className="VideoFooter__ticker">
				<MusicNote className="VideoFooter__tickerIcon" />
				<Ticker className="VideoFooter__tickerText">
					{() => <p>{song}</p>}
				</Ticker>
			</div>
		</div>
	);
};

export default VideoFooter;
