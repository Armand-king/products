'use client';

import { useState } from 'react';

export default function LikeButton() {
  const [likes, setLikes] = useState(0);
  const [delikes, setDelikes] = useState(0);

  function handleClick() {
    setLikes(likes + 1);
  }

  function handleDelikeClick() {
    setDelikes(delikes - 1);
  }

  return (
    <div>
      <button className="btn btn-primary gwap-2" onClick={handleClick}>Like ({likes})</button>
      <button onClick={handleDelikeClick}>deLike ({delikes})</button>
    </div>
  );
}
