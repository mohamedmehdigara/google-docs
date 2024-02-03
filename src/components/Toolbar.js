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
      <button onClick={() => handleFormatChange('bold')} title="Bold">
        <strong>B</strong>
      </button>
      <button onClick={() => handleFormatChange('italic')} title="Italic">
        <em>I</em>
      </button>
      <button onClick={() => handleFormatChange('underline')} title="Underline">
        <u>U</u>
      </button>

      <select onChange={(e) => handleFormatChange(e.target.value)} title="Heading">
        <option value="" disabled defaultValue>
          Select Heading
        </option>
        <option value="header1">Heading 1</option>
        <option value="header2">Heading 2</option>
        <option value="header3">Heading 3</option>
        {/* Add more heading options as needed */}
      </select>

      <button onClick={handleImageInsert} title="Insert Image">
        <span role="img" aria-label="Image">
          🖼️
        </span>
      </button>
      {/* Add more formatting options as needed */}
    </div>
  );
};

export default Toolbar;
