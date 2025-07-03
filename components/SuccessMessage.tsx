interface SuccessMessageProps {
  onClose: () => void;
}

export default function SuccessMessage({ onClose }: SuccessMessageProps) {
  return (
    <div className="text-center py-8">
      <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
        <i className="ri-check-line text-4xl text-green-600"></i>
      </div>
      
      <h3 className="text-2xl font-bold text-gray-900 mb-4">
        Your project request has been submitted!
      </h3>
      
      <p className="text-lg text-gray-600 mb-6 max-w-md mx-auto">
        We&apos;ve received your project details and will be in touch shortly to discuss next steps.
      </p>
      
      <div className="bg-blue-50 rounded-xl p-6 mb-8">
        <div className="flex items-start gap-3">
          <i className="ri-information-line text-blue-600 text-lg mt-0.5"></i>
          <div className="text-sm text-blue-800 text-left">
            <p className="font-medium mb-2">What happens next?</p>
            <ul className="space-y-1 text-blue-700">
              <li>• Our team will review your project within 2 hours</li>
              <li>• You&apos;ll receive a detailed proposal and timeline</li>
              <li>• We&apos;ll schedule a brief call to finalize details</li>
              <li>• Your landing page development begins immediately</li>
            </ul>
          </div>
        </div>
      </div>
      
      <button
        onClick={onClose}
        className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-3 rounded-xl font-medium hover:from-blue-700 hover:to-blue-800 transition-all duration-200 flex items-center justify-center gap-2 mx-auto"
      >
        <i className="ri-check-line"></i>
        Got it!
      </button>
    </div>
  );
}