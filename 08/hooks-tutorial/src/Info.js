import React, { useEffect } from 'react';
import useInputs from './useInputs';

const Info = () => {
  const [state, onChange] = useInputs({
    name: '',
    nickname: ''
  });
  const { name, nickname } = state;

  useEffect(() => {
    console.log('effect')
    console.log(name)
    return () => {
      console.log('clean Up')
      console.log(name)
    }
  },[name]) 

  return (
    <div>
      <div>
        <input name="name" value={name} onChange={onChange} />
        <input name="nickname" value={nickname} onChange={onChange} />
      </div>
      <div>
        <div>
          <b>이름:</b> {name}
        </div>
        <div>
          <b>닉네임: </b> {nickname}
        </div>
      </div>
    </div>
  );
};

export default Info;
