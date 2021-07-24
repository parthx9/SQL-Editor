import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import SideBar from './components/SideBar';
import Editor from './components/Editor'
import QueryResults from './components/QueryResults';
import { useEffect, useMemo, useState } from 'react';
import MainContext from './utils/MainContext';



function App() {

  const [query, setQuery] = useState('')
  const [project, setProject] = useState({
    saved: ['SELECT * FROM orderTable'],
    history: ['SELECT * FROM orderTable'],
    data: []
  })

  useEffect(() => {
    console.log(project)
  })

  const contextValue = useMemo(() => ({ query, setQuery, project, setProject }), [query, project])

  return (
    <div className="App">
      <MainContext.Provider value={contextValue}>
        <Header />
        <div className='content'>
          <div className='row'>
            <div className='col-md-3'>
              <SideBar />
            </div>
            <div className='col-md-9 col-12 editor-area'>
              <Editor />
              <QueryResults />
            </div>
          </div>
        </div>
      </MainContext.Provider>

    </div>
  );
}

export default App;
