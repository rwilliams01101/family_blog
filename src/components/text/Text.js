import React from 'react';

function Text(props) {
  return (
    <>
        <p className={props.classes}>{props.content}</p>
    </>
  );
}

export default Text;