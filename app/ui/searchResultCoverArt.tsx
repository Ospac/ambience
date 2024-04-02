import useWindowDimensions from "../hooks/useWindowDimensions";
import { albumType } from "../types/albumTypes";
import Image from "next/image";

export function SearchResultCoverArt({album} : {album : albumType}){
    const { width : windowWidth, height : windowHeight } = useWindowDimensions();
    const albumImgSrc = album?.image[2]["#text"] || album?.image[1]["#text"] || album?.image[0]["#text"];
    console.log(windowWidth);
    return <div>
        <Image width={windowWidth / 8} height={windowWidth / 8 } alt={album?.title} src={albumImgSrc} />
    </div>
}