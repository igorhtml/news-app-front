/* eslint-disable react/prop-types */

import { TextLimit } from "../TextLimit/TextLimit";
import { TitleLimit } from "../TitleLimit/TitleLimit";
import {
  SectionCardContainer,
  ArticleCardBody,
  ArticleCardFooter,
} from "./CardStyled";

export default function Card(propriedades) {
  return (
    <>
      <SectionCardContainer>
        <ArticleCardBody>
          <div>
            <TitleLimit title={propriedades.title} limit={50}></TitleLimit>
            <img src={propriedades.banner} alt="Placeholder for image" />
          </div>
          <TextLimit text={propriedades.text} limit={200} />
        </ArticleCardBody>
        <ArticleCardFooter>
          <div>
            <i className="bi bi-hand-thumbs-up"></i>
            <span>{propriedades.likes}</span>
          </div>
          <div>
            <i className="bi bi-chat"></i>
            <span>{propriedades.comments}</span>
          </div>
        </ArticleCardFooter>
      </SectionCardContainer>
    </>
  );
}
