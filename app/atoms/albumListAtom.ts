import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();
interface albumType {
    title: string,
    artist: string,
    image: {
        [index : number] : {
            "#text": string,
            szie : string
        }
    },
}
interface albumListType {
    title: string,
    id: string,
    contents: albumType[],
}
export const albumListState = atom<albumListType[]>({
    key: "albumList",
    effects_UNSTABLE: [persistAtom],
    default: []
})