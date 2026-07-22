import { useState, useCallback, useEffect, lazy, Suspense } from "react";

const HomePage = lazy(() => import("@/pages/HomePage"));
const AboutPage = lazy(() => import("@/pages/AboutUs"));
const ServicesPage = lazy(() => import("@/pages/ServicesPage"));
const AiServicePage = lazy(() => import("@/pages/AiServicePage"));
const InfraServicePage = lazy(() => import("@/pages/InfraServicePage"));
const BotServicePage = lazy(() => import("@/pages/BotServicePage"));
const CarriorPage = lazy(() => import("@/pages/CareersPage"));
const ContactPage = lazy(() => import("@/pages/ContactPage"));
const DevServicePage = lazy(() => import("@/pages/DevServicePage"));
const EorServicePage = lazy(() => import("@/pages/EorServicePage"));
const StaffAugmentationServicePage = lazy(() => import("@/pages/StaffAugmentationServicePage"));

type Page =
  | "home"
  | "about"
  | "services"
  | "ai-service"
  | "infra-service"
  | "bot-service"
  | "careers"
  | "contact"
  | "dev-service"
  | "eor-service"
  | "staff-augmentation";

const PAGE_HEIGHTS: Record<Page, number> = {
  home: 7502,
  about: 7067,
  services: 2958,
  "ai-service": 6100,
  "infra-service": 6100,
  "bot-service": 7249,
  careers: 4620,
  contact: 3541,
  "dev-service": 6100,
  "eor-service": 6100,
  "staff-augmentation": 6100,
};

const NAV_MAP: Record<string, Page> = {
  Home: "home",
  "About us": "about",
  About: "about",
  Services: "services",
  "service hover": "services",
  "Services/hover": "services",
  Careers: "careers",
  Contact: "contact",
  "AI Services": "ai-service",
  "Infra Services": "infra-service",
  "Infrastructure Services": "infra-service",
  "Infrastructure": "infra-service",
  "BOT Services": "bot-service",
  "Bot Services": "bot-service",
  "BOT Model": "bot-service",
  "Build-Operate-Transfer": "bot-service",
  "Development Services": "dev-service",
  "End-to-End Dev": "dev-service",
  "End-to-End Development": "dev-service",
  "Staff Augmentation": "staff-augmentation",
  "EOR Services": "eor-service",
  "Employer of Record (EOR)": "eor-service",
  "Employer of Record": "eor-service",
  "Why us": "about",
  "Our journey": "about",
  "Why join us": "about",
  "Admin Login": "contact",
  "image 3": "home",
  "CTA 2": "services",
};

