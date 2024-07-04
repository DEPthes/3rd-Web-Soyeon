import { createPortal } from "react-dom";

export default function DetailModal({ place }) {
    return (
      <section>
        <h2>{place.title}</h2>
        <img src={`http://localhost:3000/${place.image.src}`} alt={place.image.alt} />
        <p>{place.image.alt}</p>
        <p>Latitude: {place.lat}</p>
        <p>Longitude: {place.lon}</p>
      </section>
    );
  }