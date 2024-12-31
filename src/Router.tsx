import { Route, BrowserRouter, Routes } from "react-router-dom";
import React from "react";
import { Favorite } from "./Components/bookList/links/BookListFavorite.tsx";
import { Genres } from "./Components/bookList/links/BookListGenres.tsx";
import { BookPage } from "./Components/bookPage/BookPage.tsx";
import { BookListAll } from "./Components/bookList/links/BookListAll.tsx";

export const routes = {
    bookPage: "/web-library/book",
    genres: "/web-library/genres",
    favorite: "/web-library/favorite",
    default: "/web-library/",
}

export const Router = () => {
    return (
        <Routes>
            {/* <Route path="/" element={< />} /> */}
            <Route path={`${routes.bookPage}/:id/page/:page`} element={<BookPage />} />
            <Route path={routes.genres} element={<Genres />} />
            <Route path={routes.favorite} element={<Favorite />} />
            <Route path={routes.default} element={<BookListAll />} />
        </Routes>
    );
};