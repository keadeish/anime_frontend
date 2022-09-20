import React, { useEffect, useState } from "react";
import { animeObject, animeStructure, randomAnimeStructure } from "../utils/animeStructure";
import { subSelectedInterface } from "../utils/selectedInterface";
export function AnimeCard(): JSX.Element {
  const [animeURLList, setAnimeURLList] = useState<string[]>();
  // const [correspondingAnimeName, setCorrespondingAnimeName] = useState<string[]>()
  const [randomAnimeURL, setRandomAnimeURL] = useState<any>()
  const firstSeriesID = 1
  const secondSeriesID = 40154
  const thirdSeriesID = 43608
  
  async function animeData() {
    const firstResponse = await fetch(`https://api.jikan.moe/v4/anime/${firstSeriesID}`)
    const secondResponse = await fetch(`https://api.jikan.moe/v4/anime/${secondSeriesID}`)
    const thirdResponse = await fetch(`https://api.jikan.moe/v4/anime/${thirdSeriesID}`)
    
    const firstAnime: any = await firstResponse.json(); //how do i change this from any?
    const secondAnime: any = await secondResponse.json(); //how do i change this from any?
    const thirdAnime: any = await thirdResponse.json(); //how do i change this from any?
    console.log(firstAnime, secondAnime, thirdAnime)
    const arrayOfAnime = [firstAnime, secondAnime, thirdAnime]
    console.log(arrayOfAnime)
    console.log(arrayOfAnime[0].data.url, "first anime")
    const animeLinks = arrayOfAnime.map((link): any => {
     return [link.data.url, link.data.images.jpg.image_url]

    }
    ) //gives the image URL and the URL of the MAL page
    console.log(animeLinks, "here are the links")
    setAnimeURLList(animeLinks)
    
    // const animeLinks = animeBody.data.url((link : subSelectedInterface): any => {
    //   return (animeLinks);
    // })
  }

  async function randomAnime() {
    const response = await fetch("https://api.jikan.moe/v4/random/anime")
    // const generateAnime : animeStructure = response.json
    const randomAnimeJSON: randomAnimeStructure = await response.json()
    const generatedAnimeURL: randomAnimeStructure | string = randomAnimeJSON.data.url
    console.log(response, "generated anime")
    setRandomAnimeURL(generatedAnimeURL)
  }

  // async function animeData() {
  //   const response = await fetch("https://api.jikan.moe/v4/top/anime").then();
  //   const animeBody: animeStructure = await response.json();
  //   const animeLinks = animeBody.data.map((link): any => {
  //     return [link.images.jpg.image_url];
  //   });
  //   const animeTitle = animeBody.data.map((name): any => {
  //     return [name.title_english];
  //   });
  //   setCorrespondingAnimeName(animeTitle)
  //   setAnimeURLList(animeLinks);
  //   // console.log(animeLinks[20], "here is the 20th anime");
  //   // console.log(animeLinks);
  // }

  useEffect(() => {
    animeData();
    randomAnime()
  }, []);

  // console.log(animeData)

  return (
    <>
    <p>{animeURLList}</p>
      {animeURLList?.map((URL, mal_id) => {
        return (
        
          <div key={mal_id}>
            {mal_id > 21 && <><img key={mal_id} src={URL}></img> <p>anime</p></>}
            
          </div>
        );
      })}
      <form action={randomAnimeURL}>
    <input type="submit" value="Generate Random Anime!" />
</form>

      {/* <div>
        <img src={firstAnimeURL} alt="first anime"></img> <p>First Anime</p>
      </div>
      <div>
        <img src={secondAnimeURL} alt="second anime"></img> <p>Second Anime</p>
      </div>
      <div>
        <img src={thirdAnimeURL} alt="third anime"></img> <p>Third Anime</p>
      </div> */}
    </>
  );
}
