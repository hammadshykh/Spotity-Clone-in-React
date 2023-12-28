import CardItem from "./CardItem";
import { default as localData } from "../LocalData//LocalData.json";

const Cards = () => {
  return <CardItem item={localData} />;
};

export default Cards;
