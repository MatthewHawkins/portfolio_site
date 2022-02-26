/** @jsxImportSource @emotion/react */

import { jsx, css } from '@emotion/react'

import Sidebar from './components/Sidebar';
import MainDisplay from './components/MainDisplay';

function App() {
  return (
    <div>
      <Sidebar />
      <MainDisplay />
    </div>
  );
}

export default App;
