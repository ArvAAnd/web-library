import React, {useEffect, useState} from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import "./BookPage.css"
import { Connect } from "../../Helpers/connect.ts"
import { BookType } from "../../types/Types"
import { routes } from "../../Router.tsx"
import { Pagination } from "antd"

export const BookPage = () => {
  const { id, page } = useParams()
  const [content, setContent] = useState<string>("")
  const [loading, setLoading] = useState<boolean>(false)
  const [amountPages, setAmountPages] = useState<number>(0)

  const nav = useNavigate()

  const onChange = (pageNumber) => {
    nav(`${routes.bookPage}/${id}/page/${pageNumber}`)
  }

  const getHTML = async () => {
    if (!id) {
      alert("Выберите книгу!")
      return;
    }
    setLoading(true);
    setContent("");
    try {
      const response = await Connect.getHTML(id, page);

      // Устанавливаем полный HTML-контент
      //console.log();
      setContent(JSON.parse(response.data).content);
      setAmountPages(JSON.parse(response.data).pagesAmount);
    } catch (error) {
      console.error("Ошибка при загрузке файла:", error)
    } finally {
      setLoading(false)
    }
  };

  useEffect(() => {
    getHTML();
  }, [page]);

  return (
    <main className="book-content">
      <p>
        {loading ? "Загрузка..." : ""}
      </p>
      <div dangerouslySetInnerHTML={{ __html: content }} />
      <Pagination showSizeChanger={false} showQuickJumper onChange={onChange} defaultPageSize={1} total={amountPages} current={page} />
    </main>
  );
}
