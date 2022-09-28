import Link from "next/link"
import { Container, Text } from "./logo.module"

const Logo = () => {
    return (
        <Container>
            <Link href={'/'}>
                <a>
                    <Text>maskmarket</Text>
                </a>
            </Link>
        </Container>
    )
}

export default Logo