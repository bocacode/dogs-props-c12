import './App.css'
import Dog from './components/Dog'

const dogs = [
  { name: 'Ryder', age: 4, breed: 'PR Street Dog' },
  { name: 'Goldy', age: 12, breed: 'Yellow Lab' },
  { name: 'Daisy', age: 14, breed: 'Dumbass', deceased: true },
  { name: 'Bailey', age: 14, breed: 'Jack Russell Terr.' },
  { name: 'Indigo', age: 10, breed: 'Great Dane / Black Lab', deceased: true },
]

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Dogs:</h1>
        {dogs.map(dog => <Dog key={dog.name}
                              age={dog.age}
                              name={dog.name}
                              deceased={dog.deceased}
                              breed={dog.breed} />)}
      </header>
    </div>
  )
}

export default App
