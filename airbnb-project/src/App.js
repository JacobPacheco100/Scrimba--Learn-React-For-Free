
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'
import data from './data'


function App() {
  const cards = data.map((object) => 
     <Card 
      key={object.id}
      prop={object}
     />
  )
  return (
    <div>
      <Navbar />
      <Hero />
      <section className='cards-list'>
        {cards}
      </section>
    </div>
  );
}

export default App;
