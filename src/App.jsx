import { list, longList, shortList } from "./data";
import { useState } from "react";
import People from "./People";
import SlickCarousel from "../SlickCarousel";
const App = () => {
  const [people,setPeople]=useState(list);
  const [currentPerson,setCurrentPerson]=useState(0);
  
  return (
    <main>
      {/*<People people={people} currentPerson={currentPerson} setCurrentPerson={setCurrentPerson}/>*/}
      <SlickCarousel/>
    </main>
  );
};
export default App;
