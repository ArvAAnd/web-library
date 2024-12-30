import React, {useState} from "react"
import "./header.css"
import { useAside } from "../../Helpers/Storages/storageAside.ts"
import { useStoreActiveMain } from "../../Helpers/Storages/StoreActiveMain.ts";

export const Header = () => {
    const {asideVisible, setAsideVisible, mainMargin, setMainMargin} = useAside();
    const {isActive, setActive} = useStoreActiveMain()
    const [guideBtn, setGuideBtn] = useState("≡");
    const [guideBtnSize, setGuideBtnSize] = useState("3vh");
    const printHello = () =>{
        //console.log("hello")
        setGuideBtn(guideBtn === "≡" ? "◄" : "≡");
        setGuideBtnSize("3vh" === guideBtnSize ? "2vh" : "3vh");
        setAsideVisible(!asideVisible);
        setMainMargin(mainMargin === 0 ? 15 : 0)
        setActive(!isActive);
    }
    return (<header>
        <div className="left-part-header">
            <button className="guide-button" style={{fontSize: guideBtnSize}} onClick={printHello}>{guideBtn}</button>
        </div>
        <div className="header-midle-part">
            <p></p>
            <img className="logo" src="data:image/jpeg;base64,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"/>
            <h1>DiLib</h1>
        </div>
        <div className="header-right-part"></div>
    </header>)
}