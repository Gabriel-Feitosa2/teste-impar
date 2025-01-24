import { useState } from "react";

import {
  Body,
  BottomWrapper,
  Button,
  ButtonArrow,
  CardWrapper,
  Image,
  Input,
  Navbar,
  NavBarConteiner,
  Title,
  TitleWrapper,
} from "./style";
import { toast } from "react-toastify";
import Logo from "../assets/logo-teste.svg";
import Card from "../components/card";
import { useQueries, useQuery } from "@tanstack/react-query";
import useCheckMobileScreen from "../hooks/isMobile";

function Home() {
  const [search, setSearch] = useState("");
  const [offset, setOffset] = useState(0);

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

  const listAllPokemons = useQuery({
    queryKey: ["Allpokemons"],
    queryFn: async (): Promise<{
      results: { name: string; url: string }[];
      count: number;
    }> => {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0}`,
        {
          method: "GET",
        }
      );
      return response.json();
    },
  });

  const info = useQuery({
    queryKey: ["pokemons", offset],
    queryFn: async (): Promise<{
      results: { name: string; url: string }[];
      count: number;
    }> => {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon?limit=10&offset=${offset}`,
        {
          method: "GET",
        }
      );
      return response.json();
    },
  });

  const filterPokemon = () => {
    if (listAllPokemons.data) {
      return listAllPokemons.data?.results.filter((pokemon) =>
        pokemon.name.includes(search)
      );
    }
    return [];
  };

  const pokemons = useQueries({
    queries:
      search !== ""
        ? filterPokemon().map((pokemon: { name: string; url: string }) => {
            return {
              queryKey: ["user", pokemon.name],
              queryFn: async () => {
                const response = await fetch(pokemon.url, {
                  method: "GET",
                });
                return response.json();
              },
            };
          })
        : info.data
        ? info.data.results.map((pokemon: { name: string; url: string }) => {
            return {
              queryKey: ["user", pokemon.name],
              queryFn: async () => {
                const response = await fetch(pokemon.url, {
                  method: "GET",
                });
                return response.json();
              },
            };
          })
        : [],
  });

  const onArrowLeftClick = () => {
    if (offset === 0) {
      return;
    }
    setOffset(offset - 10);
  };

  console.log(filterPokemon());

  return (
    <>
      <Navbar>
        <NavBarConteiner>
          <img src={Logo} />
        </NavBarConteiner>
      </Navbar>
      <Image $isMobile={isMobile}>
        <Input
          type="text"
          placeholder="Digite aqui sua busca..."
          onChange={(e) => setSearch(e.target.value)}
          $isMobile={isMobile}
        />
      </Image>
      <Body>
        <TitleWrapper $isMobile={isMobile}>
          <Title>Resultado de busca</Title>
          <Button onClick={notify} $isMobile={isMobile}>
            Novo Card
          </Button>
        </TitleWrapper>
        <CardWrapper>
          {pokemons.map((pokemon) => (
            <Card
              image={
                pokemon.data?.sprites?.other?.["official-artwork"]
                  ?.front_default || ""
              }
              name={pokemon.data?.name || ""}
              isLoading={pokemon.isLoading}
            />
          ))}
        </CardWrapper>
        <BottomWrapper>
          {search === "" && (
            <>
              <ButtonArrow onClick={() => setOffset(0)}>{" << "}</ButtonArrow>
              <ButtonArrow onClick={onArrowLeftClick}>{" < "}</ButtonArrow>
              {Math.round(offset / 10) + 1} de{" "}
              {info.data ? Math.ceil(info.data?.count / 10) : 0}
              <ButtonArrow onClick={() => setOffset(offset + 10)}>
                {" > "}
              </ButtonArrow>
              <ButtonArrow onClick={() => setOffset(info.data?.count || 0)}>
                {" >> "}
              </ButtonArrow>
            </>
          )}
        </BottomWrapper>
      </Body>
    </>
  );
}

export default Home;
