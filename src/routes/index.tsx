import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "../container/Layout";
import Home from "../pages/Home";
import List from "../pages/List";
import NewNote from "../pages/NewNote";
import Notes from "../pages/Notes";

const AppRoutes = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/list" element={<List />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="/new-note" element={<NewNote />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default AppRoutes;
