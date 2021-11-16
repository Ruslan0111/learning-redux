import { useEffect } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../../redux/actions/postsActions";

function AsyncPosts() {
  const posts = useSelector((state) => state.posts.fetchedPosts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  return (
    <div>
      <h1>Async Posts</h1>
      {posts.map((post) => (
        <div className="post-item" key={post.id}>
          <p>{post.title}</p>
          <p>Id - {post.id}</p>
        </div>
      ))}
    </div>
  );
}

// const mapStateToProps = state => {
//   return {
//     posts: state.posts.fetchedPosts
//   }
// }

// const mapDispatchToProps = {
//   fetchPosts
// }

// export default connect(mapStateToProps, mapDispatchToProps)(AsyncPosts);

export default AsyncPosts;
