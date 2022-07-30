import './App.css';
import Navbar from './components/Navbar'
import Card from './components/Card'
import data from './data'

function App() {

  const card = data.map((item) =>
    <Card 
      key={item.id}
      prop={item}
    />
  )

  return (
    <div className="App">
       <Navbar/>
       <section className='card-list'>
        {/* <Card /> */}
        {card}
       </section>
    </div>
  )
}

export default App;
