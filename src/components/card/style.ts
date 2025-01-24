import styled from "styled-components";

export const Body = styled.div<{ $isMobile?: boolean }>`
  width: ${(props) => (props.$isMobile ? "-webkit-fill-available" : "auto")};
`;

export const CardBody = styled.div`
  height: 16rem;
  background-color: white;
  box-shadow: 0px 3px 6px #e5e5e5;
  border: 1px solid #e4e4e4;
  border-radius: 8px;
  padding: 0rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const CardBottom = styled.div`
  height: 2.5rem;
  background-color: white;
  box-shadow: inset 0px 3px 6px #0000000f;
  border-radius: 0px 0px 8px 8px;
  opacity: 1;
  padding: 0rem 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  color: #263238;
  font-size: 15px;
  cursor: pointer;
`;

export const Img = styled.img`
  width: 10rem;
  height: 10rem;
`;

export const DividerHorizontal = styled.div`
  width: 10rem;
  margin: 0px;
  border-width: 0px 0px thin;
  border-style: solid;
  border-color: rgb(0 0 0 / 12%);
`;

export const DividerVertical = styled.div`
  margin: 0px;
  flex-shrink: 0;
  border-width: 0px thin 0px 0px;
  border-style: solid;
  border-color: rgb(0 0 0 / 12%);
  height: 1rem;
`;

export const Spiner = styled.span`
  width: 48px;
  height: 48px;
  border: 5px solid #fff;
  border-bottom-color: #ff3d00;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const Title = styled.p`
  font-size: 20px;
`;
