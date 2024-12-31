import React, {useState} from "react"
import "./header.css"
import { useAside } from "../../Helpers/Storages/storageAside.ts"
import { useStoreActiveMain } from "../../Helpers/Storages/StoreActiveMain.ts";
import logo from "../../Images/free-icon-book-6427616.png"

export const Header = () => {
    const {asideVisible, setAsideVisible, guideBtn, setGuideBtn, guideBtnSize, setGuideBtnSize} = useAside();
    const {isActive, setActive} = useStoreActiveMain()
    //const [guideBtn, setGuideBtn] = useState("≡");
    //const [guideBtnSize, setGuideBtnSize] = useState("3vh");
    const printHello = () =>{
        //console.log("hello")
        setGuideBtn(guideBtn === "≡" ? "◄" : "≡");
        setGuideBtnSize("3vh" === guideBtnSize ? "2vh" : "3vh");
        setAsideVisible(!asideVisible);
        //setMainMargin(mainMargin === 0 ? 15 : 0)
        setActive(!isActive);
    }
    return (<header>
        <div className="left-part-header">
            <button className="guide-button" style={{fontSize: guideBtnSize}} onClick={printHello}>{guideBtn}</button>
        </div>
        <div className="header-midle-part">
            <img className="logo" src={logo}/>
            <h1>DiLib</h1>
        </div>
        <div className="header-right-part"></div>
    </header>)
}