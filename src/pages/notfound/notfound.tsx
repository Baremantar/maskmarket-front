import { Container, Link } from './notfound.styles'

export const NotFound = () => {
    return (
        <Container>
            <h1>{'Страница, которую Вы искали не удалось найти. :('}</h1>
            <Link to="/">На главную</Link>
        </Container>
    )
}
