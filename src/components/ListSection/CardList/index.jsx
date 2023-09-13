import { Card } from "../Card"

export const CardList = ({list, setList}) => {
    
    const removeCardFromList = (cardId) => {
        if(confirm("Você realmente deseja excluir esse item ?")){

            setList((list) => list.filter(card => card.id !== cardId))
        }
    }

    return (

        <ul>
            {list.map((itemList) => <Card key={itemList.id} itemList={itemList} removeCardFromList={removeCardFromList}/>)}      
        </ul>
    )
}