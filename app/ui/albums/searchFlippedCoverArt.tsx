import { albumType } from "@/app/types/albumTypes";

interface SearchFlippedCoverArtProps{
    onClick : () => void,
    album : albumType,
    width : number
}
export default function SearchFlippedCoverArt({onClick, album, width } : SearchFlippedCoverArtProps) {
    return <div 
        onClick={onClick} 
        className="p-2 flex flex-col justify-between bg-cover bg-center" 
        style={{
            width : width / 8, 
            height : width / 8,
            // backgroundImage: `url(${albumImgSrc})`,
            
        }}
    >
        <div className="font-bold text-xs">{album.name}</div>
        <div className="text-xs text-right">{album.artist}</div>
    </div>
}