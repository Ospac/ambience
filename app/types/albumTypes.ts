export interface albumType {
    name: string,
    artist: string,
    url: string,
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
    isTopsterMode: boolean,
    isListMode : boolean,
}