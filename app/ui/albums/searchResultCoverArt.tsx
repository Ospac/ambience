'use client'
import { useState } from "react";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import { albumType } from "../../types/albumTypes";
import Image from "next/image";
import SearchFlippedCoverArt from "./searchFlippedCoverArt";

export function SearchResultCoverArt({album} : {album : albumType}){
    const [isFlipped, setIsFlipped] = useState(false);
    const { width : windowWidth, height : windowHeight } = useWindowDimensions();
    const albumImgSrc = album?.image[2]["#text"] || album?.image[1]["#text"] || album?.image[0]["#text"] || '';
    const onClick = () => {
        setIsFlipped(prev => !prev);
    }
    return <div 
            className="rounded-md"
        >
        {
            // 이미지 없는 Box의 경우, FlippedCoverArt를 띄우기
            albumImgSrc === ''?
            <SearchFlippedCoverArt album={album} onClick={() => {}} width={windowWidth}/>
            :
            isFlipped?
            <SearchFlippedCoverArt album={album}  onClick={onClick} width={windowWidth}/>
            :
            <Image 
                className=""
                onClick={onClick} 
                width={windowWidth / 8} 
                height={windowWidth / 8 } 
                alt={album?.name || ''} 
                src={albumImgSrc} />
        }
    </div>
}