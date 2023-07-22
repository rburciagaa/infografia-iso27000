const Card=({title, img, description})=>{
    return(<>
    <div className="card">
        <img src={img} />
        <h2>{title}</h2>
        <h3>{description}</h3>
    </div>
    </>)
}
export default Card