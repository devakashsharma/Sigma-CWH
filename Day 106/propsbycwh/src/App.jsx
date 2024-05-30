import './App.css'
import Card from './components/Card'
import Navbar from './components/Navbar'

function App() {

  const title1 = "Hey There!";
  const title2 = "Hii There!";
  const title3 = "Hello There!";

  const para1 = "Desc1";
  const para2 = "Desc2";
  const para3 = "Desc3";

  return (
    <>
      <Navbar />
      <div className="cards">
        <Card title={title1} desc={para1} />
        <Card title={title2} desc={para2} />
        <Card title={title3} desc={para3.length > 10 ? para3 : "Hey there is me"} />
      </div>
    </>
  )
}

export default App
