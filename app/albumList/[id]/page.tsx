'use client'
import { allAlbumListState, albumsPageSettingState } from "@/app/atoms/albumListAtom";
import Topster from "@/app/ui/albums/topster";
import { notFound } from "next/navigation";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import Search from "@/app/ui/albums/search";
import { Buttons } from "@/app/ui/albums/buttons";


export default function TopsterPage({ params } : { params : { id : string }}){
    const pageId = params.id;
    const [isClient, setIsClient] = useState(false)
    const [allAlbumList, setAllAlbumlist] = useRecoilState(allAlbumListState);
    const [isSearch, setIsSearch] = useState(false);

    const albumList = allAlbumList.filter((list) => list.id === pageId);
    const thisTopster = albumList[0];
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
    
    return isClient? 
    <div className="flex flex-col justify-center items-center gap-8">
        { isSearch && <Search isSearch={isSearch} setIsSearch={setIsSearch} />}
        <Buttons pageId={pageId} isSearch={isSearch} setIsSearch={setIsSearch} />
        <Topster topster={thisTopster}/>
    </div> : <></>
}