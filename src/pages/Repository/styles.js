import styled from 'styled-components';

export const Loading = styled.div`
  color: #FFF;
  font-size: 30px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Owner = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;

  a {
    color: #7159c1;
    font-size: 16px;
    text-decoration: none;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    svg {
      margin-right: 6px;
    }
  }

  img {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    margin-top: 30px;
  }

  h1 {
    font-size: 24px;
    margin-top: 12px;
    color: #333;
  }

  p {
    font-size: 14px;
    margin-top: 7px;
    color: #666;
    line-height: 1.4;
    text-align: center;
    max-width: 400px;
  }
`;

export const IssueList = styled.ul`
  margin-top: 30px;
  padding-top: 30px;
  list-style: none;
  border-top: 1px solid #eee;

  li {
    display: flex;
    padding: 15px 10px;
    border: 1px solid #eee;
    border-radius: 4px;

    & + li {
      margin-top: 10px;
    }

    img {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      border: 2px solid #eee;
    }

    div {
      flex: 1;
      margin-left: 15px;

      strong {
        font-size: 16px;

        a {
          text-decoration: none;
          color: #333;

          &hover {
            color: #7159c1;
          }
        }

        span {
          color: #444;
          background-color: #eee;
          border-radius: 2px;
          font-size: 12px;
          font-weight: 600;
          height: 20px;
          padding: 3px 4px;
          margin-left: 10px;
        }
      }

      p {
        margin-top: 6px;
        font-size: 12px;
        color: #999;
      }
    }
  }
`;
