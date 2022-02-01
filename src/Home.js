import React from 'react'
import './Home.css';
import Product from './Product';


function Home() {
    return (
        <div className="home">
            <img className="home__image" src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_TallHero_Gamers_en_US_1x._CB667161802_.jpg" alt="" />

            <div className="home__row">
            <Product
            id="15142547"
            title="Apple iPhone 12 Pro Max, 128GB"
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQfjA95Rns5hHw-WN8XUdu61ZFBIHbJN0knYBH3YBZ58zhVTURsq44yOSRpwSRpFW-s_U&usqp=CAU"
            price={1350}
            rating={5}
            />
            <Product
            id="15142547"
            title="ASUS VivoBook 15 Thin and Light Laptop, 15.6” FHD Display, Intel i3-1005G1 CPU, 8GB RAM, 128GB SSD, Backlit Keyboard, Fingerprint"
            image="data:image/jpeg;base64,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"
            price={399}
            rating={3}
            />
            </div>
            
            <div className="home__row">
            <Product
            id="15142547"
            title="Apple Watch Series 5 (GPS, 44MM) - Space Gray Aluminum Case with Black Sport Band"
            image="https://m.media-amazon.com/images/I/71X+lTYBCHL._AC_SL1500_.jpg"
            price={289.0}
            rating={5}
            />
            <Product
            id="15142547"
            title="Echo Dot (4th Gen) | Smart speaker with clock and Alexa | Glacier White"
            image="https://m.media-amazon.com/images/I/81uheKY3+HS._AC_SX569_.jpg"
            price={44.94}
            rating={4}
            />
            <Product
            id="15142547"
            title="Sony PlayStation 5 Console with Wireless Controller, White and Black"
            image="https://incredideals.net/wp-content/uploads/2020/11/619BkvKW35L._SL1500_.jpg"
            price={870}
            rating={5}
            />
            </div>

            <div className="home__row">
            <Product
            id="15142547"
            title="SAMSUNG QN32Q50RAFXZA Flat 324K 32Q50 Series Smart TV (2021 model)"
            image="https://image-us.samsung.com/SamsungUS/home/computing/monitors/curved/pd/lc43j890dknxza/gallery/LC43J890DKNXZA_Gallery_1-G1.jpg?$product-details-jpg$"
            price={497.99}
            rating={4}
            />
            </div>

        </div>
    )
}

export default Home

