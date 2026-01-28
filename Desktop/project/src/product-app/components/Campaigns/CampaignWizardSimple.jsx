import React, { useState } from 'react';
import { ArrowLeft, Upload, ChevronDown, X, Plus, Download } from 'lucide-react';
import api from '../../services/api';
import {
  TARGET_SEGMENTS,
  INDUSTRIES,
  DEPARTMENTS,
  PERSONA_OPTIONS,
  GEOGRAPHIES,
  COMPANY_SIZES,
  EMAIL_TEMPLATES
} from '../../config/campaignConstants';

const CampaignWizardSimple = ({ onBack, onSuccess, onClose }) => {
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [uploadedFile, setUploadedFile] = useState(null);
  const [showAdvancedTargeting, setShowAdvancedTargeting] = useState(false);
  const [currentStep, setCurrentStep] = useState('details');
  const [createdCampaignId, setCreatedCampaignId] = useState(null);
  const [availableSenders, setAvailableSenders] = useState([]);
  const [selectedSenders, setSelectedSenders] = useState([]);

  const [formData, setFormData] = useState({
    name: '',
    dataset_source: 'own_csv',
    ai_sdr_url: '',
    audienceTargeting: {
      targetSegment: [],
      industries: [],
      departmentPersonas: [],
      industryPersonas: [], // ✅ NEW (Persona by Industry)
      geography: [],
      companySize: []
    },
    emailTemplateId: ''
  });

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    setErrors(prev => ({ ...prev, [field]: null }));
  };

  // ✅ KEEP: Same nested updater from Set 2 (DO NOT CHANGE)
  const handleAudienceChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      audienceTargeting: {
        ...prev.audienceTargeting,
        [field]: value
      }
    }));
  };

  // ✅ KEEP: Same array toggle logic from Set 2
  const toggleArrayValue = (field, value) => {
    const currentValues = formData.audienceTargeting[field];
    const newValues = currentValues.includes(value)
      ? currentValues.filter(v => v !== value)
      : [...currentValues, value];
    handleAudienceChange(field, newValues);
  };

  // ✅ KEEP: Persona by Department logic (existing)
  const addDepartmentPersona = () => {
    const newDeptPersona = { department: '', persona: '' };
    handleAudienceChange('departmentPersonas', [
      ...formData.audienceTargeting.departmentPersonas,
      newDeptPersona
    ]);
  };

  const updateDepartmentPersona = (index, field, value) => {
    const updated = [...formData.audienceTargeting.departmentPersonas];
    updated[index] = { ...updated[index], [field]: value };
    handleAudienceChange('departmentPersonas', updated);
  };

  const removeDepartmentPersona = (index) => {
    const updated = formData.audienceTargeting.departmentPersonas.filter((_, i) => i !== index);
    handleAudienceChange('departmentPersonas', updated);
  };

  // ✅ NEW: Persona by Industry logic (added)
  const addIndustryPersona = () => {
    const newIndustryPersona = { industry: '', persona: '' };
    handleAudienceChange('industryPersonas', [
      ...formData.audienceTargeting.industryPersonas,
      newIndustryPersona
    ]);
  };

  const updateIndustryPersona = (index, field, value) => {
    const updated = [...formData.audienceTargeting.industryPersonas];
    updated[index] = { ...updated[index], [field]: value };
    handleAudienceChange('industryPersonas', updated);
  };

  const removeIndustryPersona = (index) => {
    const updated = formData.audienceTargeting.industryPersonas.filter((_, i) => i !== index);
    handleAudienceChange('industryPersonas', updated);
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (!file.name.endsWith('.csv')) {
      setErrors(prev => ({ ...prev, file: 'Please upload a CSV file' }));
      return;
    }

    if (file.size > 52428800) {
      setErrors(prev => ({ ...prev, file: 'File size exceeds 50MB limit' }));
      return;
    }

    setUploadedFile(file);
    setErrors(prev => ({ ...prev, file: null }));
  };

  const downloadSampleCSV = () => {
    const sampleData = [
      ['first_name', 'last_name', 'email', 'company', 'title', 'industry', 'country'],
      ['John', 'Doe', 'john.doe@example.com', 'Acme Corp', 'CEO', 'Technology', 'United States'],
      ['Jane', 'Smith', 'jane.smith@techco.com', 'TechCo', 'CTO', 'Software', 'United Kingdom'],
      ['Bob', 'Johnson', 'bob.j@startup.io', 'StartupIO', 'Founder', 'SaaS', 'Canada']
    ];

    const csvContent = sampleData.map(row => row.join(',')).join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'sample_campaign_data.csv';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Campaign name is required';
    }

    if (formData.dataset_source === 'own_csv' && !uploadedFile) {
      newErrors.file = 'Please upload a CSV file';
    }

    if (formData.dataset_source === 'ai_sdr') {
      if (!formData.ai_sdr_url.trim()) {
        newErrors.ai_sdr_url = 'Database URL is required';
      } else if (!formData.ai_sdr_url.match(/^https?:\/\/.+/)) {
        newErrors.ai_sdr_url = 'URL must start with http:// or https://';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const fetchAvailableSenders = async () => {
    try {
      const response = await api.get('/senders/available');
      setAvailableSenders(response.data.senders || []);
    } catch (err) {
      console.error('Failed to fetch senders:', err);
    }
  };

  const handleSubmit = async () => {
    if (!validate()) return;

    setLoading(true);

    // 🎬 DEMO MODE: Skip API calls for demo purposes
    const DEMO_MODE = true; // Set to false when backend is ready

    if (DEMO_MODE) {
      // Simulate a short delay for realistic feel
      await new Promise(resolve => setTimeout(resolve, 800));

      // Set a fake campaign ID
      setCreatedCampaignId(`demo-campaign-${Date.now()}`);

      // Skip to senders step (or directly close and show campaign)
      // For demo, we'll skip senders and go straight to success
      const campaignData = {
        name: formData.name,
        dataset_source: formData.dataset_source,
        audienceTargeting: formData.audienceTargeting
      };

      setLoading(false);
      onSuccess(campaignData);
      onClose();
      return;
    }

    // REAL API MODE (for when backend is ready)
    try {
      const payload = {
        name: formData.name,
        dataset_source: formData.dataset_source,
        ai_sdr_url: formData.dataset_source === 'ai_sdr' ? formData.ai_sdr_url : null,
        audience_targeting: {
          target_segment: formData.audienceTargeting.targetSegment,
          industries: formData.audienceTargeting.industries,
          department_personas: formData.audienceTargeting.departmentPersonas,
          geography: formData.audienceTargeting.geography,
          company_size: formData.audienceTargeting.companySize
        },
        email_template_id: formData.emailTemplateId || null
      };

      const response = await api.post('/campaigns', payload);

      if (formData.dataset_source === 'own_csv' && uploadedFile) {
        const formDataUpload = new FormData();
        formDataUpload.append('file', uploadedFile);
        formDataUpload.append('campaign_id', response.data.campaign.id);

        await api.post('/datasets/upload', formDataUpload, {
          headers: { 'Content-Type': 'multipart/form-data' }
        });
      }

      setCreatedCampaignId(response.data.campaign.id);
      await fetchAvailableSenders();
      setCurrentStep('senders');
    } catch (err) {
      const errorMsg = err.response?.data?.error || 'Failed to create campaign';
      setErrors({ submit: errorMsg });
    } finally {
      setLoading(false);
    }
  };

  const handleSenderAssignment = async () => {
    if (selectedSenders.length === 0) {
      setErrors({ senders: 'Please select at least one sender' });
      return;
    }

    setLoading(true);

    try {
      for (const senderId of selectedSenders) {
        await api.post('/senders/assign', {
          campaignId: createdCampaignId,
          senderId
        });
      }

      // 🎬 DEMO: Pass campaign data to show immediately in the list
      const campaignData = {
        name: formData.name,
        dataset_source: formData.dataset_source,
        audienceTargeting: formData.audienceTargeting
      };
      onSuccess(campaignData);
      onClose();
    } catch (err) {
      const errorMsg = err.response?.data?.error || 'Failed to assign senders';
      setErrors({ senders: errorMsg });
    } finally {
      setLoading(false);
    }
  };

  const handleSkipSenders = () => {
    // 🎬 DEMO: Pass campaign data to show immediately in the list
    const campaignData = {
      name: formData.name,
      dataset_source: formData.dataset_source,
      audienceTargeting: formData.audienceTargeting
    };
    onSuccess(campaignData);
    onClose();
  };

  const toggleSender = (senderId) => {
    setSelectedSenders(prev =>
      prev.includes(senderId)
        ? prev.filter(id => id !== senderId)
        : [...prev, senderId]
    );
    setErrors(prev => ({ ...prev, senders: null }));
  };

  // ✅ Set 1 style chip button (reused)
  const ChipButton = ({ active, onClick, children }) => {
    return (
      <button
        type="button"
        onClick={onClick}
        className={`px-4 py-2 rounded-lg text-sm transition ${active
          ? 'bg-brand-orange text-white'
          : 'bg-white/5 border border-white/10 text-gray-300 hover:border-brand-orange/50'
          }`}
      >
        {children}
      </button>
    );
  };

  if (currentStep === 'senders') {
    return (
      <div className="space-y-6">
        {errors.senders && (
          <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400">
            {errors.senders}
          </div>
        )}

        <div>
          <h3 className="text-xl font-bold text-white mb-4">Assign Senders to Campaign</h3>
          <p className="text-gray-400 mb-6">
            Select email senders for this campaign. Only available senders are shown.
          </p>

          {availableSenders.length > 0 ? (
            <div className="space-y-3 max-h-96 overflow-y-auto pr-2">
              {availableSenders.map((sender) => (
                <label
                  key={sender.id}
                  className={`flex items-center gap-4 p-4 border rounded-xl cursor-pointer transition ${selectedSenders.includes(sender.id)
                    ? 'border-brand-orange bg-brand-orange/10'
                    : 'border-white/10 bg-white/5 hover:border-brand-orange/50'
                    }`}
                >
                  <input
                    type="checkbox"
                    checked={selectedSenders.includes(sender.id)}
                    onChange={() => toggleSender(sender.id)}
                    className="w-5 h-5 text-brand-orange rounded focus:ring-brand-orange"
                  />
                  <div className="flex-1">
                    <p className="text-white font-medium">{sender.name}</p>
                    <p className="text-gray-400 text-sm">{sender.email}</p>
                  </div>
                </label>
              ))}
            </div>
          ) : (
            <div className="p-6 bg-yellow-500/10 border border-yellow-500/20 rounded-xl">
              <p className="text-yellow-400 text-center">
                No senders available. Please wait for a campaign to finish or request for more Senders.
              </p>
            </div>
          )}
        </div>

        <div className="flex gap-4 pt-4">
          <button
            onClick={handleSkipSenders}
            className="flex-1 py-3 bg-white/5 border border-white/10 text-gray-300 rounded-xl hover:bg-white/10 transition"
          >
            Skip for Now
          </button>

          {availableSenders.length > 0 && (
            <button
              onClick={handleSenderAssignment}
              disabled={loading || selectedSenders.length === 0}
              className="flex-1 py-3 bg-gradient-to-br from-brand-orange to-brand-purple text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-brand-orange/20 transition disabled:opacity-50"
            >
              {loading ? 'Assigning...' : `Assign ${selectedSenders.length} Sender${selectedSenders.length !== 1 ? 's' : ''}`}
            </button>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {errors.submit && (
        <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400">
          {errors.submit}
        </div>
      )}

      {/* Campaign name */}
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Campaign Name <span className="text-red-400">*</span>
        </label>
        <input
          type="text"
          value={formData.name}
          onChange={(e) => handleChange('name', e.target.value)}
          className={`w-full px-4 py-3 bg-white/5 border rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-brand-orange ${errors.name ? 'border-red-500' : 'border-white/10'
            }`}
          placeholder="e.g., Q1 2024 Outreach"
        />
        {errors.name && <p className="mt-1 text-sm text-red-400">{errors.name}</p>}
      </div>

      {/* Database source */}
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-3">
          Database Source <span className="text-red-400">*</span>
        </label>
        <div className="space-y-3">
          <label className="flex items-start space-x-3 p-2 bg-white/5 border border-white/10 rounded-xl hover:border-brand-orange/50 cursor-pointer transition">
            <input
              type="radio"
              checked={formData.dataset_source === 'own_csv'}
              onChange={() => handleChange('dataset_source', 'own_csv')}
              className="mt-1 text-brand-orange"
            />
            <div>
              <span className="text-white font-small block">Own CSV</span>
              <span className="text-gray-400 text-sm">Upload your own prospect database</span>
            </div>
          </label>

          <label className="flex items-start space-x-3 p-2 bg-white/5 border border-white/10 rounded-xl hover:border-brand-orange/50 cursor-pointer transition">
            <input
              type="radio"
              checked={formData.dataset_source === 'ai_sdr'}
              onChange={() => handleChange('dataset_source', 'ai_sdr')}
              className="mt-1 text-brand-orange"
            />
            <div>
              <span className="text-white font-small block">AI SDR Database</span>
              <span className="text-gray-400 text-sm">Use our AI-powered prospect database</span>
            </div>
          </label>
        </div>
      </div>

      {/* CSV Upload */}
      {formData.dataset_source === 'own_csv' && (
        <div>
          <div className="flex items-center justify-between mb-2">
            <label className="block text-sm font-medium text-gray-300">
              Upload CSV <span className="text-red-400">*</span>
              <span className="text-gray-500 text-xs ml-2">(max 50MB)</span>
            </label>
            <button
              type="button"
              onClick={downloadSampleCSV}
              className="flex items-center gap-1 text-sm text-brand-orange hover:text-brand-orange/80 transition"
            >
              <Download className="w-4 h-4" />
              Download Sample
            </button>
          </div>
          <div className="relative">
            <input
              type="file"
              accept=".csv"
              onChange={handleFileUpload}
              className={`w-full px-4 py-3 bg-white/5 border rounded-xl text-gray-300 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-brand-orange file:text-white file:font-medium file:cursor-pointer hover:file:bg-brand-orange/80 ${errors.file ? 'border-red-500' : 'border-white/10'
                }`}
            />
          </div>
          {errors.file && <p className="mt-1 text-sm text-red-400">{errors.file}</p>}
          {uploadedFile && (
            <div className="mt-2 flex items-center gap-2 text-sm text-green-400">
              <Upload className="w-4 h-4" />
              <span>File selected: {uploadedFile.name}</span>
            </div>
          )}
        </div>
      )}

      {/* AI SDR URL */}
      {formData.dataset_source === 'ai_sdr' && (
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Database URL <span className="text-red-400">*</span>
          </label>
          <input
            type="url"
            value={formData.ai_sdr_url}
            onChange={(e) => handleChange('ai_sdr_url', e.target.value)}
            className={`w-full px-4 py-3 bg-white/5 border rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-brand-orange ${errors.ai_sdr_url ? 'border-red-500' : 'border-white/10'
              }`}
            placeholder="https://example.com/database"
          />
          {errors.ai_sdr_url && <p className="mt-1 text-sm text-red-400">{errors.ai_sdr_url}</p>}
        </div>
      )}

      {/* ✅ Advanced Audience Targeting (Set 1 style layout + segments) */}
      <div className="border-t border-white/10 pt-6">
        <button
          type="button"
          onClick={() => setShowAdvancedTargeting(!showAdvancedTargeting)}
          className="w-full flex items-center justify-between p-4 bg-white/5 border border-white/10 rounded-xl hover:border-brand-orange/50 transition"
        >
          <div className="text-left">
            <h3 className="text-white font-medium">Advanced Audience Targeting</h3>
            <p className="text-gray-400 text-sm">Optional fields for precise targeting</p>
          </div>
          <ChevronDown
            className={`w-5 h-5 text-gray-400 transition-transform ${showAdvancedTargeting ? 'rotate-180' : ''
              }`}
          />
        </button>

        {showAdvancedTargeting && (
          <div className="mt-4 space-y-6 p-4 bg-white/5 border border-white/10 rounded-xl">
            {/* Target Segment */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-3">
                Target Segment
              </label>
              <div className="flex flex-wrap gap-2">
                {TARGET_SEGMENTS.map((segment) => (
                  <ChipButton
                    key={segment.value}
                    active={formData.audienceTargeting.targetSegment.includes(segment.value)}
                    onClick={() => toggleArrayValue('targetSegment', segment.value)}
                  >
                    {segment.label}
                  </ChipButton>
                ))}
              </div>
            </div>

            {/* Industries */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-3">
                Industries
              </label>
              <div className="flex flex-wrap gap-2">
                {INDUSTRIES.map((industry) => (
                  <ChipButton
                    key={industry}
                    active={formData.audienceTargeting.industries.includes(industry)}
                    onClick={() => toggleArrayValue('industries', industry)}
                  >
                    {industry}
                  </ChipButton>
                ))}
              </div>
            </div>

            {/* ✅ Persona Targeting (Persona by Department + Persona by Industry) */}
            <div className="space-y-4">
              {/* Persona by Department */}
              <div className="p-4 bg-white/5 border border-white/10 rounded-xl">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div>
                    <h4 className="text-white font-medium">Persona by Department</h4>
                    <p className="text-gray-400 text-sm">
                      Choose department + persona combinations for accurate targeting.
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={addDepartmentPersona}
                    className="flex items-center gap-2 px-3 py-2 bg-brand-orange text-white rounded-lg hover:bg-brand-orange/80 transition text-sm"
                  >
                    <Plus className="w-4 h-4" />
                    Add
                  </button>
                </div>

                <div className="space-y-3">
                  {formData.audienceTargeting.departmentPersonas.map((dp, index) => (
                    <div key={index} className="flex gap-3 items-start">
                      <div className="flex-1">
                        <select
                          value={dp.department}
                          onChange={(e) =>
                            updateDepartmentPersona(index, 'department', e.target.value)
                          }
                          className="w-full px-4 py-2 bg-black border border-white/10 rounded-lg text-white text-sm focus:outline-none focus:border-brand-orange mb-2"
                        >
                          <option value="">Select Department</option>
                          {DEPARTMENTS.map((dept) => (
                            <option key={dept} value={dept}>
                              {dept}
                            </option>
                          ))}
                        </select>

                        <select
                          value={dp.persona}
                          onChange={(e) =>
                            updateDepartmentPersona(index, 'persona', e.target.value)
                          }
                          disabled={!dp.department}
                          className="w-full px-4 py-2 bg-black border border-white/10 rounded-lg text-white text-sm focus:outline-none focus:border-brand-orange disabled:opacity-50"
                        >
                          <option value="">Select Persona</option>
                          {dp.department &&
                            PERSONA_OPTIONS[dp.department]?.map((persona) => (
                              <option key={persona} value={persona}>
                                {persona}
                              </option>
                            ))}
                        </select>
                      </div>

                      <button
                        type="button"
                        onClick={() => removeDepartmentPersona(index)}
                        className="p-2 text-red-400 hover:bg-red-500/10 rounded-lg transition"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  ))}

                  {formData.audienceTargeting.departmentPersonas.length === 0 && (
                    <p className="text-gray-500 text-sm">
                      No department/persona rules added yet.
                    </p>
                  )}
                </div>
              </div>

              {/* Persona by Industry */}
              <div className="p-4 bg-white/5 border border-white/10 rounded-xl">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div>
                    <h4 className="text-white font-medium">Persona by Industry</h4>
                    <p className="text-gray-400 text-sm">
                      Choose industry + persona combinations for deeper targeting.
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={addIndustryPersona}
                    className="flex items-center gap-2 px-3 py-2 bg-brand-orange text-white rounded-lg hover:bg-brand-orange/80 transition text-sm"
                  >
                    <Plus className="w-4 h-4" />
                    Add
                  </button>
                </div>

                <div className="space-y-3">
                  {formData.audienceTargeting.industryPersonas.map((ip, index) => (
                    <div key={index} className="flex gap-3 items-start">
                      <div className="flex-1">
                        <select
                          value={ip.industry}
                          onChange={(e) =>
                            updateIndustryPersona(index, 'industry', e.target.value)
                          }
                          className="w-full px-4 py-2 bg-black border border-white/10 rounded-lg text-white text-sm focus:outline-none focus:border-brand-orange mb-2"
                        >
                          <option value="">Select Industry</option>
                          {INDUSTRIES.map((industry) => (
                            <option key={industry} value={industry}>
                              {industry}
                            </option>
                          ))}
                        </select>

                        {/* ✅ Persona options for industry not in constants.js -> safe input */}
                        <input
                          type="text"
                          value={ip.persona}
                          onChange={(e) =>
                            updateIndustryPersona(index, 'persona', e.target.value)
                          }
                          placeholder="Enter Persona (e.g. Founder, CTO, Head of Sales)"
                          className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white text-sm placeholder-gray-500 focus:outline-none focus:border-brand-orange"
                        />
                      </div>

                      <button
                        type="button"
                        onClick={() => removeIndustryPersona(index)}
                        className="p-2 text-red-400 hover:bg-red-500/10 rounded-lg transition"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  ))}

                  {formData.audienceTargeting.industryPersonas.length === 0 && (
                    <p className="text-gray-500 text-sm">
                      No industry/persona rules added yet.
                    </p>
                  )}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              {/* Geography */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-3">
                  Geography
                </label>
                <select
                  value={formData.audienceTargeting.geography?.[0] || ''}
                  onChange={(e) => {
                    const v = e.target.value;
                    handleAudienceChange('geography', v ? [v] : []);
                  }}
                  className="w-full px-4 py-3 bg-black border border-white/10 rounded-xl text-white focus:outline-none focus:border-brand-orange"
                >
                  <option value=''>Select Region</option>
                  {GEOGRAPHIES.map((geo) => (
                    <option key={geo} value={geo}>
                      {geo}
                    </option>
                  ))}
                </select>

              </div>

              {/* ✅ Company Size  */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-3">
                  Company Size
                </label>
                <select
                  value={formData.audienceTargeting.companySize?.[0] || ''}
                  onChange={(e) => {
                    const v = e.target.value;
                    handleAudienceChange('companySize', v ? [v] : []);
                  }}
                  className="w-full px-4 py-3 bg-black border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-brand-orange"
                >
                  <option value="">Select Company Size</option>
                  {COMPANY_SIZES.map((size) => (
                    <option key={size.value} value={size.value}>
                      {size.label}
                    </option>
                  ))}
                </select>

              </div>

            </div>

            {/* Email Template */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-3">
                Email Template
              </label>

              <div className="space-y-3">
                {EMAIL_TEMPLATES.map((template) => (
                  <label
                    key={template.id}
                    className={`block p-4 border rounded-xl cursor-pointer transition ${formData.emailTemplateId === template.id
                      ? 'border-brand-orange bg-brand-orange/10'
                      : 'border-white/10 bg-white/5 hover:border-brand-orange/50'
                      }`}
                  >
                    <input
                      type="radio"
                      name="emailTemplate"
                      value={template.id}
                      checked={formData.emailTemplateId === template.id}
                      onChange={(e) => handleChange('emailTemplateId', e.target.value)}
                      className="sr-only"
                    />
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-white font-medium">{template.name}</h4>
                      <span className="text-xs px-2 py-1 bg-brand-orange/20 text-brand-orange rounded">
                        {template.category}
                      </span>
                    </div>
                    <p className="text-gray-400 text-sm mb-2">
                      Subject: {template.subject}
                    </p>
                    <p className="text-gray-500 text-xs line-clamp-3">{template.body}</p>
                  </label>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Warmup note */}
      <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-4">
        <p className="text-blue-400 text-sm">
          Please allow at least seven days for warmup and training after campaign creation.
        </p>
      </div>

      {/* Buttons */}
      <div className="flex gap-4 pt-4">
        <button
          onClick={onBack}
          className="flex-1 py-3 bg-white/5 border border-white/10 text-gray-300 rounded-xl hover:bg-white/10 transition flex items-center justify-center gap-2"
        >
          <ArrowLeft className="w-5 h-5" />
          Back
        </button>

        <button
          onClick={handleSubmit}
          disabled={loading}
          className="flex-1 py-3 bg-gradient-to-br from-brand-orange to-brand-purple text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-brand-orange/20 transition disabled:opacity-50"
        >
          {loading ? 'Creating...' : 'Create Campaign'}
        </button>
      </div>
    </div>
  );
};

export default CampaignWizardSimple;
