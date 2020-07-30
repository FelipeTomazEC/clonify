import React, { useEffect, useState } from 'react';
import { BsVolumeMute, BsVolumeUp } from 'react-icons/bs';
import { FaExpandAlt } from 'react-icons/fa';
import { MdImportantDevices, MdQueueMusic } from 'react-icons/md';
import { InputEvent } from '../../../types/input-event.type';
import { Container } from './styles';

interface Props {
  audio?: HTMLAudioElement;
  toggleFullScreen: () => void;
}

export function AppControls({ audio, toggleFullScreen }: Props) {
  const [volume, setVolume] = useState(0.5);
  const [isMuted, setIsMuted] = useState(false);

  const VolumeIcon = volume === 0 || isMuted ? BsVolumeMute : BsVolumeUp;

  useEffect(() => {
    if (audio) audio.volume = isMuted ? 0 : volume;
  }, [isMuted, audio, volume]);

  const changeVolume = (e: InputEvent) => {
    const volume = e.target.valueAsNumber / 100;
    setVolume(volume);

    if (volume > 0) {
      setIsMuted(false);
    }
  };

  const muteOrUnmute = () => setIsMuted(!isMuted);

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
