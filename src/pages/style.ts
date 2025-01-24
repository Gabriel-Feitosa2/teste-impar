import styled from "styled-components";
import Bg from "../assets/fundo-busca.png";
import Lupa from "../assets/lupa.png";

export const Navbar = styled.nav`
  position: absolute;
  width: 100%;
  background-color: purple;
  height: 64px;
  background: transparent
    linear-gradient(272deg, rgba(174, 39, 111, 1) 0%, rgba(95, 20, 120, 1) 100%)
    0% 0% no-repeat padding-box !important;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
`;

export const NavBarConteiner = styled.div`
  padding: 0.7rem;
`;

export const Image = styled.div<{ $isMobile?: boolean }>`
  padding-top: 4rem;
  height: ${(props) => (props.$isMobile ? "10rem" : "16.25rem")};
  width: 100%;
  background-image: url(${Bg});
  background-repeat: no-repeat;
  background-size: 100% auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Input = styled.input<{ $isMobile?: boolean }>`
  width: 80%;
  height: 4.625rem;
  box-sizing: border-box;
  border: 0px;
  border-radius: 8px;
  font-size: 16px;
  background-color: white;
  background-image: url(${Lupa});
  background-position: 97% 10px;
  background-repeat: no-repeat;
  padding: 12px 20px 12px 40px;
  font-size: ${(props) => (props.$isMobile ? "16px" : "24px")};
`;

export const Body = styled.div`
  padding-right: 10%;
  padding-left: 10%;
  min-height: 50rem;
`;

export const TitleWrapper = styled.div<{ $isMobile?: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: ${(props) => (props.$isMobile ? "column" : "row")};
`;

export const Button = styled.button<{ $isMobile?: boolean }>`
  width: ${(props) => (props.$isMobile ? "-webkit-fill-available" : "10rem")};
  height: 3rem;
  background-color: rgba(231, 99, 22, 1);
  border: 0;
  box-shadow: 0px 3px 6px rgba(146, 32, 114, 0.26);
  border-radius: 8px;
  color: white;
  font-size: 1.125rem;
  cursor: pointer;
  margin-bottom: ${(props) => (props.$isMobile ? "1rem" : "0")};
`;

export const Title = styled.p`
  color: rgba(95, 20, 120, 1);
  font-size: 32px;
`;

export const CardWrapper = styled.div`
  display: flex;
  gap: 5rem;
  flex-wrap: wrap;
`;

export const BottomWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin: 1rem 0;
`;

export const ButtonArrow = styled.div`
  cursor: pointer;
  width: 2rem;
  height: 2rem;

  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background-color: rgb(48, 48, 48, 0.08);
  }
`;
