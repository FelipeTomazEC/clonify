import React from 'react';
import { BsHeart, BsHeartFill, BsThreeDots } from 'react-icons/bs';
import { FaPlay } from 'react-icons/fa';
import { RadioStation } from '../../entities/radio-station';
import { Background } from './RandomBackground';
import { Container, Cover } from './styles';

interface Props {
  radio: RadioStation;
}

export function RadioCard(props: Props) {
  const LikeIcon = props.radio.isLiked ? BsHeartFill : BsHeart;
  const description =
    props.radio.type === 'artist' ? 'Artist Radio' : 'Song Radio';
  const artist1 = props.radio.mainArtist;
  const [artist2, artist3] = props.radio.secondaryArtists;

  return (
    <Container isArtistRadio={props.radio.type === 'artist'}>
      <Background />
      <Cover className="cover">
        <div className="name-container">
          <strong className="name">{props.radio.name}</strong>
        </div>
        <span>radio</span>
        <div className="images-container">
          <img src={artist2} alt="Artist" className="related-artist" />
          <div className="main">
            <img src={artist1} alt="Artist" className="artist-cover" />
          </div>
          <img src={artist3} alt="Artist" className="related-artist" />
        </div>
      </Cover>

      <div className="icons-container">
        <LikeIcon size={20} />
        <div className="play">
          <FaPlay size={20} />
        </div>
        <BsThreeDots size={20} />
      </div>
      <strong className="name">{props.radio.name}</strong>
      <span className="description">{description}</span>
    </Container>
  );
}
