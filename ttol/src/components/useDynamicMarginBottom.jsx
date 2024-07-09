import { useEffect, useState, useRef } from "react";

const useDynamicMarginBottom = (text) => {
  const [marginBottom, setMarginBottom] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      const style = getComputedStyle(ref.current);
      let lineHeight = parseFloat(style.lineHeight);
      if (isNaN(lineHeight)) {
        const fontSize = parseFloat(style.fontSize);
        lineHeight = fontSize * 1.2; 
      }

      const lines = Math.ceil(ref.current.scrollHeight / lineHeight);
      const textLength = text.length;
      const calculatedMargin = Math.max(5, 40 - (lines * 2) - (textLength * 0.1));
      console.log(calculatedMargin);
      setMarginBottom(calculatedMargin);
    }
  }, [text]);

  return { ref, marginBottom };
};

export default useDynamicMarginBottom;
