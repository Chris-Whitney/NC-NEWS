import "./App.css";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./Components/Header";
import { Nav } from "./Components/Nav";
import { Articles } from "./Components/Articles";
import { SingleArticle } from "./Components/SingleArticle";
import { Footer } from "./Components/Footer";
import { Login } from "./Components/Login";
import { UserContext } from "./Utils/User";
import { SingleTopic } from "./Components/SingleTopic";

function App() {
  const [topicFilter, setTopicFilter] = useState();

  const [loggedInUser, setLoggedInUser] = useState("");

  const isLoggedIn = loggedInUser.length > 0;

  return (
    <BrowserRouter>
      <UserContext.Provider
        value={{ loggedInUser, setLoggedInUser, isLoggedIn }}
      >
        <div>
          <Header />

          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Nav setTopicFilter={setTopicFilter} />
                  <Articles
                    setTopicFilter={setTopicFilter}
                    topicFilter={topicFilter}
                  />
                </>
              }
            />
            <Route path='/topic/:topic/articles' element= {<>
                  <Nav setTopicFilter={setTopicFilter} />
                  <Articles
                    setTopicFilter={setTopicFilter}
                    topicFilter={topicFilter}
                  />
                </>
              }/>
            <Route path="/articles/:article_id" element={<SingleArticle />} />

            <Route path="/login" element={<Login />} />
          </Routes>
          <Footer />
        </div>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
