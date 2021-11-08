import { connect } from "react-redux";
import "./index.css";

function Posts({ posts }) {
  return (
    <div>
      <h1>Posts</h1>
      {
        posts.map(post => (
          <div className="post-item" key={post.id}>
            <p>{ post.title }</p>
            <p>Id - { post.id }</p>
          </div>
        ))
      }
    </div>
  )
}

const mapStateToProps = state => {
  return {
    posts: state.posts.posts
  }
}

export default connect(mapStateToProps)(Posts);
