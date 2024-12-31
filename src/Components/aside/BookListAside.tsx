import React from "react"
import { Link } from "react-router-dom"
import "./BookListAside.css"
import { useAside } from "../../Helpers/Storages/storageAside.ts"
import { routes } from "../../Router.tsx"
import { useStoreActiveMain } from "../../Helpers/Storages/StoreActiveMain.ts"

export const Aside = () => {
    const {isActive, setActive} = useStoreActiveMain()
        const { asideVisible, setAsideVisible, setGuideBtn, guideBtn, guideBtnSize, setGuideBtnSize} = useAside()
        const changeAside = () => {
            setGuideBtn(guideBtn === "≡" ? "◄" : "≡");
            setGuideBtnSize("3vh" === guideBtnSize ? "2vh" : "3vh");
            setAsideVisible(!asideVisible);
            setActive(!isActive)
        }
    return (
        <aside style={{ display: asideVisible ? "flex" : "none" }}>
            
            <Link className="link" to={routes.default} onClick={changeAside}>All Books</Link>
            <Link className="link" to={routes.favorite} onClick={changeAside}>Favorite</Link>
            <Link className="link" to={routes.genres} onClick={changeAside}>Genres</Link>
            
        </aside>
    )
}