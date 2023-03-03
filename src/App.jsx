import { useState, useEffect } from "react";
import { loterias as data } from "./data/loterias";
import { InputSelect } from "./components/InputSelect";
import "./App.css";

export const App = () => {
  const [loterias, setLoterias] = useState([]);
  useEffect(() => {
    setLoterias(data);
  }, []);
  const [lotteries, setLotteries] = useState([]);

  const [numero,setNumero] = useState("")
  const [precio,setPrecio] = useState('')

  const createLot =()=>{
    return{
      numero,
      precio
    }
  }

  return (
    <>
      <h1>Chance</h1>
      <form onSubmit={(numero,precio)=>createLot()} className="inputs">
        <InputSelect loterias={loterias} />
        <input
          type="text"
          placeholder="Numero"
          onChange={(e) =>setNumero(e.target.value)}
        />
        <input
          onChange={(e) =>setPrecio(e.target.value)}
          type="text"
          placeholder="Precio"
        />
        <button>Add</button>
        <button>Print</button>
      </form>
    </>
  );
};
