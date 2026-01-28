import React, { useState } from 'react';
import { X, Calendar, Zap } from 'lucide-react';
import CampaignWizardSimple from './CampaignWizardSimple';
import BookSlotWizard from './BookSlotWizard';

const CampaignWizard = ({ isOpen, onClose, onSuccess }) => {
  const [currentScreen, setCurrentScreen] = useState('choose');

  const handleClose = () => {
    setCurrentScreen('choose');
    onClose();
  };

  const handleSuccess = (newCampaignData) => {
    setCurrentScreen('choose');
    onSuccess(newCampaignData);
  };

  if (!isOpen) return null;

  const getTitle = () => {
    switch (currentScreen) {
      case 'book':
        return 'Book a Consultation';
      case 'create':
        return 'Create Campaign';
      default:
        return 'New Campaign';
    }
  };

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4 overflow-hidden ">
      <div className="glass-strong rounded-3xl w-full max-w-5xl my-8">
        <div className="sticky top-0 bg-[#070A10]/90 backdrop-blur-lg p-4 border-b border-white/10 flex items-center justify-between rounded-t-3xl">
          <h2 className="text-2xl font-bold text-white">{getTitle()}</h2>
          <button onClick={handleClose} className="text-gray-400 hover:text-white transition">
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6 max-h-[calc(90vh-100px)] overflow-y-auto">
          {currentScreen === 'choose' && (
            <div className="space-y-4">
              <p className="text-gray-300 text-center mb-8">
                Choose how you'd like to get started with your campaign
              </p>

              <button
                onClick={() => setCurrentScreen('book')}
                className="w-full p-6 bg-white/5 border-2 border-white/10 rounded-xl hover:border-brand-orange hover:bg-brand-orange/5 transition group"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-brand-orange/20 rounded-xl group-hover:bg-brand-orange/30 transition">
                    <Calendar className="w-8 h-8 text-brand-orange" />
                  </div>
                  <div className="flex-1 text-left">
                    <h3 className="text-xl font-bold text-white mb-2">
                      Book a Slot for Detailed Prospect
                    </h3>
                    <p className="text-gray-400">
                      Choose a time slot from the calendar that fits your schedule. Our team will discuss your campaign requirements in detail.
                    </p>
                  </div>
                </div>
              </button>

              <button
                onClick={() => setCurrentScreen('create')}
                className="w-full p-6 bg-white/5 border-2 border-white/10 rounded-xl hover:border-brand-orange hover:bg-brand-orange/5 transition group"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-brand-orange/20 rounded-xl group-hover:bg-brand-orange/30 transition">
                    <Zap className="w-8 h-8 text-brand-orange" />
                  </div>
                  <div className="flex-1 text-left">
                    <h3 className="text-xl font-bold text-white mb-2">
                      Create a New Campaign
                    </h3>
                    <p className="text-gray-400">
                      Name your campaign and select a database source. Get started immediately with our streamlined setup process.
                    </p>
                  </div>
                </div>
              </button>
            </div>
          )}

          {currentScreen === 'book' && (
            <BookSlotWizard
              onBack={() => setCurrentScreen('choose')}
              onDone={handleSuccess}
            />
          )}

          {currentScreen === 'create' && (
            <CampaignWizardSimple
              onBack={() => setCurrentScreen('choose')}
              onSuccess={handleSuccess}
              onClose={handleClose}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default CampaignWizard;
