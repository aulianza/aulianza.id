import MonacoEditor, { EditorProps } from '@monaco-editor/react';

interface CodeEditorProps {
  code: string;
  height?: string;
  onChange: EditorProps['onChange'];
}

const CodeEditor = ({ code, onChange, height = '300px' }: CodeEditorProps) => {
  return (
    <MonacoEditor
      height={height}
      language='javascript'
      theme='vs-dark'
      value={code}
      onChange={onChange}
      defaultValue='// write your code here'
      options={{
        fontSize: 14,
        minimap: {
          enabled: false,
        },
      }}
    />
  );
};

export default CodeEditor;
