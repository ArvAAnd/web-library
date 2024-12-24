import React, {useState} from "react"
import "./App.css"
import { Header } from "./Components/header/Header.tsx"
import { BookList } from "./Components/bookList/BookList.tsx"

export const App = () =>{
    return (<>
    <Header />
    <BookList/>
    </>
)
}