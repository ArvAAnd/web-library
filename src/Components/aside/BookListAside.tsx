import React from "react"
import { Link } from "react-router-dom"
import "./BookListAside.css"
import { useAside } from "../../Helpers/Storages/storageAside.tsx"

export const Aside = () => {
    const { asideVisible } = useAside()
    return (
        <aside style={{ display: asideVisible ? "flex" : "none" }}>
            
            <Link className="link" to="/">All Books</Link>
            <Link className="link" to="/favorite">Favorite</Link>
            <Link className="link" to="/genres">Genres</Link>
            
        </aside>
    )
}