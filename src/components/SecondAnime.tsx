import React, { useEffect, useState } from "react";
import { singleAnime } from "../utils/animeInterface";
export function SecondAnime(): JSX.Element {
    const [anime, setAnime] = useState<singleAnime>();
    const seriesID = 20
    async function animeData() {
        const firstResponse = await fetch(
            `https://api.jikan.moe/v4/anime/${seriesID}`
        );
        const secondAnime: singleAnime = await firstResponse.json();
        setAnime(secondAnime)
    }

    useEffect(() => {
        animeData();
    }, []);


    return (
        <>
            <p className="animeName" >{anime?.data.title_english}</p>
            <img className="animeImage" src={anime?.data.images.jpg.image_url} alt=""></img>
        </>

    )

}