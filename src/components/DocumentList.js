import React from 'react';
import styled from 'styled-components';

// Dummy data for the document list
const documents = [
    { id: 1, title: 'Document 1', content: 'Content for Document 1...', created_at: '2022-02-01' },
    { id: 2, title: 'Document 2', content: 'Content for Document 2...', created_at: '2022-02-02' },
    { id: 3, title: 'Document 3', content: 'Content for Document 3...', created_at: '2022-02-03' },
    // Add more documents as needed
];

// Styled Components
const DocumentContainer = styled.div`
    margin-bottom: 20px;
    border: 1px solid #ddd;
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
        background-color: #f5f5f5;
    }
`;

const DocumentTitle = styled.h3`
    margin: 0;
    font-size: 1.2em;
`;

const DocumentDetails = styled.p`
    margin: 5px 0 0;
    font-size: 0.8em;
    color: #777;
`;

const DocumentList = ({ onDocumentClick }) => {
    return (
        <div>
            <h2>Document List</h2>
            {documents.map((document) => (
                <DocumentContainer key={document.id} onClick={() => onDocumentClick(document)}>
                    <DocumentTitle>{document.title}</DocumentTitle>
                    <DocumentDetails>
                        Created at: {new Date(document.created_at).toLocaleDateString()}
                    </DocumentDetails>
                </DocumentContainer>
            ))}
        </div>
    );
};

export default DocumentList;
