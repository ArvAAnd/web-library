import React from "react"
import { Link } from "react-router-dom"
import "./BookListAside.css"
import { useAside } from "../../Helpers/Storages/storageAside.ts"
import { routes } from "../../Router.tsx"

export const Aside = () => {
    const { asideVisible } = useAside()
    return (
        <aside style={{ display: asideVisible ? "flex" : "none" }}>
            
            <Link className="link" to={routes.default}>All Books</Link>
            <Link className="link" to={routes.favorite}>Favorite</Link>
            <Link className="link" to={routes.genres}>Genres</Link>
            
        </aside>
    )
}