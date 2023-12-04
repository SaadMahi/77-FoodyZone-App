import { useState } from 'react';
import Header from './components/header/Header';
import Main from './components/main/Main';

const App = () => {
  // search filter and api data
  const [filteredData, setFilteredData] = useState(null);
  const [data, setData] = useState(null);

  return (
    <>
      <Header
        setFilteredData={setFilteredData}
        filteredData={filteredData}
        data={data}
      />
      <Main
        setFilteredData={setFilteredData}
        filteredData={filteredData}
        setData={setData}
        data={data}
      />
    </>
  );
};

export default App;
