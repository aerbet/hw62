import React from 'react';

const LeftSideBar: React.FC = () => {
  return (
    <div className='LeftSideBar'>
      <p className="main_p">Для покупки компьютерной техники вам необходимо:</p>
      <ul className="ul-text">
        <li className="liP"><p>ДЛЯ ФИЗИЧЕСКИХ ЛИЦ:</p></li>
        <li>- Паспорт;</li>
        <li>- Достаточно средств для оплаты;</li>
        <li>- Банковские реквизиты (если есть);</li>
        <li className="liP"><p>ДЛЯ ЮРИДИЧЕСКИХ ЛИЦ:</p></li>
        <li>- Паспорт представителя;</li>
        <li>- Копия свидетельства о регистрации;</li>
        <li>- Достаточно средств для оплаты;</li>
        <li>- Рег. № Соц. Фонда;</li>
        <li>- Банковские реквизиты;</li>
      </ul>
    </div>
  );
};

export default LeftSideBar;