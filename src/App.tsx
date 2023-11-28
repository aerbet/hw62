import Toolbar from './components/Toolbar/Toolbar';
import {useState} from 'react';
import {CartDish, Dish} from './types';
import Home from './containers/Home/Home';
import NewDish from './containers/NewDish/NewDish';
import {Route, Routes} from 'react-router-dom';
import Checkout from './containers/Checkout/Checkout';
import Order from './containers/Order/Order';
import './App.css';

function App() {
  const [dishes, setDishes] = useState<Dish[]>([
    {id: '1', name: 'Cpu', description: 'I5 12400', image: 'https://edelws.ru/upload/resize_cache/iblock/629/80_80_1/02j2mkxmic8bpdj8u8orxf5g0wccgo4q.jpg', price: 14500},
    {id: '2', name: 'Motherboard', description: 'B760M', image: 'https://edelws.ru/upload/resize_cache/iblock/fd1/80_80_1/8kt7r2eapz9jkztnyanfavmrfxr30ucu.png', price: 11000},
    {id: '3', name: 'Cooler', description: 'ID-Cooling S-224', image: 'https://edelws.ru/upload/resize_cache/iblock/5cf/80_80_1/5cff31a4176cbbdd335403d57089f0e9.png', price: 14500},
    {id: '4', name: 'RAM', description: '16Gb Kingston HyperX Fury', image: 'https://edelws.ru/upload/resize_cache/iblock/a20/80_80_1/a200398ad83f0eb81dce096a17cb3192.png', price: 11000},
    {id: '5', name: 'GPU', description: 'RTX 4090', image: 'https://edelws.ru/upload/resize_cache/iblock/6b4/80_80_1/q29r9f87o32oj0pzjdhucpk17fywh29j.png', price: 14500},
    {id: '6', name: 'SSD', description: 'SAMSUNG EVO 1TB', image: 'https://edelws.ru/upload/resize_cache/iblock/2d0/80_80_1/2d0686c7570677f5abddd6ce31314871.png', price: 11000},
  ]);

  const [cartDishes, setCartDishes] = useState<CartDish[]>([]);

  const addDish = (dish: Dish) => {
    setDishes((prev) => [...prev, dish]);
  };

  const addDishToCart = (dish: Dish) => {
    setCartDishes((prevState) => {
      const existingIndex = prevState.findIndex((cartDish) => {
        return cartDish.dish === dish;
      });

      if (existingIndex === -1) {
        const newCartDish: CartDish = {dish, amount: 1};
        return [...prevState, newCartDish];
      } else {
        const itemsCopy = [...prevState];
        const itemCopy = {...itemsCopy[existingIndex]};
        itemCopy.amount++;
        itemsCopy[existingIndex] = itemCopy;
        return itemsCopy;
      }
    });
  };

  return (
    <>
      <header>
        <Toolbar/>
      </header>
      <main className="container-fluid">
        <Routes>
          <Route path="/" element={(
            <Home
              dishes={dishes}
              addToCart={addDishToCart}
              cartDishes={cartDishes}
            />
          )} />
          <Route path="/new-dish" element={(
            <NewDish onCreate={addDish}/>
          )} />
          <Route path="/checkout" element={(
            <Checkout cartDishes={cartDishes}/>
          )} >
            <Route path="continue" element={<Order/>}/>
          </Route>
          <Route path="*" element={(<h1>Not Found!</h1>)}/>
        </Routes>
      </main>
    </>
  );
}

export default App;
