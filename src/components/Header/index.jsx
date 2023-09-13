import LogoImg from "../../assets/Nu Kenzie.png"
import { StyledHeader } from "../../styles/header"
import { Container } from "../../styles/container"

export const Header = () => {
    
    return (
        <StyledHeader>
            <Container>
             <img src={LogoImg} alt="Imagem do Logo da empresa Nu Kenzie" />
            </Container>
        </StyledHeader>
    )     
}