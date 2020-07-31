import styled from 'styled-components';

interface Props {
  isArtistRadio: boolean;
}

export const Container = styled.div<Props>`
  color: #fff;
  position: relative;
  display: flex;
  flex-direction: column;
  line-height: 1.3rem;
  font-size: 0.9rem;
  max-width: 225px;

  .cover {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
  }

  .name {
    text-transform: ${(props) => (props.isArtistRadio ? 'capitalize' : 'none')};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    :hover {
      text-decoration: underline;
      cursor: pointer;
      text-underline-position: under;
    }
  }

  .description {
    color: #b2afae;
  }

  .icons-container {
    position: absolute;
    z-index: 3;
    top: 0;
    left: 0;
    height: 225px;
    width: 100%;
    opacity: 0;
    padding: 0 40px;
    background-color: rgba(0, 0, 0, 0.7);
    display: flex;
    align-items: center;
    justify-content: space-between;

    :hover {
      opacity: 1;
    }

    .play {
      vertical-align: center;
      line-height: 50%;
      padding: 15px;
      border: 1px solid #eee;
      border-radius: 30px;

      :hover {
        border: 1.5px solid #fff;
        transform: scale(1.2);
      }
    }
  }
`;

export const Cover = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  line-height: 1.5rem;
  padding: 20px 10px;
  height: 225px;
  width: 225px;

  .name-container {
    display: inline;
    text-align: center;
    overflow: hidden;
    max-height: 1.5rem;
    text-overflow: ellipsis;

    .name {
      height: 1.5rem;
      font-size: 1.5rem;
    }
  }

  span {
    flex: 2;
    text-align: center;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 0.9rem;
  }

  .images-container {
    display: flex;
    position: relative;
    top: -15px;
    align-items: center;
    justify-content: space-between;
    flex: 3;

    img {
      width: 75px;
      height: 75px;
      border: #fff solid 3px;
      border-radius: 50%;
    }

    .related-artist {
      filter: grayscale(100%);
    }

    .main {
      position: absolute;
      z-index: 1;
      left: calc((100% - 105px) / 2);

      .artist-cover {
        width: 105px;
        height: 105px;
      }
    }
  }
`;
