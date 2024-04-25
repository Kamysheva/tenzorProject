import {React, useState,createContext} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './components/Header';
import FoodCard from './components/FoodCard';
import OrderForm from './components/OrderForm';
import {food} from './content/allFood'

const root = ReactDOM.createRoot(document.getElementById('root'));

export const NameContext = createContext();
const NameContextProvider = ({children}) => {
  const [name,setName] = useState([]);
  return (
    <NameContext.Provider value={{name,setName}}>
      {children}
    </NameContext.Provider>
  )
}

root.render(
  <div>
    <Header />
    <NameContextProvider>
      <main>
      <div className='catalogue inline border'>
        <div className='inline'><FoodCard {...food[0]}/></div>
        <div className='inline'><FoodCard {...food[1]}/></div>
        <div className='inline'><FoodCard {...food[2]}/></div>
      </div>
        <div className='inline border'>
          <OrderForm/>
        </div>
      </main>
      </NameContextProvider>  
  </div>
  
);
