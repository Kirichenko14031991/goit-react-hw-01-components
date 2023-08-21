import styled from '@emotion/styled';

export const FriendsList = styled.ul`list-style: none;
margin: 0 auto;
width:400px`

export const ListItem = styled.li`display:flex;
border: 1px solid black;
align-items: center;
margin-bottom: 15px;
`

const getActiveColor = props => {
    switch (props.isOnline) {
        case true:
            return "green";
        case false:
            return "red";
        default:
            return null
     
    }   
};

export const Status = styled.span`background-color: ${getActiveColor};
margin-right: 10px;
margin-left: 10px;
width: 15px;
height: 15px;
border-radius: 50%;
`
