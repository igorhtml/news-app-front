import Card from "../../Components/Cards/Card.jsx";
import {
  getAllNewsService,
  getTopNewService,
} from "../../services/newsServices.js";

import Navbar from "../../Components/Navbar/Navbar.jsx";
import { HomeBody, HomeHeader } from "./HomeStyled.js";
import { useState, useEffect } from "react";

export default function Home() {
  const [news, setNews] = useState([]);
  const [top, setTop] = useState({});

  async function findAllNews() {
    const newsResponse = await getAllNewsService();
    setNews(newsResponse.data.results);

    const topResponse = await getTopNewService();
    setTop(topResponse.data);
  }

  useEffect(() => {
    findAllNews();
  }, []);

  return (
    <>
      <Navbar />
      <HomeHeader>
        <Card
          top={true}
          key={top.id}
          title={top.title}
          text={top.text}
          banner={top.banner}
          likes={top.likes}
          comments={top.comments}
        ></Card>
      </HomeHeader>
      <HomeBody>
        {news.map((item) => {
          return (
            <Card
              key={item.id}
              title={item.title}
              text={item.text}
              banner={item.banner}
              likes={item.likes}
              comments={item.comments}
            ></Card>
          );
        })}
      </HomeBody>
    </>
  );
}
