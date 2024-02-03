import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from './modals';
import DocumentList from './DocumentList'; // New Component
import Editor from './Editor'; // New Component

// Styled Components
const DocsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const Header = styled.h1`
  font-size: 2em;
  margin-bottom: 20px;
`;

const AddButton = styled.button`
  padding: 10px;
  font-size: 1em;
  cursor: pointer;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  margin-bottom: 20px;
`;

export default function Docs() {
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);

    // Dummy data for the document list
    const documents = [
        { id: 1, title: 'Document 1', content: 'Content for Document 1...' },
        { id: 2, title: 'Document 2', content: 'Content for Document 2...' },
        { id: 3, title: 'Document 3', content: 'Content for Document 3...' },
    ];

    // State to track the selected document for editing
    const [selectedDocument, setSelectedDocument] = useState(null);

    // Callback to handle document selection from the list
    const handleDocumentClick = (document) => {
        setSelectedDocument(document);
        setOpen(true); // Open the modal when selecting a document for editing
    };

    // Callback to handle document creation
    const handleDocumentCreate = () => {
        // Implement logic for creating a new document
        console.log('Creating a new document...');
    };

    return (
        <DocsContainer>
            <Header>Docs Clone</Header>

            <AddButton onClick={handleDocumentCreate}>
                Add a Document
            </AddButton>

            <DocumentList documents={documents} onDocumentClick={handleDocumentClick} />

            <Modal open={open} setOpen={setOpen}>
                {/* Pass the selected document to the Editor */}
                <Editor selectedDocument={selectedDocument} />
            </Modal>
        </DocsContainer>
    );
}
