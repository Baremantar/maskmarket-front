import styled from "styled-components";

export const List = styled.ul`
    &{
        display: flex;
        flex-direction: row;
        margin: 0px;
        padding: 0px;
    }
`

export const ListItem = styled.li`
    &{
    }
    &::marker{
        display: none;
        content: none
    }
`