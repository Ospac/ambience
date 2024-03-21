'use client'
import { albumListState, albumsPageSettingState } from "@/app/atoms/albumListAtom";
import { useRecoilState } from "recoil"
import CoverArt from "./coverArt";
interface TopsterProps{
    size : number,
    index : number,
}
export default function Topster({size, index} : TopsterProps){
    const [albumList, setAlbumlist] = useRecoilState(albumListState);
    return <div
        className=" flex flex-row flex-wrap gap-1 w-[650px] h-[600px]"
    >{
        albumList[index]?.contents.map((album, albumIndex) => 
        <CoverArt key={albumIndex} size={size} album={album} index={albumIndex}/>
    )}
    </div>
}