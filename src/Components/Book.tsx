import React from "react"
import { BookFromType, BookType } from "../types/Types.tsx"
import { useNavigate } from "react-router-dom"
import { routes } from "../Router.tsx"

export const Book = (book: BookFromType) => {
    const nav = useNavigate()
    return <article className="main-element main-element-book" key={book.id} onClick={() => nav(`${routes.bookPage}/${book.id}`)}>
                            <h1>{book.title}</h1>
                            {/* <h4>{book.genre}</h4> */}
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqAx8VDEoe5NiHMEZwJOS3uvGzm7JJpMUD2sETE85dpFP3IufGGdS26OCQsnQL0MoxDmA&usqp=CAU" alt="" />
                        </article>
}