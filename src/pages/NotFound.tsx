import { Link } from "react-router-dom";
import { ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center">
      <div className="text-center max-w-md mx-auto px-4">
        <div className="text-8xl font-bold text-acid/20 mb-4">404</div>
        <h1 className="text-2xl sm:text-3xl font-bold text-text-primary mb-4">
          Page Not Found
        </h1>
        <p className="text-text-secondary mb-8">
          The page you're looking for doesn't exist or has been moved. Let's get you back on track.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/" className="btn-primary">
            <Home size={18} />
            Go Home
          </Link>
          <Link to="/contact" className="btn-secondary">
            <ArrowLeft size={18} />
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
