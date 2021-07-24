// import CodeMirror from '@uiw/react-codemirror';
import { Controlled as CodeMirror } from 'react-codemirror2'
import 'codemirror/addon/display/autorefresh';
import 'codemirror/keymap/sublime';
import 'codemirror/theme/neo.css';
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material-palenight.css";
import "codemirror/mode/sql/sql";
import "codemirror/keymap/sublime";
import "codemirror/addon/hint/sql-hint.js";
import EditorPanel from './EditorPanel';
import { useContext } from 'react';
import MainContext from '../utils/MainContext';

const Editor = () => {

  const { query, setQuery } = useContext(MainContext)

  return (
    <div className='editor'>
      <div className='row'>
        <div className='col-md-7 col-12 no-gutters'>
          <CodeMirror
            value={query}
            name="Editor"
            onBeforeChange={(e, d, v) => setQuery(v)}
            className="code-mirror-wrapper"
            options={{
              lint: true,
              mode: "sql",
              lineNumbers: true,
              keyMap: "sublime",
              matchBrackets: true,
              addModeClass: true,
              showHint: true,
            }}
            aria-label="code-editor"
          />
          <p style={{ fontSize: "0.8rem" }} className='text-2 pt-3 mb-0'>
            <strong>NOTE: </strong>Click on Saved/Previous Queries to select.
          </p>
        </div>
        <div className='col-md-5'>
          <EditorPanel />
        </div>
      </div>

    </div>
  )
}

export default Editor