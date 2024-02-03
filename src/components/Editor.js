import React, { useState, useRef, useEffect } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Toolbar from './Toolbar';

const Editor = () => {
  const [content, setContent] = useState('');

  // Ref to the Quill editor instance
  const quillRef = useRef(null);

  // Effect to focus on the editor when it's mounted
  useEffect(() => {
    if (quillRef.current) {
      quillRef.current.focus();
    }
  }, []);

  const handleEditorChange = (value) => {
    setContent(value);
  };

  const handleFormatChange = (format) => {
    // Apply the selected format to the editor content
    if (quillRef.current) {
      quillRef.current.format(format, true);
    }
  };

  const handleImageInsert = () => {
    // Open a file picker or implement logic to insert an image into the editor content
    console.log('Image insert logic goes here');
  };

  return (
    <div>
      <h2>Document Editor</h2>
      <Toolbar onFormatChange={handleFormatChange} onImageInsert={handleImageInsert} />

      <ReactQuill
        ref={quillRef}
        theme="snow"
        value={content}
        onChange={handleEditorChange}
        modules={Editor.modules}
        formats={Editor.formats}
      />
    </div>
  );
};

Editor.modules = {
  toolbar: {
    container: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ list: 'ordered' }, { list: 'bullet' }],
      [{ indent: '-1' }, { indent: '+1' }],
      ['blockquote', 'code-block'],
      [{ color: [] }, { background: [] }],
      ['link', 'image', 'video'],
      ['clean'],
    ],
  },
};

Editor.formats = [
  'header', 'font', 'size',
  'bold', 'italic', 'underline', 'strike',
  'list', 'bullet', 'indent',
  'link', 'image', 'video',
  'color', 'background',
];

export default Editor;
