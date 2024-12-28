import React, {useState} from "react"
import "./App.css"
import { Header } from "./Components/header/Header.tsx"
import { BookList } from "./Components/bookList/BookList.tsx"
import { Aside } from "./Components/aside/BookListAside.tsx"

export const App = () =>{
    return (<div className="app">
    <Header />
    <BookList/>
    </div>
)
}