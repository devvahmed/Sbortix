import Link from 'next/link';
import { ArrowLeft, Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-[#FAFAFD] px-6 py-24 text-center">
      <div className="max-w-md mx-auto space-y-6">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#2D2D82]/10 text-[#2D2D82] font-mono text-xl font-bold mb-2">
          404
        </div>
        <h1
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          className="text-3xl sm:text-4xl font-extrabold text-[#151137] tracking-tight"
        >
          Page Not Found
        </h1>
        <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
          The requested system node or resource does not exist or has been relocated.
        </p>
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-white bg-[#2D2D82] hover:bg-[#151137] transition-all shadow-md w-full sm:w-auto"
          >
            <Home className="w-4 h-4" />
            Return Home
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-[#151137] bg-white hover:bg-gray-100 border border-gray-200 transition-all w-full sm:w-auto"
          >
            <ArrowLeft className="w-4 h-4" />
            Contact Support
          </Link>
        </div>
      </div>
    </div>
  );
}
