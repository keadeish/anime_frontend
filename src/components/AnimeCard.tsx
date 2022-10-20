import React from "react";
import { FirstAnime } from "./FirstAnime";
import { RandomAnime } from "./RandomAnime";
import { SecondAnime } from "./SecondAnime";
import { ThirdAnime } from "./ThirdAnime";
export function AnimeCard(): JSX.Element {
  return (
    <>
      <div className="container">
        <div className="boarder">
          <FirstAnime />
          <SecondAnime />
          <ThirdAnime />
          <RandomAnime />
        </div>
      </div>
    </>
  );
}
