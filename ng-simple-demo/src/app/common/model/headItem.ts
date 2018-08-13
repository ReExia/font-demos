import {chartsSiderMenu, myBoardSiderMenu, projectManageMenu} from "../data/headerNavData";

export class HeadItem{

  title : string;

  isActive : boolean;

  link : string;

  siderMenu : any[];
  constructor(title: string, isActive: boolean, link: string, siderMenu: any[]) {
    this.title = title;
    this.isActive = isActive;
    this.link = link;
    this.siderMenu = siderMenu;
  }
}

//头部导航
export const headerMenuItems = [
  new HeadItem('我的面板' , false, 'myBodard', myBoardSiderMenu),
  new HeadItem('项目管理', false, 'projectManager', projectManageMenu),
  new HeadItem('报表中心', false, 'charts', chartsSiderMenu)
];
