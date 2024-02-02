import styled from "styled-components";

export const SectionCardContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  padding: 2rem;
  border-radius: 0.3rem;

  box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em,
    rgba(90, 125, 188, 0.05) 0px 0.25em 1em;
`;

export const ArticleCardBody = styled.article`
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: center;

  div p {
    max-height: 150px;
    overflow: hidden;
  }

  img {
    width: 30%;
    object-fit: cover;
    object-position: center;
  }
`;

export const ArticleCardFooter = styled.article`
  display: flex;
  align-items: center;
  gap: 1rem;

  div {
    display: flex;
    gap: 4px;
    align-items: center;
  }
`;
