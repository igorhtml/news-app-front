import styled from "styled-components";

export const SectionCardContainer = styled.section`
  display: flex;
  flex-direction: column;
  text-align: justify;
  gap: 1rem;
  width: 100%;
  padding: 2rem;
  border-radius: 0.3rem;
  background-color: #fff;
  box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em,
    rgba(90, 125, 188, 0.05) 0px 0.25em 1em;
`;

export const ArticleCardBody = styled.article`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  div {
    width: 100%;
    display: flex;
    gap: 2rem;
    justify-content: space-between;
  }

  div h2 {
    max-width: 70%;
  }

  div img {
    width: 40%;
    min-width: 40%;
    aspect-ratio: 2 / 1;
    overflow: hidden;
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
