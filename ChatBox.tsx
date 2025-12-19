import React, { useLayoutEffect, useRef } from 'react';

const ChatBox: React.FC<{ messages: string[] }> = ({ messages }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [messages]); // Scroll jab bhi new message aaye

  return (
    <div
      ref={containerRef}
      style={{
        height: '300px',
        overflowY: 'auto',
        border: '1px solid #ccc',
        padding: '10px',
      }}
    >
      {messages.map((msg, index) => (
        <div key={index}>{msg}</div>
      ))}
    </div>
  );
};

export default ChatBox;
