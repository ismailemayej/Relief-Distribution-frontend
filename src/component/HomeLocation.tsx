import Location from "./Location";

export const LocationWithMap = ({ address, city, country }: any) => {
  const fullAddress = `${address}, ${city}, ${country}`;
  const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    fullAddress
  )}`;

  // Using OpenStreetMap static image as fallback
  const staticMapUrl = `https://static-maps.yandex.ru/1.x/?lang=en_US&ll=${encodeURIComponent(
    fullAddress
  )}&size=600,300&z=14&pt=${encodeURIComponent(fullAddress)},pm2rdl`;

  return (
    <div className="max-w-md border rounded-lg overflow-hidden shadow-sm bg-white">
      <a href={mapUrl} target="_blank" rel="noopener noreferrer">
        <img
          src={staticMapUrl}
          alt={`Map of ${fullAddress}`}
          className="w-full h-40 object-cover bg-gray-100"
          onError={(e) => {
            (
              e.target as HTMLImageElement
            ).src = `https://via.placeholder.com/600x300?text=Map+Not+Available`;
          }}
        />
      </a>
      <div className="p-4">
        <Location address={address} city={city} country={country} />
      </div>
    </div>
  );
};
