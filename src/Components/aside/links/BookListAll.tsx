import React, { useState } from "react"
import {getBooks} from "../../../getBooks.ts"
import { BookListType } from "../../../types/Types.tsx"
import { Book } from "../../Book.tsx"




export const BookListAll = () => {
    const [bookList, setBookList] = useState<BookListType>(getBooks)
    console.log(bookList)
    
    return(
        <main>
            <h1>Your Books</h1>
            <selection className="main-category">
            {bookList.map(book => (
                <Book {...book}/>
            ))}
            </selection>
        </main>
    )
}