import { useContext, useEffect, useState } from 'react';
import DetailsInnerContent from './DetailsInnerContent';
import { DetailsContext } from 'context/DetaisContext';

const DetailsSection = () => {
  const [dataType, setDataType] = useState('users'); // "users" | "posts" | "comments"
  const { showDetails } = useContext(DetailsContext);

  return (
    <div
      style={{
        border: '1px solid black',
        borderRadius: '15px',
        marginBottom: '35px',
        marginTop: '35px',
        padding: '25px',
      }}
    >
      {showDetails && <DetailsInnerContent dataType={dataType} />}
      <div>
        <button
          className={`typeBtn ${dataType === 'users' ? 'active' : ''}`}
          onClick={() => setDataType('users')}
        >
          Users
        </button>
        <button
          className={`typeBtn ${dataType === 'posts' ? 'active' : ''}`}
          onClick={() => setDataType('posts')}
        >
          Posts
        </button>
        <button
          className={`typeBtn ${dataType === 'comments' ? 'active' : ''}`}
          onClick={() => setDataType('comments')}
        >
          Comments
        </button>
        {dataType === 'users' && <p>Users here</p>}
        {dataType === 'posts' && <p>Posts here</p>}
        {dataType === 'comments' && <p>Comments here</p>}
      </div>
    </div>
  );
};

export default DetailsSection;
