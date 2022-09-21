import styled from "styled-components";

export const List = styled.ul`
    &{
        display: flex;
        flex-direction: row;
        margin: 0px;
        padding: 0px;
        gap: 12px;
    }
`

export const ListItem = styled.li`
    &{
        display: block;
        padding: 0px;
        margin: 0px;
        list-style-type: none;
        height: fit-content;
    }
    &::marker{
        display: none;
        content: none
    }
`