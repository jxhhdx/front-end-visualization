import React from 'react';
  
export interface ThreeGaojiCaizhiProps {
  value: string
  onChange: () => void
}

const ThreeGaojiCaizhi: React.FC<ThreeGaojiCaizhiProps> = () => {
  // Your component code here
  return (
    <div>
      <h1>ThreeGaojiCaizhi Component</h1>
    </div>
  );
};
ThreeGaojiCaizhi.displayName = 'ThreeGaojiCaizhi'
export default ThreeGaojiCaizhi;
