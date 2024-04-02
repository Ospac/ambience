import { allAlbumListState } from "@/app/atoms/albumListAtom";
import { Dispatch, SetStateAction } from "react";
import { useRecoilState } from "recoil";
import * as icons from '@/public/icons/icon';

interface ButtonsProps{
    pageId: string,
    isSearch : boolean,
    setIsSearch: Dispatch<SetStateAction<boolean>>
}

export function Buttons({ pageId, isSearch, setIsSearch } : ButtonsProps){
    const [allAlbumList, setAllAlbumlist] = useRecoilState(allAlbumListState);

    const onExpand = () => {
        setAllAlbumlist(prev => {
            const _list = [...prev];
            let findIndex = 0;
            prev.forEach((item, i) => {
                _list[i] = { ...item };
                _list[i].contents = [...item.contents];
                if(_list[i].id  === pageId) findIndex = i;
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
                if(_list[i].id  === pageId) findIndex = i;
            })
            if( _list[findIndex].size > 2) _list[findIndex].size -= 1;             
            return _list;
        })
        
    }
    const onShare = () => {

    }
    const onSearch = () => {
        setIsSearch((prev) => !prev);
    }
    return <ul className="flex flex-row justify-between box-sizing-border">
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
}