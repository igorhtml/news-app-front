/* eslint-disable react/prop-types */
export function TextLimit({ text, limit }) {
  const textLimited =
    text.length > limit ? `${text.substring(0, limit)}...` : text;

  console.log(text.length);

  return <p>{textLimited}</p>;
}