function Header({ activePage }: { activePage: string }) {
  // Flag switcher toggle button
  const Frame48 = () => (
    <button className="cursor-pointer h-[42px] relative rounded-[50px] shrink-0 w-[68px]">
      <div aria-hidden className="absolute bg-white inset-0 pointer-events-none rounded-[50px]" />
      <div className="content-stretch flex items-center overflow-clip p-[4px] relative rounded-[inherit] size-full">
        <div className="relative shrink-0 size-[34px]" data-name="image 4">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={"/7deefc2b525f9b25a6e3f35296970c8b0a5f2f00.png"} />
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_-1px_1px_2px_0px_#b6b6b7]" />
      <div aria-hidden className="absolute border border-[#6780aa] border-solid inset-0 pointer-events-none rounded-[50px]" />
    </button>
  );

  // Admin login and language switcher
  const Frame47 = () => (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0">
      <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Component 2">
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[34px] not-italic relative shrink-0 text-[#039] text-[18px] text-center whitespace-nowrap">EN</p>
        <Frame48 />
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[34px] not-italic relative shrink-0 text-[18px] text-[rgba(37,37,37,0.5)] text-center whitespace-nowrap">JP</p>
      </div>
    </div>
  );

  // MingcuteDownLine SVG icon
  const MingcuteDownLine = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="relative shrink-0 size-[24px]">
      <g id="mingcute:down-line">
        <path d="M12 15L7.5 10.5L8.91 9.09L12 12.17L15.09 9.09L16.5 10.5L12 15Z" fill="currentColor" />
      </g>
    </svg>
  );

  // Navigation link highlight helper
  const getLinkClass = (pageName: string) => {
    const isActive = activePage === pageName;
    return `[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[34px] not-italic relative shrink-0 text-center whitespace-nowrap transition-colors duration-200 ${
      isActive ? 'text-[#039]' : 'text-[#252525] group-hover:text-[#039]'
    }`;
  };

  // Nav links container
  const NavigationLinks = () => (
    <div className="h-[34px] relative shrink-0 w-[473px]">
      {/* Home */}
      <div className="absolute h-[34px] left-0 top-0 w-[52px] cursor-pointer select-none group" data-name="Home">
        <p className={`absolute inset-0 ${getLinkClass('home')}`}>Home</p>
      </div>

      {/* About us */}
      <div className="absolute h-[34px] left-[76px] top-0 w-[79px] cursor-pointer select-none group" data-name="About us">
        <p className={`absolute inset-0 ${getLinkClass('about')}`}>About us</p>
      </div>

      {/* Services */}
      <div className="absolute content-stretch flex flex-col items-start left-[179px] top-[0] group/menu cursor-pointer select-none" data-name="Services">
        <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Services/hover">
          <p className={`[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[34px] not-italic relative shrink-0 text-center whitespace-nowrap transition-colors duration-200 ${
            activePage.includes('service') || activePage === 'services' ? 'text-[#039]' : 'text-[#252525] group-hover/menu:text-[#039]'
          }`}>Services</p>
          <div className={activePage.includes('service') || activePage === 'services' ? 'text-[#039]' : 'text-[#252525] group-hover/menu:text-[#039] transition-colors duration-200'}>
            <MingcuteDownLine />
          </div>
        </div>
        {/* Dropdown menu */}
        <div className="absolute top-[34px] left-0 hidden group-hover/menu:flex flex-col bg-white border border-[#eaeaea] shadow-[0px_10px_30px_rgba(0,0,0,0.1)] rounded-[12px] py-[10px] w-[260px] z-[99999] pointer-events-auto">
          <div data-name="AI Services" className="px-[20px] py-[10px] hover:bg-[#f6f9ff] hover:text-[#039] text-[#252525] font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] transition-colors duration-200">AI Services</div>
          <div data-name="Infrastructure Services" className="px-[20px] py-[10px] hover:bg-[#f6f9ff] hover:text-[#039] text-[#252525] font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] transition-colors duration-200">Infrastructure Services</div>
          <div data-name="BOT Model" className="px-[20px] py-[10px] hover:bg-[#f6f9ff] hover:text-[#039] text-[#252525] font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] transition-colors duration-200">BOT Model</div>
          <div data-name="Development Services" className="px-[20px] py-[10px] hover:bg-[#f6f9ff] hover:text-[#039] text-[#252525] font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] transition-colors duration-200">Development Services</div>
          <div data-name="Staff Augmentation" className="px-[20px] py-[10px] hover:bg-[#f6f9ff] hover:text-[#039] text-[#252525] font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] transition-colors duration-200">Staff Augmentation</div>
          <div data-name="EOR Services" className="px-[20px] py-[10px] hover:bg-[#f6f9ff] hover:text-[#039] text-[#252525] font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] transition-colors duration-200">EOR Services</div>
        </div>
      </div>

      {/* Careers */}
      <div className="absolute h-[34px] left-[311px] top-0 w-[69px] cursor-pointer select-none group" data-name="Careers">
        <p className={`absolute inset-0 ${getLinkClass('careers')}`}>Careers</p>
      </div>

      {/* Contact */}
      <div className="absolute h-[34px] left-[404px] top-0 w-[69px] cursor-pointer select-none group" data-name="Contact">
        <p className={`absolute inset-[0_0_0_-1.45%] ${getLinkClass('contact')}`}>Contact</p>
      </div>
    </div>
  );

  return (
    <div className="bg-white border-b border-[#eaeaea] content-stretch drop-shadow-[0px_4px_6px_rgba(255,255,255,0.25)] flex items-center justify-between px-[80px] py-[20px] w-[1320px] h-[87px]" data-name="top nav bar absolute">
      <div className="h-[47px] relative shrink-0 w-[120px] cursor-pointer" data-name="image 3">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={"/7ecaeb90479ec9f347e9551f375a8aa2cdf47444.png"} />
      </div>
      <NavigationLinks />
      <Frame47 />
    </div>
  );
}

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>("home");
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1320
  );

  const [shouldScrollToContactForm, setShouldScrollToContactForm] = useState(false);

  useEffect(() => {
    if (currentPage === "contact" && shouldScrollToContactForm) {
      window.scrollTo(0, 0);
      const timer = setTimeout(() => {
        const element = document.getElementById("send-message-section");
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
          setShouldScrollToContactForm(false);
        }
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [currentPage, shouldScrollToContactForm]);

  useEffect(() => {
    const performScroll = () => {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    };
    performScroll();
    // A small timeout ensures scroll is reset after the new page layout finishes rendering
    const timer = setTimeout(performScroll, 50);
    return () => clearTimeout(timer);
  }, [currentPage]);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleClick = useCallback(
    (e: React.MouseEvent) => {
      const target = e.target as HTMLElement;

      // Do not intercept external links
      const anchor = target.closest("a");
      if (anchor && anchor.getAttribute("href")?.startsWith("http")) {
        return;
      }

      const scrollToTop = () => {
        window.scrollTo(0, 0);
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
      };

      // 1. Walk up the DOM to find a nav item with data-name attribute matching our NAV_MAP
      let el: HTMLElement | null = target;
      while (el) {
        const name = el.getAttribute("data-name");
        if (name && NAV_MAP[name]) {
          e.preventDefault();
          e.stopPropagation();
          setCurrentPage(NAV_MAP[name]);
          scrollToTop();
          return;
        }
        el = el.parentElement;
      }

      // 2. Check if we clicked inside a card (e.g. on Home page or Services page)
      const card = target.closest('[data-name*="card"], [data-name*="Card"]');
      if (card) {
        const cardText = card.textContent || "";
        let matchedPage: Page | null = null;
        if (
          cardText.includes("BOT Model") ||
          cardText.includes("Build-Operate-Transfer") ||
          cardText.includes("Bot Services") ||
          cardText.includes("BOT Services")
        ) {
          matchedPage = "bot-service";
        } else if (cardText.includes("AI Services")) {
          matchedPage = "ai-service";
        } else if (
          cardText.includes("End-to-End Dev") ||
          cardText.includes("End-to-End Development") ||
          cardText.includes("Development Services")
        ) {
          matchedPage = "dev-service";
        } else if (cardText.includes("Infrastructure") || cardText.includes("DevOps")) {
          matchedPage = "infra-service";
        } else if (cardText.includes("Staff Augmentation")) {
          matchedPage = "staff-augmentation";
        } else if (
          cardText.includes("Employer of Record") ||
          cardText.includes("EOR Services") ||
          cardText.includes("EOR")
        ) {
          matchedPage = "eor-service";
        }

        if (matchedPage) {
          e.preventDefault();
          e.stopPropagation();
          setCurrentPage(matchedPage);
          scrollToTop();
          return;
        }
      }

      // 3. Fallback check for exact text content of element or its parents (e.g., for footer lists or standard buttons)
      let textEl: HTMLElement | null = target;
      for (let i = 0; i < 3 && textEl; i++) {
        const text = textEl.textContent?.trim();
        if (text) {
          if (text === "Home") {
            e.preventDefault();
            setCurrentPage("home");
            scrollToTop();
            return;
          }
          if (text === "About us" || text === "About" || text === "Why us" || text === "Our journey" || text === "Why join us") {
            e.preventDefault();
            setCurrentPage("about");
            scrollToTop();
            return;
          }
          if (text === "Services" || text === "Learn more") {
            e.preventDefault();
            setCurrentPage("services");
            scrollToTop();
            return;
          }
          if (text === "Careers") {
            e.preventDefault();
            setCurrentPage("careers");
            scrollToTop();
            return;
          }
          if (
            text === "Book a Consultation" ||
            text === "Book a consultation" ||
            text === "Book a conversation" ||
            text === "Book a Conversation" ||
            text === "Chat with us" ||
            text === "Chat with Us" ||
            text === "Start with us" ||
            text === "Start with Us" ||
            text === "Talk with us" ||
            text === "Talk with Us" ||
            text.includes("lets talk")
          ) {
            e.preventDefault();
            setCurrentPage("contact");
            setShouldScrollToContactForm(true);
            return;
          }
          if (
            text === "Contact" ||
            text === "Contact us"
          ) {
            e.preventDefault();
            setCurrentPage("contact");
            scrollToTop();
            return;
          }
          if (text === "AI Services") {
            e.preventDefault();
            setCurrentPage("ai-service");
            scrollToTop();
            return;
          }
          if (text === "Infrastructure Services" || text === "Infrastructure" || text === "Infra Services") {
            e.preventDefault();
            setCurrentPage("infra-service");
            scrollToTop();
            return;
          }
          if (text === "Build-Operate-Transfer" || text === "Bot Services" || text === "BOT Services") {
            e.preventDefault();
            setCurrentPage("bot-service");
            scrollToTop();
            return;
          }
          if (text === "End-to-End Development" || text === "Development Services") {
            e.preventDefault();
            setCurrentPage("dev-service");
            scrollToTop();
            return;
          }
          if (text === "Staff Augmentation") {
            e.preventDefault();
            setCurrentPage("staff-augmentation");
            scrollToTop();
            return;
          }
          if (text === "EOR Services" || text === "Employer of Record (EOR)") {
            e.preventDefault();
            setCurrentPage("eor-service");
            scrollToTop();
            return;
          }
        }
        textEl = textEl.parentElement;
      }
    },
    []
  );

  const height = PAGE_HEIGHTS[currentPage];
  const layoutWidth = 1320;
  const scale = windowWidth / layoutWidth;

  return (
    <div
      className="relative w-full bg-white overflow-hidden"
      onClickCapture={handleClick}
      style={{
        height: `${height * scale}px`,
      }}
    >
      {/* Sticky Header fixed outside transformed container */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          zIndex: 99999,
          pointerEvents: "none",
        }}
      >
        <div
          style={{
            width: `${layoutWidth}px`,
            position: "absolute",
            left: 0,
            top: 0,
            transform: `scale(${scale})`,
            transformOrigin: "top left",
            pointerEvents: "auto",
          }}
        >
          <Header activePage={currentPage} />
        </div>
      </div>

      <div
        style={{
          width: `${layoutWidth}px`,
          height: `${height}px`,
          position: "absolute",
          left: 0,
          top: 0,
          transform: `scale(${scale})`,
          transformOrigin: "top left",
        }}
      >
        <Suspense
          fallback={
            <div className="flex items-center justify-center h-screen text-gray-400 bg-slate-900">
              Loading…
            </div>
          }
        >
          {currentPage === "home" && <HomePage />}
          {currentPage === "about" && <AboutPage />}
          {currentPage === "services" && <ServicesPage />}
          {currentPage === "ai-service" && <AiServicePage />}
          {currentPage === "infra-service" && <InfraServicePage />}
          {currentPage === "bot-service" && <BotServicePage />}
          {currentPage === "careers" && <CarriorPage />}
          {currentPage === "contact" && <ContactPage />}
          {currentPage === "dev-service" && <DevServicePage />}
          {currentPage === "eor-service" && <EorServicePage />}
          {currentPage === "staff-augmentation" && <StaffAugmentationServicePage />}
        </Suspense>
      </div>

      {/* Floating Chatbot Widget (outside transformed container) */}
      <div
        style={{
          position: "fixed",
          right: "24px",
          bottom: "24px",
          zIndex: 999999,
          pointerEvents: "auto",
        }}
      >
        <button
          className="bg-[#039] content-stretch cursor-pointer flex items-center justify-center overflow-clip p-[11px] rounded-[32px] shadow-[0px_0px_12px_1px_rgba(61,104,213,0.4)] size-[48px] hover:scale-110 transition-transform duration-200"
          style={{ border: "none" }}
          aria-label="Chat with AI"
        >
          <svg className="block size-[26px]" fill="none" viewBox="0 0 24.4088 18.9091">
            <g id="Group 8">
              <path
                d="M23.9432 12.5063C22.0426 11.9811 21.7354 11.675 21.2114 9.77445C21.1352 9.49936 20.8851 9.30884 20.5993 9.30884C20.3135 9.30884 20.0634 9.49938 19.9872 9.77445C19.462 11.6751 19.156 11.9823 17.2554 12.5063C16.9803 12.5825 16.7898 12.8326 16.7898 13.1184C16.7898 13.4042 16.9803 13.6542 17.2554 13.7305C19.156 14.2556 19.4633 14.5617 19.9872 16.4623C20.0634 16.7374 20.3135 16.9279 20.5993 16.9279C20.8851 16.9279 21.1352 16.7373 21.2114 16.4623C21.7366 14.5617 22.0426 14.2544 23.9432 13.7305C24.2183 13.6542 24.4088 13.4042 24.4088 13.1184C24.4088 12.8326 24.2183 12.5825 23.9432 12.5063Z"
                fill="white"
                id="Vector"
              />
              <path
                d="M18.7895 2.6226e-05H3.03084C1.36031 2.6226e-05 2.16961e-05 1.24708 2.16961e-05 2.78087V12.2349C2.16961e-05 13.7676 1.35918 15.0157 3.03084 15.0157H6.06166V18.3523C6.06166 18.5661 6.19576 18.761 6.40486 18.8539C6.48895 18.8904 6.57873 18.9091 6.66737 18.9091C6.8026 18.9091 6.9367 18.8674 7.0458 18.7871L12.1768 15.0157H18.4726C18.2578 14.6987 17.9305 14.6122 17.0919 14.3995C16.3066 14.2014 15.7577 13.5393 15.7577 12.7917C15.7577 12.0441 16.3066 11.383 17.0919 11.1839C18.0124 10.9503 18.5988 10.4123 18.8533 9.56771C19.0692 8.84722 19.7909 8.3436 20.6056 8.3436C21.0659 8.3436 21.4921 8.50731 21.8182 8.77632V2.78194C21.8182 1.24919 20.459 0.00109411 18.7874 0.00109411L18.7895 2.6226e-05ZM13.9404 11.1223H4.2434C3.90931 11.1223 3.6377 10.8731 3.6377 10.5666C3.6377 10.2601 3.9093 10.0109 4.2434 10.0109H13.9404C14.2745 10.0109 14.5461 10.2601 14.5461 10.5666C14.5461 10.8731 14.2745 11.1223 13.9404 11.1223ZM17.5 7.78575H4.2434C3.90931 7.78575 3.6377 7.53655 3.6377 7.23001C3.6377 6.92347 3.9093 6.67427 4.2434 6.67427H17.5769C17.911 6.67427 18.1826 6.92347 18.1826 7.23001C18.1826 7.53655 17.911 7.78575 17.5769 7.78575ZM17.5769 4.44917H4.2434C3.90931 4.44917 3.6377 4.19997 3.6377 3.89342C3.6377 3.58688 3.9093 3.33768 4.2434 3.33768H17.5769C17.911 3.33768 18.1826 3.58688 18.1826 3.89342C18.1826 4.19996 17.911 4.44917 17.5769 4.44917Z"
                fill="white"
                id="Vector_2"
              />
            </g>
          </svg>
        </button>
      </div>
    </div>
  );
}

