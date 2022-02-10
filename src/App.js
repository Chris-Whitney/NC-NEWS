import "./App.css";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./Components/Header";
import { Nav } from "./Components/Nav";
import { Articles } from "./Components/Articles";
import { SingleArticle } from "./Components/SingleArticle";
import { Footer } from "./Components/Footer"


function App() {

  const [topicFilter, setTopicFilter] = useState();

 


  return (
    <BrowserRouter>
      <div>
        <Header />
        <Nav setTopicFilter={setTopicFilter}/>
        <Routes>
          <Route path="/" element={<Articles topicFilter={topicFilter}/>} />
          <Route path="/:article_id" element={<SingleArticle />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
