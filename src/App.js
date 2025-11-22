import React, { useState } from 'react';
import './App.css';

// Import icons from various libraries
import { 
  FaCircle, FaSquare, FaHeart, FaStar, FaPizzaSlice, FaHamburger, FaIceCream, FaFish, FaSpaceShuttle, FaRocket,  FaSatellite, FaTractor, FaDog, FaCat, FaHippo, FaFeatherAlt,
  FaSquareFull, FaCircleNotch, FaStarHalfAlt, FaHeartBroken, FaYinYang, FaPeace, FaBiohazard, FaRadiation, FaRegistered, FaCopyright, FaTrademark, FaCreativeCommons, FaCreativeCommonsBy, FaCreativeCommonsNc, FaCreativeCommonsNd, FaCreativeCommonsSa, FaCreativeCommonsZero,
  FaArrowUp, FaArrowDown, FaArrowLeft, FaArrowRight, FaArrowsAlt, FaArrowsAltH, FaArrowsAltV, FaChevronUp, FaChevronDown, FaChevronLeft, FaChevronRight, FaCarrot,
  FaDragon, FaSpider, FaFrog, FaDove, FaCrow, FaKiwiBird, FaMoon, FaSun, FaMeteor, FaUserAstronaut,
  FaAppleAlt, FaBacon, FaBone, FaBreadSlice, FaCandyCane, FaCheese, FaCookie, FaCookieBite, FaDrumstickBite, FaEgg, FaHotdog, FaPepperHot,
  FaBuilding, FaChurch, FaHospital, FaHotel, FaSchool, FaStore, FaUniversity, FaWarehouse,
  FaCar, FaBus, FaTrain, FaSubway, FaShip, FaPlane, FaBicycle, FaMotorcycle, FaTruck, FaAmbulance, FaTaxi,
  FaBaseballBall, FaBasketballBall, FaFootballBall, FaFutbol, FaGolfBall, FaTableTennis, FaVolleyballBall, FaSwimmer, FaSkiing, FaSnowboarding, FaHockeyPuck,
  FaMusic, FaGuitar, FaDrum, FaPaw, FaLeaf, FaTree, FaFire, FaWater, FaMountain, FaIcicles, FaSnowflake, FaBolt, FaCloud, FaUmbrella, FaRainbow, FaSeedling,
  FaStethoscope, FaUserMd, FaMedkit, FaProcedures, FaHeartbeat, FaBandAid, FaSyringe, FaPills, FaFirstAid, FaClinicMedical, FaBook, FaPen, FaRuler,  FaBell, FaClipboard, FaGraduationCap,
  FaTools, FaWrench, FaScrewdriver, FaHammer, FaDraftingCompass, FaPaintRoller, FaBroom
} from 'react-icons/fa';
import { 
  GiCow, GiPig, GiChicken, GiSheep, GiHorseHead, GiCarrot, GiBroccoli, GiTomato, GiChiliPepper, GiCorn, GiLion, GiTiger, GiBearHead, GiElephant, GiMonkey,  GiOctopus, GiCrab,  GiPlanetCore, GiBarn, GiGoat, GiDuck, GiRooster, GiFarmer,
  GiPlainCircle, GiPlainSquare,    GiArrowhead, GiCrossMark,
  GiAubergine, GiGarlic,  GiMushroom,   GiPotato,
  GiSnake, GiLizardTongue, GiWolfHead, GiFoxHead, GiDeer,  GiGorilla,  GiCamel, GiKangaroo, GiKoala, GiPanda,
   GiObservatory, GiAlienStare, GiSpaceship,
  GiDolphin, GiSquid, GiTurtle, GiJellyfish,
  GiAppleCore, GiBanana, GiCheeseWedge, GiChickenOven, GiCupcake, GiDonut, GiFrenchFries, GiSteak,
  GiCastle, GiFactory, GiViolin, GiMoon, GiSun, GiPineTree, GiFlowerPot, GiSprout, GiGrass, GiAcorn, GiMushroomCloud, GiVolcano, GiEarthAmerica, GiWaterfall, GiIsland, GiGalaxy, GiStarfighter, GiSpaceSuit,
  GiSittingDog, GiCat,  GiBee, GiButterfly,  GiLadybug, GiAnt, GiCricket, GiSnail
} from 'react-icons/gi';

