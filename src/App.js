import React, { useState } from 'react';
import Docs from './components/docs';
import DocumentList from './components/DocumentList';
import Editor from './components/Editor'; // Update the path accordingly
import Settings from "./components/Settings";
import Header from './components/Header';

function App() {
  const [selectedDocument, setSelectedDocument] = useState(null);

  const handleDocumentClick = (document) => {
    // Handle the document click, e.g., open the document
    setSelectedDocument(document);
  };

  return (
    <div>
      <Header/>
      <Docs />
      <DocumentList onDocumentClick={handleDocumentClick} />
      {selectedDocument ? (
        <div>
          <h2>Selected Document</h2>
          <p>Title: {selectedDocument.title}</p>
          <p>Content: {selectedDocument.content}</p>
        </div>
      ) : (
        <Editor />
      )}
      <Settings/>
    </div>
    
  );
}

export default App;
