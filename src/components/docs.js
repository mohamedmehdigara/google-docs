import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from './modals';

const DocsContainer = styled.div`
  /* Add your styling for the main container */
`;

const AddButton = styled.button`
  /* Add your styling for the add button */
`;

export default function Docs() {
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);

    return (
        <DocsContainer>
            <h1>Docs Clone</h1>

            <AddButton onClick={handleOpen}>
                Add a Document
            </AddButton>

            <Modal open={open} setOpen={setOpen} />
        </DocsContainer>
    );
}
