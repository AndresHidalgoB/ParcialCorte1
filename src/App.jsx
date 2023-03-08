import { LotForm } from "./components/LotForm";
import {LotList} from './components/LotList'
import {Total} from './components/Total'
import "./App.css";

export const App = () => {
  return (
    <>
      <LotForm />
      <LotList/>
      <Total/>
    </>
  );
};
