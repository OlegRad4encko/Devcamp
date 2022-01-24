import "./App.css";
import { Header } from "./containers/header";
import { NewArticle } from "./containers/newArticle";
import PostsContainer from "./containers/postBody";
import PostContainer from "./containers/post";
import { PostDate } from "./containers/postDate";
import { Profile } from "./containers/profile";
import { Profiles } from "./containers/profiles";
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import { QueryClient, QueryClientProvider } from 'react-query';
import ErrorBoundary from "./components/ErrorBoundary";

const queryClient = new QueryClient();

function App() {
  return (
      <div className="App">
          <QueryClientProvider client={queryClient}>
            <ErrorBoundary>
              <BrowserRouter>
                  <Header/>
                <Routes>
                    <Route path="/" element={<PostsContainer />} />
                    <Route path="/post" element={<PostsContainer />} />
                    <Route path="/posts/:id" element={<PostContainer />} />
                    <Route path="/add_article" element={<NewArticle />} />
                    <Route path="/users" element={<Profiles />} />
                    <Route path="/user/:userId" element={<Profile />} />
                    <Route path="/date/:date" element={<PostDate />} />
                    <Route path="*" element={<div> 404 </div>} />
                </Routes>
              </BrowserRouter>
            </ErrorBoundary>
          </QueryClientProvider>
      </div>
  );
    /*
          пока только сделано по требованиям этой дз, неделя0 две, сделаю все роуты нормально, как и апи
                      */
}

export default App;
