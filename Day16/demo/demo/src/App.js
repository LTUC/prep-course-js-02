import FirstComponet from './components/FirstComponent';
import Welcome from './components/Welcome';
import MemeList from './components/MemeList';

import memesData from './data/data.json';
// const memesData = require("./data/data.json");

function App() {
  return (
    <>
      <FirstComponet />
      <h1>Hello From JS-02</h1>
      <Welcome name="Sara" favColor="pink" favFood="Mansaf" />
      <Welcome name="Saleh" favColor="purple" favFood="Mansaf" />
      {

        memesData.map(meme => {
          return (
            <MemeList image={meme.image} alt={meme.bottomText} title={meme.name} />
          )
        })
      }


  
    </>
  );
}

export default App;