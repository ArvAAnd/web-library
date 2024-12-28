import React from "react"
import axios from "axios"

//const server = "http://127.0.0.1:5000"
const server = "https://dilib-host.loca.lt"

export const Connect = {
    async saveHTML(formData) {
        return axios.post(`${server}/add-book`, formData, {
            headers: { "Content-Type": "multipart/form-data" }
          })
    },
    async getHTML(id) {
        return axios.get(`${server}/get-html/${id}`, {
            responseType: "text", // Получаем текст, а не поток
          })
    },
    async getBooks(){
        return axios.get(`${server}/get-all-books`, {
            responseType: "json", // Получаем JSON, а не поток
          })
    }
}