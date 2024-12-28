import {create} from "zustand"

type State = {
    isActive: boolean
}

type Actions = {
    setActive: (isActive: boolean) => void
}

export const useStoreActiveMain = create<State & Actions>((set) => ({
    isActive: true,
    setActive: (isActive: boolean) => set({ isActive }),
}))