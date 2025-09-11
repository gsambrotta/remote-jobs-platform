import { AlertTriangle } from "lucide-react";

interface ErrorMessageProps {
  message: string;
  onRetry?: () => void;
}

const ErrorMessage = ({ message, onRetry }: ErrorMessageProps) => {
  return (
    <div className="flex flex-col items-center justify-center p-4 text-red-600">
      <AlertTriangle className="h-6 w-6 mb-2" />
      <p className="mb-2">{message}</p>
      {onRetry && (
        <button
          onClick={onRetry}
          className="px-3 py-1 rounded-md bg-red-500 text-white hover:bg-red-600"
        >
          Retry
        </button>
      )}
    </div>
  );
};

export default ErrorMessage;
