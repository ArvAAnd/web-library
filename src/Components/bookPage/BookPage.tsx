import React, {useEffect, useState} from "react"
import { useParams } from "react-router-dom"
import "./BookPage.css"
import { Connect } from "../../Helpers/Connect.tsx"
import { BookType } from "../../types/Types"
import axios from "axios"

export const BookPage = () => {
  const { id } = useParams()
  const [file, setFile] = useState<File | null>(null)
  const [content, setContent] = useState<string>("")
  const [loading, setLoading] = useState<boolean>(false)
  
  const getHTML = async () => {
    if (!id) {
      alert("Выберите книгу!")
      return;
    }
    setLoading(true);
    setContent("");
    try {
      const response = await Connect.getHTML(id);

      // Устанавливаем полный HTML-контент
      setContent(response.data);
    } catch (error) {
      console.error("Ошибка при загрузке файла:", error)
    } finally {
      setLoading(false)
    }
  };

  useEffect(() => {
    getHTML();
  }, [id]);

  return (
    <main className="book-content">
      <p>
        {loading ? "Загрузка..." : ""}
      </p>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </main>
  );
}
