import React from 'react';
import { Layout } from 'antd';
import { SIDE_NAV_WIDTH, SIDE_NAV_DARK, NAV_TYPE_SIDE } from 'constants/theme';
import { Scrollbars } from 'react-custom-scrollbars';
// import MenuContent from './MenuContent';

const { Sider } = Layout;

interface IProps {
  navCollapsed?: boolean;
  sideNavTheme?: string;
  routeInfo: string;
  hideGroupTitle?: boolean;
}

export const SideNav: React.FC<IProps> = ({
  navCollapsed,
  sideNavTheme,
  routeInfo,
  hideGroupTitle,
}) => {
  const props = { sideNavTheme, routeInfo, hideGroupTitle };
  return (
    <Sider
      className={`side-nav ${sideNavTheme === SIDE_NAV_DARK ? 'side-nav-dark' : ''}`}
      width={SIDE_NAV_WIDTH}
      collapsed={navCollapsed}
    >
      <Scrollbars autoHide>{/* <MenuContent type={NAV_TYPE_SIDE} {...props} /> */}</Scrollbars>
    </Sider>
  );
};

// const mapStateToProps = ({ theme }) => {
//   const { navCollapsed, sideNavTheme } =  theme;
//   return { navCollapsed, sideNavTheme }
// };

export default SideNav;
