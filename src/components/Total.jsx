import { LotContext } from "../context/LotContext";
import { useContext, useState , useEffect } from "react";
export const Total = () => {
  const { lotteries } = useContext(LotContext);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    console.log(lotteries);
  }, [lotteries]);

  const calculateTotal = () => {
    if (lotteries.length === 0) {
      alert("No se han agregado loterias");
    }
    lotteries.map((lot)=>setTotal(total+parseInt(lot.precio)));
  };

  return (
    <>
      <button onClick={() => calculateTotal()}>Calcular Total</button>
      <h3>${total}</h3>
    </>
  );
};
