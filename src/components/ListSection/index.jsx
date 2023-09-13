import { CardList } from "./CardList"
import { StyledSection } from "../../styles/listSection"

export const ListSection = ({list, setList}) => {

    return (

        <StyledSection>
            <h2>Resumo Financeiro</h2>
            {list.length > 0 ? <CardList list={list} setList={setList}/> : <h2>Você ainda não possui nenhum lançamento</h2>}
        </StyledSection>
    )
}