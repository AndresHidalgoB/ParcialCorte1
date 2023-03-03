export const InputSelect = ({ loterias }) => {
  return (
    <>
      <select name="" id="">
        {loterias.map((lot,i) => (
          <option key={i} value={lot.nombre}>{lot.nombre}</option>
        ))}
      </select>
    </>
  );
};
