import React from 'react'
import styled from 'styled-components';

const ArchiveDom = styled.div`
    width: 100%;
    height: 94%;
    background: #FFFFFF;
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Archive = () => {
  return (
    <>
        <ArchiveDom>
            <div>Archive</div>
        </ArchiveDom>
    </>
  )
}

export default Archive