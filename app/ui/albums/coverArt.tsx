import { albumType } from "@/app/types/albumTypes";

export interface coverArtProps{
    size : number,
    album: albumType,
    index: number,
}
const containerWidth = 650;
const widthClassName : {[key : string]: string} = {
    2: `w-[325px]`,
    3: `w-[216px]`,
    4: `w-[162px]`,
    5: `w-[127px]`,
    6: `w-[105px]`,
    7: `w-[86px]`,
    8: `w-[75px]`,

}
const heightClassName : {[key : string]: string} = {
    2: `h-[325px]`,
    3: `h-[216px]`,
    4: `h-[162px]`,
    5: `h-[127px]`,
    6: `h-[105px]`,
    7: `h-[86px]`,
    8: `h-[75px]`,
}

export default function CoverArt({size, album, index} : coverArtProps){
    return <div 
        className={`bg-cover bg-center hover:opacity-50 ${widthClassName[size]} ${heightClassName[size]} bg-slate-500 rounded-md`}
    >
    </div>
    
}