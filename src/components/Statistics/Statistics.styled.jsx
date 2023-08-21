import styled from '@emotion/styled';

export const Statistic = styled.section`width: 400px;
margin: 0 auto;`

export const StatTitle = styled.h2`text-align: center;
color: black;
`

export const StatList = styled.ul`display: flex;
padding:0;`

export const StatItem =styled.li`background-color: ${getRandomHexColor};
    width: 100%;
    padding: 15px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    `

export const Label = styled.span`font-size: 14px;
    color: white;`

export const Percent = styled.span`font-size: 20px;
    color: white;`

    function getRandomHexColor() {
        return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
      }