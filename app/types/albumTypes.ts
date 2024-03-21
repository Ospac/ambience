export interface albumType {
    title: string,
    artist: string,
    image: {
        [index : number] : {
            "#text": string,
            size : string
        }
    },
}
export interface albumListType {
    title: string,
    id: string,
    contents: albumType[],
}

export interface albumsPageSettingType{
    size: number,
    topsterId: number,
    isSearchMode: boolean,
    isTopsterMode: boolean,
    isListMode : boolean,
}