import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  width: 100%;
  height: 5rem;
  /* position: fixed;
  top: 0; */
  z-index: 1;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 4px 12px;
`;

export const Img = styled.img`
  cursor: pointer;
  object-fit: cover;
`;

export const InputSpace = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  background-color: #f8f6f9;
  padding: 5px;

  &:focus-within {
    outline: 2px solid #c0b3ce;
  }

  input {
    font-size: 1rem;
    width: 20rem;
    padding: 0.6rem;
    outline: none;
    background-color: #f8f6f9;
    border: none;
  }

  i {
    color: #80669d;
    font-size: 1.4rem;
    cursor: pointer;
    padding: 0.4rem;
    transition: scale 0.2s ease-in-out;
  }

  i:hover {
    scale: 1.1;
  }
`;

export const Button = styled.button`
  text-transform: uppercase;
  border: 2px solid #80669d;
  padding: 1rem 2rem;
  font-size: 16px;
  background: transparent;
  overflow: hidden;
  color: #80669d;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background: #80669d;
    color: #ffffff;
  }
`;
