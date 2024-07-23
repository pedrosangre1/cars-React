import { Link } from "react-router-dom";

export default function LastedCars({
    _id, marka, model, photo}) 
    {
return (
    <div className="game">
                    <div className="image-wrap">
                        <img src={photo}/>
                    </div>
                    <h3>{marka} {model}</h3>
                    <div className="rating">
                        <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
                    </div>
                    <div className="data-buttons">
                        <Link to={`/cars/${_id}/details`} className="btn details-btn">Details</Link>
                    </div>
                </div>
)
}
