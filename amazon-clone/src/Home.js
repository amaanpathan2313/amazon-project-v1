import React from 'react';
import './Home.css';
import Product from './Product';


function Home() {
    return (
        <div className="home">
           <div className="home--container">
        <img className="home--image" src="https://m.media-amazon.com/images/I/71UhgZQzskL._SX3000_.jpg" alt=" "/>
               
              <div className="home--row">
              <Product 
                  id="01"
                  title="See U in C by Ali Karim Sayed (Author) "
                  price={4450}
                  image="https://images-na.ssl-images-amazon.com/images/I/41SMlI+1PrL._SX331_BO1,204,203,200_.jpg"
                 />

                 <Product 
                 id="02"
                 title="Redmi 10 Prime (Astral White 6GB RAM 128GB ROM )"
                 price={15000}
                 image="https://m.media-amazon.com/images/I/71q297sVv3L._SL1500_.jpg"
                />


              <Product 
                  id="03"
                  title="boAt Rockerz 370 Wireless Headphone with Bluetooth 5.0 "
                  price={500}
                  image="https://m.media-amazon.com/images/I/61kWB+uzR2L._SL1500_.jpg"
              />
              <Product 
                 id="04"
                 title=" Apple iPhone 11 (64GB) - Black "
                 price={5000}
                 image="https://m.media-amazon.com/images/I/71i2XhHU3pL._SL1500_.jpg"
              />
                               
              </div>
             
              <div className="home--row">
              <Product 
                 id="05"
                 title="Xiaomi Mi Smart Band 6, AMOLED Screen, 5ATM Water Resistant, Black"
                 price={5000}
                 image="https://m.media-amazon.com/images/I/71X8NdnCsvL._SL1500_.jpg"
              />

              <Product 
                 id="06"
                 title="Promisca Non-Woven Fabric Reusable N95 Face Mask, Ear Loop Style ,5 Layered"
                 price={400}
                 image="https://m.media-amazon.com/images/I/518A7mOWbaL._AC_SS450_.jpg"
              />

              <Product 
                 id="07"
                 title="Sony PlayStation PS5 "
                 price={50000}
                 image="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcT95LLLnxmxE-sfzcrZ-yzCrSxG_8BmAGfuWYc0sKrFWbQG6WCdaK4V2Xm-1u2Ndub7-UvnaCxRceqahHW5gxNyHfEmfSdw" 
              />

              <Product 
                 id="08"
                 title="Redmi 126 cm (50 inches) 4K Ultra HD Android Smart LED TV X50|L50M6-RA ( "
                 price={600}
                 image="https://m.media-amazon.com/images/I/81sscKjSPiL._SL1500_.jpg " 
              />
              </div>
             
              <div className="home--row">
              <Product 
                  id="09"
                  title="AmazonBasics 564 L Side-by-Side Door Refrigerator (Silver Steel Finish)   "
                  price={10000}
                  image="https://images-eu.ssl-images-amazon.com/images/I/315q4CFDxqL._SY445_SX342_QL70_FMwebp_.jpg"
              />

              <Product 
                 id="10"
            title="Airpod Pro Wireless Charging Case|Active Noise Cancellation|18 Hours Backup."
                 price={15000}
                 image="https://m.media-amazon.com/images/I/41KGh+e1GyL._SL1021_.jpg" 
              />

              <Product 
                 id="11"
                 title="Ben Martin Men's Round Neck Full Sleeve Cotton Polyester Sweat Shirt"
                 price={300}
                 image="https://m.media-amazon.com/images/I/61qW7N1OEnL._UL1500_.jpg " 
              />

              <Product 
                 id="12"
                 title="
                 pTron Bassbuds Bluetooth 5.1, TWS,Fast Charging,Water-Resistant."
                 price={13000}
                 image="https://m.media-amazon.com/images/I/519uMzMXJVL._SL1100_.jpg" 
              />
              </div>

            </div>
        </div>
    )
}

export default Home
