import React from "react"
import { BookType } from "../types/Types.tsx"
import { useNavigate } from "react-router-dom"
import { routes } from "../Router.tsx"

export const Book = (book: BookType) => {
    const nav = useNavigate()
    return <article className="main-element" key={book.id} onClick={() => nav(`${routes.bookPage}/${book.id}`)}>
                            <h1>{book.bookTitle}</h1>
                            <img src={book.imageUrl} alt={book.bookTitle} />
                            <h2>{book.author}</h2>
                            <h3>{book.yearPublished}</h3>
                            <h4>{book.genre}</h4>
                        </article>
}