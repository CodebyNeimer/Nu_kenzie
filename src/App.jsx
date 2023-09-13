import { useState } from 'react'
import { Header } from './components/Header'
import { Form } from './components/Form'
import { ListSection } from './components/ListSection'
import { Card } from './components/BudgetCard'
import { GlobalReset } from './styles/reset'
import { GlobalStyles } from './styles/globalStyle'
import { Container } from "./styles/container"

function App() {

  const [list, setList] = useState([])


  return (
    <>    
    <GlobalReset/>
    <GlobalStyles/>
    <Header/>
    <main>
      <Container>
        <div className='formDiv'>
          <Form setList={setList}/>
          <Card list={list}/>
        </div>
        <ListSection list={list} setList={setList}/>
      </Container>
    </main>
    </>

  )
}

export default App
