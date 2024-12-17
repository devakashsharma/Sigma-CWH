// export default async function Page({ params }) {
//     // fetch blog posts by using slug
//   const slug = (await params).slug;
//   return <div>My Post: {slug}</div>;
// }

export default async function Page({ params }) {
    // throw new Error("Error")
  // fetch blog posts by using slug
  let languages = ["python", "javascript", "java", "css", "r"];

  const slug = (await params).slug;
  if (languages.includes(slug)) {
    return <div>My Post: {slug}</div>;
  } else {
    return <div>Page not found</div>;
  }
}
