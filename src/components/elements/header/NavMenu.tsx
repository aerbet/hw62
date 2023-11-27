import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const NavMenu: React.FC = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  const toggleMenu = () => {
    setShowMenu((prevShowMenu) => !prevShowMenu);
  };

  return (
    <>
      <div className='NavMenu'>
        <button type='button' className='menu_btn' onClick={toggleMenu}>
          Menu
        </button>
        {showMenu && (
          <ul className='menu_ul'>
            <li className='menu_li'>
              <NavLink to='/'>
                Главная
              </NavLink>
            </li>
            <li className='menu_li'>
              <NavLink to='/catalog'>Каталог оборудования</NavLink>
            </li>
            <li className='menu_li'>
              <NavLink to='/advantage'>Преимущество нашего магазина</NavLink>
            </li>
            <li className='menu_li'>
              <NavLink to='/delivery'>Доставка</NavLink>
            </li>
          </ul>
        )}
      </div>
    </>
  );
};

export default NavMenu;