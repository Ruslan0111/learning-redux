import { Provider } from "react-redux";
import PostForm from "./components/PostForm";
import Posts from "./components/Posts";

import store from "./redux";

function App() {
  return (
    <Provider store={store}>
      <div>
        <PostForm />
        <Posts />
      </div>
    </Provider>
  );
}

export default App;
