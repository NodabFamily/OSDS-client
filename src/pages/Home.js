import React from 'react'
import styled from 'styled-components';

const HomeDom = styled.div`
    width: 100%;
    height: 94%;
    background: #FFFFFF;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Home = () => {
  return (
    <>
        <HomeDom>
            <div>Home</div>
        </HomeDom>
    </>
  )
}

export default Home