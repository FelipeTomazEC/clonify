import styled from 'styled-components';

interface StickyContentProps {
  isStuck: boolean;
}

export const Container = styled.div`
  position: relative;
  max-width: 100%;
  height: 100%;
  max-height: 100%;
  overflow-y: auto;
  background: #403f3b;
  background: -moz-linear-gradient(top, #403f3b 0%, #181817 10%, #181817 100%);
  background: -webkit-linear-gradient(
    top,
    #403f3b 0%,
    #181817 10%,
    #181817 100%
  );
  background: linear-gradient(to bottom, #403f3b 0%, #181817 10%, #181817 100%);

  .loading-animation {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  table {
    width: 100%;
    margin-top: 150px;
  }
`;

export const StickSentinel = styled.div`
  width: 100%;
  height: 120px;
  position: relative;
  z-index: 1000;
  background-color: transparent;
`;

export const StickContainer = styled.div<StickyContentProps>`
  position: ${(props) => props.isStuck ? 'sticky' : 'absolute'};
  top: 0;
  left: 0;
  width: 100%;
  animation: ${props => props.isStuck ? 'collapsing' : 'expanding'} 300ms forwards;
  

  @keyframes collapsing {
    from {
      background-color: transparent;
    }
    to {
      background-color: #0C0C0B;
      border-bottom: rgba(178, 175, 174, 0.2) solid 1px;
    }
  }

  @keyframes expanding {
    from {
      background-color: #0C0C0B;
      border-bottom: rgba(178, 175, 174, 0.2) solid 1px;
    }
    to {
      background-color: transparent;
    }
  }
`;

export const Cover = styled.img<StickyContentProps>`
  width: ${props => props.isStuck ? '50px' : '220px'};
  height: ${props => props.isStuck ? '50px' : '220px'};
  grid-area: cover;
`;



export const AlbumName = styled.h1`
  
`;

export const Label = styled.h3`
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 200;
  grid-area: label;
`;

export const Info = styled.span`
  color: #939090;
  font-size: 0.95rem;
`;

export const YearInfo = styled(Info)`
  ::after {
    content: '';
    margin: 0 0.3rem;
    display: inline-block;
    height: 1px;
    width: 1px;
    background-color: #939090;
    border: #939090 solid 2px;
    border-radius: 100%;
  }
` 

export const ArtistInfo = styled(Info)`
  strong {
    color: #fff;
    font-weight: 400;
  }
`;

export const AlbumInfo = styled.div`
  display: flex;
  align-items: center;
`;

export const InfoWrapper = styled.div<StickyContentProps>`
  grid-area: info;
  align-self: ${(props) => props.isStuck ? 'inherit' : 'flex-end'};

  ${Info}, ${Label} {
    display: ${(props) => props.isStuck ? 'none' : 'inline'};
  }
  
  ${AlbumName} {
    font-size: ${(props) => props.isStuck ? '2rem' : '3rem'};
  }
`;

export const Header = styled.header<StickyContentProps>`
  height: ${(props) => props.isStuck ? 80 : 270}px;
  width: 100%;
  padding: 0 24px;
  display: grid;
  align-items: center;
  color: #fff;

  .buttons {
    grid-area: buttons;
  }

  grid-template-columns: ${(props) => props.isStuck ? '1fr 6fr 1fr 1fr' : '1fr 2fr'};
  grid-template-areas: ${(props) => props.isStuck
    ? `"cover info . buttons"`
    : `"cover info"
      "cover buttons"`
  };
`;