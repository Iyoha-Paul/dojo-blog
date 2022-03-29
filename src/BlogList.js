import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
const BlogList = ({ blogs, title }) => {
  //   const blogs = props.blogs;
  //   const title = props.title;
  //   console.log(blogs);
  const history = useHistory();

  function handleDelete(id) {
    console.log(id);
    fetch("http://localhost:8000/blogs/" + id, {
      method: "DELETE",
    }).then(() => {
      // history.push("/");
      //reload a page
      window.location.reload(false);
    });
  }
  return (
    <div className="blog-list">
      <h2>{title}</h2>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <Link to={`/blogs/${blog.id}`}>
            <h2>{blog.title}</h2>
            <p>written by {blog.author}</p>
          </Link>
          <button onClick={() => handleDelete(blog.id)}>delete Blog</button>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
