import React from "react"
import { Aside } from "../aside/BookListAside.tsx"
import "./BookList.css"
import { Router } from "../../Router.tsx"
import { useStoreActiveMain } from "../../Helpers/Storages/StoreActiveMain.ts"
import { useAside } from "../../Helpers/Storages/storageAside.ts"

export const BookList = () => {
    const {isActive, setActive} = useStoreActiveMain()
    const { asideVisible, setAsideVisible, setGuideBtn, guideBtn, guideBtnSize, setGuideBtnSize} = useAside()
    const changeAside = () => {
        setGuideBtn(guideBtn === "≡" ? "◄" : "≡");
        setGuideBtnSize("3vh" === guideBtnSize ? "2vh" : "3vh");
        setAsideVisible(!asideVisible);
        setActive(!isActive)
    }
    return (<div className="content">
    
        <Aside />
        {/* <div className={isActive ? "active" : "inactive"} > */}
        <div className="main-hider" style={{ display: isActive ? "none" : "flex" }} onClick={changeAside}></div>
        <div>
            <Router />
        </div>
    </div>
    )
}
