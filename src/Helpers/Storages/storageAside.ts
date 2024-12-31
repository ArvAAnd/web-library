import {create} from "zustand"

type State = {
    asideVisible: boolean
    guideBtn: string
    guideBtnSize: string
}

type Actions = {
    setAsideVisible: (asideVisible: boolean) => void
    setGuideBtn: (guideBtn: string) => void
    setGuideBtnSize: (guideBtnSize: string) => void
}

export const useAside = create<State & Actions>((set) => ({
    asideVisible: false,
    guideBtn: "≡",
    guideBtnSize: "3vh",
    setAsideVisible: (asideVisible: boolean) => set({ asideVisible }),
    setGuideBtn: (guideBtn: string) => set({ guideBtn }),
    setGuideBtnSize: (guideBtnSize: string) => set({ guideBtnSize })
}))