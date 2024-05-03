"use client"
import { useSearchParams } from "next/navigation";
import { Dispatch, FormEvent, SetStateAction, useEffect, useState } from "react";
import { useDebouncedCallback } from 'use-debounce';
import { useKeyEscClose } from "../../hooks/useKeyClose";
import { albumType } from "../../types/albumTypes";
import { getAlbums } from "../../apis";
import { SearchResultCoverArt } from "./searchResultCoverArt";

interface SearchProps{
  isSearch : boolean,
  setIsSearch: Dispatch<SetStateAction<boolean>>
}
export default function Search({ isSearch, setIsSearch } : SearchProps){
  const searchParams = useSearchParams();
  const [searchAlbumsData, setSearchAlbumsData] = useState<albumType[]>()
  const submitHandler = (e : FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  }
  const handleSearch = useDebouncedCallback(async (term : string) => {
    const data = await getAlbums(term, 1);
    setSearchAlbumsData(data.data);
    console.log(data.data);
  }, 300);
  const onClickExitButton = () => {
    setIsSearch(prev => !prev);
  }
  useKeyEscClose(onClickExitButton);

  return <div className="absolute top-0 left-0 min-w-full min-h-full flex flex-col">
    <form className="min-w-full h-full" onSubmit={submitHandler}>
      <input 
          placeholder="Search" 
          className="min-w-full text-7xl outline-none p-5 backdrop-blur-lg bg-lime-400 bg-opacity-10"
          onChange={(e) => handleSearch(e.target.value)}
      />
    </form>
    <div className="min-w-full h-full flex-grow bg-emerald-800 bg-opacity-50 
    flex flex-row flex-wrap justify-start items-start content-start">
      {
        searchAlbumsData?.map((album, index) => {
          // 빈 데이터 제거
          if(album.name === '(null)') return null;
          return <SearchResultCoverArt key={index} album={album}/>
        })
      }
    </div>
    <button className="absolute top-2 right-2" onClick={onClickExitButton}>X</button>
  </div>
}   