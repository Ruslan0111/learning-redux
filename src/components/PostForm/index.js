import { useState } from "react";
import { connect } from "react-redux";
import { newPost } from "../../redux/actions/postsActions";
import "./index.css";

function PostForm({ newPost }) {
  const [title, setTitle] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const data = {
      title,
      id: Date.now()
    }

    newPost(data);
    setTitle('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Enter Post title:</label>
      <input id="title" type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      <button type="submit">Submit</button>
    </form>
  )
}

export default connect(null, { newPost })(PostForm);
