import { axiosConfig } from "./axiosConfig.ts"



export const Connect = {
    async saveHTML(formData) {
        return axiosConfig.post(`add-book`, formData)
    },
    async getHTML(id, page) {
        return axiosConfig.get(`get-html/${id}?page=${page}`, {
            responseType: "text" // Получаем текст, а не поток
            })
    },
    async getBooks(){
        return axiosConfig.get(`get-all-books`, {
            responseType: "json", // Получаем JSON, а не поток
          })
    }
}