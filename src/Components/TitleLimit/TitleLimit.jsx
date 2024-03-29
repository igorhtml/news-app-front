/* eslint-disable react/prop-types */
export function TitleLimit({ title, limit }) {
  const titleLimited =
    title?.length > limit ? `${title.substring(0, limit)}...` : title;

  return <h2>{titleLimited}</h2>;
}
