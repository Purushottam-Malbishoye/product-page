import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import LucyHero from './components/LucyHero';
import About from './components/About';
import Services from './components/Services';
import Industries from './components/Industries';
import Technology from './components/Technology';
import Resources from './components/Resources';
import Career from './components/Career';
import Footer from './components/Footer';
import BlogDetail from './components/BlogDetail';
import ArticlesPage from './components/ArticlesPage';
import SuccessStoriesPage from './components/SuccessStoriesPage';
import WhitepapersPage from './components/WhitepapersPage';
import IndustriesPage from './components/IndustriesPage';
import AboutFirstsciencePage from './components/AboutFirstsciencePage';
import CoreValuesPage from './components/CoreValuesPage';
import LeadershipTeamPage from './components/LeadershipTeamPage';
import AISDRPage from './components/AISDRPage';
import ProductApp from './components/ProductApp';
import CaseStudiesPage from './components/CaseStudiesPage';
import AISearchVisibilityPage from './components/AISearchVisibilityPage';
import PrivacyPolicyPage from './components/PrivacyPolicyPage';
import TermsOfServicePage from './components/TermsOfServicePage';
import ContactUsPage from './components/ContactUsPage';
import CareerPage from './components/CareerPage';
import WhatsAppButton from './components/WhatsAppButton';
import { useRouter, navigate, getViewFromPath } from './lib/router';

