import React from 'react';
import '/App.css'
import Catalog from "../components/elements/body_div/Catalog";
import Advantage from "../components/elements/body_div/Advantage";
import
import { Route, Switch, BrowserRouter } from 'react-router-dom';

const routes = [
  {
    path: "/",
    exact: true,
    main: () => (
      <div className='Body'>
        <Header />
        <div className='body_div'>
          <LeftSideBar />
          <MainBar />
        </div>
        <Footer />
      </div>
    ),
  },
  {
    path: "/catalog",
    main: () => (
      <div className='Body'>
        <Header />
        <div className='body_div'>
          <LeftSideBar />
          <Catalog />
        </div>
        <Footer />
      </div>
    ),
  },
  {
    path: "/advantage",
    main: () => (
      <div className='Body'>
        <Header />
        <div className='body_div'>
          <LeftSideBar />
          <Advantage />
        </div>
        <Footer />
      </div>
    ),
  },
  ];

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            render={route.main}
          />
        ))}
      </Switch>
    </BrowserRouter>
  );
};

export default App;