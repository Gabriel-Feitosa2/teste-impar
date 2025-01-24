import Trash from "../../assets/Icon-trash.svg";
import Edit from "../../assets/Icon-edit.svg";
import {
  Body,
  CardBody,
  CardBottom,
  DividerHorizontal,
  DividerVertical,
  Img,
  Spiner,
  Title,
} from "./style";
import { toast } from "react-toastify";
import useCheckMobileScreen from "../../hooks/isMobile";

interface CardProps {
  image: string;
  name: string;
  isLoading: boolean;
}

function Card({ image, name, isLoading }: CardProps) {
  const isMobile = useCheckMobileScreen();

  const notify = () =>
    toast.warn("Funcionalidade ainda não implementada", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  console.log(isMobile);

  return (
    <Body $isMobile={isMobile}>
      <CardBody>
        {isLoading ? (
          <Spiner />
        ) : (
          <>
            <Img src={image} />
            <DividerHorizontal />
            <Title>{name}</Title>
          </>
        )}
      </CardBody>
      <CardBottom onClick={notify}>
        <img src={Trash} />
        Excluir
        <DividerVertical />
        <img src={Edit} />
        Editar
      </CardBottom>
    </Body>
  );
}

export default Card;
