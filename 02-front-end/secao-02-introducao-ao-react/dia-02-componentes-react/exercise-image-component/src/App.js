import './App.css';
import Image from './Image';
import staring_cat from './images/staring_cat.jpg'

function App() {
  return (
    <Image 
      source={ staring_cat }
      alternativeText="Cute cat staring"
    />
  );
}

export default App;
