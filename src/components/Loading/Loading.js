import React from 'react';
import styled from 'styled-components';

const Main = styled.main`
    display: flex;
    height: calc(100vh - 150px);
`

const Div = styled.div`
    background-color: #ffffff;
    border-bottom: 1px solid #cddae2;
    box-sizing: border-box;
    margin: auto;
    max-width: 500px;
    width: 90%;
    padding: 30px 30px 30px 30px;
`;

const Title = styled.h1`
    color: black;
    font-size: 2rem;
    margin-left: 10px;
    margin-top: 10px;
    text-align: center;
`;

const Loading = () => (
    <>
        <Main>
            <Div>
                <Title>Searching businesses...</Title>
            </Div>
           
        </Main>
    </>
)

export default Loading;