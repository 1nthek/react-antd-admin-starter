import React from 'react';
import { Button } from 'antd';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Global } from '@emotion/react';
import { RecoilRoot } from 'recoil';
import Routes from './routes';
import { GlobalStyle } from './styles';

// Create a client
const queryClient = new QueryClient();

const App: React.FC = () => (
  <div className="App">
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <Global styles={GlobalStyle} />
        <Routes />
      </QueryClientProvider>
    </RecoilRoot>
  </div>
);

export default App;
