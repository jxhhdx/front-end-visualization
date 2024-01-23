import React from 'react';
  
export interface WebglPhongProps {
  value: string
  onChange: () => void
}

const WebglPhong: React.FC<WebglPhongProps> = () => {
  // Your component code here
  return (
    <div>
      <h1>WebglPhong Component</h1>
    </div>
  );
};
WebglPhong.displayName = 'WebglPhong'
export default WebglPhong;
