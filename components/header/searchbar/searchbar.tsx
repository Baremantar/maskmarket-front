import { FormEvent } from "react"
import { Button, Container, SearchField } from "./searchbar.styles"

export const Searchbar = () => {
    function handleSearch(event: FormEvent) {
        event.preventDefault()
        const data = new FormData(event.target as HTMLFormElement)
        console.log(data.get('search'))
    }
    return (
        <Container onSubmit={handleSearch}>
            <SearchField name='search' placeholder="Find..." />
            <Button> 🔍︎ </Button>
        </Container>
    )
}