import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import SideBar from './components/SideBar';
import Editor from './components/Editor'

function App() {
  return (
    <div className="App">
      <Header />
      <div className='content'>
        <div className='row'>
          <div className='col-md-3'>
            <SideBar />
          </div>
          <div className='col-md-9 col-12'>
            <Editor />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
