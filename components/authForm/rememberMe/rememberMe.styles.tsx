import styled from 'styled-components'

export const Container = styled.div`
&{
    display: flex;
    align-items: center;
    user-select: none;
    width: fit-content;
}
`

export const Label = styled.label`
    &{
        
    }
`

export const CheckBox = styled.input`
    &[type=checkbox]{
        appearance: none;
        -webkit-appearance: none;
        box-sizing: border-box;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 2rem;
        height: 2rem;
        border: 1px solid black;
        border-radius: 6px;
        transition: 0.2s ease-out;
    }
    &[type=checkbox]:checked {
        background-color: black;
    }
    &::after{
        content: '✓';
        font-size: 1.5rem;
        color: white;
    }
`