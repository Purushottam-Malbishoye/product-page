const csv = require('csv-parser');
// const { supabaseService } = require('../config/supabase');
// const n8nService = require('./n8nService');

const parseSendersCSV = (buffer, orgId) => {
  return new Promise((resolve, reject) => {
    const senders = [];
    let rowCount = 0;

    csv(['email', 'display_name'])
      .on('data', (row) => {
        if (row.email && row.email.trim()) {
          senders.push({
            org_id: orgId,
            email: row.email.trim().toLowerCase(),
            display_name: row.display_name || row.email.split('@')[0],
            warmup_days: 0,
            health: 0,
            status: 'warmup',
            created_at: new Date().toISOString()
          });
          rowCount++;
        }
      })
      .on('end', () => {
        resolve({ senders, count: rowCount });
      })
      .on('error', reject)
      .end(buffer);
  });
};

module.exports = { parseSendersCSV };
