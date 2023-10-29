import DestinationCard from "./DestinationCard";

export default function Body(props) {
  // console.log(props.destinations);
  return (

    <div className="container-fluid py-5">
      <div className="container pt-5 pb-3">
        <div className="text-center mb-3 pb-3">
          <h6
            className="text-primary text-uppercase"
            style={{ letterSpacing: 5 }}
          >
            Destination
          </h6>
          <h1>Explore Top Destination</h1>
        </div>
        <div className="row">
          <DestinationCard destination={props.destinations[0]} />
          <DestinationCard destination={props.destinations[1]} />
          <DestinationCard destination={props.destinations[2]} />
          <DestinationCard destination={props.destinations[3]} />
          <DestinationCard destination={props.destinations[4]} />
          <DestinationCard destination={props.destinations[5]} />

        </div>
      </div>
    </div>
  )
}