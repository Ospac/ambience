import { allAlbumListState, albumsPageSettingState } from "@/app/atoms/albumListAtom";
import { useRecoilState } from "recoil"
import CoverArt from "./coverArt";
import { albumListType } from "@/app/types/albumTypes";
interface TopsterProps{
    topster : albumListType
}
export default function Topster({ topster } : TopsterProps){
    const size = topster.size;
    return <div
        className="flex flex-row flex-wrap justify-center gap-1 w-[660px] h-[660px]"
    >{
        topster?.contents.map((album, albumIndex) => {
            if(albumIndex >= size * size) return null;
            return <CoverArt key={albumIndex} size={size} album={album} index={albumIndex}/>
        }
    )}
    </div>
}