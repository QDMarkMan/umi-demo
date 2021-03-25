import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';

export default (): React.ReactElement => {
  return (
    <PageContainer>
      <div className="App">
        {/* */}
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
        {/* Container */}
      </div>
    </PageContainer>
  );
};
