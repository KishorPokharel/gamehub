import React from "react";
import { Game } from "../hooks/useGames";
import { Card, CardBody } from "@chakra-ui/card";
import { Image } from "@chakra-ui/image";
import { Heading } from "@chakra-ui/layout";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import { HStack } from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={getCroppedImageUrl(game.background_image)}></Image>
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
        <HStack justifyContent="space-between">
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
