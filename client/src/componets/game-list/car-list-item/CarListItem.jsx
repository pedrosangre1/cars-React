export default function CarListItem({
    _id, marka, model, regno, photo}) {
    return (
<div className="allGames">
    <div className="allGames-info">
        <img src={photo}/>
        <h6>{marka}  {model}</h6>
        <h2>{regno}</h2>
        <a href="#" className="details-button">Details</a>
    </div>
</div>
    );
}