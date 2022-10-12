import React, { useEffect, useState } from "react";
import { animeStructure, randomAnimeStructure } from "../utils/animeStructure";
import { FirstAnime } from "./FirstAnime";
import { SecondAnime } from "./SecondAnime";
import { ThirdAnime } from "./ThirdAnime";
export function AnimeCard(): JSX.Element {
  // const [animeURLList, setAnimeURLList] = useState<string[]>();
  // // const [correspondingAnimeName, setCorrespondingAnimeName] = useState<string[]>()
  // const [randomAnimeURL, setRandomAnimeURL] = useState<any>();
  // const firstSeriesID = 1;
  // const secondSeriesID = 20;
  // const thirdSeriesID = 48453;

  // async function animeData() {
  //   const firstResponse = await fetch(
  //     `https://api.jikan.moe/v4/anime/${firstSeriesID}`
  //   );
  //   const secondResponse = await fetch(
  //     `https://api.jikan.moe/v4/anime/${secondSeriesID}`
  //   );
  //   const thirdResponse = await fetch(
  //     `https://api.jikan.moe/v4/anime/${thirdSeriesID}`
  //   );

  //   const firstAnime: animeStructure = await firstResponse.json(); //how do i change this from any?
  //   const secondAnime: animeStructure = await secondResponse.json(); //how do i change this from any?
  //   const thirdAnime: any = await thirdResponse.json(); //how do i change this from any?
  //   console.log(firstAnime, secondAnime, thirdAnime);
  //   const arrayOfAnime = [firstAnime, secondAnime, thirdAnime];
  //   console.log(arrayOfAnime);
  //   console.log(arrayOfAnime[0].url, "first anime");
  //   const animeLinks = arrayOfAnime.map((link): any => {
  //     return [
  //       link.data.url,
  //       link.data.images.jpg.image_url,
  //       link.data.title_english,
  //     ];
  //   }); //gives the image URL and the URL of the MAL page
  //   console.log(animeLinks, "here are the links");
  //   setAnimeURLList(animeLinks);

  //   // const animeLinks = animeBody.data.url((link : subSelectedInterface): any => {
  //   //   return (animeLinks);
  //   // })
  // }

  // async function randomAnime() {
  //   const response = await fetch("https://api.jikan.moe/v4/random/anime");
  //   // const generateAnime : animeStructure = response.json
  //   const randomAnimeJSON: randomAnimeStructure = await response.json();
  //   const generatedAnimeURL: randomAnimeStructure | string =
  //     randomAnimeJSON.data.url;
  //   console.log(response, "generated anime");
  //   setRandomAnimeURL(generatedAnimeURL);
  // }
  // useEffect(() => {
  //   animeData();
  //   randomAnime();
  // }, []);
  return (
    <> <FirstAnime /> <SecondAnime /> <ThirdAnime />
    </>
  );
}
