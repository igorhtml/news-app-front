/* eslint-disable react/prop-types */

import {
  SectionCardContainer,
  ArticleCardBody,
  ArticleCardFooter,
} from "./CardStyled";

export default function Card({ news }) {
  console.log(news);

  return (
    <>
      <SectionCardContainer>
        <ArticleCardBody>
          <div>
            <h2>{news.title}</h2>
            <p>{news.text}</p>
          </div>
          <img src={news.image} alt="Placeholder for image" />
        </ArticleCardBody>
        <ArticleCardFooter>
          <div>
            <i className="bi bi-hand-thumbs-up"></i>
            <span>{news.likes}</span>
          </div>
          <div>
            <i className="bi bi-chat"></i>
            <span>{news.comments}</span>
          </div>
        </ArticleCardFooter>
      </SectionCardContainer>
    </>
  );
}
