import React, { useEffect, useState } from "react";

function Slides({ slides }) {

  const [count, setCount] = useState(0);
  const [displatItem, setDisplayItem] = useState(slides[count]);

  const restart = () => {
    setCount(0);
  }
  const previous = () => {
    const prevIndex = (count + (-1) + slides.length)%slides.length;
    setCount(prevIndex);
  }
  const next = () => {
    const nextIndex = (count + 1 + slides.length)%slides.length;
    setCount(nextIndex);
  }

  useEffect(() => {
    setDisplayItem(slides[count])
  }, [count])

  return (
    <div>
      <div id="navigation" className="text-center">
        <button data-testid="button-restart" className="small outlined" onClick={restart} disabled={count === 0}>
          Restart
        </button>
        <button data-testid="button-prev" className="small" onClick={previous} disabled={count === 0}>
          Prev
        </button>
        <button data-testid="button-next" className="small" onClick={next} disabled={count === slides.length-1}>
          Next
        </button>
      </div>
      <div id="slide" className="card text-center">
        <h1 data-testid="title">{displatItem.title}</h1>
        <p data-testid="text">{displatItem.text}</p>
      </div>
    </div>
  );
}

export default Slides;
