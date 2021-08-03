import Image from '../components/image/Image'
import underConstruction from '../assets/images/under_construction.png'

function Blogpost() {
    return (
        <>
            <h2>Blogpost</h2>
            <Image src={underConstruction} classes="" altText="Under Construction, coming Christmas 2002."></Image>
        </>
        )
  }

export default Blogpost;