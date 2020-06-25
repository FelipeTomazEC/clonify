import React, { createContext, useContext, useEffect, useState } from "react";
import { TrackQueueContext } from "./track-queue-context";
export const CurrentPlayingContext = createContext();

export function CurrentPlayingProvider({ children }) {
  const [queue] = useContext(TrackQueueContext);
  const [currentTrack, setCurrentTrack] = useState(queue[0]);

  useEffect(() => {
    setCurrentTrack(queue[0]);
  }, [queue]);

  return (
    <CurrentPlayingContext.Provider value={[currentTrack, setCurrentTrack]}>
      {children}
    </CurrentPlayingContext.Provider>
  );
}
