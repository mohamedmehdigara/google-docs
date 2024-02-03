import React from 'react';

const Toolbar = ({ onFormatChange, onImageInsert }) => {
  const handleFormatChange = (format) => {
    if (onFormatChange) {
      onFormatChange(format);
    }
  };

  const handleImageInsert = () => {
    if (onImageInsert) {
      onImageInsert();
    }
  };

  return (
    <div>
      <button onClick={() => handleFormatChange('bold')}>Bold</button>
      <button onClick={() => handleFormatChange('italic')}>Italic</button>
      <button onClick={() => handleFormatChange('underline')}>Underline</button>

      <select onChange={(e) => handleFormatChange(e.target.value)}>
        <option value="" disabled selected>Select Heading</option>
        <option value="header1">Heading 1</option>
        <option value="header2">Heading 2</option>
        {/* Add more heading options as needed */}
      </select>

      <button onClick={handleImageInsert}>Insert Image</button>
    </div>
  );
};

export default Toolbar;
