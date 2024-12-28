import React from "react"
import { Aside } from "../aside/BookListAside.tsx"
import "./BookList.css"
import { Router } from "../../Router.tsx"
import { useStoreActiveMain } from "../../Helpers/Storages/StoreActiveMain.tsx"

export const BookList = () => {
    const {isActive, setActive} = useStoreActiveMain()
    return (<div className="content">
    
        <Aside />
        <div className={isActive ? "active" : "inactive"} >
            <Router />
        </div>
    </div>
    )
}
