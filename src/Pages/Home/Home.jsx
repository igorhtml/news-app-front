import Card from "../../Components/Cards/Card.jsx";
import news from "../../Datas.js";

import Navbar from "../../Components/Navbar/Navbar.jsx";

export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      {news.map((item, index) => {
        return <Card key={index} news={item}></Card>;
      })}
    </>
  );
}
