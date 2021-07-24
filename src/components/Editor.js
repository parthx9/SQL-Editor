import CodeMirror from '@uiw/react-codemirror';
import 'codemirror/addon/display/autorefresh';
import 'codemirror/addon/comment/comment';
import 'codemirror/addon/edit/matchbrackets';
import 'codemirror/keymap/sublime';
import 'codemirror/theme/neo.css';
import EditorPanel from './EditorPanel';

const Editor = () => {
  const code = "const a = 23"
  return (
    <div className='editor'>
      <div className='row'>
        <div className='col-md-7 col-12 no-gutters'>
          <CodeMirror
            value={code}
            height="200px"
            options={{
              theme: 'neo',
              tabSize: 2,
              keyMap: 'sublime',
              mode: 'sql',
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