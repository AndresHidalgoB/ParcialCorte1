import { LotContext } from "../context/LotContext";
import { useContext, useEffect } from "react";
import { dataTest } from "../data/test";
{
  /* <div>{lotteries.map((lot,i)=><label key={i}>Loteria:{lot.nombre} Numero: {lot.numero} Precio:${lot.precio}<br/></label>)}</div> */
}
export const LotList = () => {
  const { lotteries } = useContext(LotContext);
  /*   useEffect(() => {
    console.log(lotteries)
  }, [lotteries]); */

  if (lotteries.length === 0) {
    return <p>No hay loterias agregadas</p>;
  }

  return (
      <table>
        <tr>
          <td>Loteria</td>
          <td>Numero</td>
          <td>Precio</td>
        </tr>
        {lotteries.map((lot, i) => (
          <tr key={i}>
            <td>{lot.nombre}</td>
            <td>{lot.numero}</td>
            <td>${lot.precio}</td>
          </tr>
        ))}
      </table>
  );
};