const iconCategories = {
  "Farm Animals": [GiCow, GiPig, GiChicken, GiSheep, GiHorseHead, GiBarn, GiFarmer, GiGoat, GiDuck, GiRooster, FaTractor, GiCorn, FaCarrot, GiSprout, FaSeedling, GiBee,  GiSnail,  GiLadybug,  GiAnt, GiCricket, FaLeaf, FaTractor, FaTools, FaWrench, FaScrewdriver, FaHammer, GiFarmer, GiBarn, GiChicken, GiCow, GiGoat, GiHorseHead, GiPig, GiRooster, GiSheep, FaAppleAlt, FaBreadSlice, FaCheese, FaCookie, FaEgg, GiCarrot, GiBroccoli, GiTomato, GiChiliPepper, GiCorn, GiAubergine, GiGarlic, GiMushroom, GiPotato],
  "Pets": [FaDog, FaCat, FaPaw, GiSittingDog, GiCat,  FaBone, FaFish, FaDove, FaFeatherAlt, FaKiwiBird, FaFrog, FaSpider, GiSnake, GiLizardTongue,  GiSnail, GiButterfly, FaStethoscope, FaUserMd, FaMedkit, FaProcedures, FaHeartbeat, FaBandAid, FaSyringe, FaPills, FaFirstAid, FaClinicMedical, FaDog, FaCat, FaPaw, FaBone, FaFish, FaDove, FaFeatherAlt, FaKiwiBird, FaFrog, FaSpider, GiSnake, GiLizardTongue,  GiSnail, GiButterfly, FaStethoscope, FaUserMd, FaMedkit, FaProcedures, FaHeartbeat, FaBandAid, FaSyringe, FaPills, FaFirstAid, FaClinicMedical],
  "Shapes": [
    FaCircle, FaSquare, FaHeart, FaStar, FaSquareFull, FaCircleNotch, FaStarHalfAlt, FaHeartBroken, FaYinYang, FaPeace, FaBiohazard, FaRadiation, FaRegistered, FaCopyright, FaTrademark, FaCreativeCommons, FaCreativeCommonsBy, FaCreativeCommonsNc, FaCreativeCommonsNd, FaCreativeCommonsSa, FaCreativeCommonsZero,
    FaArrowUp, FaArrowDown, FaArrowLeft, FaArrowRight, FaArrowsAlt, FaArrowsAltH, FaArrowsAltV, FaChevronUp, FaChevronDown, FaChevronLeft, FaChevronRight,
    GiPlainCircle, GiPlainSquare, GiArrowhead, GiCrossMark, FaCircle, FaSquare, FaHeart, FaStar, FaSquareFull, FaCircleNotch, FaStarHalfAlt, FaHeartBroken, FaYinYang, FaPeace, FaBiohazard, FaRadiation, FaRegistered, FaCopyright, FaTrademark, FaCreativeCommons, FaCreativeCommonsBy, FaCreativeCommonsNc, FaCreativeCommonsNd, FaCreativeCommonsSa, FaCreativeCommonsZero, FaArrowUp, FaArrowDown, FaArrowLeft, FaArrowRight, FaArrowsAlt, FaArrowsAltH, FaArrowsAltV, FaChevronUp, FaChevronDown, FaChevronLeft, FaChevronRight, GiPlainCircle, GiPlainSquare, GiArrowhead, GiCrossMark
  ],
  "Vegetables": [GiCarrot, GiBroccoli, GiTomato, GiChiliPepper, GiCorn, FaCarrot, GiAubergine, GiGarlic,  GiMushroom,   GiPotato,  FaLeaf, FaSeedling, GiSprout, FaAppleAlt, FaBreadSlice, FaCheese, FaCookie, FaEgg, GiCarrot, GiBroccoli, GiTomato, GiChiliPepper, GiCorn, GiAubergine, GiGarlic, GiMushroom, GiPotato, FaLeaf, FaSeedling, GiSprout, GiCarrot, GiBroccoli, GiTomato, GiChiliPepper, GiCorn, FaCarrot, GiAubergine, GiGarlic,  GiMushroom,   GiPotato,  FaLeaf, FaSeedling, GiSprout, FaAppleAlt, FaBreadSlice, FaCheese, FaCookie, FaEgg, GiCarrot, GiBroccoli, GiTomato, GiChiliPepper, GiCorn, GiAubergine, GiGarlic, GiMushroom, GiPotato],
  "Wild Animals": [GiLion, GiTiger, GiBearHead, GiElephant, GiMonkey, FaHippo, FaFeatherAlt, FaDragon, FaSpider, FaFrog, FaDove, FaCrow, FaKiwiBird, GiSnake, GiLizardTongue, GiWolfHead, GiFoxHead, GiDeer,  GiGorilla,  GiCamel, GiKangaroo, GiKoala, GiPanda, GiLion, GiTiger, GiBearHead, GiElephant, GiMonkey, FaHippo, FaFeatherAlt, FaDragon, FaSpider, FaFrog, FaDove, FaCrow, FaKiwiBird, GiSnake, GiLizardTongue, GiWolfHead, GiFoxHead, GiDeer,  GiGorilla,  GiCamel, GiKangaroo, GiKoala, GiPanda, GiLion, GiTiger, GiBearHead, GiElephant, GiMonkey, FaHippo],
  "Galaxy": [FaSpaceShuttle, FaRocket,  FaSatellite, GiPlanetCore, FaMoon, FaSun, FaMeteor, FaUserAstronaut,  GiObservatory,  GiAlienStare, GiSpaceship,  GiMoon, GiSun, GiGalaxy, GiStarfighter, GiSpaceSuit, FaSpaceShuttle, FaRocket,  FaSatellite, GiPlanetCore, FaMoon, FaSun, FaMeteor, FaUserAstronaut,  GiObservatory,  GiAlienStare, GiSpaceship,  GiMoon, GiSun, GiGalaxy, GiStarfighter, GiSpaceSuit, FaSpaceShuttle, FaRocket,  FaSatellite, GiPlanetCore, FaMoon, FaSun, FaMeteor, FaUserAstronaut,  GiObservatory,  GiAlienStare, GiSpaceship,  GiMoon, GiSun, GiGalaxy, GiStarfighter, GiSpaceSuit],
  "Water Animals": [FaFish,  GiOctopus, GiCrab,  GiDolphin, GiSquid, GiTurtle, GiJellyfish, FaFish,  GiOctopus, GiCrab,  GiDolphin, GiSquid, GiTurtle, GiJellyfish, FaFish,  GiOctopus, GiCrab,  GiDolphin, GiSquid, GiTurtle, GiJellyfish, FaFish,  GiOctopus, GiCrab,  GiDolphin, GiSquid, GiTurtle, GiJellyfish, FaFish,  GiOctopus, GiCrab,  GiDolphin, GiSquid, GiTurtle, GiJellyfish, FaFish,  GiOctopus, GiCrab,  GiDolphin, GiSquid, GiTurtle, GiJellyfish, FaFish,  GiOctopus, GiCrab,  GiDolphin, GiSquid, GiTurtle, GiJellyfish, FaFish,  GiOctopus, GiCrab,  GiDolphin],
  "Food": [FaPizzaSlice, FaHamburger, FaIceCream, FaAppleAlt, FaBacon, FaBone, FaBreadSlice, FaCandyCane, FaCarrot, FaCheese, FaCookie, FaCookieBite, FaDrumstickBite, FaEgg, FaHotdog, FaPepperHot, GiAppleCore, GiBanana, GiCheeseWedge, GiChickenOven, GiCupcake, GiDonut, GiFrenchFries, GiSteak,  FaPizzaSlice, FaHamburger, FaIceCream, FaAppleAlt, FaBacon, FaBone, FaBreadSlice, FaCandyCane, FaCarrot, FaCheese, FaCookie, FaCookieBite, FaDrumstickBite, FaEgg, FaHotdog, FaPepperHot, GiAppleCore, GiBanana, GiCheeseWedge, GiChickenOven, GiCupcake, GiDonut, GiFrenchFries, GiSteak],
  "Buildings": [FaBuilding, FaChurch, FaHospital, FaHotel, FaSchool, FaStore, FaUniversity, FaWarehouse, GiCastle, GiFactory, FaBook, FaPen, FaRuler,  FaBell, FaClipboard, FaGraduationCap, FaTools, FaWrench, FaScrewdriver, FaHammer, FaDraftingCompass, FaPaintRoller, FaBroom, FaBuilding, FaChurch, FaHospital, FaHotel,  FaStore, FaUniversity, FaWarehouse, GiCastle, GiFactory, FaBook, FaPen, FaRuler,  FaBell, FaClipboard, FaGraduationCap, FaTools, FaWrench, FaScrewdriver, FaHammer, FaDraftingCompass, FaPaintRoller, FaBroom, FaBuilding, FaChurch, FaHospital],
  "Transportation": [FaCar, FaBus, FaTrain, FaSubway, FaShip, FaPlane, FaBicycle, FaMotorcycle, FaTruck, FaAmbulance, FaTaxi, FaCar, FaBus, FaTrain, FaSubway, FaShip, FaPlane, FaBicycle, FaMotorcycle, FaTruck, FaAmbulance, FaTaxi, FaCar, FaBus, FaTrain, FaSubway, FaShip, FaPlane, FaBicycle, FaMotorcycle, FaTruck, FaAmbulance, FaTaxi, FaCar, FaBus, FaTrain, FaSubway, FaShip, FaPlane, FaBicycle, FaMotorcycle, FaTruck, FaAmbulance, FaTaxi, FaCar, FaBus, FaTrain, FaSubway, FaShip, FaPlane],
  "Sports": [FaBaseballBall, FaBasketballBall, FaFootballBall, FaFutbol, FaGolfBall, FaTableTennis, FaVolleyballBall, FaSwimmer, FaSkiing, FaSnowboarding, FaHockeyPuck, FaBaseballBall, FaBasketballBall, FaFootballBall, FaFutbol, FaGolfBall, FaTableTennis, FaVolleyballBall, FaSwimmer, FaSkiing, FaSnowboarding, FaHockeyPuck, FaBaseballBall, FaBasketballBall, FaFootballBall, FaFutbol, FaGolfBall, FaTableTennis, FaVolleyballBall, FaSwimmer, FaSkiing, FaSnowboarding, FaHockeyPuck, FaBaseballBall, FaBasketballBall, FaFootballBall, FaFutbol, FaGolfBall, FaTableTennis, FaVolleyballBall, FaSwimmer, FaSkiing, FaSnowboarding, FaHockeyPuck, FaBaseballBall, FaBasketballBall, FaFootballBall, FaFutbol, FaGolfBall, FaTableTennis],
  "Music": [FaMusic, FaGuitar, FaDrum, GiViolin,  FaMusic, FaGuitar, FaDrum, GiViolin,  FaMusic, FaGuitar, FaDrum, GiViolin,  FaMusic, FaGuitar, FaDrum, GiViolin,  FaMusic, FaGuitar, FaDrum, GiViolin,  FaMusic, FaGuitar, FaDrum, GiViolin,  FaMusic, FaGuitar, FaDrum, GiViolin,  FaMusic, FaGuitar, FaDrum],
  "Nature": [FaLeaf, FaTree, FaFire, FaWater, FaMountain, FaIcicles, FaSnowflake, FaBolt, FaCloud, FaUmbrella, FaRainbow, FaSeedling, GiPineTree, GiFlowerPot, GiSprout, GiGrass, GiAcorn, GiMushroomCloud, GiVolcano, GiEarthAmerica, GiWaterfall, GiIsland,  FaLeaf, FaTree, FaFire, FaWater, FaMountain, FaIcicles, FaSnowflake, FaBolt, FaCloud, FaUmbrella, FaRainbow, FaSeedling, GiPineTree, GiFlowerPot, GiSprout, GiGrass, GiAcorn, GiMushroomCloud, GiVolcano, GiEarthAmerica, GiWaterfall, GiIsland]
};

const categoryNames = Object.keys(iconCategories);

function App() {
  const [selectedCategory, setSelectedCategory] = useState(categoryNames[0]);

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const icons = iconCategories[selectedCategory];

  return (
    <div className="App">
      <div className="controls-container">
        <select value={selectedCategory} onChange={handleCategoryChange}>
          {categoryNames.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      <div className="category-container">
        <div className="icons-grid">
          {icons.map((Icon, index) => (
            <div key={index} className="icon-container">
              <Icon />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;