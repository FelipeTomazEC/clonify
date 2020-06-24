import React from "react";
import { useInView } from "react-intersection-observer";
import { HeaderPlaylistView } from "../../../components/HeaderPlaylistView";
import { Container } from "./styles";

export function PlaylistView() {
  const [ref, isSentinelInView] = useInView({ threshold: 0 });
  const cover =
    "https://t.scdn.co/images/519576e01b61450390234a623c97aa9a.jpeg";

  return (
    <Container>
      <div ref={ref} className="sticky-guard"></div>
      <HeaderPlaylistView
        cover={cover}
        creatorName="Felipe Tomaz"
        description="Lorem, ipsum dolor sit amet consectetur adipisicing elit."
        name="Black in History"
        numberOfFollowers={200000}
        numberOfSongs={150}
        timeLength={9000000}
        compact={!isSentinelInView}
      />
      <div className="content"></div>
    </Container>
  );
}
