import { Route, BrowserRouter, Routes } from "react-router-dom";
import React from "react";
import { Favorite } from "./Components/aside/links/BookListFavorite.tsx";
import { Genres } from "./Components/aside/links/BookListGenres.tsx";
import { BookPage } from "./Components/bookPage/BookPage.tsx";
import { BookListAll } from "./Components/aside/links/BookListAll.tsx";

export const routes = {
    bookPage: "/dilib/book",
    genres: "/dilib/genres",
    favorite: "/dilib/favorite",
    default: "/dilib/",
}

export const Router = () => {
    return (
        <Routes>
            {/* <Route path="/" element={< />} /> */}
            <Route path={`${routes.bookPage}/:id`} element={<BookPage />} />
            <Route path={routes.genres} element={<Genres />} />
            <Route path={routes.favorite} element={<Favorite />} />
            <Route path={routes.default} element={<BookListAll />} />
        </Routes>
    );
};