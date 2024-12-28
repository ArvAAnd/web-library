import {create} from "zustand"

type State = {
    asideVisible: boolean
    mainMargin: number
}

type Actions = {
    setAsideVisible: (asideVisible: boolean) => void
    setMainMargin: (mainMargin: number) => void
}

export const useAside = create<State & Actions>((set) => ({
    asideVisible: false,
    mainMargin: 0,
    setAsideVisible: (asideVisible: boolean) => set({ asideVisible }),
    setMainMargin: (mainMargin: number) => set({ mainMargin }),
}))