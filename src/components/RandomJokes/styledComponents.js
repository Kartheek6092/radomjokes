import styled from 'styled-components'

export const JokesContainer = styled.div `
    width: 100vw;
    height: 100vh;
    background-image: linear-gradient(to right, rgb(37, 109, 255), #282a2e);
    box-sizing: border-box;
    padding: 0px 15%;
    display: flex;
    flex-direction: column;

` 

export const Heading = styled.h1 `
    color: rgb(16, 193, 16);
    font-weight: 600;
    text-align: center;
`

export const CustomUl = styled.ul `
    width: 100%
    padding-left: 0px;
    list-style: none;
    display: flex;
    justify-content: space-between;
    padding-top: 2%;
    flex-wrap: wrap;

` 
export const JokeItem = styled.li `
    width: 22%;
    height: 20vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #ffffff;
    border-radius: 5px;
    margin-bottom: 2%;
    text-align: center;
    hover:: opacity 0.5:
`

export const Topic = styled.h3 `
    color: #0202a0;
    text-transform: capitalize;
`

export const CustomPara = styled.p `
    color: purple;
    text-transform: capitalize;
    font-size: 12px;

`

export const CustomBtn = styled.button `
    border-style: none;
    outline:none!important;
    cursor: pointer;
    background-color: transparent;
`