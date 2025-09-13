import AvatarCard from "./AvatarCard.jsx"
import ProductCard from "./Productcard.jsx"

import "./app.css"
function App() {
  let person = {
    productName: "mobile",
    price: 8000,
    isAvailable: false,
    Available: true
  }
  let details = {
    name: "madhavi",
    rollNo: "23VV1A0517",
    Blood: "B+",
    birth: "24/03/2005"
  }
  return (
    <div className="maincontainer">
      <ProductCard pName={person.productName} p={person.price} Available={person.isAvailable} />
      <ProductCard pName={person.productName} p={person.price} Available={person.Available} />
      <AvatarCard Name={details.name} RollNo={details.rollNo} Blood={details.Blood} Birth={details.birth} />
    </div>
  )

}

export default App

