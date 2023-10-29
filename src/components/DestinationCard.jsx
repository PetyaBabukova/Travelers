export default function DestinationCard(props) {
  // console.log(props);
    return (
        <div className="col-lg-4 col-md-6 mb-4">
        <div className="destination-item position-relative overflow-hidden mb-2">
          <img className="img-fluid" src={props.destination.image} alt="" />
          <a
            className="destination-overlay text-white text-decoration-none"
            href=""
          >
            <h5 className="text-white">{props.destination.destination}</h5>
            <span>{props.destination.slogan}</span>
          </a>
        </div>
      </div>
    )
}