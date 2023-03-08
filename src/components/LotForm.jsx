import React from "react";
import { useContext, useState } from "react";
import { LotContext } from "../context/LotContext";
import { nombreLoterias as data } from "../data/nombreLoterias";

export const LotForm = () => {
  const { createLot } = useContext(LotContext);
  const [nombre, setNombre] = useState("Medellin");
  const [numero, setNumero] = useState("");
  const [precio, setPrecio] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (parseInt(numero) > 9999 || parseInt(numero) < 100) {
      alert("Por favor solo ingrese numeros de 3 a 4 dígitos");
    } else {
      createLot({
        nombre,
        numero,
        precio,
      });
      setNumero("");
      setPrecio("");
    }
  };

  return (
    <>
      <h1>Chance</h1>
      <form onSubmit={handleSubmit} className="inputs">
        <select
          onChange={(e) => setNombre(e.target.value)}
          name="Loterias"
          value={nombre}
        >
          {data.map((lot, i) => (
            <option key={i} value={lot.nombre}>
              {lot.nombre}
            </option>
          ))}
        </select>
        <input
          type="number"
          placeholder="Numero"
          onChange={(e) => setNumero(e.target.value)}
          value={numero}
          maxLength="9999"
          minLength="100"
          required
        />
        <input
          onChange={(e) => setPrecio(e.target.value)}
          type="number"
          placeholder="Precio"
          value={precio}
          maxLength="9999"
          minLength="100"
          required
        />
        <button type="submit">Add</button>
      </form>
    </>
  );
};
