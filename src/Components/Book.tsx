import React from "react"
import { BookFromType, BookType } from "../types/Types.tsx"
import { useNavigate } from "react-router-dom"
import { routes } from "../Router.tsx"

type Props = {
    book: BookFromType
}

export const Book:React.FC<Props> = ({book}) => {
    const nav = useNavigate()
    return <article className="main-element main-element-book" onClick={() => nav(`${routes.bookPage}/${book.id}/page/1`)}>
                            <h1>{book.title}</h1>
                            {/* <h4>{book.genre}</h4> */}
                            <img className="main-element-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqAx8VDEoe5NiHMEZwJOS3uvGzm7JJpMUD2sETE85dpFP3IufGGdS26OCQsnQL0MoxDmA&usqp=CAU" alt="" />
                        </article>
}