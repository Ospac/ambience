import { albumType } from "@/app/types/albumTypes";

export interface coverArtProps{
    size : number,
    album: albumType,
    index: number,
}
export default function CoverArt({size, album, index} : coverArtProps){
    return <div 
        className="bg-cover bg-center hover:opacity-50 w-9 h-9 bg-slate-500 bg-opacity-10"
    >
    </div>
    
}