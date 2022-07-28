import React from 'react'
import styled from 'styled-components';

const SettingDom = styled.div`
    width: 100%;
    height: 94%;
    background: #FFFFFF;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Setting = () => {
  return (
    <>
        <SettingDom>
            <div>Setting</div>
        </SettingDom>
    </>
  )
}

export default Setting