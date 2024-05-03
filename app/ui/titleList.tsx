'use client'
import Link from "next/link";
import { useRecoilState } from "recoil";
import { allAlbumListState } from "../atoms/albumListAtom";
import { FormEvent, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { redirect } from "next/navigation";
import { albumListType } from "../types/albumTypes";

export default function TitleList(){
    const [isClient, setIsClient] = useState(false)
    const [allAlbumList, setAllAlbumList] = useRecoilState(allAlbumListState);
    const [titleInput, setTitleInput] = useState("");
    
    const onInputSubmit = (e : FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const newId = uuidv4();
      setAllAlbumList(prev => {
        const _list = [...prev];
        prev.forEach((item, i) => {
          _list[i] = { ...item};
          _list[i].contents = [...item.contents]
        })
        _list.push({
          title: titleInput,
          id: newId,
          size: 3,
          contents: Array(64).fill(0).map(() => ({
                name: "",
                artist: "",
                url: "",
                image: [],
            })),
        })
        setTitleInput("");
        return _list;
    })}
    useEffect(() => {
        setIsClient(true)
      }, [])

    return isClient?
    <ul className="text-7xl gap-4">
        <li>
          <form onSubmit={onInputSubmit}>
              <input
              onChange={(e) => setTitleInput(e.target.value)}
              value={titleInput}
              className=" text-7xl bg-transparent outline-none caret-emerald-400 [-webkit-text-stroke:1.5px_black]"
              placeholder="add more /*-*\-"
              name="title"
              alt="생성할 앨범 목록의 제목 입력"
              />
          </form>
        </li>
        {
        [...allAlbumList]?.reverse().map((album : albumListType, key : number) =>  <li key={key}>
                <Link href={`/albumList/${album.id}`} className="[-webkit-text-stroke:1.5px_black]">{album.title}</Link>
            </li>
        )}
  </ul> : <ul></ul>
}
