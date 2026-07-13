import type { ListingProps } from "../../types/real-estate";

export interface PropertyPriceProps {
  price: number;
  status: ListingProps["status"];
  pricePerSqft?: number;
}

export function PropertyPrice({ price, status, pricePerSqft }: PropertyPriceProps) {
  const formatPrice = (amount: number): string => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const formatPricePerSqft = (amount: number): string => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const getStatusColor = (status: ListingProps["status"]): string => {
    switch (status) {
      case "for-sale":
        return "bg-green-100 text-green-800 border-green-200";
      case "pending":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "sold":
        return "bg-gray-100 text-gray-800 border-gray-200";
      default:
        return "bg-green-100 text-green-800 border-green-200";
    }
  };

  const getStatusText = (status: ListingProps["status"]): string => {
    switch (status) {
      case "for-sale":
        return "For Sale";
      case "pending":
        return "Pending";
      case "sold":
        return "Sold";
      default:
        return "For Sale";
    }
  };

  return (
    <div className="flex flex-col space-y-2">
      <div className="flex items-baseline justify-between">
        <span className="text-2xl font-bold text-gray-900">{formatPrice(price)}</span>
        <span className={`px-2 py-1 text-xs font-medium rounded-full border ${getStatusColor(status)}`}>
          {getStatusText(status)}
        </span>
      </div>
      {pricePerSqft && (
        <div className="text-sm text-gray-600">{formatPricePerSqft(pricePerSqft)}/sq ft</div>
      )}
    </div>
  );
}
