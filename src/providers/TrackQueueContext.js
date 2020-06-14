import React, { createContext, useState } from "react";

export const TrackQueueContext = createContext();

export function TrackQueueProvider(props) {
  const [queue, setQueue] = useState([
    {
      title: "Awesome Music",
      artist: "John Mac",
      cover:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRBYxXx88UgZe3s4dmgyxFdI1z6OReq8DAokR4JPVv-moaly2B4&usqp=CAU",
      isLiked: true,
      sourceUrl:
        "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
    },
    {
      title: "It's play time",
      artist: "Funny Bill",
      cover:
        "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/techno-triangle-album-cover-flyer-template-2f2a9d4851c7de5f4f2362d3352f42fc.jpg?ts=1561427894",
      isLiked: false,
      sourceUrl:
        "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
    },
  ]);

  return (
    <TrackQueueContext.Provider value={[queue, setQueue]}>
      {props.children}
    </TrackQueueContext.Provider>
  );
}
