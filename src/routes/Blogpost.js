import Image from '../components/image/Image'
import Text from '../components/text/Text'
import { Blogpost_Values } from '../utils/AppConstants'

function Blogpost({ blogId }) {

    const blogEntries = [];

    for(let i=0; i<Blogpost_Values.length; i++) {
        if(Blogpost_Values[i].previewValue === blogId) {
            blogEntries.push(Blogpost_Values[i]);
        }
    }

    return (
        <>
             {blogEntries.map((value, i) => (
                <div key={blogEntries[i].id}>
                    <Image src={blogEntries[i].src} classes={blogEntries[i].classes} altText={blogEntries[i].altText}></Image>
                    <Text classes="tight-caption" content={blogEntries[i].altText}></Text>
                    <Text classes="blog-entry" content={blogEntries[i].blogEntry}></Text>
                    <hr />
                </div>
            ))}
        </>
    )
  }

export default Blogpost;