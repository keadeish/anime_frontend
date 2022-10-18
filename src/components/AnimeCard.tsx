import React, { useEffect, useState } from "react";
import { animeStructure, randomAnimeStructure } from "../utils/animeStructure";
import { FirstAnime } from "./FirstAnime";
import { RandomAnime } from "./RandomAnime";
import { SecondAnime } from "./SecondAnime";
import { ThirdAnime } from "./ThirdAnime";
export function AnimeCard(): JSX.Element {
  return (
    <>
      <FirstAnime /> <SecondAnime /> <ThirdAnime /> <RandomAnime />
    </>
  );
}
