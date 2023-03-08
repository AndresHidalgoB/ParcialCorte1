import { LotContext } from "../context/LotContext";
import { useContext, useState , useEffect } from "react";
export const Total = () => {
  const { lotteries } = useContext(LotContext);
  const [isDisable,setDisable] = useState(false)
  const [total, setTotal] = useState(0);
  useEffect(() => {
    console.log(lotteries);
    setDisable(false)
  }, [lotteries]);

  const calculateTotal = () => {
    if (lotteries.length === 0) {
      alert("No se han agregado loterias");
    }
    lotteries.map((lot)=>setTotal(total+parseInt(lot.precio)));
    setDisable(true)
  };

  return (
    <>
      <button onClick={() => calculateTotal()} disabled={isDisable}>Calcular Total</button>
      <h3>${total}</h3>
    </>
  );
};
