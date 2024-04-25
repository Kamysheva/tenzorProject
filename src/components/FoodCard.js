import { React, useContext} from "react";
import { NameContext } from "..";

export default function FoodCard(props) {
    const {setName} = useContext(NameContext)
    const {name} = useContext(NameContext)
    function handleClick()
    {
      setName([...name,<br/>, props.title])
    }
    return (
      <div className="border foodCard">
        <strong>{props.title}</strong><br/>
        {props.description}<br/>
        {props.price} р.<br/>
        <button onClick={handleClick}>Заказать</button>
      </div>
    );
  }
  
  