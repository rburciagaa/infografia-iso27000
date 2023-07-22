import './App.css';
import Card from './components/Card';
import data from './data/info.js'

function App() {
  return (
    <>
    <h1>Series ISO 27000</h1>
    <h2>Proyecto de Ricardo Burciaga</h2>
      <div className='container'>
        {
          data.map(d => {
            return <Card title={d.title} description={d.description} img={d.img} />
          })
        }
      </div>
    </>
  );
}

export default App;
