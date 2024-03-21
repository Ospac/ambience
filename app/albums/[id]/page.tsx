'use client'
import { albumsPageSettingState } from "@/app/atoms/albumListAtom";
import Topster from "@/app/ui/albums/topster";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";

export default function TopsterPage({ params } : { params : { id : string }}){
    const id = params.id;
    const [isClient, setIsClient] = useState(false)
    const [albumsPageSetting, setAlbumsPageSetting] = useRecoilState(albumsPageSettingState);
    useEffect(() => {
        setIsClient(true)
    }, []);

    return isClient? <Topster index={Number(id)} size={albumsPageSetting.size}/> : <></>
}