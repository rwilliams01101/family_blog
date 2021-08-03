import React from 'react'
import Image from '../components/image/Image'
import Text from '../components/text/Text'
import { Image_Values } from '../utils/AppConstants'

function Home() {
    return (
        <>
            {Image_Values.map((value, i) => (
                <div key={Image_Values[i].id}>
                <Image src={Image_Values[i].src} classes={Image_Values[i].classes} altText={Image_Values[i].altText}></Image>
                <Text classes="tight-caption" content={Image_Values[i].altText}></Text>
                <Text classes="blog-entry" content={Image_Values[i].blogEntry}></Text>
                {/* <a className="read-more" href={"/blogposts/" + Image_Values[i].id}>Read full post</a> */}
                <hr />
                </div>
            ))}
        </>
    )
  }

export default Home;