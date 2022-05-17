import "./App.css";
import PreNavbar from "./Components/PreNavbar";
import Navbar from "./Components/Navbar.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Slider from "./Components/Slider.js";
import Offers from "./Components/Offers.js";
import data from "./data/data.json";
import Heading from "./Components/Heading.js";
import StarProduct from "./Components/StarProduct.js";
import HotAccessoriesManu from "./Components/HotAccessoriesManu.js";
import HotAccessories from "./components/HotAccessories.js";
import ProductReviews from "./Components/ProductReviews.js"
import Videos from "./Components/Videos.js"
import Banner from "./Components/Banner.js"
import Footer from "./Components/Footer.js"
import NavOptios from "./Components/NavOptions.js"



// const {banner} = data; // it's created for banner but after includ directly{data.banner.start} its now useless.............................................................................

function App() {
  return (
    <Router>
      <PreNavbar />
      <Navbar />
      
      <NavOptios miPhones={data.miPhones} redmiPhones={data.redmiPhones} tv={data.tv} laptop={data.laptop} fitnessAndLifeStyle={data.fitnessAndLifeStyle} home={data.home} audio={data.audio}  accessories={data.accessories}/>


      <Slider start={data.banner.start} />
      <Offers offer={data.offer} />
      <Heading text="STAR PRODUCTS" />
      <StarProduct starProduct={data.starProduct} />
      <Heading text="HOT ACCESSORIES" />
      <HotAccessoriesManu />

      <Routes>
        <Route
          exact
          path="/music"
          element={
            <HotAccessories
              music={data.hotAccessories.music}
              musicCover={data.hotAccessoriesCover.music}
            />
          }
        />
        <Route />

        <Route
          exact
          path="/smartDevice"
          element={
            <HotAccessories
            smartDevice={data.hotAccessories.smartDevice} smartDeviceCover={data.hotAccessoriesCover.smartDevice}
            />
          }
        />
        <Route />

        <Route exact path="/home" element={ <HotAccessories home={data.hotAccessories.home} homeCover={data.hotAccessoriesCover.home} /> }/>
        <Route />

        <Route exact path="/lifestyle" element={ <HotAccessories lifeStyle={data.hotAccessories.lifeStyle} lifeStyleCover={data.hotAccessoriesCover.lifeStyle} /> }/>
        <Route />

        <Route exact path="/mobileAccessories" element={ <HotAccessories mobileAccessories={data.hotAccessories.mobileAccessories} mobileAccessoriesCover={data.hotAccessoriesCover.mobileAccessories} /> }/>
        <Route />
      </Routes>
      <Heading text="PRODUCT REVIEWS"/>
      <ProductReviews productReviews={data.productReviews}/>
      <Heading text = "VIDEOS" />

      <Videos videos={data.videos}/>

      <Heading text="IN THE PRESS"/>
      <Banner banner={data.banner}/>
      <Footer footer={data.footer}/>
      

     
    </Router>
  );
}

export default App;
