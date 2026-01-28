const WhatLuciCanDoSection = () => {
  const features = [
    {
      title: "Prospect research at scale",
      description: "Automatically research and enrich prospect data from multiple sources including LinkedIn, company websites, news, and technographic databases.",
    },
    {
      title: "Deliverability management",
      description: "Intelligent email infrastructure management including warm-up sequences, domain rotation, and reputation monitoring for maximum inbox placement.",
    },
    {
      title: "Personalization engine",
      description: "AI-powered content generation that creates unique, relevant messages for each prospect based on their specific context and pain points.",
    },
    {
      title: "Self-optimizing SDR",
      description: "Continuous learning from campaign performance to automatically improve subject lines, messaging, timing, and sequencing strategies.",
    },
  ];

  return (
    <section className="py-20 px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-foreground text-4xl font-bold mb-4">
            What Luci Can Do
          </h2>
          <p className="text-foreground text-lg opacity-80 max-w-2xl mx-auto">
            Powerful capabilities that drive results
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 hover:border-orange-500 hover:shadow-2xl hover:shadow-orange-500/20 hover:scale-105 transition-all duration-300 ease-in-out"
            >
              <h3 className="text-primary text-lg font-semibold mb-3">
                {feature.title}
              </h3>
              <p className="text-foreground text-sm opacity-80 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatLuciCanDoSection;
