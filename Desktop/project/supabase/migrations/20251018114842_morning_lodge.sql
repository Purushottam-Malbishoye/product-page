/*
  # Seed Blog Posts

  1. Sample Data
    - Insert sample blog posts for demonstration
    - All posts are published and ready to display
*/

INSERT INTO blog_posts (title, slug, excerpt, content, category, image_url, read_time, published_at) VALUES
(
  'The Future of AI in Healthcare: Transforming Patient Care',
  'future-ai-healthcare-transforming-patient-care',
  'Exploring how artificial intelligence is revolutionizing medical diagnostics and treatment planning.',
  'Artificial Intelligence is transforming healthcare in unprecedented ways. From diagnostic imaging to personalized treatment plans, AI is helping medical professionals provide better care while reducing costs and improving outcomes. This comprehensive guide explores the current applications and future potential of AI in healthcare.',
  'Healthcare',
  'https://images.pexels.com/photos/3786126/pexels-photo-3786126.jpeg?auto=compress&cs=tinysrgb&w=800',
  8,
  '2024-12-15T10:00:00Z'
),
(
  'Implementing Ethical AI: Best Practices for Businesses',
  'implementing-ethical-ai-best-practices-businesses',
  'A comprehensive guide to building responsible AI systems that prioritize fairness and transparency.',
  'As AI becomes more prevalent in business operations, ensuring ethical implementation is crucial. This article covers key principles of ethical AI, including fairness, transparency, accountability, and privacy. Learn how to build AI systems that not only perform well but also align with ethical standards and regulatory requirements.',
  'Ethics',
  'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800',
  12,
  '2024-12-10T14:30:00Z'
),
(
  'Machine Learning ROI: Measuring Success in AI Projects',
  'machine-learning-roi-measuring-success-ai-projects',
  'Learn how to calculate and maximize the return on investment for your machine learning initiatives.',
  'Measuring the ROI of machine learning projects can be challenging but is essential for business success. This article provides frameworks and methodologies for calculating ML ROI, including both quantitative metrics and qualitative benefits. Discover how to set up proper measurement systems and demonstrate value to stakeholders.',
  'Business',
  'https://images.pexels.com/photos/3483098/pexels-photo-3483098.jpeg?auto=compress&cs=tinysrgb&w=800',
  10,
  '2024-12-05T09:15:00Z'
),
(
  'Computer Vision in Manufacturing: Quality Control Revolution',
  'computer-vision-manufacturing-quality-control-revolution',
  'How computer vision is transforming quality control processes in manufacturing industries.',
  'Computer vision technology is revolutionizing manufacturing quality control by providing automated, accurate, and consistent inspection capabilities. This article explores real-world applications, implementation strategies, and the significant ROI that manufacturers are achieving through AI-powered visual inspection systems.',
  'Manufacturing',
  'https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=800',
  7,
  '2024-11-28T16:45:00Z'
),
(
  'Natural Language Processing: Transforming Customer Service',
  'nlp-transforming-customer-service',
  'Discover how NLP is revolutionizing customer service through intelligent chatbots and sentiment analysis.',
  'Natural Language Processing is transforming customer service by enabling more intelligent, responsive, and personalized interactions. From chatbots that understand context to sentiment analysis that helps prioritize support tickets, NLP is helping businesses provide better customer experiences while reducing operational costs.',
  'Technology',
  'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
  9,
  '2024-11-20T11:20:00Z'
);