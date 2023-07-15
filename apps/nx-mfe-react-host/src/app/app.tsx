import * as React from 'react';

import NxWelcome from './nx-welcome';

import { Link, Route, Routes } from 'react-router-dom';

const NxMfeReactRemote = React.lazy(() => import('nx-mfe-react-remote/Module'));

export function App() {
  return (
    <React.Suspense fallback={null}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/nx-mfe-react-remote">NxMfeReactRemote</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<NxWelcome title="nx-mfe-react-host" />} />
        <Route path="/nx-mfe-react-remote" element={<NxMfeReactRemote />} />
      </Routes>
    </React.Suspense>
  );
}

export default App;
