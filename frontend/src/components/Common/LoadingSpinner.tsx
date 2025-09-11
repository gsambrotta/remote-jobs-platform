import { Loader2 } from "lucide-react";

interface LoadingSpinnerProps {
  message?: string;
}

const LoadingSpinner = ({ message = "Loading..." }: LoadingSpinnerProps) => {
  return (
    <div className="flex flex-col items-center justify-center p-4 text-gray-600">
      <Loader2 className="h-6 w-6 animate-spin mb-2" />
      <p>{message}</p>
    </div>
  );
};

export default LoadingSpinner;
