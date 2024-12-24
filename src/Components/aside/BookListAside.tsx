import React from "react"
import { Link } from "react-router-dom"
import "./BookListAside.css"

export const Aside = () => {
    return (
        <aside>
            
            <Link className="link" to="/">All Books</Link>
            <Link className="link" to="/favorite">Favorite</Link>
            <Link className="link" to="/genres">Genres</Link>
            
        </aside>
    )
}