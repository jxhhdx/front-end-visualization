/**
 * @name umi 的路由配置
 * @description 只支持 path,component,routes,redirect,wrappers,name,icon 的配置
 * @param path  path 只支持两种占位符配置，第一种是动态参数 :id 的形式，第二种是 * 通配符，通配符只能出现路由字符串的最后。
 * @param component 配置 location 和 path 匹配后用于渲染的 React 组件路径。可以是绝对路径，也可以是相对路径，如果是相对路径，会从 src/pages 开始找起。
 * @param routes 配置子路由，通常在需要为多个路径增加 layout 组件时使用。
 * @param redirect 配置路由跳转
 * @param wrappers 配置路由组件的包装组件，通过包装组件可以为当前的路由组件组合进更多的功能。 比如，可以用于路由级别的权限校验
 * @param name 配置路由的标题，默认读取国际化文件 menu.ts 中 menu.xxxx 的值，如配置 name 为 login，则读取 menu.ts 中 menu.login 的取值作为标题
 * @param icon 配置路由的图标，取值参考 https://ant.design/components/icon-cn， 注意去除风格后缀和大小写，如想要配置图标为 <StepBackwardOutlined /> 则取值应为 stepBackward 或 StepBackward，如想要配置图标为 <UserOutlined /> 则取值应为 user 或者 User
 * @doc https://umijs.org/docs/guides/routes
 */
export default [
  {
    path: '/user',
    layout: false,
    routes: [
      {
        name: 'login',
        path: '/user/login',
        component: './User/Login',
      },
    ],
  },
  {
    path: '/welcome',
    name: 'welcome',
    icon: 'smile',
    component: './Welcome',
  },
  {
    path: '/admin',
    name: 'admin',
    icon: 'crown',
    access: 'canAdmin',
    routes: [
      {
        path: '/admin',
        redirect: '/admin/sub-page',
      },
      {
        path: '/admin/sub-page',
        name: 'sub-page',
        component: './Admin',
      },
    ],
  },
  {
    name: 'list.table-list',
    icon: 'table',
    path: '/list',
    component: './TableList',
  },
  {
    path: '/learn',
    name: 'learn',
    icon: 'borderlessTable',
    routes: [
      {
        path: "/learn/css_2d",
        name: "css_2d",
        component: "./Learn/Css2d"
      },
      {
        path: "/learn/css_3d",
        name: "css_3d",
        component: "./Learn/Css3d"
      },
      {
        path: "/learn/svg_basic",
        name: "svg_basic",
        component: "./Learn/SvgBasic"
      },
      {
        path: "/learn/svg_edit",
        name: "svg_edit",
        component: "./Learn/SvgEdit"
      },
      {
        path: "/learn/svg_mind",
        name: "svg_mind",
        component: "./Learn/SvgMind"
      },
      {
        path: "/learn/d3_zhu",
        name: "d3_zhu",
        component: "./Learn/D3Zhu"
      },
      {
        path: "/learn/d3_zhe",
        name: "d3_zhe",
        component: "./Learn/D3Zhe"
      },
      {
        path: "/learn/d3_pi",
        name: "d3_pi",
        component: "./Learn/D3Pi"
      },
      {
        path: "/learn/d3_leida",
        name: "d3_leida",
        component: "./Learn/D3Leida"
      },
      {
        path: "/learn/canvas_html5",
        name: "canvas_html5",
        component: "./Learn/CanvasHtml5"
      },
      {
        path: "/learn/canvas_dx",
        name: "canvas_dx",
        component: "./Learn/CanvasDx"
      },
      {
        path: "/learn/canvas_0_1_zhu_and_pi",
        name: "canvas_0_1_zhu_and_pi",
        component: "./Learn/Canvas01ZhuAndPi"
      },
      {
        path: "/learn/canvas_0_1_k_line",
        name: "canvas_0_1_k_line",
        component: "./Learn/Canvas01KLine"
      },
      {
        path: "/learn/canvas_edit",
        name: "canvas_edit",
        component: "./Learn/CanvasEdit"
      },
      {
        path: "/learn/canvas_h5_game",
        name: "canvas_h5_game",
        component: "./Learn/CanvasH5Game"
      },
      {
        path: "/learn/canvas_juanzou_game",
        name: "canvas_juanzou_game",
        component: "./Learn/CanvasJuanzouGame"
      },
      {
        path: "/learn/three_sample_game",
        name: "three_sample_game",
        component: "./Learn/ThreeSampleGame"
      },
      {
        path: "/learn/three_gaoji_caizhi",
        name: "three_gaoji_caizhi",
        component: "./Learn/ThreeGaojiCaizhi"
      },
      {
        path: "/learn/three_mini_echart_bar3d",
        name: "three_mini_echart_bar3d",
        component: "./Learn/ThreeMiniEchartBar3d"
      },
      {
        path: "/learn/three_3d_jianmo",
        name: "three_3d_jianmo",
        component: "./Learn/Three3dJianmo"
      },
      {
        path: "/learn/three_r3f",
        name: "three_r3f",
        component: "./Learn/ThreeR3f"
      },
      {
        path: "/learn/shader_glsl",
        name: "shader_glsl",
        component: "./Learn/ShaderGlsl"
      },
      {
        path: "/learn/shader_tu_and_func",
        name: "shader_tu_and_func",
        component: "./Learn/ShaderTuAndFunc"
      },
      {
        path: "/learn/shader_ramdom",
        name: "shader_ramdom",
        component: "./Learn/ShaderRamdom"
      },
      {
        path: "/learn/shader_ray_sdf",
        name: "shader_ray_sdf",
        component: "./Learn/ShaderRaySdf"
      },
      {
        path: "/learn/shader_gaoji_donghua",
        name: "shader_gaoji_donghua",
        component: "./Learn/ShaderGaojiDonghua"
      },
      {
        path: "/learn/webgl_basic",
        name: "webgl_basic",
        component: "./Learn/WebglBasic"
      },
      {
        path: "/learn/weggl_gl_jz",
        name: "weggl_gl_jz",
        component: "./Learn/WegglGlJz"
      },
      {
        path: "/learn/webgc_uv",
        name: "webgc_uv",
        component: "./Learn/WebgcUv"
      },
      {
        path: "/learn/webgl_phong",
        name: "webgl_phong",
        component: "./Learn/WebglPhong"
      }
    ],
  },
  {
    path: '/',
    redirect: '/welcome',
  },
  {
    path: '*',
    layout: false,
    component: './404',
  },
];
