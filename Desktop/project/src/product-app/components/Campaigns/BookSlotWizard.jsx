import React from 'react';
import { ArrowLeft, Check } from 'lucide-react';

// const BookSlotWizard = ({ onBack, onDone }) => {
//   return (
//     <div className="space-y-6">
//       <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-4">
//         <p className="text-blue-400 text-sm">
//           Schedule a consultation call with our team to discuss your campaign requirements in detail.
//         </p>
//       </div>

//       <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden" style={{ height: '600px' }}>
//         <iframe
//           src="https://calendly.com/sambit-tigerworldtech/30min"
//           width="100%"
//           height="100%"
//           frameBorder="0"
//           title="Schedule a consultation"
//           className="rounded-xl"
//         />
//       </div>

//       <div className="flex gap-4 pt-4">
//         <button
//           onClick={onBack}
//           className="flex-1 py-3 bg-white/5 border border-white/10 text-gray-300 rounded-xl hover:bg-white/10 transition flex items-center justify-center gap-2"
//         >
//           <ArrowLeft className="w-5 h-5" />
//           Back
//         </button>
//         <button
//           onClick={onDone}
//           className="flex-1 py-3 bg-gradient-to-br from-brand-orange to-brand-purple text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-brand-orange/20 transition flex items-center justify-center gap-2"
//         >
//           <Check className="w-5 h-5" />
//           Done
//         </button>
//       </div>
//     </div>
//   );
// };

const BookSlotWizard = ({ onBack, onDone }) => {
  return (
    // <div className="space-y-6">
    <div className='h-screen flex gap-4 overflow-hidden'>

      {/* left 80% for calendly */}
      <div className="w-4/6 bg-white/5 border border-white/10 rounded-xl overflow-hidden" >
      {/* */}
        <iframe
          // src="https://calendly.com/sambit-tigerworldtech/30min"
          src= "https://calendly.com/sanjit-tigerworldtech"
          width="100%"
          height="100%"
          frameBorder="0"
          title="Schedule a consultation"
          className="rounded-xl"
        />
      </div>
      {/* right 20% for message and buttons */}
      <div className='w-2/6 flex flex-col justify-between'>
        <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-4 h-90">
        <p className="text-blue-400 text-sm mb-20" >
          Schedule a consultation call with our team to discuss your campaign requirements in detail.
        </p>

        <div className="flex gap-4 pt-4">
        <button
          onClick={onBack}
          className="flex-1 py-3 bg-white/5 border border-white/10 text-gray-300 rounded-xl hover:bg-white/10 transition flex items-center justify-center gap-2"
        >
          <ArrowLeft className="w-5 h-5" />
          Back
        </button>
        <button
          onClick={onDone}
          className="flex-1 py-3 bg-gradient-to-br from-brand-orange to-brand-purple text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-brand-orange/20 transition flex items-center justify-center gap-2"
        >
          <Check className="w-5 h-5" />
          Done
        </button>
      </div>
      </div>

      

      

      </div>
    </div>
  );
};

export default BookSlotWizard;
