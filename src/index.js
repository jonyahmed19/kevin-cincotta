import React from "react";
import ReactDOM from "react-dom";
import { Router, Redirect } from "@reach/router";
import "./styles.css";
import Home from "./pages/Home";
import Events from "./pages/Events";
import Shop from "./pages/Shop";
import About from "./pages/About";
import Commissions from "./pages/Commissions";
import CustomWork from "./pages/CustomWork";
import Murals from "./pages/Murals";
import Contact from "./pages/Contact";
import Portfolio from "./pages/portfolio"

import GesturesSeries from "./pages/GesturesSeries";
import Reflection from "./pages/gestures/Reflection";
import Bees from "./pages/gestures/Bees";
import TreeClimbing from "./pages/gestures/TreeClimbing";
import SandDollar from "./pages/gestures/SandDollar";
import Surfer from "./pages/gestures/Surfer";
import Beachball from "./pages/gestures/Beachball";
import Tent from "./pages/gestures/Tent";
import Kite from "./pages/gestures/Kite";
import Sunset from "./pages/gestures/Sunset";
import Trees from "./pages/gestures/Trees";
import Seagulls from "./pages/gestures/Seagulls";
import Serenade from "./pages/gestures/Serenade";
import Painter from "./pages/gestures/Painter";
import Berries from "./pages/gestures/Berries";
import CanyonLake from "./pages/gestures/CanyonLake";
import Seashells from "./pages/gestures/Seashells";
import Sailing from "./pages/gestures/Sailing";
import Boardwalk from "./pages/gestures/Boardwalk";
import Beach from "./pages/gestures/Beach";
import Band from "./pages/gestures/Band";
import AnalogFutureSeries from "./pages/AnalogFutureSeries";
import Canoe from "./pages/af/Canoe";
import Crocodile from "./pages/af/Crocodile";
import House from "./pages/af/House";
import Map from "./pages/af/Map";
import ParkBench from "./pages/af/ParkBench";
import Watermelon from "./pages/af/Watermelon";
import ApresSkiSeries from "./pages/ApresSkiSeries";
import Bears from "./pages/apres-ski/Bears";
import DualSkiers from "./pages/apres-ski/DualSkiers";
import Sheep from "./pages/apres-ski/Sheep";
import Skier1 from "./pages/apres-ski/Skier1";
import Skier2 from "./pages/apres-ski/Skier2";
import Skier3 from "./pages/apres-ski/Skier3";
import Skis from "./pages/apres-ski/Skis";
import Trees3 from "./pages/apres-ski/Trees";
import Checkout from "./pages/Checkout";
import Thanks from "./pages/Thanks";
import Error from "./components/Error";
import Inventory from "./pages/Inventory";
import Paintings from "./pages/Paintings";
import SmallPrints from "./pages/SmallPrints";
import LargePrints from "./pages/LargePrints";
import CanvasPrints from "./pages/CanvasPrints";
import Favorites from "./pages/Favorites";
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsOfService from './pages/TermsOfService'

const App = () => (
  <Router>
    <Home path="/" />
    <Events path="/events" />
    <Checkout path="/checkout/:nickname/:format" />
    <Shop path="/shop" />
    <About path="/about" />
    <Murals path="/murals" />
    <Commissions path="/commissions" />
    <CustomWork path="/customwork" />
    <Contact path="/contact" />
    <Thanks path="/thanks" />
    <Error path="/error" />
    <Inventory path="/inventory" />
    <Paintings path="/shop/paintings" />
    <SmallPrints path="/shop/smallprints" />
    <LargePrints path="/shop/largeprints" />
    <CanvasPrints path="/shop/canvasprints" />
    <Favorites path="/faves" />
    <Portfolio path="/portfolio" />

    <GesturesSeries path="/gestures" />
    <Reflection path="/gestures/watching-you-watching-us" />
    <Bees path="/gestures/pollinators" />
    <TreeClimbing path="/gestures/climbing-a-tree" />
    <SandDollar path="/gestures/i-sent-you-a-postcard" />
    <Surfer path="/gestures/big-swell" />
    <Beachball path="/gestures/beachball" />
    <Tent path="/gestures/430am-on-mt-shasta" />
    <Kite path="/gestures/fly-my-kite" />
    <Sunset path="/gestures/slow-down-sunset" />
    <Trees path="/gestures/four-very-tall-trees" />
    <Seagulls path="/gestures/a-seagulls-topography" />
    <Serenade path="/gestures/serenade" />
    <Painter path="/gestures/cliffside-self-portrait" />
    <Redirect from="/gestures/foraging-for-dinner" to="/gestures/forest-food" />
    <Berries path="/gestures/forest-food" />
    <CanyonLake path="/gestures/cliff-divers" />
    <Seashells path="/gestures/still-life-in-the-sand" />
    <Sailing path="/gestures/well-be-waiting-by-the-lighthouse" />
    <Boardwalk path="/gestures/hustle-and-bustle" />
    <Beach path="/gestures/learning-to-surf" />
    <Band path="/gestures/the-beach-people" />
    
    <AnalogFutureSeries path="/analog-future" />
    <Canoe path="/analog-future/hill-in-the-middle-of-a-lake" />
    <Crocodile path="/analog-future/road-to-nowhere" />
    <House path="/analog-future/home-at-last" />
    <Map path="/analog-future/x-marks-the-spot" />
    <ParkBench path="/analog-future/listening-to-the-birds" />
    <Watermelon path="/analog-future/summer-haul" />

    <ApresSkiSeries path="/apres-ski" />
    <Bears path="/apres-ski/just-right" />
    <DualSkiers path="/apres-ski/flying-formation" />
    <Sheep path="/apres-ski/mountaineers" />
    <Skier1 path="/apres-ski/dawn-patrol" />
    <Skier2 path="/apres-ski/art-of-the-turn" />
    <Skier3 path="/apres-ski/couloir" />
    <Skis path="/apres-ski/skiing-in-style" />
    <Trees3 path="/apres-ski/three-snowy-trees" />
    <PrivacyPolicy path="/privacy-policy" />
    <TermsOfService path="/terms-of-service" />

    <Home default />
  </Router>
);

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
