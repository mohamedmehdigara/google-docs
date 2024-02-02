import React from 'react';

const documents = [
  { id: 1, title: 'Document 1', content: 'Content for Document 1...' },
  { id: 2, title: 'Document 2', content: 'Content for Document 2...' },
  { id: 3, title: 'Document 3', content: 'Content for Document 3...' },
  // Add more documents as needed
];

const DocumentList = ({ onDocumentClick }) => {
  return (
    <div>
      <h2>Document List</h2>
      <ul>
        {documents.map((document) => (
          <li key={document.id} onClick={() => onDocumentClick(document)}>
            {document.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DocumentList;
