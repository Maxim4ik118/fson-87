import React, { useEffect } from 'react';

const DetailsInnerContent = ({ dataType }) => {
  useEffect(() => {
    console.log('useEffect componentDidMount');

    return () => {
      console.log('useEffect componentWillUnmount');
    };
  }, []);

  return (
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
      harum at culpa dolorem, quas dolores eveniet obcaecati aliquid ab neque
      cumque magnam quos est alias delectus vel! Illum, voluptates possimus
      harum id at doloribus beatae excepturi porro? Corporis illum quam,
      praesentium nisi expedita itaque doloremque ut voluptate quas mollitia
      porro.
    </p>
  );
};

export default DetailsInnerContent;
