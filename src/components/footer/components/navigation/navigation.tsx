import {
    Block,
    BlockLink,
    BlockPagesNavigation,
    BlockTitle,
    ContactsItem,
    Container,
    NavigationWrapper,
    PhoneNumber,
} from './navigation.styles'

export const FooterNavigation = () => {
    return (
        <Container>
            <Block>
                <BlockTitle>Информация</BlockTitle>
                <NavigationWrapper>
                    <BlockPagesNavigation>
                        <BlockLink to="/">Главная</BlockLink>
                        <BlockLink to="/">Каталог</BlockLink>
                        <BlockLink to="/">FAQs</BlockLink>
                        <BlockLink to="/">Контакты</BlockLink>
                    </BlockPagesNavigation>
                    <BlockPagesNavigation>
                        <BlockLink to="/">Популярное</BlockLink>
                        <BlockLink to="/">3D маски</BlockLink>
                        <BlockLink to="/">Классические</BlockLink>
                    </BlockPagesNavigation>
                </NavigationWrapper>
            </Block>
            <Block>
                <BlockTitle>Контакты</BlockTitle>
                <NavigationWrapper>
                    <BlockPagesNavigation>
                        <PhoneNumber href="tel:+79781111111">
                            +7 (978) xxx-xxx-xx
                        </PhoneNumber>
                        <BlockLink to="/">Главная</BlockLink>
                        <BlockLink to="/">Главная</BlockLink>
                        <BlockLink to="/">Главная</BlockLink>
                    </BlockPagesNavigation>
                    <BlockPagesNavigation>
                        <ContactsItem>Таганрог, ул Хххххххх, ххх</ContactsItem>
                        <ContactsItem>Работаем с 9:00 - 22:00</ContactsItem>
                        <ContactsItem>xxxxxxxx@mail.ru</ContactsItem>
                    </BlockPagesNavigation>
                </NavigationWrapper>
            </Block>
        </Container>
    )
}
