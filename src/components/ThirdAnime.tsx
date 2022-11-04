import React, { useEffect, useState } from "react";
import { singleAnime } from "../utils/animeInterface";
export function ThirdAnime(): JSX.Element {
  const [anime, setAnime] = useState<singleAnime>();
  const seriesID = 2402;
  async function animeData() {
    const firstResponse = await fetch(
      `https://api.jikan.moe/v4/anime/${seriesID}`
    );
    const thirdAnime: singleAnime = await firstResponse.json();
    setAnime(thirdAnime);
  }

  useEffect(() => {
    animeData();
  }, []);

  return (
    <>
      <h3 className="animeName">
        <a href={anime?.data.url}>
          {anime?.data.title_english} {anime?.data.year}
        </a>
      </h3>
      <p className="text">⭐⭐⭐⭐⭐</p>
      <img
        className="animeImage"
        src={anime?.data.images.jpg.image_url}
        alt=""
      ></img>
      <span className="text">
        SYNOPSIS SYNOPSIS SYNOPSIS SYNOPSIS SYNOPSIS SYNOPSIS SYNOPSIS SYNOPSIS
        SYNOPSIS SYNOPSIS SYNOPSIS SYNOPSIS
      </span>
    </>
  );
}
