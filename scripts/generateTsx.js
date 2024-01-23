const fs = require('fs');
const path = require('path');

function generateTSXFile(fileName) {
  const baseName = fileName.replaceAll(".tsx", "")
  const content = `import React from 'react';
  
export interface ${baseName}Props {
  value: string
  onChange: () => void
}

const ${baseName}: React.FC<${baseName}Props> = () => {
  // Your component code here
  return (
    <div>
      <h1>${baseName} Component</h1>
    </div>
  );
};
${baseName}.displayName = '${baseName}'
export default ${baseName};
`;

  fs.writeFileSync(fileName, content);
  console.log(`${fileName} created successfully.`);
}
function formateName (str) {
  return str.split("_").map((str) => `${str.slice(0,1).toUpperCase()}${str.slice(1).toLowerCase()}`).join("")
}
function generateRoute(paths, baseStr) {
  const resultStr = paths.map((str) => ({
    path: `/${str}`,
    name: str,
    component: `${baseStr}${formateName(str)}`
  }))
  fs.writeFileSync(`__routes__.json`, JSON.stringify(resultStr, null, 2));
  console.log(`__routes__.json created successfully.`);
}

function main() {
  const numberOfFiles = [
    "css_higher",
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
    const sliceStr = formateName(nameStr)
    const fileName = `${sliceStr}.tsx`;
    generateTSXFile(fileName);
  }
  generateRoute(numberOfFiles, './Learn/')
}

main();
