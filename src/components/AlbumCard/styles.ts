import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 0.9rem;
  color: #b2afae;
  line-height: 1rem;
  width: 180px;

  a:link {
    text-decoration: none;
  }

  .name {
    margin-top: 0.5rem;
    cursor: pointer;
    width: fit-content;
    color: #fff;
    text-transform: capitalize;
    margin-bottom: 0.3rem;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2; /* number of lines to show */
    -webkit-box-orient: vertical;

    :hover {
      text-decoration: underline;
      text-underline-position: below;
    }
  }
`;
