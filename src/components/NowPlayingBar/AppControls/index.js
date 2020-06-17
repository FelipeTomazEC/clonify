import React, { useEffect, useState } from "react";
import { BsVolumeUp } from "react-icons/bs";
import { FaExpandAlt } from "react-icons/fa";
import { MdImportantDevices, MdQueueMusic } from "react-icons/md";
import { Container } from "./styles";

export function AppControls({ audio }) {
  const [volume, setVolume] = useState(0.5);

  useEffect(() => {
    audio.volume = volume;
  }, [audio, volume]);

  function changeVolume(e) {
    const volume = e.target.value / 100;
    setVolume(volume);
  }

  return (
    <Container>
      <button>
        <MdQueueMusic size={25} />
      </button>
      <button>
        <MdImportantDevices size={23} />
      </button>
      <button>
        <BsVolumeUp size={25} />
      </button>
      <input
        type="range"
        id="volume"
        className="volume-slider"
        min={0}
        max={100}
        defaultValue={volume * 100}
        onChange={changeVolume}
      />
      <button>
        <FaExpandAlt size={18} />
      </button>
    </Container>
  );
}
