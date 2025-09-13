import "./ProductCard.css"

function ProductCard(person) {
    const name = {
        fontsize: '30px',
        color: 'pink'
    }

    return (
        <div className="container">
            <p style={name}>The prooduct is {person.pName}</p>
            <p className="price">The prooduct  price is {person.p}</p>
            <p>{person.Available === true ? <p className="true">is available</p> : <p className="false">is not</p>}</p>

        </div>
    )
}
export default ProductCard