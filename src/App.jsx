import React, { useState } from 'react';

function App() {
  const [team, setTeam] = useState([]);
  const [money, setMoney] = useState(100);
  const [totalStrength, setTotalStrength] = useState(0);
  const [totalAgility, setTotalAgility] = useState(0);

  const zombieFighters = [
    { name: 'Survivor', price: 12, strength: 6, agility: 4, img: 'https://via.placeholder.com/150/92c952' },
    { name: 'Scavenger', price: 10, strength: 5, agility: 5, img: 'https://via.placeholder.com/150/771796' },
    { name: 'Shadow', price: 18, strength: 7, agility: 8, img: 'https://via.placeholder.com/150/24f355' },
    { name: 'Brawler', price: 15, strength: 9, agility: 3, img: 'https://jsonplaceholder.typicode.com/photos' },
    { name: 'Brute', price: 20, strength: 10, agility: 2, img: 'https://jsonplaceholder.typicode.com/photos' },
    { name: 'Hunter', price: 25, strength: 8, agility: 9, img: 'https://jsonplaceholder.typicode.com/photos'}
  ];

  const handleAddFighter = (fighter) => {
    if (money >= fighter.price) {
      setTeam([...team, fighter]);
      setMoney(money - fighter.price);
      updateTotalStrength(fighter.strength, 'add');
      updateTotalAgility(fighter.agility, 'add');
    } else {
      console.log('Not enough money');
    }
  };

  const handleRemoveFighter = (index) => {
    const newTeam = team.filter((_, i) => i !== index);
    const removedFighter = team[index];
    setTeam(newTeam);
    setMoney(money + removedFighter.price);
    updateTotalStrength(removedFighter.strength, 'remove');
    updateTotalAgility(removedFighter.agility, 'remove');
  };

  const updateTotalStrength = (strength, action) => {
    setTotalStrength(prev => action === 'add' ? prev + strength : prev - strength);
  };

  const updateTotalAgility = (agility, action) => {
    setTotalAgility(prev => action === 'add' ? prev + agility : prev - agility);
  };

  return (
    <div>
      <h1>Money: ${money}</h1>
      <ul>
        {zombieFighters.map((fighter, index) => (
          <li key={index}>
            <img src={fighter.img} alt={fighter.name} />
            <h2>{fighter.name}</h2>
            <p>Price: ${fighter.price}</p>
            <p>Strength: {fighter.strength}</p>
            <p>Agility: {fighter.agility}</p>
            <button onClick={() => handleAddFighter(fighter)}>Add</button>
          </li>
        ))}
      </ul>
      <h2>Team Members</h2>
      {team.length === 0 ? <p>Pick some team members!</p> :
        <ul>
          {team.map((member, index) => (
            <li key={index}>
              <img src={member.img} alt={member.name} />
              <h2>{member.name}</h2>
              <p>Price: ${member.price}</p>
              <p>Strength: {member.strength}</p>
              <p>Agility: {member.agility}</p>
              <button onClick={() => handleRemoveFighter(index)}>Remove</button>
            </li>
          ))}
        </ul>
      }
      <h2>Total Team Strength: {totalStrength}</h2>
      <h2>Total Team Agility: {totalAgility}</h2>
    </div>
  );
}

export default App;
