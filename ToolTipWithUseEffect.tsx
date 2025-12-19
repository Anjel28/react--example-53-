import React, { useEffect, useState, useRef } from 'react';

const ToolTipWithUseEffect:React.FC = () => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({top: 0, left: 0});

  useEffect(()=>{
    if(buttonRef.current) {
        const rect = buttonRef.current.getBoundingClientRect();
        setPosition({top: rect.bottom + 8,  left: rect.left});
    }
  }, []);

  return(
    <div>
        <button ref={buttonRef}>Hover me</button>
        <div 
             style={{
          position: 'absolute',
          top: position.top,
          left: position.left,
          background: 'lightgray',
          padding: '6px',
        }}>
       
        Tooltip content        
        </div>
    </div>
  )
}

export default ToolTipWithUseEffect;