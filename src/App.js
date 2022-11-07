import './App.css';
import React from 'react';
import Toolbar from './Components/Toolbar';
import {TableProvider} from './Contexts/TableContext';
import Workspace from './Components/Workspace';

import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [tables, setTables] = React.useState([]); // eventually, will be an API call to initialize the tables

  return (
    <div className="App">
      <TableProvider value={{tables, setTables}}> 
        <Toolbar/>
        <Workspace/>
      </TableProvider>
    </div>
  );
}

export default App;
