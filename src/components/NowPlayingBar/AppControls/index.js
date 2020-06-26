import React, { useEffect, useState } from "react";
import { BsVolumeMute, BsVolumeUp } from "react-icons/bs";
import { FaExpandAlt } from "react-icons/fa";
import { MdImportantDevices, MdQueueMusic } from "react-icons/md";
import { Container } from "./styles";

export function AppControls({ audio, toggleFullScreen }) {
  const [volume, setVolume] = useState(0.5);
  const [muted, setMuted] = useState(false);

  const VolumeIcon = volume === 0 || muted ? BsVolumeMute : BsVolumeUp;

  useEffect(() => {
    if (audio) audio.volume = volume;
  }, [audio, volume]);

  useEffect(() => {
    if (audio) audio.volume = muted ? 0 : volume;
  }, [muted, audio, volume]);

  function changeVolume(e) {
    const volume = e.target.value / 100;
    setVolume(volume);

    if (volume > 0) {
      setMuted(false);
    }
  }

  const muteOrUnmute = () => setMuted(!muted);

  return (
    <Container>
      <button>
        <MdQueueMusic size={25} />
      </button>
      <button>
        <MdImportantDevices size={23} />
      </button>
      <button onClick={muteOrUnmute}>
        <VolumeIcon size={25} />
      </button>
      <input
        type="range"
        id="volume"
        className="volume-slider"
        min={0}
        max={100}
        value={volume * 100}
        onChange={changeVolume}
      />
      <button onClick={toggleFullScreen}>
        <FaExpandAlt size={18} />
      </button>
    </Container>
  );
}
