import ProductCard from "./Productcard.jsx"

function App() {

  const productName = "mobile"
    const price = 8000
    const isAvailable = true
  return (
    <>
      <ProductCard pName={productName} p={price} Available={isAvailable}/>
      
    </>
  )
  
}

export default App

