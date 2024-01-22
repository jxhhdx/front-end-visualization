const fs = require('fs');
const path = require('path');

function generateTSXFile(fileName) {
  const content = `import React from 'react';

interface Props {
  // Your props here
}

const ${fileName.replace('.tsx', '')}: React.FC<Props> = () => {
  // Your component code here
  return (
    <div>
      <h1>${fileName.replace('.tsx', '')} Component</h1>
    </div>
  );
};

export default ${fileName.replace('.tsx', '')};
`;

  fs.writeFileSync(fileName, content);
  console.log(`${fileName} created successfully.`);
}

function main() {
  const numberOfFiles = [
    "css_2d",
    "css_3d",
    "svg_basic",
    "svg_edit",
    "svg_mind",
    "d3_zhu",
    "d3_zhe",
    "d3_pi",
    "d3_leida",
    "canvas_html5",
    "canvas_dx",
    "canvas_0_1_zhu_and_pi",
    "canvas_0_1_k_line",
    "canvas_edit",
    "canvas_h5_game",
    "canvas_juanzou_game",
    "three_sample_game",
    "three_gaoji_caizhi",
    "three_mini_echart_bar3d",
    "three_3d_jianmo",
    "three_r3f",
    "shader_glsl",
    "shader_tu_and_func",
    "shader_ramdom",
    "shader_ray_sdf",
    "shader_gaoji_donghua",
    "webgl_basic",
    "weggl_gl_jz",
    "webgc_uv",
    "webgl_phong"
  ]; // Set the number of files you want to generate

  for (let i = 0; i < numberOfFiles.length; i++) {
    const nameStr = numberOfFiles[i]
    const sliceStr = nameStr.split("_").map((str) => `${str.slice(0,1).toUpperCase()}${str.slice(1).toLowerCase()}`).join("")
    const fileName = `${sliceStr}.tsx`;
    generateTSXFile(fileName);
  }
}

main();
