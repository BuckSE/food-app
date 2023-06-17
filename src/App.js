import Form from "./Form"
import styles from "./styles.css"
function App() {
    
  return (
     <div className="contanier">
          <h1 className="name">Company Name</h1>
          <img src="images/food4.png" className="burrito"/>
          <img src="images/food6.png" className="pizza"/>
          <img src="images/food1.png" className="bowl"/>
          <img src="images/food5.png" className="fruitBowls"/>
      <div className="box2">
          <img src="images/food3.png" className="drinks"/>
          <img src="images/food2.png" className="shake"/>
      </div>
          <h2>Order fresh, plant-based food that tastes amazing.</h2>
          <Form />
          <footer>
              <p>Help accelerate humanity’s move to plant-based food</p>
              <p className="p">Support the businesses that provide plant-based food</p>
              <p>Only the best nutrition for your mind and body</p>
          </footer>
     </div> 
  )
      
  }

export default App;
