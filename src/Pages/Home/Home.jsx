import Card from "../../Components/Cards/Card.jsx";
import news from "../../Datas.js";

import Navbar from "../../Components/Navbar/Navbar.jsx";
import { HomeBody } from "./HomeStyled.js";

export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      <HomeBody>
        {news.map((item, index) => {
          return <Card key={index} news={item}></Card>;
        })}
      </HomeBody>
    </>
  );
}
