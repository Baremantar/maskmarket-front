import styled from 'styled-components'

export const Container = styled.div`
    &{
        display: flex;
        flex-direction: column;
        gap: 4px;
    }
`

export const TextArea = styled.input`
&{
    appearance: none;
    background-color: #fff;
    box-shadow: 0 1px 4px 0 rgb(34 34 34 / 10%) inset;
    border-color: rgba(34, 34, 34, 0.15);
    border-style: solid;
    border-width: 1px;
    border-radius: 6px;
    color: #222222;
    display: block;
    line-height: 28px;
    outline: 3px solid transparent;
    padding: 12px 9px;
    box-sizing: border-box;
    padding: 8px 12px;
    font-size: 18px;
    width: 100%;
    transition: border 200ms ease-out, background 200ms ease-out;
}
&:focus{
    border: 1px solid #222222;
    box-shadow: 0 0 0 2px #ffffff, 0 0 0 4px #4d6bc6;
}
`

export const Label = styled.label`
    &{
        font-weight: 700;
        color: #222;
        font-size: 13px;
        font-weight: bold;
    }
`