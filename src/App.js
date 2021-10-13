import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from '../src/components/pages/Main'


function App() {
  
  return (
    <BrowserRouter>
    <Route exact path='/'>
<Main/>
    </Route>
    </BrowserRouter>
 
  );
}

export default App;
