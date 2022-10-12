import React, { useEffect, useState } from "react";
import { singleAnime } from "../utils/animeInterface";
export function FirstAnime(): JSX.Element {
    const [anime, setAnime] = useState<singleAnime>();
    const seriesID = 1
    async function animeData() {
        const firstResponse = await fetch(
            `https://api.jikan.moe/v4/anime/${seriesID}`
        );
        const firstAnime: singleAnime = await firstResponse.json();
        setAnime(firstAnime)
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