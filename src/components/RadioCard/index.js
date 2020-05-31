import React from "react";
import { BsHeart, BsHeartFill, BsThreeDots } from "react-icons/bs";
import { FaPlay } from "react-icons/fa";
import { Background } from "./RandomBackground";
import { Container, Cover } from "./styles";

export function RadioCard({ radio }) {
  const { isLiked, name, isArtistRadio } = radio;
  const [artistImage1, artistImage2, artistImage3] = radio.coverImages;

  const LikeIcon = isLiked ? BsHeartFill : BsHeart;
  const description = isArtistRadio ? "Artist Radio" : "Song Radio";

  return (
    <Container isArtistRadio={isArtistRadio}>
      <Background className="background" />
      <Cover className="cover">
        <div className="name-container">
          <strong className="name">{name}</strong>
        </div>
        <span>radio</span>
        <div className="images-container">
          <img src={artistImage1} alt="Artist" className="related-artist" />
          <div className="main">
            <img src={artistImage2} alt="Artist" className="artist-cover" />
          </div>
          <img src={artistImage3} alt="Artist" className="related-artist" />
        </div>
      </Cover>

      <div className="icons-container">
        <LikeIcon size={20} />
        <div className="play">
          <FaPlay size={20} />
        </div>
        <BsThreeDots size={20} />
      </div>
      <strong className="name">{name}</strong>
      <span className="description">{description}</span>
    </Container>
  );
}
