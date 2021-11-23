import React, { useState, useEffect } from 'react';
import { BsVolumeMute, BsVolumeUp } from 'react-icons/bs';
import { FaExpandAlt } from 'react-icons/fa';
import { MdImportantDevices, MdQueueMusic } from 'react-icons/md';
import { usePlayer } from '../../../providers/player-context';
import { InputEvent } from '../../../types/input-event.type';
import { Container } from './styles';

interface Props {
  toggleFullScreen: () => void;
}

export function AppControls({ toggleFullScreen }: Props) {
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [volume, setVolume] = useState<number>(0.5);
  const { changeVolume } = usePlayer();

  useEffect(() => {
    if(isMuted) {
      changeVolume(0);
    } else {
      changeVolume(volume);
    }
  }, [isMuted, changeVolume, volume]);

  const VolumeIcon = isMuted ? BsVolumeMute : BsVolumeUp;

  const handleChangeVolume = (e: InputEvent) => {
    const volume = e.target.valueAsNumber / 100;
    changeVolume(volume);
    setVolume(volume);

    if (volume > 0) {
      setIsMuted(false);
    }

    if(volume === 0) {
      setIsMuted(true);
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
        onChange={handleChangeVolume}
      />
      <button onClick={toggleFullScreen}>
        <FaExpandAlt size={18} />
      </button>
    </Container>
  );
}
