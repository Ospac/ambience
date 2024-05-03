import { useRecoilState } from "recoil"
import CoverArt from "./coverArt";
import { albumListType } from "@/app/types/albumTypes";
import { albumsPageSettingState } from "@/app/atoms/albumListAtom";
interface TopsterProps{
    topster : albumListType
}
export default function Topster({ topster } : TopsterProps){
    const size = topster.size;
    const [albumPageSetting, setAlbumPageSetting] = useRecoilState(albumsPageSettingState);
    return <div
        className="flex flex-row flex-wrap justify-start gap-1  h-full w-[660px]"
    >{
        topster?.contents.map((album, albumIndex) => {
            if(albumIndex >= size * size) return null;
            return <CoverArt key={albumIndex} size={size} album={album} index={albumIndex}/>
        }
    )}
    </div>
}