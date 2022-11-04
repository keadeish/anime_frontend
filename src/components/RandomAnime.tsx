import React, { useEffect, useState } from "react";
import { randomAnimeStructure } from "../utils/animeStructure";

export function RandomAnime(): JSX.Element {
    const [randomAnimeURL, setRandomAnimeURL] = useState<string>();
    async function randomAnime() {
        const response = await fetch("https://api.jikan.moe/v4/random/anime");
        // const generateAnime : animeStructure = response.json
        const randomAnimeJSON: randomAnimeStructure = await response.json();
        const generatedAnimeURL: randomAnimeStructure | string =
            randomAnimeJSON.data.url;
        console.log(response, "generated anime");
        setRandomAnimeURL(generatedAnimeURL);
    }
    useEffect(() => {
        randomAnime();
    }, []);
    return (
        <form action={randomAnimeURL} className="form">
            <input type="submit" value="Random Anime" className="form" />
        </form>
    );
}
