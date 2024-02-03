import React, { useState } from 'react';
import Toolbar from './Toolbar'; // Update the path accordingly

const Editor = () => {
  const [content, setContent] = useState('');

  const handleEditorChange = (value) => {
    setContent(value);
  };

  const handleFormatChange = (format) => {
    // Implement logic to apply the selected format to the editor content
    console.log('Format changed:', format);
  };

  const handleImageInsert = () => {
    // Implement logic to insert an image into the editor content
    console.log('Image inserted');
  };

  return (
    <div>
      <h2>Document Editor</h2>
      <Toolbar onFormatChange={handleFormatChange} onImageInsert={handleImageInsert} />
    </div>
  );
};

Editor.modules = {
  toolbar: false, // Disable Quill's built-in toolbar as we're using our custom Toolbar
};

Editor.formats = [
  'header', 'font', 'size',
  'bold', 'italic', 'underline',
  'list', 'bullet', 'indent',
  'link', 'image', 'video',
  'color', 'background',
];

export default Editor;
