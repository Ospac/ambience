import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";
import { albumListType, albumsPageSettingType } from "../types/albumTypes";

const { persistAtom } = recoilPersist();

export const allAlbumListState = atom<albumListType[]>({
    key: "albumList",
    effects_UNSTABLE: [persistAtom],
    default: []
})
export const albumsPageSettingState = atom<albumsPageSettingType>({
    key: "albumsPageSetting",
    effects_UNSTABLE: [persistAtom],
    default:{
      topsterId: 0,
      isSearchMode: false,
      isTopsterMode: true,
      isListMode: false,
    }
  })