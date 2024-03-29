'use client'
import { allAlbumListState, albumsPageSettingState } from "@/app/atoms/albumListAtom";
import Topster from "@/app/ui/albums/topster";
import { notFound } from "next/navigation";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
// import HideIcon from "@/public/icons/hide_FILL0_wght700_GRAD0_opsz24.svg"
// import ExpandIcon from "@/public/icons/expand_content_FILL0_wght700_GRAD0_opsz24.svg"
// import SearchIcon from "@/public/icons/search_FILL0_wght700_GRAD0_opsz24.svg"
// import ShareIcon from "@/public/icons/share_FILL0_wght700_GRAD0_opsz24.svg"
import * as icons from '@/public/icons/icon';


export default function TopsterPage({ params } : { params : { id : string }}){
    const id = params.id;
    const [isClient, setIsClient] = useState(false)
    const [albumsPageSetting, setAlbumsPageSetting] = useRecoilState(albumsPageSettingState);
    const [allAlbumList, setAllAlbumlist] = useRecoilState(allAlbumListState);
    const albumList = allAlbumList.filter((list) => list.id === id);
    const thisTopster = albumList[0];
    const idSearchLength = albumList.length
    const onExpand = () => {
        setAllAlbumlist(prev => {
            const _list = [...prev];
            let findIndex = 0;
            prev.forEach((item, i) => {
                _list[i] = { ...item };
                _list[i].contents = [...item.contents];
                if(_list[i].id  === id) findIndex = i;
            })
            if( _list[findIndex].size < 8) _list[findIndex].size += 1;             
            return _list;
        })
    }
    const onHide = () => {
        setAllAlbumlist(prev => {
            const _list = [...prev];
            let findIndex = 0;
            prev.forEach((item, i) => {
                _list[i] = { ...item };
                _list[i].contents = [...item.contents];
                if(_list[i].id  === id) findIndex = i;
            })
            if( _list[findIndex].size > 2) _list[findIndex].size -= 1;             
            return _list;
        })
        
    }
    const onShare = () => {

    }
    const onSearch = () => {

    }
    const isValidId = () => {
        if(!idSearchLength){
            notFound();
        }
    }

    useEffect(() => {
        setIsClient(true)
        isValidId();
    }, []);
    
    return isClient? <div className="flex flex-col justify-center items-center gap-8">
        <ul className="flex flex-row justify-between box-sizing-border">
            {/* <li className=" border-slate-500 border-[0.5px] rounded-r-[20px] bg-[#A4A4A4] h-[19px]">
            </li> */}
            <li className="flex justify-center items-center border-slate-500 border-[0.5px] rounded-bl-[20px] border-l-[0.1px_solid_#5B5A5A] bg-[#A4A4A4] h-20 w-20">
                <button onClick={onExpand}><icons.Expand width="50" /></button>
            </li>
            <li className="flex justify-center items-center border-slate-500 border-[0.5px] rounded-l-[20px] border-l-[0.1px_solid_#5B5A5A] bg-[#A4A4A4] h-20 w-20">
                <button onClick={onHide}><icons.Hide width="50" /></button>
            </li>
            <li className="flex justify-center items-center border-slate-500 border-[0.5px] rounded-tr-[20px] rounded-bl-[20px] border-l-[0.1px_solid_#5B5A5A] bg-[#A4A4A4] h-20 w-20">
                <button onClick={onShare}><icons.Share width="50" /></button>
            </li>
            <li className="flex justify-center items-center border-slate-500 border-[0.5px] rounded-l-[20px] border-l-[0.1px_solid_#5B5A5A] bg-[#A4A4A4] h-20 w-20">
                <button onClick={onSearch}><icons.Search width="50" /></button>
            </li>
        </ul>
        <Topster topster={thisTopster}/>
    </div> : <></>
}