import React from "react"
import { Aside } from "../aside/BookListAside.tsx"
import "./BookList.css"
import { Router } from "../../Router.tsx"

export const BookList = () => {
    return (<>
    <Aside />
    <Router />
    </>
    )
}