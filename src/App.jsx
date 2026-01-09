import { Navbar } from './components/Navbar'
import { ItemListContainer } from './components/ItemListContainer'

function App() {
  return (
    <div>
      <Navbar />
      <ItemListContainer text="Bienvenido/a a mi tienda virtual" />
    </div>
  )
}

export default App