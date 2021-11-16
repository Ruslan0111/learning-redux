import { Provider } from "react-redux";
import AsyncPosts from "./components/AsyncPosts";
import PostForm from "./components/PostForm";
import Posts from "./components/Posts";

import store from "./redux";

function App() {
  return (
    <Provider store={store}>
      <div>
        <PostForm />
        <Posts />
        <AsyncPosts />
      </div>
    </Provider>
  );
}

export default App;
