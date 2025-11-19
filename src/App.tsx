
import CardComponent from './components/card/card.component.tsx'
import {ICard} from "./interfaces/card.interface.tsx";

import './App.css'

function App() {
  const card: ICard = {
    title: 'Title',
    description: ' text',
    href: 'https://netology.ru/',
    button: 'Go to Netology',
    width: '20rem',
    imageSrc: "https://avatars.githubusercontent.com/u/25052038?s=200&v=4",
  }

  return (
    <>
      <CardComponent {...card}>
        <img src={card.imageSrc} alt="netology" />
      </CardComponent>

      <CardComponent {...card}></CardComponent>
    </>
  )
}

export default App
