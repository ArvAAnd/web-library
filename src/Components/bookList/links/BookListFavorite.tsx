import React, { useState } from "react"
import {getBooks} from "../../../getBooks.ts"
import { BookListType } from "../../../types/Types.tsx"
import { Book } from "../../Book.tsx"




export const Favorite = () => {
    const [bookList, setBookList] = useState<BookListType>(getBooks)
    console.log(bookList)
    

    const uniqueGenres = [...new Set(bookList.map(book => book.genre))]
    console.log(uniqueGenres)
    return(
        <main>
            {/* <h1>Favorite</h1>
            <selection className="main-category">
            {bookList.filter(book => book.favorite === true).map(book => (
                <Book {...book}/>
            ))}
            </selection> */}
            <h1>В будущем тут будут хранится избранные книги</h1>
        </main>
    )
}