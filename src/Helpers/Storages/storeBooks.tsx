import {create} from "zustand"
import { BookFromType } from "../../types/Types"

type State = {
    bookList: BookFromType[]
}

type Actions = {
    setBookList: (bookList: BookFromType[]) => void
}

export const useStoreBooks = create<State & Actions>((set) => ({
    bookList: [],
    setBookList: (bookList: BookFromType[]) => set({ bookList }),
}))