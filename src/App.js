import {useState, useEffect} from "react";
import ProductList from "./components/ProductList.js";

function App() {
  const [products, setProducts] = useState([
    {id:1, title:'Product1', price: 899},
    {id:2, title:'Product2', price: 797},
    {id:3, title:'Product3', price: 620},
    {id:4, title:'Product4', price: 368},
    {id:5, title:'Product5', price: 976},
    {id:6, title:'Product6', price:658},
  ]);
      const [name, setName] = useState('Matalang');
      const deleteProduct = (productId) => {
        const newProducts = products.filter(product => product.id !== productId);
        setProducts(newProducts);
    }  

    useEffect(() => {
      console.log('Use Effect Running');
    }, [name]);
 
  return(
    <div>
      <ProductList products={products} deleteProduct={deleteProduct} />
      <button onClick={()=> setName('Sahirin')}>Change Name</button>
    </div>
  );
}

export default App;