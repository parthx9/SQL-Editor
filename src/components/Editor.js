import CodeMirror from '@uiw/react-codemirror';
import 'codemirror/addon/display/autorefresh';
import 'codemirror/addon/comment/comment';
import 'codemirror/addon/edit/matchbrackets';
import 'codemirror/keymap/sublime';
import 'codemirror/theme/neo.css';
import EditorPanel from './EditorPanel';
import { useContext } from 'react';
import MainContext from '../utils/MainContext';

const Editor = () => {

  const { query } = useContext(MainContext)

  return (
    <div className='editor'>
      <div className='row'>
        <div className='col-md-7 col-12 no-gutters'>
          <CodeMirror
            value={query}

            height="200px"
            options={{
              theme: 'neo',
              tabSize: 2,
              keyMap: 'sublime',
              mode: 'sql',
              placeholder: "Enter your query here"
            }}
          />
        </div>
        <div className='col-md-5'>
          <EditorPanel />
        </div>
      </div>

    </div>
  )
}

export default Editor