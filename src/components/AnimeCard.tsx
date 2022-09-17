import React, { useEffect, useState } from "react";
import { animeStructure } from "../utils/animeStructure";
export function AnimeCard(): JSX.Element {
  const [firstAnimeURL, setFirstAnimeURL] = useState("");
  const [secondAnimeURL, setSecondAnimeURL] = useState("");
  const [thirdAnimeURL, setThirdAnimeURL] = useState("");

  async function animeData() {
    const response = await fetch("https://api.jikan.moe/v4/top/anime").then();
    const animeBody: animeStructure = await response.json();
    const firstAnime = animeBody.data[0].images.jpg.image_url;
    const secondAnime = animeBody.data[0 + 1].images.jpg.image_url;
    const thirdAnime = animeBody.data[0 + 2].images.jpg.image_url;
    console.log(animeBody);
    console.log(firstAnime);
    console.log(secondAnime);
    console.log(thirdAnime);
    console.log(
      animeBody.data[0 + 1].images.jpg.image_url,
      "here is the image .jpg url"
    ); //gets #2 URL
    console.log(
      animeBody.data[0].images.jpg.image_url,
      "here is the second url"
    ); //gets #1 URL
    setFirstAnimeURL(firstAnime);
    setSecondAnimeURL(secondAnime);
    setThirdAnimeURL(thirdAnime);
  }

  useEffect(() => {
    animeData();
  }, []);

  // console.log(animeData)

  return (
    <>
      <div>
        <img src={firstAnimeURL} alt="first anime"></img> <p>First Anime</p>
      </div>
      <div>
        <img src={secondAnimeURL} alt="second anime"></img> <p>Second Anime</p>
      </div>
      <div>
        <img src={thirdAnimeURL} alt="third anime"></img> <p>Third Anime</p>
      </div>
    </>
  );
}
