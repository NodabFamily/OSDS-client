import React from 'react'
import styled from 'styled-components';

const BookmarkDom = styled.div`
    width: 100%;
    height: 94%;
    background: #FFFFFF;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Bookmark = () => {
  return (
    <>
        <BookmarkDom>
            <div>Bookmark</div>
        </BookmarkDom>
    </>
  )
}

export default Bookmark