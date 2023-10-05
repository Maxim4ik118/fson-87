import React, { useRef } from 'react';
import { ReactComponent as IconHeart } from 'assets/images/heart.svg';

/* 
Використання РЕФ:
    1. Для безпосереднього доступу та роботи з ДОМ елементами(події фокусу, виділення тексту, блюру)
    2. Коли використовуєте бібліотеки, які працюють з домом напряму.
    3. Відеоплеєри|Аудіоплеєри завжди робляться на РЕФ.
    4. Для зберігання значення поміж різними рендерами.
*/

const UseRefExample = () => {
 const inputRef = useRef();
 
  const handleClick = () => {
    inputRef.current.focus()
  };

  return (
    <div>
      {/* <p>Counter ref value: {counterRef.current}</p> */}
      <button onClick={handleClick}>Click to increment useRef value</button>
      <input type="text" ref={inputRef} />
    </div>
  );
};

export default UseRefExample;
