import { FormEvent, useEffect, useRef, useState } from "react"
import { Button, Container, SearchField } from "./searchbar.styles"

export const Searchbar = () => {
    const [inputFocused, setInputFocused] = useState<boolean>(false)
    const [searchField, setSearchField] = useState<string>('')
    const button = useRef<HTMLButtonElement>(null)

    function handleSearch(event: FormEvent) {
        event.preventDefault()

        const data = new FormData(event.target as HTMLFormElement)
        const searchQuery = data.get('search')

        console.log(`Search query is '${searchQuery}'`)

        setSearchField('')
        if(button.current){
            button.current.blur()
        }

    }

    function onFocusHandler() {
        setInputFocused(true)
    }

    function onBlurHandler() {
        setInputFocused(false)
    }

    return (
        <Container focused={inputFocused} onSubmit={handleSearch}>
            <SearchField 
                autoComplete='off' 
                onFocus={onFocusHandler} 
                onBlur={onBlurHandler} 
                name='search'
                placeholder="Find..."  
                value={searchField} 
                onChange={e => setSearchField(e.currentTarget.value)}
            />
            <Button onFocus={onFocusHandler} onBlur={onBlurHandler} type='submit' ref={button}> 🔍︎ </Button>
        </Container>
    )
}