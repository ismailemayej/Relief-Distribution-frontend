import { FaMapMarkerAlt, FaExternalLinkAlt } from "react-icons/fa";

interface SimpleLocationProps {
  address: string;
  city: string;
  country: string;
  className?: string;
}

const Location = ({
  address,
  city,
  country,
  className = "",
}: SimpleLocationProps) => {
  const fullAddress = `${address}, ${city}, ${country}`;
  const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    fullAddress
  )}`;

  return (
    <div className={`flex items-start gap-3 ${className}`}>
      <div className="mt-1 text-red-500">
        <FaMapMarkerAlt size={20} />
      </div>

      <div>
        <p className="font-medium text-gray-800">{address}</p>
        <p className="text-gray-600">
          {city}, {country}
        </p>

        <a
          href={mapUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center mt-2 text-blue-600 hover:underline text-sm"
        >
          View on Map
          <FaExternalLinkAlt className="ml-1" size={12} />
        </a>
      </div>
    </div>
  );
};

export default Location;
