import "./App.css";
import { Header } from "./containers/header";
import { NewArticle } from "./containers/newArticle";
import { PostBody } from "./containers/postBody";
import { Post } from "./containers/post";
import { PostDate } from "./containers/postDate";
import { Profile } from "./containers/profile";
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import ErrorBoundary from "./components/ErrorBoundary";

function App() {

  return (
      <div className="App">
        <ErrorBoundary>
          <BrowserRouter>
              <Header/>
            <Routes>
                <Route path="/" element={<PostBody />} />
                <Route path="/articles" element={<PostBody />} />
                <Route path="/article/:id" element={<Post />} />
                <Route path="/add_article" element={<NewArticle />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/date/:date" element={<PostDate />} />
                <Route path="*" element={<div> 404 </div>} />
            </Routes>
          </BrowserRouter>
        </ErrorBoundary>
      </div>
  );
}

export default App;
