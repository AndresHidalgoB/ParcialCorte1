import { createContext, useState, useEffect } from "react";

export const LotContext = createContext();

export const LotContextProvider = (props) => {
  const [lotteries, setLotteries] = useState([]);

  const createLot = (Lot) => {
    setLotteries([
      ...lotteries,
      {
        nombre: Lot.nombre,
        numero: Lot.numero,
        precio: Lot.precio,
      },
    ]);
  };


  return (
    <LotContext.Provider
      value={{
        lotteries,
        createLot
      }}
    >
      {props.children}
    </LotContext.Provider>
  );
};
