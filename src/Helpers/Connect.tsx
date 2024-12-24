import React from "react"
import axios from "axios"

const server = "http://127.0.0.1:5000"

export const Connect = {
    async getHTML() {
        return axios.get(`${server}/get-html`)
    }
}