import { Image_Values } from '../../utils/AppConstants';
import Nav from '../nav/Nav'
import Image from '../image/Image'
import Text from '../text/Text'
import Footer from '../footer/Footer'
import './App.css';

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      {Image_Values.map((value, i) => (
          <div key={Image_Values[i].id}>
            <Image src={Image_Values[i].src} classes={Image_Values[i].classes} altText={Image_Values[i].altText}></Image>
            <Text classes="tight-caption" content={Image_Values[i].altText}></Text>
            <Text classes="blog-entry" content={Image_Values[i].blogEntry}></Text>
          </div>
      ))}
      <Footer classes="footer" />
    </div>
  );
}

export default App;
