import Card from "../../Components/Cards/Card.jsx";
import { getAllNewsService } from "../../services/newsServices.js";

import Navbar from "../../Components/Navbar/Navbar.jsx";
import { HomeBody } from "./HomeStyled.js";
import { useState, useEffect } from "react";

export default function Home() {
  const [news, setNews] = useState([]);

  async function findAllNews() {
    const response = await getAllNewsService();
    setNews(response.data.results);
  }

  useEffect(() => {
    findAllNews();
  }, []);

  return (
    <>
      <Navbar />
      <HomeBody>
        {news.map((item) => {
          return (
            <Card
              key={item.id}
              title={item.title}
              text={item.text}
              banner={item.banner}
              likes={item.likes.length}
              comments={item.comments.length}
            ></Card>
          );
        })}
      </HomeBody>
    </>
  );
}
