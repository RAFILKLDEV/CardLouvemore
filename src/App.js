import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [rankAca, setRankAca] = useState("0")
  const [rankExp, setRankExp] = useState("Diamante")
  const [image, setImage] = useState("https://cdn.discordapp.com/attachments/931731406118342676/972158714549248020/unknown.png")
  const [name, setName] = useState("Kek")
  const [type, setType] = useState("Sentinela")

  function imagekek() {
    switch(type) {
      case "Sentinela": return "https://cdn.discordapp.com/attachments/896130377318563871/896257266246885456/sentinela.png"
      case "Conjurador": return "https://cdn.discordapp.com/attachments/896130377318563871/896256838348206090/Conjurador.png"
      case "Suporte": return "https://cdn.discordapp.com/attachments/896130377318563871/896256279314591744/Escudo.png"
      default: return "https://cdn.discordapp.com/attachments/896130377318563871/896257266246885456/sentinela.png"
    }
  }

  function calcRank() {
    let total = rankAca 
    if (total < 500) return "Errante"
    else if (total > 2000) return "Lenda"
    else if (total > 1500) return "Mestre"
    else if (total > 1000) return "Veterano"
    else if (total > 500) return "Iniciante"
  }

  return (
    <div className="App">
      <div className='CardContainer'>
        <img src='https://cdn.discordapp.com/attachments/896130377318563871/896150577778671706/Carta_de_Expedicao.png'></img>
        <div className='Card'>
          <input id='Nome' value={name}></input>
          <img id='img' src={(image)}></img>
          <img id='img2' onClick={e => console.log(e.target.src)} src={imagekek()}></img>
          <input id='RankAca' value={rankAca}></input>
          <input id='RankExp' value={calcRank()}></input>
        </div>
        <div className='Info'>
          <div>Imagem:</div>
          <input type="url" onChange={e => setImage(e.target.value)}></input>
          <div>Tipo:</div>
          <select name="cars" id="cars" onChange={e => setType(e.target.value)}>
            <option value="Sentinela">Sentinela</option>
            <option value="Conjurador">Conjurador</option>
            <option value="Suporte">Suporte</option>
          </select>
          <div>Nome:</div>
          <input type="text" onChange={e => setName(e.target.value)}></input>
          <div>Pontos de Liga:</div>
          <input type="number" onChange={e => setRankAca(e.target.value)}></input>
        </div>
      </div>
    </div>
  );
}

export default App;
