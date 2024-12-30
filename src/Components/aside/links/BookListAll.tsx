import React, { useState, useEffect } from "react"
//import {getBooks} from "../../../getBooks.ts"
import { BookFromType, BookListType } from "../../../types/Types.tsx"
import { Book } from "../../Book.tsx"
import { Connect } from "../../../Helpers/connect.ts"
import { Modal } from "antd";
import { useForm } from "react-hook-form"
import { useStoreBooks } from "../../../Helpers/Storages/storeBooks.ts";



export const BookListAll = () => {
    //const [bookListShow, setBookListShow] = useState<BookFromType[]>()
    const [checkAdd, setCheckAdd] = useState<boolean>()
    const {bookList, setBookList} = useStoreBooks()
//    console.log(bookList)
    const {register, handleSubmit, reset} = useForm()
//    const [file, setFile] = useState<File | null>(null)
    const [loading, setLoading] = useState<boolean>(false)
    const [visible, setVisible] = useState<boolean>(false)

    const get_books = async () => {
        if (!loading) {
            setLoading(true)
            try {
                const response = await Connect.getBooks()
                //console.log(response.data)
                setBookList(response.data)
            } catch (error) {
                console.error("Ошибка при загрузке книг:", error)
            } finally {
                setLoading(false)
            }
        }
    }

    useEffect(() => {
        get_books()
    }, [checkAdd])

    //const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const onSubmit = async (data) => {
        // if (data.file.files) {
        //     setFile(data.file.files[0])
        // }
        const file = data.file[0]
        if (!file) {
            alert("Выберите файл!");
            return;
          }
      
        setLoading(true);

        const formData = new FormData()
        formData.append("file", file)
        console.log(data.name)
        formData.append("name", data.name)
        try{
            const response = await Connect.saveHTML(formData)
            console.log("Файл успешно загружен:", response);
            reset(); // Сброс формы
            setVisible(false); // Закрываем модальное окно
            setCheckAdd(!checkAdd)
        }catch (error) {
            console.error("Ошибка при загрузке файла:", error)
        } finally {
            setLoading(false)
        }
    }

    return(
        <main>
            <h1>Your Books</h1>
            <section className="main-category">
                <article className="">
                    <button className="main-element main-element-add" onClick={() => setVisible(true)}>
                        +
                    </button>
                </article>
                {bookList.map(book => (
                    <Book key={book.id} book={book}/>
                ))}
            </section>
            <Modal title="Upload File" open={visible} onOk={handleSubmit(onSubmit)} onCancel={() => {setVisible(false); reset(); setLoading(false); }}>
                <form>     
                    <p>Choose a file to upload:</p>
                    <input type="file" accept=".fb2" {...register('file', {required: 'file is required'})}/>
                    <p>Book name</p>
                    <input type="text" {...register('name', {required: 'file is required'})}/>
                </form>
            </Modal>
        </main>
    )
}