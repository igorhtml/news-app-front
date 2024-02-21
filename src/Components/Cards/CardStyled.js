import styled from "styled-components";

export const SectionCardContainer = styled.section`
  display: grid;
  grid-template-columns: 6fr 4fr;
  width: 100%;
  border-radius: 0.3rem;
  background-color: #fff;
  box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em,
    rgba(90, 125, 188, 0.05) 0px 0.25em 1em;
  overflow: hidden;
  height: ${(props) => (props.top ? "35vh" : "25vh")};

  img {
    width: 100%;
    height: 100%;
    aspect-ratio: 3/1;
    overflow: hidden;
    object-fit: cover;
    object-position: center;
  }
`;

export const LeftCardDiv = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
  gap: 1rem;
`;

export const ArticleCardBody = styled.article`
  overflow-y: auto;
  font-size: ${(props) => (props.top ? "1.2rem" : ".9rem")};
  text-align: justify;

  h2 {
    font-size: ${(props) => (props.top ? "3rem" : "1.5rem")};
  }
`;

export const ArticleCardFooter = styled.article`
  flex-shrink: 0; /* don't shrink */
  height: auto; /* let content determine height */
  display: flex;
  gap: 1rem;

  div {
    display: flex;
    gap: 4px;
  }
`;
