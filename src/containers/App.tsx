import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from '../components/elements/header/Header';
import LeftSideBar from '../components/elements/body_div/LeftSideBar';
import MainBar from '../components/elements/body_div/MainBar';
import Catalog from '../components/elements/body_div/Catalog';
import Advantage from '../components/elements/body_div/Advantage';
import Delivery from '../components/elements/body_div/Delivery';
import Footer from '../components/elements/footer/Footer';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="Body">
              <Header />
              <div className="body_div">
                <LeftSideBar />
                <MainBar />
              </div>
              <Footer />
            </div>
          }
        />
        <Route
          path="/catalog"
          element={
            <div className="Body">
              <Header />
              <div className="body_div">
                <LeftSideBar />
                <Catalog />
              </div>
              <Footer />
            </div>
          }
        />
        <Route
          path="/advantage"
          element={
            <div className="Body">
              <Header />
              <div className="body_div">
                <LeftSideBar />
                <Advantage />
              </div>
              <Footer />
            </div>
          }
        />
        <Route
          path="/delivery"
          element={
            <div className="Body">
              <Header />
              <div className="body_div">
                <LeftSideBar />
                <Delivery />
              </div>
              <Footer />
            </div>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;