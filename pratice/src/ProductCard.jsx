function ProductCard({pName,p,Available}) {
    
    return (
        <>
            <p>The prooduct is {pName}</p>
            <p>The prooduct  price is {p}</p>
            <p>{Available === true ? "is available" : "is not"}</p> 
        </>
    )
}
export default ProductCard;