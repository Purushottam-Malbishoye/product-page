export const TARGET_SEGMENTS = [
  { value: 'b2b', label: 'B2B (Business to Business)' },
  { value: 'b2c', label: 'B2C (Business to Consumer)' },
  { value: 'b2b2c', label: 'B2B2C (Business to Business to Consumer)' }
];

export const INDUSTRIES = [
  'Technology',
  'Healthcare',
  'Finance',
  'Retail',
  'Manufacturing',
  'Education',
  'Real Estate',
  'Transportation',
  'Energy',
  'Telecommunications',
  'Media & Entertainment',
  'Hospitality',
  'Agriculture',
  'Construction',
  'Legal Services',
  'Professional Services',
  'Non-Profit',
  'Government'
];

export const DEPARTMENTS = [
  'Marketing',
  'Sales',
  'Engineering',
  'Product',
  'Customer Success',
  'Operations',
  'Human Resources',
  'Finance',
  'IT',
  'Executive',
  'Legal',
  'Design',
  'Data Science',
  'Business Development'
];

export const PERSONA_OPTIONS = {
  Marketing: ['CMO', 'VP Marketing', 'Marketing Director', 'Marketing Manager', 'Digital Marketing Specialist', 'Content Manager', 'Brand Manager'],
  Sales: ['CRO', 'VP Sales', 'Sales Director', 'Sales Manager', 'Account Executive', 'BDR', 'SDR', 'Sales Engineer'],
  Engineering: ['CTO', 'VP Engineering', 'Engineering Manager', 'Tech Lead', 'Senior Engineer', 'Software Engineer', 'DevOps Engineer', 'QA Engineer'],
  Product: ['CPO', 'VP Product', 'Product Director', 'Product Manager', 'Senior Product Manager', 'Associate Product Manager', 'Product Designer'],
  'Customer Success': ['VP Customer Success', 'Customer Success Manager', 'Account Manager', 'Customer Support Lead', 'Support Specialist'],
  Operations: ['COO', 'VP Operations', 'Operations Manager', 'Business Operations Manager', 'Operations Analyst'],
  'Human Resources': ['CHRO', 'VP HR', 'HR Director', 'HR Manager', 'Recruiter', 'Talent Acquisition Manager', 'People Operations'],
  Finance: ['CFO', 'VP Finance', 'Finance Director', 'Controller', 'Financial Analyst', 'Accountant'],
  IT: ['CIO', 'VP IT', 'IT Director', 'IT Manager', 'Systems Administrator', 'Network Engineer', 'Security Engineer'],
  Executive: ['CEO', 'President', 'Founder', 'Co-Founder', 'Managing Director', 'Board Member'],
  Legal: ['General Counsel', 'VP Legal', 'Legal Director', 'Corporate Counsel', 'Compliance Officer'],
  Design: ['Chief Design Officer', 'VP Design', 'Design Director', 'Lead Designer', 'UX Designer', 'UI Designer', 'Product Designer'],
  'Data Science': ['Chief Data Officer', 'VP Data', 'Data Science Director', 'Data Scientist', 'Data Analyst', 'ML Engineer'],
  'Business Development': ['VP Business Development', 'Business Development Manager', 'Partnership Manager', 'Strategic Alliances Manager']
};

export const GEOGRAPHIES = [
  'North America',
  'United States',
  'Canada',
  'Mexico',
  'Europe',
  'United Kingdom',
  'Germany',
  'France',
  'Spain',
  'Italy',
  'Netherlands',
  'Sweden',
  'Asia Pacific',
  'China',
  'Japan',
  'India',
  'Singapore',
  'Australia',
  'South Korea',
  'Latin America',
  'Brazil',
  'Argentina',
  'Chile',
  'Middle East',
  'UAE',
  'Saudi Arabia',
  'Africa',
  'South Africa',
  'Nigeria',
  'Kenya'
];

export const COMPANY_SIZES = [
  { value: '1-10', label: '1-10 employees (Startup)' },
  { value: '11-50', label: '11-50 employees (Small)' },
  { value: '51-200', label: '51-200 employees (Medium)' },
  { value: '201-500', label: '201-500 employees (Medium-Large)' },
  { value: '501-1000', label: '501-1000 employees (Large)' },
  { value: '1001-5000', label: '1,001-5,000 employees (Enterprise)' },
  { value: '5001-10000', label: '5,001-10,000 employees (Large Enterprise)' },
  { value: '10000+', label: '10,000+ employees (Global Enterprise)' }
];

export const EMAIL_TEMPLATES = [
  {
    id: 'template_1',
    name: 'Professional Introduction',
    subject: 'Quick question about {{company_name}}',
    body: `Hi {{first_name}},

I noticed {{company_name}} is {{relevant_insight}}. I wanted to reach out because we've helped similar companies in {{industry}} achieve {{specific_benefit}}.

Would you be open to a brief conversation to explore if we could help {{company_name}} as well?

Best regards,
{{sender_name}}`,
    category: 'Cold Outreach'
  },
  {
    id: 'template_2',
    name: 'Value Proposition',
    subject: 'Helping {{company_name}} with {{pain_point}}',
    body: `Hi {{first_name}},

I hope this email finds you well. I'm reaching out because {{company_name}} might benefit from {{solution_description}}.

We've recently helped {{similar_company}} achieve:
- {{benefit_1}}
- {{benefit_2}}
- {{benefit_3}}

Would you be interested in learning more?

Best,
{{sender_name}}`,
    category: 'Solution Focused'
  },
  {
    id: 'template_3',
    name: 'Industry Insight',
    subject: 'Insights for {{industry}} leaders',
    body: `Hi {{first_name}},

As someone in {{department}} at {{company_name}}, you might find this interesting:

{{industry_insight}}

We've been working with {{industry}} companies to {{solution_benefit}}. Would you be open to a quick call to discuss how this could apply to {{company_name}}?

Regards,
{{sender_name}}`,
    category: 'Educational'
  },
  {
    id: 'template_4',
    name: 'Problem-Solution',
    subject: 'Re: {{pain_point}} at {{company_name}}',
    body: `Hi {{first_name}},

I noticed that many {{industry}} companies struggle with {{pain_point}}.

We've developed a solution that has helped companies like {{similar_company_1}} and {{similar_company_2}} to {{key_benefit}}.

Would you be interested in a brief demo?

Best regards,
{{sender_name}}`,
    category: 'Problem Focused'
  },
  {
    id: 'template_5',
    name: 'Personalized Approach',
    subject: 'Impressed by {{company_name}}\'s {{achievement}}',
    body: `Hi {{first_name}},

I came across {{company_name}}'s recent {{achievement}} and was impressed by {{specific_detail}}.

Given your focus on {{area_of_focus}}, I thought you might be interested in how we've helped {{industry}} leaders like {{similar_company}} to {{benefit}}.

Would you be open to a quick chat?

Best,
{{sender_name}}`,
    category: 'Personalized'
  }
];
