import { Image_Values } from '../../utils/AppConstants';
import Image from '../image/Image'
import Text from '../text/Text'
import Header from '../header/Header'
import './App.css';

function App() {
  return (
    <div className="App">
      <Header classes="main-header" content="This is the header"></Header>
      {Image_Values.map((value, i) => (
          <Image src={Image_Values[i].src} classes="img img-lg-ctr" altText="Camille and Alan at Kvanndalfoss." key={Image_Values[i].id}></Image>
      ))}
      <Text classes="img-caption" content="At Kvanndalfoss."></Text>
    </div>
  );
}

export default App;
