import React from 'react';
import Search from './Search';

function App() {
  return (
    <Search
    placeholder="input search text"
    enterButton="Search"
    size="large"
    onSearch={value => console.log(value)}
  />
  );
}

export default App;
