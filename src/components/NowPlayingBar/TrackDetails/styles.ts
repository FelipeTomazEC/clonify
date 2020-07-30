import styled from 'styled-components';

export const Container = styled.div`
  display: inline-flex;
  align-items: center;
  padding: 8px 12px;
  height: 100%;
  max-height: 72px;

  .cover {
    width: 48px;
    height: 48px;
    margin-right: 12px;
  }

  .details {
    overflow: hidden;
    max-height: 72px;
    white-space: nowrap;

    .title-like-wrapper {
      display: flex;
      align-items: center;
    }

    .title-like-wrapper > .title,
    .artist-name {
      display: inline-block;
      max-width: 200px;
      cursor: pointer;
      overflow: hidden;
      text-overflow: ellipsis;

      :hover {
        text-decoration: underline;
        text-underline-position: under;
      }
    }

    .title {
      font-size: 0.93rem;
      font-weight: 600;
      margin-right: 12px;
    }

    .artist-name {
      font-size: 0.8rem;
      display: block;
    }
  }
`;
