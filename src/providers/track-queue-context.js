import React, { createContext, useState } from "react";
import { Artist } from "../entities/artist";
import { Track } from "../entities/track";
export const TrackQueueContext = createContext();

export function TrackQueueProvider(props) {
  const [queue, setQueue] = useState([
    new Track({
      albumCover:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRBYxXx88UgZe3s4dmgyxFdI1z6OReq8DAokR4JPVv-moaly2B4&usqp=CAU",
      albumId: "some-fake-id",
      albumName: "Awesome Album",
      artists: [
        new Artist({
          avatar: "artist.com/avatar.png",
          id: "fake-id",
          name: "Mrs. Awesome",
        }),
      ],
      id: "fake-track-id",
      sourceUrl:
        "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
      title: "Awesome Music",
    }),
  ]);

  return (
    <TrackQueueContext.Provider value={[queue, setQueue]}>
      {props.children}
    </TrackQueueContext.Provider>
  );
}
