import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import { BrowserRouter as Router } from "react-router-dom";
import Main_router from "./Main_router";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Main_router />
        <Main />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
