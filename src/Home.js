import { useState } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";
const Home = () => {
  // let blogFilter = "mario";
  // function handleDelete(id) {
  //   const newblogs = blogs.filter((blogs) => blogs.id !== id);
  //   setBlogs(newblogs);
  // }
  const [name, setName] = useState("mario");
  const {
    data: blogs,
    isLoading,
    error,
  } = useFetch("http://localhost:8000/blogs");
  return (
    <div className="home">
      {error && <div>{error}</div>}
      {blogs && <BlogList blogs={blogs} title={"All Blogs!"} />}
      {isLoading && <div>Loading...</div>}
      {/* {blogs && (
        <BlogList
          blogs={blogs.filter((blogs) => blogs.author === blogFilter)}
          title={`${blogFilter}'s  Blogs!`}
        />
      )} */}
      <button onClick={() => setName("paul")}> click and see</button>
      <p>{name}</p>
    </div>
  );
};

export default Home;
