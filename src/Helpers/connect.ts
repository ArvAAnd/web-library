import { axiosConfig } from "./axiosConfig.ts"



export const Connect = {
    async saveHTML(formData) {
        return axiosConfig.post(`add-book`, formData)
    },
    async getHTML(id) {
        return axiosConfig.get(`get-html/${id}`, {
            responseType: "text" // Получаем текст, а не поток
            })
    },
    async getBooks(){
        return axiosConfig.get(`get-all-books`, {
            responseType: "json", // Получаем JSON, а не поток
          })
    }
}