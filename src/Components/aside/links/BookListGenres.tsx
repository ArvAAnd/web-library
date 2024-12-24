import React, { useState } from "react"
import {getBooks} from "../../../getBooks.ts"
import { BookListType } from "../../../types/Types.tsx"
import { Book } from "../../Book.tsx"


export const Genres = () => {
    const [bookList, setBookList] = useState<BookListType>(getBooks)
    console.log(bookList)
    const uniqueGenres = [...new Set(bookList.map(book => book.genre))]
    console.log(uniqueGenres)
    return(
        <main>
            {uniqueGenres.map(genre => (
                <div key={genre} >
                    <h1>{genre}</h1>
                    <selection className="main-category">
                    {bookList.filter(book => book.genre === genre).map(book => (
                        <Book {...book}/>
                    ))}
                    </selection>
                </div>
            ))}
        </main>
    )
}