import { Helmet } from 'umi';
import { PageContainer } from '@ant-design/pro-layout';
import React from 'react';

export default (): React.ReactElement => {
  return (
    <PageContainer>
      <div className="App">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Home</title>
        </Helmet>
        <header className="App-header">
          <p>
            Edit <code>src/pages/index.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </PageContainer>
  );
};
