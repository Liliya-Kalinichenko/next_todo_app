"use server"

import React from 'react';
import { getData } from '../actions/todoActions';
import AppContainer from './AppContainer';
import PageLink from './PageLink';

const App = async () => {
  const todos = await getData();
  
  return (
    <>
      <AppContainer todos={todos} />
      {todos.length > 1 && <PageLink />}      
    </>
  );
};

export default App;
