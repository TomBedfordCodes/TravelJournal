import React from "react"


export default function Card(props) {
    
// title: "Mount Fuji",
// location: "Japan",
// googleMapsUrl: "https://goo.gl/maps/1DGM5WrWnATgkSNB8",
// startDate: "12 Jan, 2021",
// endDate: "24 Jan, 2021",
// description: "Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.",
// imageUrl: "https://source.unsplash.com/WLxQvbMyfas"
    
    return (
        <section className="card">
            <img className="card--image" src={props.imageUrl} />
            <div>
                <div className="card--location-line">
                    <img className="card--icon" src="../images/pin-icon.png" />
                    <h3 className="card--country">{props.location}</h3>
                    <p><a 
                        href={props.googleMapsUrl}
                        className="card--maps-link"
                        target="_blank">View on Google Maps</a>
                    </p>
                </div>
                <h2 className="card--title">{props.title}</h2>
                <p className="card--date-range">{props.startDate} - {props.endDate}</p>
                <p className="card--description">{props.description}</p>
            </div>
        </section>
    )
}


