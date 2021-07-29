import React from 'react';
import SideNav from 'components/layout-components/SideNav';
import HeaderNav from 'components/layout-components/HeaderNav';
// import Footer from 'components/layout-components/Footer';
// import AppViews from 'views/app-views';
import { Layout, Grid } from 'antd';

import navigationConfig from 'data/menu';
import utils from 'utils';

export const AppLayout: React.FC = () => {
  const isMobile = false;
  const currentRouteInfo = {
    routeInfo: {
      key: 'apps-chat',
      path: '/app/apps/chat',
      title: 'sidenav.apps.chat',
      icon: '',
      breadcrumb: false,
      submenu: '[]',
    },
  };

  return (
    <Layout>
      <HeaderNav />
      <Layout className="app-container">
        {/* <SideNav routeInfo={currentRouteInfo} /> */}
        {/* <Layout className="app-layout"> */}
        {/* <div className="app-content">
            <Layout.Content>
              <AppViews />
            </Layout.Content>
          </div> */}
        {/* <Footer /> */}
        {/* </Layout> */}
      </Layout>
    </Layout>
  );
};
export default AppLayout;
