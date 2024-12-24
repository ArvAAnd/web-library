export type BookType = {
    id: number,
    bookTitle: string,
    author: string,
    yearPublished: number,
    genre: string,
    imageUrl: string
}
export type BookListType = BookType[]

export type User = {
    id: number,
    username: string,
    email: string,
    password: string,
    favorite: 1
}