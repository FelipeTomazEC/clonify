import React from "react";
import { BsVolumeUp } from "react-icons/bs";
import { FaExpandAlt } from "react-icons/fa";
import { MdImportantDevices, MdQueueMusic } from "react-icons/md";
import { Container } from "./styles";

export function AppControls() {
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
      <input type="range" id="volume" className="volume-slider" />
      <button>
        <FaExpandAlt size={18} />
      </button>
    </Container>
  );
}
