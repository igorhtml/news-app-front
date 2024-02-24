import Card from "../../Components/Cards/Card.jsx";
import {
  getAllNewsService,
  getTopNewService,
} from "../../services/newsServices.js";

import { HomeBody, HomeHeader } from "./HomeStyled.js";
import { useState, useEffect } from "react";

export default function Home() {
  const [news, setNews] = useState([]);
  const [top, setTop] = useState({});

  async function findAllNews() {
    const newsResponse = await getAllNewsService();
    const newsShifted = newsResponse.data.results.slice(1);
    console.log(newsShifted);
    setNews(newsShifted);

    const topResponse = await getTopNewService();
    setTop(topResponse.data);
  }

  useEffect(() => {
    findAllNews();
  }, []);

  return (
    <>
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
