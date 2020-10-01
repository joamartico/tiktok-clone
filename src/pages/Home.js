import React, { useEffect, useState } from "react";
import "../firebase"
import { firestore } from "firebase";
import Video from "../components/Video";

import "./Home.css";

const Home = () => {
	const [videos, setVideos] = useState([])

	useEffect(() => {
		firestore().collection("posts").onSnapshot((snapshot) => {
			setVideos(snapshot.docs.map(doc => {
				const post = doc.data()
				post.id = doc.id
				return post
			}))
		})
	}, [])


	return (
		<div className="Home">
			{videos.map(({src, user, description, song, likes, comments}) => (
				<Video 
				src={src}
				key={song}
				user={user}
				description={description}
				song={song}
				likes={likes}
				comments={comments}/>
			))}
		</div>
	);
};

export default Home;
