import mongoose from 'mongoose';

const campaignSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  name: {
    type: String,
    required: true
  },
  status: {
    type: String,
    enum: ['active', 'paused', 'completed'],
    default: 'active'
  },
  manyreachCampaignId: String,
  stats: {
    totalProspects: { type: Number, default: 0 },
    contacted: { type: Number, default: 0 },
    engaged: { type: Number, default: 0 },
    positive: { type: Number, default: 0 },
    meetingsBooked: { type: Number, default: 0 },
    lastSync: Date
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model('Campaign', campaignSchema);