function App() {
  const { path } = useRouter();
  const { view: currentView, slug: selectedBlogSlug } = getViewFromPath(path);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [path]);

  const goBackHome = () => {
    navigate('/');
  };

  const showResourcesPage = () => {
    navigate('/resources');
  };

  const showArticlesPage = () => {
    navigate('/articles');
  };

  const showSuccessStoriesPage = () => {
    navigate('/success-stories');
  };

  const showWhitepapersPage = () => {
    navigate('/whitepapers');
  };

  const showIndustriesPage = () => {
    navigate('/industries');
  };

  const showAboutFirstsciencePage = () => {
    navigate('/about');
  };

  const showCoreValuesPage = () => {
    navigate('/core-values');
  };

  const showLeadershipTeamPage = () => {
    navigate('/leadership');
  };

  const showAISDRPage = () => {
    navigate('/ai-sdr');
  };

  const showCaseStudiesPage = () => {
    navigate('/case-studies');
  };

  const showAISearchVisibilityPage = () => {
    navigate('/ai-search-visibility');
  };

  const showPrivacyPolicyPage = () => {
    navigate('/privacy');
  };

  const showTermsOfServicePage = () => {
    navigate('/terms');
  };

  const showContactUsPage = () => {
    navigate('/contact');
  };

  const showCareersPage = () => {
    navigate('/career');
  };

  const showBlogPost = (slug: string) => {
    navigate(`/blog/${slug}`);
  };

  const goToContact = () => {
    navigate('/contact');
  };

  const goToCareer = () => {
    if (currentView !== 'home') {
      navigate('/');
    }
    setTimeout(() => {
      const careerElement = document.getElementById('career');
      if (careerElement) {
        careerElement.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const handleFooterNavigation = (section: string) => {
    const navigateToHome = (targetSection?: string) => {
      if (currentView !== 'home') {
        navigate('/');
      }
      if (targetSection) {
        setTimeout(() => {
          const element = document.getElementById(targetSection);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, currentView !== 'home' ? 100 : 0);
      }
    };

    const navigateToIndustries = (targetSection?: string) => {
      if (currentView !== 'industries') {
        navigate('/industries');
      }
      if (targetSection) {
        setTimeout(() => {
          const element = document.getElementById(targetSection);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, currentView !== 'industries' ? 100 : 0);
      }
    };

    switch (section) {
      case 'about':
        navigateToHome('about');
        break;
      case 'careers':
      case 'career':
        showCareersPage();
        break;
      case 'news':
        navigateToHome('news');
        break;
      case 'investors':
        navigateToHome('investors');
        break;
      case 'machine-learning':
      case 'nlp':
      case 'computer-vision':
      case 'predictive-analytics':
      case 'ai-consulting':
      case 'custom-ai-development':
        navigateToHome(section);
        break;
      case 'healthcare-ai':
      case 'fintech':
      case 'manufacturing':
      case 'retail':
      case 'transportation':
      case 'energy':
        navigateToIndustries(section);
        break;
      case 'blog':
        showArticlesPage();
        break;
      case 'whitepapers':
        showWhitepapersPage();
        break;
      case 'docs':
      case 'api':
        navigateToHome('resources');
        break;
      case 'contact':
      case 'support':
        goToContact();
        break;
      case 'contact-us':
        showContactUsPage();
        break;
      case 'privacy':
        showPrivacyPolicyPage();
        break;
      case 'terms':
        showTermsOfServicePage();
        break;
      default:
        navigateToHome(section);
    }
  };

  if (currentView === 'blog' && selectedBlogSlug) {
    return (
      <div className="min-h-screen">
        <Header
          onNavigate={goBackHome}
          onResourcesClick={showResourcesPage}
          onArticlesClick={showArticlesPage}
          onSuccessStoriesClick={showSuccessStoriesPage}
          onWhitepapersClick={showWhitepapersPage}
          onIndustriesClick={showIndustriesPage}
          onAboutFirstscienceClick={showAboutFirstsciencePage}
          onCoreValuesClick={showCoreValuesPage}
          onLeadershipTeamClick={showLeadershipTeamPage}
          onAISDRClick={showAISDRPage}
          onCaseStudiesClick={showCaseStudiesPage}
          onAISearchVisibilityClick={showAISearchVisibilityPage}
          onContactUsClick={showContactUsPage}
          onBookDemoClick={goToContact}
          onCareersClick={showCareersPage}
        />
        <BlogDetail slug={selectedBlogSlug} onClose={goBackHome} />
        <Footer onNavigate={handleFooterNavigation} />
        <WhatsAppButton />
      </div>
    );
  }

  if (currentView === 'ai-sdr') {
    return <ProductApp />;
  }

  if (currentView === 'about-firstscience') {
    return (
      <div className="min-h-screen">
        <Header
          onNavigate={goBackHome}
          onResourcesClick={showResourcesPage}
          onArticlesClick={showArticlesPage}
          onSuccessStoriesClick={showSuccessStoriesPage}
          onWhitepapersClick={showWhitepapersPage}
          onIndustriesClick={showIndustriesPage}
          onAboutFirstscienceClick={showAboutFirstsciencePage}
          onCoreValuesClick={showCoreValuesPage}
          onLeadershipTeamClick={showLeadershipTeamPage}
          onAISDRClick={showAISDRPage}
          onCaseStudiesClick={showCaseStudiesPage}
          onAISearchVisibilityClick={showAISearchVisibilityPage}
          onContactUsClick={showContactUsPage}
          onBookDemoClick={goToContact}
          onCareersClick={showCareersPage}
        />
        <AboutFirstsciencePage />
        <Footer onNavigate={handleFooterNavigation} />
        <WhatsAppButton />
      </div>
    );
  }

  if (currentView === 'core-values') {
    return (
      <div className="min-h-screen">
        <Header
          onNavigate={goBackHome}
          onResourcesClick={showResourcesPage}
          onArticlesClick={showArticlesPage}
          onSuccessStoriesClick={showSuccessStoriesPage}
          onWhitepapersClick={showWhitepapersPage}
          onIndustriesClick={showIndustriesPage}
          onAboutFirstscienceClick={showAboutFirstsciencePage}
          onCoreValuesClick={showCoreValuesPage}
          onLeadershipTeamClick={showLeadershipTeamPage}
          onAISDRClick={showAISDRPage}
          onCaseStudiesClick={showCaseStudiesPage}
          onAISearchVisibilityClick={showAISearchVisibilityPage}
          onContactUsClick={showContactUsPage}
          onBookDemoClick={goToContact}
          onCareersClick={showCareersPage}
        />
        <CoreValuesPage />
        <Footer onNavigate={handleFooterNavigation} />
        <WhatsAppButton />
      </div>
    );
  }

  if (currentView === 'leadership-team') {
    return (
      <div className="min-h-screen">
        <Header
          onNavigate={goBackHome}
          onResourcesClick={showResourcesPage}
          onArticlesClick={showArticlesPage}
          onSuccessStoriesClick={showSuccessStoriesPage}
          onWhitepapersClick={showWhitepapersPage}
          onIndustriesClick={showIndustriesPage}
          onAboutFirstscienceClick={showAboutFirstsciencePage}
          onCoreValuesClick={showCoreValuesPage}
          onLeadershipTeamClick={showLeadershipTeamPage}
          onAISDRClick={showAISDRPage}
          onCaseStudiesClick={showCaseStudiesPage}
          onAISearchVisibilityClick={showAISearchVisibilityPage}
          onContactUsClick={showContactUsPage}
          onBookDemoClick={goToContact}
          onCareersClick={showCareersPage}
        />
        <LeadershipTeamPage />
        <Footer onNavigate={handleFooterNavigation} />
        <WhatsAppButton />
      </div>
    );
  }

  if (currentView === 'industries') {
    return (
      <div className="min-h-screen">
        <Header
          onNavigate={goBackHome}
          onResourcesClick={showResourcesPage}
          onArticlesClick={showArticlesPage}
          onSuccessStoriesClick={showSuccessStoriesPage}
          onWhitepapersClick={showWhitepapersPage}
          onIndustriesClick={showIndustriesPage}
          onAboutFirstscienceClick={showAboutFirstsciencePage}
          onCoreValuesClick={showCoreValuesPage}
          onLeadershipTeamClick={showLeadershipTeamPage}
          onAISDRClick={showAISDRPage}
          onCaseStudiesClick={showCaseStudiesPage}
          onAISearchVisibilityClick={showAISearchVisibilityPage}
          onContactUsClick={showContactUsPage}
          onBookDemoClick={goToContact}
          onCareersClick={showCareersPage}
        />
        <IndustriesPage />
        <Footer onNavigate={handleFooterNavigation} />
        <WhatsAppButton />
      </div>
    );
  }

  if (currentView === 'articles') {
    return (
      <div className="min-h-screen">
        <Header
          onNavigate={goBackHome}
          onResourcesClick={showResourcesPage}
          onArticlesClick={showArticlesPage}
          onSuccessStoriesClick={showSuccessStoriesPage}
          onWhitepapersClick={showWhitepapersPage}
          onIndustriesClick={showIndustriesPage}
          onAboutFirstscienceClick={showAboutFirstsciencePage}
          onCoreValuesClick={showCoreValuesPage}
          onLeadershipTeamClick={showLeadershipTeamPage}
          onAISDRClick={showAISDRPage}
          onCaseStudiesClick={showCaseStudiesPage}
          onAISearchVisibilityClick={showAISearchVisibilityPage}
          onContactUsClick={showContactUsPage}
          onBookDemoClick={goToContact}
          onCareersClick={showCareersPage}
        />
        <ArticlesPage onBlogClick={showBlogPost} />
        <Footer onNavigate={handleFooterNavigation} />
        <WhatsAppButton />
      </div>
    );
  }

  if (currentView === 'success-stories') {
    return (
      <div className="min-h-screen">
        <Header
          onNavigate={goBackHome}
          onResourcesClick={showResourcesPage}
          onArticlesClick={showArticlesPage}
          onSuccessStoriesClick={showSuccessStoriesPage}
          onWhitepapersClick={showWhitepapersPage}
          onIndustriesClick={showIndustriesPage}
          onAboutFirstscienceClick={showAboutFirstsciencePage}
          onCoreValuesClick={showCoreValuesPage}
          onLeadershipTeamClick={showLeadershipTeamPage}
          onAISDRClick={showAISDRPage}
          onCaseStudiesClick={showCaseStudiesPage}
          onAISearchVisibilityClick={showAISearchVisibilityPage}
          onContactUsClick={showContactUsPage}
          onBookDemoClick={goToContact}
          onCareersClick={showCareersPage}
        />
        <SuccessStoriesPage />
        <Footer onNavigate={handleFooterNavigation} />
        <WhatsAppButton />
      </div>
    );
  }

  if (currentView === 'whitepapers') {
    return (
      <div className="min-h-screen">
        <Header
          onNavigate={goBackHome}
          onResourcesClick={showResourcesPage}
          onArticlesClick={showArticlesPage}
          onSuccessStoriesClick={showSuccessStoriesPage}
          onWhitepapersClick={showWhitepapersPage}
          onIndustriesClick={showIndustriesPage}
          onAboutFirstscienceClick={showAboutFirstsciencePage}
          onCoreValuesClick={showCoreValuesPage}
          onLeadershipTeamClick={showLeadershipTeamPage}
          onAISDRClick={showAISDRPage}
          onCaseStudiesClick={showCaseStudiesPage}
          onAISearchVisibilityClick={showAISearchVisibilityPage}
          onContactUsClick={showContactUsPage}
          onBookDemoClick={goToContact}
          onCareersClick={showCareersPage}
        />
        <WhitepapersPage />
        <Footer onNavigate={handleFooterNavigation} />
        <WhatsAppButton />
      </div>
    );
  }

  if (currentView === 'resources') {
    return (
      <div className="min-h-screen">
        <Header
          onNavigate={goBackHome}
          onResourcesClick={showResourcesPage}
          onArticlesClick={showArticlesPage}
          onSuccessStoriesClick={showSuccessStoriesPage}
          onWhitepapersClick={showWhitepapersPage}
          onIndustriesClick={showIndustriesPage}
          onAboutFirstscienceClick={showAboutFirstsciencePage}
          onCoreValuesClick={showCoreValuesPage}
          onLeadershipTeamClick={showLeadershipTeamPage}
          onAISDRClick={showAISDRPage}
          onCaseStudiesClick={showCaseStudiesPage}
          onAISearchVisibilityClick={showAISearchVisibilityPage}
          onContactUsClick={showContactUsPage}
          onBookDemoClick={goToContact}
          onCareersClick={showCareersPage}
        />
        <Resources onBlogClick={showBlogPost} />
        <Footer onNavigate={handleFooterNavigation} />
        <WhatsAppButton />
      </div>
    );
  }

  if (currentView === 'case-studies') {
    return (
      <div className="min-h-screen">
        <Header
          onNavigate={goBackHome}
          onResourcesClick={showResourcesPage}
          onArticlesClick={showArticlesPage}
          onSuccessStoriesClick={showSuccessStoriesPage}
          onWhitepapersClick={showWhitepapersPage}
          onIndustriesClick={showIndustriesPage}
          onAboutFirstscienceClick={showAboutFirstsciencePage}
          onCoreValuesClick={showCoreValuesPage}
          onLeadershipTeamClick={showLeadershipTeamPage}
          onAISDRClick={showAISDRPage}
          onCaseStudiesClick={showCaseStudiesPage}
          onAISearchVisibilityClick={showAISearchVisibilityPage}
          onContactUsClick={showContactUsPage}
          onBookDemoClick={goToContact}
          onCareersClick={showCareersPage}
        />
        <CaseStudiesPage />
        <Footer onNavigate={handleFooterNavigation} />
        <WhatsAppButton />
      </div>
    );
  }

  if (currentView === 'ai-search-visibility') {
    return (
      <div className="min-h-screen">
        <Header
          onNavigate={goBackHome}
          onResourcesClick={showResourcesPage}
          onArticlesClick={showArticlesPage}
          onSuccessStoriesClick={showSuccessStoriesPage}
          onWhitepapersClick={showWhitepapersPage}
          onIndustriesClick={showIndustriesPage}
          onAboutFirstscienceClick={showAboutFirstsciencePage}
          onCoreValuesClick={showCoreValuesPage}
          onLeadershipTeamClick={showLeadershipTeamPage}
          onAISDRClick={showAISDRPage}
          onCaseStudiesClick={showCaseStudiesPage}
          onAISearchVisibilityClick={showAISearchVisibilityPage}
          onContactUsClick={showContactUsPage}
          onBookDemoClick={goToContact}
          onCareersClick={showCareersPage}
        />
        <AISearchVisibilityPage onContactClick={goToContact} />
        <Footer onNavigate={handleFooterNavigation} />
        <WhatsAppButton />
      </div>
    );
  }

  if (currentView === 'privacy-policy') {
    return (
      <div className="min-h-screen">
        <Header
          onNavigate={goBackHome}
          onResourcesClick={showResourcesPage}
          onArticlesClick={showArticlesPage}
          onSuccessStoriesClick={showSuccessStoriesPage}
          onWhitepapersClick={showWhitepapersPage}
          onIndustriesClick={showIndustriesPage}
          onAboutFirstscienceClick={showAboutFirstsciencePage}
          onCoreValuesClick={showCoreValuesPage}
          onLeadershipTeamClick={showLeadershipTeamPage}
          onAISDRClick={showAISDRPage}
          onCaseStudiesClick={showCaseStudiesPage}
          onAISearchVisibilityClick={showAISearchVisibilityPage}
          onContactUsClick={showContactUsPage}
          onBookDemoClick={goToContact}
          onCareersClick={showCareersPage}
        />
        <PrivacyPolicyPage />
        <Footer onNavigate={handleFooterNavigation} />
        <WhatsAppButton />
      </div>
    );
  }

  if (currentView === 'terms-of-service') {
    return (
      <div className="min-h-screen">
        <Header
          onNavigate={goBackHome}
          onResourcesClick={showResourcesPage}
          onArticlesClick={showArticlesPage}
          onSuccessStoriesClick={showSuccessStoriesPage}
          onWhitepapersClick={showWhitepapersPage}
          onIndustriesClick={showIndustriesPage}
          onAboutFirstscienceClick={showAboutFirstsciencePage}
          onCoreValuesClick={showCoreValuesPage}
          onLeadershipTeamClick={showLeadershipTeamPage}
          onAISDRClick={showAISDRPage}
          onCaseStudiesClick={showCaseStudiesPage}
          onAISearchVisibilityClick={showAISearchVisibilityPage}
          onContactUsClick={showContactUsPage}
          onBookDemoClick={goToContact}
          onCareersClick={showCareersPage}
        />
        <TermsOfServicePage />
        <Footer onNavigate={handleFooterNavigation} />
        <WhatsAppButton />
      </div>
    );
  }

  if (currentView === 'contact-us') {
    return (
      <div className="min-h-screen">
        <Header
          onNavigate={goBackHome}
          onResourcesClick={showResourcesPage}
          onArticlesClick={showArticlesPage}
          onSuccessStoriesClick={showSuccessStoriesPage}
          onWhitepapersClick={showWhitepapersPage}
          onIndustriesClick={showIndustriesPage}
          onAboutFirstscienceClick={showAboutFirstsciencePage}
          onCoreValuesClick={showCoreValuesPage}
          onLeadershipTeamClick={showLeadershipTeamPage}
          onAISDRClick={showAISDRPage}
          onCaseStudiesClick={showCaseStudiesPage}
          onAISearchVisibilityClick={showAISearchVisibilityPage}
          onContactUsClick={showContactUsPage}
          onBookDemoClick={goToContact}
          onCareersClick={showCareersPage}
        />
        <ContactUsPage
          onBookDemoClick={goToContact}
          onCareerClick={goToCareer}
        />
        <Footer onNavigate={handleFooterNavigation} />
        <WhatsAppButton />
      </div>
    );
  }

  if (currentView === 'careers') {
    return (
      <div className="min-h-screen">
        <Header
          onNavigate={goBackHome}
          onResourcesClick={showResourcesPage}
          onArticlesClick={showArticlesPage}
          onSuccessStoriesClick={showSuccessStoriesPage}
          onWhitepapersClick={showWhitepapersPage}
          onIndustriesClick={showIndustriesPage}
          onAboutFirstscienceClick={showAboutFirstsciencePage}
          onCoreValuesClick={showCoreValuesPage}
          onLeadershipTeamClick={showLeadershipTeamPage}
          onAISDRClick={showAISDRPage}
          onCaseStudiesClick={showCaseStudiesPage}
          onAISearchVisibilityClick={showAISearchVisibilityPage}
          onContactUsClick={showContactUsPage}
          onBookDemoClick={goToContact}
          onCareersClick={showCareersPage}
        />
        <CareerPage onContactClick={goToContact} />
        <Footer onNavigate={handleFooterNavigation} />
        <WhatsAppButton />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900">
      <Header
        onNavigate={goBackHome}
        onResourcesClick={showResourcesPage}
        onArticlesClick={showArticlesPage}
        onSuccessStoriesClick={showSuccessStoriesPage}
        onWhitepapersClick={showWhitepapersPage}
        onIndustriesClick={showIndustriesPage}
        onAboutFirstscienceClick={showAboutFirstsciencePage}
        onCoreValuesClick={showCoreValuesPage}
        onLeadershipTeamClick={showLeadershipTeamPage}
        onAISDRClick={showAISDRPage}
        onCaseStudiesClick={showCaseStudiesPage}
        onAISearchVisibilityClick={showAISearchVisibilityPage}
        onContactUsClick={showContactUsPage}
        onBookDemoClick={goToContact}
        onCareersClick={showCareersPage}
      />
      <Hero onCaseStudiesClick={showCaseStudiesPage} />
      <LucyHero onExploreLucy={showAISDRPage} />
      <About />
      <Services />
      <Industries />
      <Technology />
      <Career onCareersClick={showCareersPage} />
      <Footer onNavigate={handleFooterNavigation} />
      <WhatsAppButton />
    </div>
  );
}

export default App;
