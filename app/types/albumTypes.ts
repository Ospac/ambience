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
    size: number,
    contents: albumType[],
}

export interface albumsPageSettingType{
    topsterId: number,
    isSearchMode: boolean,
    isTopsterMode: boolean,
    isListMode : boolean,
}