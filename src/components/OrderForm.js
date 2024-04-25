import { React, useContext} from "react";
import { NameContext } from "..";

export default function OrderForm() {
    const {name} = useContext(NameContext)
    
    return (
        <div className='orderForm'>
        <form>
            Ваше имя <input type='text'></input><br/>
            Ваш номер телефона <input type='text'></input><br/>
            Адрес доставки <input type='text'></input><br/>
            Ваш заказ:
            <p id='orderList'>{name}</p>
            <br/>
            <input type='submit'></input>
        </form>
        </div>
    );
  }
  
  