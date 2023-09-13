import {StyledCard} from "../../../styles/listSection"

export const Card = ({itemList, removeCardFromList}) => {

    
    return (

        <StyledCard>
            <div className={itemList.typeOfData === "Entrada" ? "typeOfInfo" : "lessMoney"}>
                <h3>{itemList.description}</h3>
                <span>R${itemList.value}</span>
            </div>
            <div className={itemList.typeOfData === "Entrada" ? "typeOfInfo" : "lessMoney"}>
                <p>{itemList.typeOfData}</p>
                <button onClick={() => removeCardFromList(itemList.id)}>Excluir</button>
            </div>
        </StyledCard>
    )
}