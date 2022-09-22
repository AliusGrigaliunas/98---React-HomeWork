import MainCard from 'components';
import { ItemContextProvider } from 'contexts/ItemContext';
import React from 'react';

const App:React.FC = () => (
  <ItemContextProvider>
    <MainCard />
  </ItemContextProvider>

  );

export default App;
