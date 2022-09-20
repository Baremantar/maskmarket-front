import { FormEvent, useEffect, useState } from "react"
import { Button, Container, SearchField } from "./searchbar.styles"

function handleSearch(event: FormEvent) {
    event.preventDefault()
    const data = new FormData(event.target as HTMLFormElement)
    console.log(data.get('search'))
}

export const Searchbar = () => {
    const [focused, setFocused] = useState<boolean>(false)

    function onFocusHandler() {
        setFocused(true)
    }

    function onBlurHandler() {
        setFocused(false)
    }

    return (
        <Container focused={focused} onSubmit={handleSearch}>
            <SearchField autoComplete='off' onFocus={onFocusHandler} onBlur={onBlurHandler} name='search' placeholder="Find..." />
            <Button onFocus={onFocusHandler} onBlur={onBlurHandler} type='submit'> 🔍︎ </Button>
        </Container>
    )
}