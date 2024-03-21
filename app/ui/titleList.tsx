'use client'
import Link from "next/link";
import { useRecoilState } from "recoil";
import { albumListState } from "../atoms/albumListAtom";
import { FormEvent, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function TitleList(){
    const [isClient, setIsClient] = useState(false)
    const [albumList, setAlbumList] = useRecoilState(albumListState);
    const [titleInput, setTitleInput] = useState("");
    
    const onInputSubmit = (e : FormEvent<HTMLFormElement>) => {
      console.log(e.currentTarget);
      e.preventDefault();
      setAlbumList(prev => {
        const _list = [...prev];
        prev.forEach((item, i) => {
          _list[i] = { ...item};
          _list[i].contents = [...item.contents]
        })
        _list.push({
          title: titleInput,
          id: uuidv4(),
          contents: Array(64).fill(0).map(() => ({
              title: "",
                artist: "",
                image: [],
            })),
        })
        console.log(_list);
        setTitleInput("");
        return _list
      })
    }
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
        />
      </form>
    </li>
    {
      albumList?.map((album : any, key : number) =>  <li key={key}>
            <Link href='/' className="[-webkit-text-stroke:1.5px_black]">{album?.title}</Link>
        </li>
      ) 
    }
  </ul> : <ul></ul>
}
