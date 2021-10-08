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
                  title="boAt Rockerz 370 Wireless Headphone with Bluetooth 5.0 "
                  price={500}
                  image="https://m.media-amazon.com/images/I/61kWB+uzR2L._SL1500_.jpg"
              />
              <Product 
                 id="03"
                 title=" Apple iPhone 11 (64GB) - Black "
                 price={5000}
                 image="https://m.media-amazon.com/images/I/71i2XhHU3pL._SL1500_.jpg"
              />
                               
              </div>
             
              <div className="home--row">
              <Product 
                 id="04"
                 title="iQOO Z3 5G (Cyber Blue, 8GB RAM, 128GB Storage)"
                 price={100}
                 image="https://m.media-amazon.com/images/I/615CXlFtDDS._SL1200_.jpg"
              />
              <Product 
                 id="05"
                 title="Redmi 126 cm (50 inches) 4K Ultra HD Android Smart LED TV X50|L50M6-RA ( "
                 price={600}
                 image="https://m.media-amazon.com/images/I/81sscKjSPiL._SL1500_.jpg " 
              />
              </div>
             
              <div className="home--row">
              <Product 
                  id="06"
                  title="AmazonBasics 564 L Side-by-Side Door Refrigerator (Silver Steel Finish)   "
                  price={10000}
                  image="https://images-eu.ssl-images-amazon.com/images/I/315q4CFDxqL._SY445_SX342_QL70_FMwebp_.jpg"
              />
              </div>

            </div>
        </div>
    )
}

export default Home
