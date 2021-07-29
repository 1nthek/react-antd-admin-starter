import { DashboardOutlined, DotChartOutlined, FundOutlined } from '@ant-design/icons';
import { MENU_PATH_A, MENU_PATH_B, MENU_PATH_C } from 'constants/path';

const dashBoardNavTree = [
  {
    path: `${MENU_PATH_A}`,
    title: '메뉴 A',
    submenu: [
      {
        path: `${MENU_PATH_B}`,
        title: '메뉴 B',
        submenu: [],
      },
      {
        path: `${MENU_PATH_C}`,
        title: '메뉴 C',
        submenu: [],
      },
    ],
  },
];

const navigationConfig = [...dashBoardNavTree];

export default navigationConfig;
