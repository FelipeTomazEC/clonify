import styled from "styled-components";

interface StickyContainerContent {
  isStuck: boolean;
}

export const Container = styled.div`
  position: relative;
  max-width: 100%;
  max-height: 100%;
  min-height: 100%;
  overflow-y: auto;
  background: #403f3b;
  background: -moz-linear-gradient(top, #403f3b 0%, #181817 10%, #181817 100%);
  background: -webkit-linear-gradient(top,
  #403f3b 0%,
  #181817 10%,
  #181817 100%);
  background: linear-gradient(to bottom, #403f3b 0%, #181817 10%, #181817 100%);

  .loading-animation {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }
`;

export const Wrapper = styled.div<StickyContainerContent>`
  position: ${props => props.isStuck ? 'sticky' : 'absolute'};
  display: flex;
  align-items: center;
  top: 0;
  width: 100%;
  height: ${props => props.isStuck ? '70px' : '250px'};
  background-color: red;
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

export const StickyGuard = styled.div`
  width: 100%;
  height: 120px;
`;

export const Header = styled.header`
  min-height: 250px;
  position: sticky;
  top: -121px;
`;

export const Cover = styled.img<StickyContainerContent>`
  width: ${props => props.isStuck ? '40px' : '220px'};
  height: ${props => props.isStuck ? '40px' : '220px'};
  margin: 15px 30px;
`;

export const Info = styled.div<StickyContainerContent>`
  color: #939090;
  font-size: 0.95rem;
  
  ${props => props.isStuck ? `
    .description, .label, .tracks-info, .time-info, .owner {
      display: none;
    }
  ` : ''}
`;

export const Label = styled.h3`
  color: #fff;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 200;
`;

export const Name = styled.h1<StickyContainerContent>`
  color: #fff;
  font-size: ${props => props.isStuck ? '2rem' : '3rem'};
  line-height: ${props => props.isStuck ? '2rem' : '3rem'};
`;

export const Description = styled.p`
  display: block;
`;

export const Owner = styled.span`
  display: inline-flex;
  align-items: center;

  strong {
    color: #fff;
  }

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
`;




