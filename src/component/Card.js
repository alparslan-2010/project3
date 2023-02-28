//import img1 from "../images/1.png"
//import img2 from "../images/1.png"
import star from "../images/star.png"



function Card(props) {

    
    let badgeText;

    if (props.data.openSpots === 0) {

        badgeText = "Sold Out"


    }

    else {

        badgeText = "Online"
    }
    return (
        <>
            <div className="card">
                <div className="card-badge">{badgeText}</div>
                <img src={process.env.PUBLIC_URL + "/images/" + props.data.coverImg} alt="badge-img" className="card-img" />

                <div className="card-stats">
                    <img src={star} alt="card-star" className="card-rating-item" />
                    <span className="card-rating">{props.data.stats.rating}</span>
                    <span className="gray">({props.data.stats.reviewCount})</span>
                    <span className="gray">{props.data.location}</span>
                </div>
                <p>{props.data.title}</p>
                <p><span className="bold"> From ${props.data.price}</span>
                    <span>/ person</span></p>
            </div>


            
        </>
    )
}

export default Card;