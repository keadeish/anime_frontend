import React, { useEffect, useState } from "react";
import { animeStructure, randomAnimeStructure } from "../utils/animeStructure";
import menacingGIF from "../utils/assets/jojo-menacing.gif";
export function AnimeCard(): JSX.Element {
  const [animeURLList, setAnimeURLList] = useState<string[]>();
  // const [correspondingAnimeName, setCorrespondingAnimeName] = useState<string[]>()
  const [randomAnimeURL, setRandomAnimeURL] = useState<any>();
  const firstSeriesID = 1;
  const secondSeriesID = 20;
  const thirdSeriesID = 48453;
  async function animeData() {
    const firstResponse = await fetch(
      `https://api.jikan.moe/v4/anime/${firstSeriesID}`
    );
    const secondResponse = await fetch(
      `https://api.jikan.moe/v4/anime/${secondSeriesID}`
    );
    const thirdResponse = await fetch(
      `https://api.jikan.moe/v4/anime/${thirdSeriesID}`
    );

    const firstAnime: animeStructure = await firstResponse.json(); //how do i change this from any?
    const secondAnime: animeStructure = await secondResponse.json(); //how do i change this from any?
    const thirdAnime: any = await thirdResponse.json(); //how do i change this from any?
    console.log(firstAnime, secondAnime, thirdAnime);
    const arrayOfAnime = [firstAnime, secondAnime, thirdAnime];
    console.log(arrayOfAnime);
    console.log(arrayOfAnime[0].url, "first anime");
    const animeLinks = arrayOfAnime.map((link): any => {
      return [
        link.data.url,
        link.data.images.jpg.image_url,
        link.data.title_english,
        link.data.synopsis,
      ];
    }); //gives the image URL and the URL of the MAL page
    console.log(animeLinks, "here are the links");
    setAnimeURLList(animeLinks);
  }
  async function randomAnime() {
    const response = await fetch("https://api.jikan.moe/v4/random/anime");
    const randomAnimeJSON: randomAnimeStructure = await response.json();
    const generatedAnimeURL: randomAnimeStructure | string =
      randomAnimeJSON.data.url;
    console.log(response, "generated anime");
    setRandomAnimeURL(generatedAnimeURL);
  }
  useEffect(() => {
    animeData();
    randomAnime();
  }, []);
  return (
    <>
      <header className="pageHeader">
        <h3 className="headTitle">Psychician</h3>
      </header>
      <body className="body">
        {animeURLList?.map((URL) => {
          return (
            <div className="animeCard" key={URL[2]}>
              <p className="animeName" key={URL[2]}>
                {URL[2]}
              </p>
              <img
                className="animeImage"
                key={URL[1]}
                src={URL[1]}
                alt=""
              ></img>
              <p className="animeSynopsis">{URL[3]}</p>
            </div>
          );
        })}
        <form action={randomAnimeURL}>
          <input type="submit" value="Generate Random Anime!" />
        </form>
        <img src={menacingGIF}></img>
      </body>
    </>
  );
}
// onMouseOver={(() => {<img src={menacingGIF}></img>})}
