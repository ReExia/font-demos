import { MenuItem } from "../model/MenuItem";

export const MenuData = [

  {
    "menuId": "abc",
    "text": "首页",
    "translate": "first",
    "link": "home",
    "icon": "anticon anticon-home",
    "isTop": true,
    "menuClass": [],
    "children": []
  },

  {
    "menuId": "application",
    "text": "应用",
    "translate": "application",
    "link": "",
    "icon": "anticon anticon-appstore",
    "isTop": true,
    "menuClass": [],
    "children": [
      {
        "menuId": "application/list",
        "text": "应用列表",
        "translate": "application/list",
        "link": "application/list",
        "icon": "",
        "isTop": false,
        "menuClass": [],
        "children": [

        ]
      },
    ]
  },

  {
    "menuId": "useGCharts",
    "text": "G2图表",
    "translate": "useGCharts",
    "link": "",
    "icon": "anticon anticon-pie-chart",
    "isTop": true,
    "menuClass": [],
    "children": [
      {
        "menuId": "g2Charts/useGCharts",
        "text": "G2图表",
        "translate": "g2Charts/useGCharts",
        "link": "g2Charts/useGCharts",
        "icon": "",
        "isTop": false,
        "menuClass": [],
        "children": [

        ]
      },
    ]
  },

  {
    "menuId": "useEcharts",
    "text": "ECharts",
    "translate": "ECharts",
    "link": "",
    "icon": "anticon anticon-dot-chart",
    "isTop": true,
    "menuClass": [],
    "children": [
      {
        "menuId": "echarts/useEcharts",
        "text": "ECharts",
        "translate": "echarts/useEcharts",
        "link": "echarts/useEcharts",
        "icon": "",
        "isTop": false,
        "menuClass": [],
        "children": [

        ]
      },
    ]
  },

  {
    "menuId": "useVideo",
    "text": "Video",
    "translate": "Video",
    "link": "",
    "icon": "anticon anticon-video-camera",
    "isTop": true,
    "menuClass": [],
    "children": [
      {
        "menuId": "video/useVideo",
        "text": "video",
        "translate": "video/useVideo",
        "link": "video/useVideo",
        "icon": "",
        "isTop": false,
        "menuClass": [],
        "children": [
            
        ]
      },
    ]
  },


  // {
  //   "menuId" : "abc",
  //   "text" : "首页",
  //   "translate" : "first",
  //   "link" : "first",
  //   "icon" : "xxx",
  //   "menuClass" : [],
  //   "children" : [
  //     {"menuId" : "abc","text" : "首页","translate" : "first","link" : "first","icon" : "xxx","menuClass" : [],"children" : [
  //       {"menuId" : "abc","text" : "首页","translate" : "first","link" : "first","icon" : "xxx","menuClass" : [],"children" : [
  //         {"menuId" : "abc","text" : "首页","translate" : "first","link" : "first","icon" : "xxx","menuClass" : [],"children" : []}
  //       ]}
  //     ]}
  //   ]
  // }
];

