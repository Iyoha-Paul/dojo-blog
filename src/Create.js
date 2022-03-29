import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("mario");
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();
  function handleSubmit(e) {
    e.preventDefault();
    const blog = { title, body, author };
    setIsLoading(true);
    console.log(blog);
    fetch("http://localhost:8000/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      console.log("new Blog added");
      setIsLoading(false);
      history.push("/");
    });
  }

  return (
    <div className="create">
      <h2>Add a New Blog!</h2>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">Blog title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label htmlFor="">Blog body:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label htmlFor="">Blog author:</label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="mario">mario</option>
          <option value="yoshi">yoshi</option>
          <option value="paul">paul</option>
        </select>
        {!isLoading && <button>Add Blog</button>}
        {isLoading && <button disabled>Adding Blog...</button>}
        <p>
          {title}
          {body}
          {author}
        </p>
      </form>
    </div>
  );
};

export default Create;
