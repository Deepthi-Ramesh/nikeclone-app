import React ,{useState ,useEffect} from 'react';
import Footer from './components/footer/Footer';
import Card from './components/card/card';
import Trending from './components/Trending/Trending';
import Slidercard from './components/slidercard/slidercard';
import { sliderData ,icons,shoes,clothes,kids } from './data';
import Dropdown from './components/dropdown/Dropdown';
import Slidetop from './components/slidertop/slidertop';
import Header from './components/header/Header';
import Helpjoin from './components/helpjoin/Helpjoin';
import './App.css';


 function App() {
        var arrow1=">";
        var arrow2 ="<";
        const [matches, setMatches] = useState(
                window.matchMedia("(min-width: 599px)").matches )

        useEffect(() => {
          console.log(process.env.PUBLIC_URL);
          window
          .matchMedia("(min-width: 657px)")
          .addEventListener('change', e => setMatches( e.matches ));
           }, []);
      const [trend , settrend] = useState(
            window.matchMedia("(min-width: 900px)").matches )

    useEffect(() => {
      window
      .matchMedia("(min-width: 657px)")
      .addEventListener('change', e => settrend( e.trend));
       }, []);


  return (
    <div className="App">
                {/* first header for joinsign */}
                  <Helpjoin/>

                {/* main-header */}
                  <header> <Header /> </header>

                {/* topslider */}
                   <Slidetop />
  
                {/* main-container */}
                  <div className='main-container'>
                
                    {/* first card */}
                      <Card 
                            heading={null}
                            image={!matches ?"/images/nike-just-do-it.jfif" :"/images/nike-copy.jfif" }
                            spirit="Just In : Fast Pack" 
                            mainhead="FIND YOUR FAST" 
                            description=""
                            button="Shop All"
                        />
                    {/* Featured */}
                      <Card 
                          heading="Featured" 
                          image={!matches ? "/images/featured.mobile-copy.jfif": "/images/image_1_part1.jpg" }
                          spirit="Flow in Floral Pack"
                          mainhead="ICON CLASH COLLECTION" 
                          description=""
                          button="Shop"
                        />  
                    
                    {/* Trending */}
                  
                      <div className="Trending">
                            <div className="head"><p className="heading">Trending</p></div>
                            <div className='Trend-cards'> 
                                  <Trending 
                                        image ={"./images/Trending1.jfif"} 
                                        margin={"0.8rem"} 
                                        para="Jordan * Paris Saint-Germain"
                                        btncolor="black"
                                        btntext="white"
                                        btncontent="Shop"
                                        width={!trend ?"100%":"49.5%" }
                                    />
                                  <Trending 
                                        image ={"./images/Trending2.jfif"} 
                                        para="Air Sprung Pack : Live Your Happiness"
                                        btncolor="white"
                                        btntext="black"
                                        btncontent="Shop"
                                        width={!trend ?"100%":"49.5%" }
                                  />
                            </div>
                      </div>
                  
                    {/* Don't Miss  */}
                      <Card 
                          heading="Don't Miss" 
                          image={!matches ?"./images/dont-miss.jfif":"./images/skating.jpg" }
                          spirit="Easy On. Easy Go" 
                          mainhead="DISCOVER THE NEW DYNAMO GO" 
                          description="Helping kids get in the flow, these new kicks are super easy to slide on so kids can go,go,go." 
                          button="Shop"
                          alignItems="center"
                        />    
                    {/* The Latest   */}
                      <Card 
                          heading="The Latest" 
                          image={!matches ?"./images/latest-mobile.jfif":"./images/latest.jfif" }
                          spirit="" mainhead="FEEL THE LOVE"
                          description="Everlasting Love Pack"
                          button="Learn More"
                          />      
                      {/* Just In */}
                      <Card 
                          heading="Just In" 
                          image={!matches ?"./images/justin-mobile.jfif":"./images/flight.jfif" }
                          spirit="" 
                          mainhead="FLIGHT (HER)ITAGE COLLECTION"
                          description=" Experience comfort and confidence in powerful design lines ad patterns"
                          button="Shop"
                          /> 

                      {/* The latest and Greatest */}
                        <div className='latest-and-greatest'>
                              <div className="head">
                                      <p className="heading">The Latest and Greatest</p>
                                      <div className='button-div'>
                                          <button>{arrow2}</button>
                                          <button>{arrow1}</button>
                                      </div>
                              </div>
                              <div className='product-div'>

                                          {
                                            sliderData.map(item=>{
                                              return (
                                                <Slidercard
                                                    img={item.img} 
                                                    price={item.price} 
                                                    productname={item.productname} 
                                                    category={item.category}
                                                />
                                              )
                                            })
                                          }
                              </div>
                        </div>
                    {/* More nike    */}
                        <div className='more-nike'>
                              <div className="head">
                                <p className="heading">More Nike</p>
                              </div>
                              <div className='more-nike-card'>
                                <Trending 
                                    image="./images/men1.jfif"
                                    btncolor="white" btntext="black"
                                    btncontent="Men's"
                                    width={!trend ?"100%":"32.5%" }
                                />

                                <Trending
                                    image="./images/women1.jfif" 
                                    btncolor="white"
                                    btntext="black"
                                    btncontent="Women's" 
                                    width={!trend ?"100%":"32.5%" }
                                />

                                <Trending
                                    image="./images/kid1.jfif" 
                                    btncolor="white"
                                    btntext="black"
                                    btncontent="Kids'" 
                                    width={!trend ?"100%":"32.5%" }
                                  />
                              </div>
                          </div>

                  {/* dropdown */}

                          <div className='dropdown'>

                                  <Dropdown name="Icon" data={icons}/>
                                  <Dropdown name="Shoes" data={shoes}/>
                                  <Dropdown name="Clothing" data={clothes}/>
                                  <Dropdown name="Kids'" data={kids}/>
                                  
                          </div>
            </div>
              
              {/* footer */}

                <footer><Footer /></footer>
                
    </div>
  );
}

export default App;
