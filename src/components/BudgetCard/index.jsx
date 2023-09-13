import { AllValuesCard } from "../../styles/bugetCard"

export const Card = ({list}) => {

    const getTotalValue = list.reduce((accumulator, item) => {
        
        if(item.typeOfData === "Entrada"){
            console.log(`oi`)
            return accumulator + Number(item.value)

        } else {
            console.log(`thcau`)
            return accumulator - Number(item.value)
        }

        
    }, 0)

    

    return (
        <AllValuesCard>
            <h3>Valor Total:    <span>R${getTotalValue} </span></h3>
            <p>Valor referente ao Saldo</p>
        </AllValuesCard>
    )
}

