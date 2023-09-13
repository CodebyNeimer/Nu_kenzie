import { useState } from "react"
import { StyledInput } from "../../styles/form"
import { StyledButton, StyledSelect, FormLabel, StyledForm } from "../../styles/form"
import { v4 as uuidv4 } from 'uuid';

export const Form = ({setList}) => {

    const [description, setDescription] = useState("")
    const [value, setValue] = useState("")
    const [typeOfData, setTypeData] = useState("Entrada")

    const addToList = () => {
        const newItem = {id: uuidv4(), description, value, typeOfData}

        setList((list) => [...list, newItem])
    }
    
    const submit = (e) => {
        e.preventDefault()
        addToList()
        setDescription("")
        setValue("")
    }

    return (

    <StyledForm onSubmit={submit}>
        <FormLabel>Descrição</FormLabel> 
        <StyledInput 
            type="text" 
            placeholder="Digite aqui sua descrição" 
            required
            value={description}
            onChange={(e) => {setDescription(e.target.value)}}
        />
        <span>Ex: Compra de roupas</span>
        <FormLabel>Valor(R$)</FormLabel>
        <StyledInput 
            type="number" 
            placeholder="Insira o valor" 
            required
            value={value} 
            onChange={(e) => {setValue(e.target.value)}}
        />
        <FormLabel>Tipo de valor</FormLabel>
        <StyledSelect required onChange={(e) => {setTypeData(e.target.value)}}>
            <option value="Entrada">Entrada</option>
            <option value="Saida">Saida</option>
        </StyledSelect>
        <StyledButton type="submit">Inserir Valor</StyledButton>
    </StyledForm>
    )
}