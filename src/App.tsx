import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button/Button";
import ListGroup from "./components/ListGroup";
import {BsFillCalendarFill } from "react-icons/bs"
import './App.css'

import Message from "./Message";
import Like from "./components/Like/Like";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";
import Expandable from "./components/Expandable";
import Form from "./components/Form";
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  let items = [
    'New York',
    'San Francisco',
    'Tokyo',
    'London',
    'Paris'
];

 const handleSeletedItem = (item: string) => {
  console.log(item)
 }
 
 const [isShow, setIsShow] = useState(true)

 const handleIsShow = () => {
      setIsShow(!isShow)
 }

 const [cardItems, setCardItems] = useState(['Product1', 'Product2'])


 const [pizza, setPizza] = useState({
  name: 'Spicy Pepperoni',
  toppings: ['Mushrooms']
 })

 const handleClick = () => {
    setPizza(
      {
        ...pizza,
        toppings: [
          ...pizza.toppings, 'chesse'
        ]
      }
    )
 }


 const [cart, setCart] = useState({
  discount: .1,
  items: [{
    id: 1 ,title: 'Product 1', quantity: 1
  }, {
    id: 2 ,title: 'Product 2', quantity: 1
  }
]
 })
 console.log(...cart.items)
 
 const changeQuantity = () => {
   setCart({
     ...cart,
     items: 
        cart.items.map(
          item => ({
            ...item,
            quantity: item.id === 1 ? item.quantity + 1 : item.quantity
          })
        )
       
     
   })

  //  setCart({
  //   ...cart,
  //   items: 
  //      cart.items.map(
  //        item => item.id === 1 ? {...item, quantity:item.quantity + 1 } : item
  //      )
      
    
  // })
 }

  return <div>
    <BsFillCalendarFill/>
    <ListGroup items={items} heading="cities" onSelectedItem={handleSeletedItem}/>
    {/* <Alert text="hello world" /> */}
    <Alert text="This is alert" isShow={isShow} />
    <Button color="primary" onClick={handleIsShow}>My Button</Button>
    <Like onClick={()=>console.log('clicked')}/>
    <NavBar cartItemsCount={cardItems.length}/>
    <Cart cartItems={cardItems} onClear={()=> setCardItems([])}/>
    id: {cart.items[0].id}

    quantity: {cart.items[0].quantity}
    <button onClick={changeQuantity}>Add Quantity</button>
 
    <Expandable maxChar={10}>yuilkhlk380912830912830912809382109380912jhlkjlkjkkjljoijoi</Expandable>
    <Form />
  </div>
}

export default App;