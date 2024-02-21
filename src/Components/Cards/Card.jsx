/* eslint-disable no-undef */
/* eslint-disable react/prop-types */

import { TextLimit } from "../TextLimit/TextLimit";
import { TitleLimit } from "../TitleLimit/TitleLimit";
import {
  SectionCardContainer,
  ArticleCardBody,
  ArticleCardFooter,
  LeftCardDiv,
} from "./CardStyled";

export default function Card(propriedades) {
  return (
    <>
      <SectionCardContainer top={propriedades.top}>
        <LeftCardDiv>
          <ArticleCardBody top={propriedades.top}>
            <TitleLimit title={propriedades.title} limit={40}></TitleLimit>
            <TextLimit
              top={propriedades.top}
              text={propriedades.text}
              limit={130}
            />
          </ArticleCardBody>
          <ArticleCardFooter>
            <div>
              <i className="bi bi-hand-thumbs-up"></i>
              <span>{propriedades.likes?.length}</span>
            </div>
            <div>
              <i className="bi bi-chat"></i>
              <span>{propriedades.comments?.length}</span>
            </div>
          </ArticleCardFooter>
        </LeftCardDiv>
        <img src={propriedades.banner} alt="Placeholder for image" />
      </SectionCardContainer>
    </>
  );
}
