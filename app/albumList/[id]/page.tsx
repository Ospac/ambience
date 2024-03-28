'use client'
import { allAlbumListState, albumsPageSettingState } from "@/app/atoms/albumListAtom";
import Topster from "@/app/ui/albums/topster";
import { notFound } from "next/navigation";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";

export default function TopsterPage({ params } : { params : { id : string }}){
    const id = params.id;
    const [isClient, setIsClient] = useState(false)
    const [albumsPageSetting, setAlbumsPageSetting] = useRecoilState(albumsPageSettingState);
    const [allAlbumList, setAllAlbumlist] = useRecoilState(allAlbumListState);
    const albumList = allAlbumList.filter((list) => list.id === id);
    const idSearchLength = albumList.length

    const isValidId = () => {
        if(!idSearchLength){
            notFound();
        }
    }
    useEffect(() => {
        setIsClient(true)
        isValidId();
    }, []);
     
    return isClient? <div className="flex flex-col justify-center items-center gap-5">
        <ul className="w-[350px] h-20 bg-slate-500 rounded-md">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
        <Topster albumList={albumList[0]}/>
    </div> : <></>
}