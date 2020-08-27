import React, { useState, useEffect} from 'react';
import './App.css';

function App() {
  const [drinks, setDrinks] = useState([]);
  const [selectedDrink, setSelectedDrink] = useState();
  const [showInstructions, setShowInstructions] = useState(false);

  async function getData() {
    const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita',{
        method: 'GET',
    });
    const data = await response.json();
    return data;
  };

  useEffect(() => {
    const fetchData = async () => {
      const result = await getData();
      setDrinks(result.drinks);
      setSelectedDrink(result.drinks[0].strInstructions)
    };
    fetchData();
    return;
  }, []);

  const thisArray = [
    'I', 's', 'a', ' ', 'a', 'b', ' ', 'h', 'c',
    'i', 'p', 'd', 'p', 'o', 'e', 'p', 'o', 'f',
    't', 'a', 'g', 'm', 'u', 'h', 's', ' ', 'i',
    'a', ' ', 'j', 'h', 'i', 'k', 'p', 'p', 'l',
    'o', 'p', 'm', 'o', 't', 'n', 'a', 'm', 'o',
    'u', 's', 'p', ' ', 'o', 'q', 'r', ' ', 'r',
    'j', 'u', 's', 's', 't', 't', ' ', 'a', 'u',
    ' ', 'r', 'v', 'e', 'a', 'w', 'l', 'l', 'x',
    'y', ' ', 'y', 'c', 'o', 'z', 'o', 'l', 'a',
    ' ', 'o', 'b', 'p', 'o', 'c', 't', 'a', 'd',
    'm', 'u', 'e', 's', '?', 'f', ' ', '-', 'g',
    ' ', 'M', 'h', 'i', 't', 'i', 'c', 'h', 'j',
    ' ', 'H', 'k', 'e', 'd', 'l', 'b', 'e', 'm',
    'r', 'g', 'n'
  ];

  let newArray = []

  thisArray.map((letter, index) => {
    if ((index+1) % 3 !== 0) {
      newArray += letter;
    }
  });

  function changeBeverage(beverage) {
    setSelectedDrink(beverage);
    setShowInstructions(false);
  };

  function viewInstructions() {
    setShowInstructions(true);
  };

  return (
    <div className='App'>
      <div className='Api'>
        <select className='SelectBox' onChange={(e) => changeBeverage(e.target.value)}>
          {drinks.length > 0 ? (
            drinks.map((drink, index) => (
              <option className='SelectItem' key={index} value={drink.strInstructions}>
                  {drink.strDrink}
              </option>
            ))
          ) : (
              <option>Shaking / Stirring...</option>
          )}
        </select>
        <button className='Button' onClick={() => viewInstructions()}>Get Instructions</button>
      </div>
      <div className='Instructions'>
          {showInstructions ? selectedDrink : ''}
      </div>
      <div className='Text'>
        <span>
          {newArray}
        </span>
      </div>
    </div>
  );
}

export default App;
