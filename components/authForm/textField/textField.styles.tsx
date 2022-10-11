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
    border: 1px solid #9e9e9e;
    padding: 6px 12px;
    font-size: 18px;
    border-radius: 6px;
}`

export const Label = styled.label`
    &{
        font-size: 0.8rem;
        font-weight: bold;
    }
`