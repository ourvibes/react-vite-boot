import { HashRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { Alert, ConfigProvider, Empty } from 'antd';
import locale from 'antd/es/locale/zh_CN';

import { ErrorBoundary } from '@components';
import Routes from './routers';

function App() {
  return (
    <ConfigProvider renderEmpty={() => <Empty />} locale={locale} pageHeader={{ ghost: false }}>
      <ErrorBoundary
        fallback={() => 
          <Alert
            type="error"
            message=":-)"
            description="Oops!!!"
          />
        }
      >
        <HashRouter>
          <RecoilRoot>
            <Routes />
          </RecoilRoot>
        </HashRouter>
      </ErrorBoundary>
    </ConfigProvider>
  );
}

export default App;
