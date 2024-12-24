import React, {useEffect, useState} from "react"
import { useParams } from "react-router-dom"
import "./BookPage.css"
import { Connect } from "../../Helpers/Connect.tsx"
import { BookType } from "../../types/Types"
import axios from "axios"

export const BookPage = () => {
    const { id } = useParams()
//     const [book, setBook] = useState<BookType>()

//     const getBook = async () => {
//         const response = await Connect.getHTML()
//         console.log(response.data.data)
//         setBook(response.data.data)
//     }

//     useEffect(() => {
//         getBook();
//     }, [])

//     return (
//         <main className="book-page">
//             <div dangerouslySetInnerHTML={{ __html: book }} />
//         </main>
// )

  const [file, setFile] = useState<File | null>(null);
  const [content, setContent] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!file) {
      alert("Выберите файл!");
      return;
    }

    setLoading(true);
    setContent("");

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await axios.post("http://127.0.0.1:5000/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
        responseType: "text", // Получаем текст, а не поток
      });

      // Устанавливаем полный HTML-контент
      setContent(response.data);
    } catch (error) {
      console.error("Ошибка при загрузке файла:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{marginLeft: "250px"}}>
      <h1>FB2 Reader</h1>
      <input type="file" accept=".fb2" onChange={handleFileChange} />
      <button onClick={handleUpload} disabled={loading}>
        {loading ? "Загрузка..." : "Загрузить и прочитать"}
      </button>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
}
