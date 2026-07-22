import { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import svgPaths from "./svg-teoaq84v3u";







function Frame53() {
  return <div className="-translate-x-1/2 absolute bg-[rgba(37,37,37,0.5)] bottom-0 h-[736px] left-1/2 w-[1320px]" />;
}

function Frame13() {
  return <div className="-translate-x-1/2 absolute bg-gradient-to-b bottom-0 from-[22.596%] from-[rgba(255,255,255,0)] h-[368px] left-1/2 to-white w-[1320px]" />;
}

function EpRight() {
  return (
    <div className="relative shrink-0 size-[24px] transition-transform duration-300 group-hover:-rotate-45" data-name="ep:right">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="ep:right">
          <path d={svgPaths.p27246280} className="fill-current text-[#039] group-hover:text-white transition-colors duration-300" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="bg-white group-hover:bg-[#039] border border-white group-hover:border-[#039] transition-all duration-300 content-stretch flex items-center justify-center p-[8px] relative rounded-[16px] shrink-0 size-[32px] cursor-pointer select-none">
      <EpRight />
    </div>
  );
}

function Frame52() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col gap-[24px] items-center justify-center left-[223px] top-[calc(50%-14px)] w-[875px]">
      <p className="[word-break:break-word] font-['Inria_Serif:Bold',sans-serif] leading-[0] min-w-full not-italic relative shrink-0 text-[64px] text-center text-white w-[min-content]">
        <span className="leading-[normal]">{`Shape the Future of Technology `}</span>
        <span className="leading-[normal] text-[#fb0]">With Us.</span>
      </p>
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[20px] text-center text-white w-[835px]">Join a global team delivering innovative solutions across Japan, Singapore, and India. Build meaningful products, grow your career, and make an impact.</p>
      <div className="group cursor-pointer select-none bg-[#039] border border-[#039] hover:bg-white hover:border-[#039] content-stretch flex gap-[10px] h-[48px] items-center justify-center px-[16px] py-[10px] relative rounded-[16px] shrink-0 transition-all duration-300" data-name="CTA 1">
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[16px] text-white group-hover:text-[#039] tracking-[-0.32px] whitespace-nowrap transition-colors duration-300 cursor-pointer select-none">View open positions</p>
        <Frame />
      </div>
    </div>
  );
}

function CarrierHeroSection() {
  return (
    <div className="relative mx-auto mt-[87px] h-[736px] overflow-clip w-[1320px]" data-name="carrier hero section">
      <video autoPlay loop muted playsInline className="absolute inset-0 max-w-none object-cover pointer-events-none size-full">
        <source src={"/careers.mp4"} type="video/mp4" />
      </video>
      <Frame53 />
      <Frame13 />
      <Frame52 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#b0b0b0] text-[14px] text-center whitespace-nowrap">TOKYO</p>
      <div className="relative shrink-0 size-[12px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
          <circle cx="6" cy="6" fill="url(#paint0_radial_1_1186)" id="Ellipse 1" r="6" />
          <defs>
            <radialGradient cx="0" cy="0" gradientTransform="translate(6 6) rotate(90) scale(6)" gradientUnits="userSpaceOnUse" id="paint0_radial_1_1186" r="1">
              <stop offset="0.360577" stopColor="#FFBB00" />
              <stop offset="1" stopColor="#003399" stopOpacity="0.6" />
            </radialGradient>
          </defs>
        </svg>
      </div>
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#b0b0b0] text-[14px] text-center whitespace-nowrap">NELLORE</p>
      <div className="relative shrink-0 size-[12px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
          <circle cx="6" cy="6" fill="url(#paint0_radial_1_1157)" id="Ellipse 2" r="6" />
          <defs>
            <radialGradient cx="0" cy="0" gradientTransform="translate(6 6) rotate(90) scale(6)" gradientUnits="userSpaceOnUse" id="paint0_radial_1_1157" r="1">
              <stop offset="0.360577" stopColor="#FFBB00" />
              <stop offset="1" stopColor="#003399" stopOpacity="0.6" />
            </radialGradient>
          </defs>
        </svg>
      </div>
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#b0b0b0] text-[14px] text-center whitespace-nowrap">SINGAPORE</p>
    </div>
  );
}

function RiFacebookFill() {
  return (
    <a href="https://www.facebook.com/idealfolks" target="_blank" rel="noopener noreferrer" className="relative shrink-0 size-[24px] block cursor-pointer" data-name="ri:facebook-fill">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="ri:facebook-fill">
          <path d={svgPaths.p32db6580} fill="var(--fill-0, #003399)" id="Vector" />
        </g>
      </svg>
    </a>
  );
}

function Frame32() {
  return (
    <div className="bg-white content-stretch flex items-start p-[9px] relative rounded-[21px] shrink-0 size-[42px]">
      <RiFacebookFill />
    </div>
  );
}

function RiInstagramFill() {
  return (
    <a href="https://www.instagram.com/idealfolks" target="_blank" rel="noopener noreferrer" className="relative shrink-0 size-[24px] block cursor-pointer" data-name="ri:instagram-fill">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="ri:instagram-fill">
          <path d={svgPaths.p19b6600} fill="var(--fill-0, #003399)" id="Vector" />
        </g>
      </svg>
    </a>
  );
}

function Frame33() {
  return (
    <div className="bg-white content-stretch flex items-start p-[9px] relative rounded-[21px] shrink-0 size-[42px]">
      <RiInstagramFill />
    </div>
  );
}

function GardenTwitterFill() {
  return (
    <a href="https://x.com/IdealFolks" target="_blank" rel="noopener noreferrer" className="relative shrink-0 size-[16px] block cursor-pointer" data-name="garden:twitter-fill-16">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_1204)" id="garden:twitter-fill-16">
          <path d={svgPaths.p1c115600} fill="var(--fill-0, #003399)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_1204">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </a>
  );
}

function Frame34() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[9px] relative rounded-[21px] shrink-0 size-[42px]">
      <GardenTwitterFill />
    </div>
  );
}

function RiLinkedinFill() {
  return (
    <a href="https://www.linkedin.com/company/ideal-folks-llc/?trk=company_logo" target="_blank" rel="noopener noreferrer" className="relative shrink-0 size-[24px] block cursor-pointer" data-name="ri:linkedin-fill">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="ri:linkedin-fill">
          <path d={svgPaths.p32f85880} fill="var(--fill-0, #003399)" id="Vector" />
        </g>
      </svg>
    </a>
  );
}

function Frame35() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[9px] relative rounded-[21px] shrink-0 size-[42px]">
      <RiLinkedinFill />
    </div>
  );
}

function Frame36() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0">
      <Frame32 />
      <Frame33 />
      <Frame34 />
      <Frame35 />
    </div>
  );
}

function Frame37() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-[290px]">
      <div className="h-[47px] relative shrink-0 w-[120px]" data-name="image 3">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={"/2ca1331b954937d94b1fa2e4bbf5e64bbd358d06.png"} />
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Inria_Serif:Bold_Italic',sans-serif] italic justify-center leading-[0] min-w-full relative shrink-0 text-[20px] text-white w-[min-content]">
        <p className="leading-[29.25px] mb-0">Engineering teams for Japan</p>
        <p className="leading-[29.25px]">and APAC.</p>
      </div>
      <Frame12 />
      <Frame36 />
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start justify-center relative shrink-0 w-full">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[24px] text-center text-white whitespace-nowrap">Quick Links</p>
      <div className="bg-gradient-to-r from-[#039] h-[2px] relative shrink-0 to-[#039] to-[99.519%] via-1/2 via-white w-[60px]" />
    </div>
  );
}

function Frame38() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-[138px]">
      <Frame24 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#b0b0b0] text-[16px] w-full">Why us</p>
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#b0b0b0] text-[16px] w-full">Our journey</p>
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#b0b0b0] text-[16px] w-full">Services</p>
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#b0b0b0] text-[16px] w-full">About</p>
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#b0b0b0] text-[16px] w-full">Contact</p>
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start justify-center relative shrink-0 w-full">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[24px] text-center text-white whitespace-nowrap">Services</p>
      <div className="bg-gradient-to-r from-[#039] h-[2px] relative shrink-0 to-[#039] to-[99.519%] via-1/2 via-white w-[60px]" />
    </div>
  );
}

function Frame39() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0">
      <Frame25 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-full not-italic relative shrink-0 text-[#b0b0b0] text-[16px] w-[min-content]">AI Services</p>
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#b0b0b0] text-[16px] whitespace-nowrap">Build-Operate-Transfer</p>
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#b0b0b0] text-[16px] whitespace-nowrap">End-to-End Development</p>
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-full not-italic relative shrink-0 text-[#b0b0b0] text-[16px] w-[min-content]">Infrastructure Services</p>
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-full not-italic relative shrink-0 text-[#b0b0b0] text-[16px] w-[min-content]">Staff Augmentation</p>
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-full not-italic relative shrink-0 text-[#b0b0b0] text-[16px] w-[min-content]">EOR Services</p>
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start justify-center relative shrink-0 w-full">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[24px] text-center text-white whitespace-nowrap">Compliance</p>
      <div className="bg-gradient-to-r from-[#039] h-[2px] relative shrink-0 to-[#039] to-[99.519%] via-1/2 via-white w-[60px]" />
    </div>
  );
}

function Frame40() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-[239px]">
      <Frame26 />
      <p className="[word-break:break-word] font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#b0b0b0] text-[16px] w-full">アイディアルフォルクス合同会社</p>
    </div>
  );
}

function MdiCertificate() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="mdi:certificate">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="mdi:certificate">
          <path d={svgPaths.pa6ef980} fill="var(--fill-0, #003399)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame44() {
  return (
    <div className="bg-[#eef4ff] content-stretch flex items-start p-[9px] relative rounded-[21px] shrink-0 size-[42px]">
      <MdiCertificate />
    </div>
  );
}

function Frame41() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full">
      <Frame44 />
      <div className="[word-break:break-word] flex flex-col font-['Inria_Serif:Regular','Noto_Sans_JP:Regular',sans-serif] justify-center leading-[0] relative shrink-0 text-[#039] text-[20px] whitespace-nowrap" style={{ fontVariationSettings: '"wght" 400' }}>
        <p className="leading-[29.25px]">厚生労働省ライセンス</p>
      </div>
    </div>
  );
}

function Frame42() {
  return null;
}

function Frame43() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 w-[286px]">
      <Frame40 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-full not-italic relative shrink-0 text-[#b0b0b0] text-[16px] w-[min-content]">Ideal Folks LLC is a recruitment agency licensed by the Ministry of Health, Labour and Welfare (Japan).</p>
    </div>
  );
}

function Frame47() {
  return (
    <div className="content-stretch flex gap-[32px] items-center relative shrink-0">
      <div className="flex h-[266px] items-center justify-center relative shrink-0 w-[2px]">
        <div className="flex-none rotate-90">
          <div className="bg-gradient-to-r from-[#039] h-[2px] relative to-[#039] to-[99.519%] via-1/2 via-white w-[266px]" />
        </div>
      </div>
      <Frame43 />
    </div>
  );
}

function Frame48() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-[1160px]">
      <Frame37 />
      <Frame38 />
      <Frame39 />
      <Frame47 />
    </div>
  );
}

function Frame50() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 whitespace-nowrap">
      <p className="relative shrink-0">Privacy policy</p>
      <p className="relative shrink-0">Terms of services</p>
      <p className="relative shrink-0">Cookie policy</p>
    </div>
  );
}

function Frame45() {
  return (
    <div className="[word-break:break-word] content-stretch flex font-['Inter:Regular',sans-serif] font-normal items-center justify-between leading-[normal] not-italic relative shrink-0 text-[#b0b0b0] text-[16px] w-[1160px]">
      <p className="relative shrink-0 w-[448px]">© 2026 IDEAL FOLKS · EST. 2016 · ALL RIGHTS RESERVED</p>
      <Frame50 />
    </div>
  );
}

function Frame46() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full">
      <p className="[word-break:break-word] font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#b0b0b0] text-[16px] text-center w-[1160px]">

        アイディアルフォルクス合同会社は厚生労働省のライセンス（13-ユ-310059 および 派 13-314879）を受けた人材紹介会社です。

      </p>

      <div className="flex items-center justify-center relative shrink-0">

        <div className="flex-none rotate-180">

          <div className="bg-gradient-to-r from-[#039] h-[2px] relative to-[#039] to-[99.519%] via-1/2 via-white w-[1160px]" />

        </div>

      </div>
      <Frame45 />
    </div>
  );
}

function Frame49() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] items-center justify-center left-0 py-[42px] top-0 w-[1320px]">
      <Frame48 />
      <Frame46 />
    </div>
  );
}

function Frame51() {
  return (
    <div className="-translate-x-1/2 absolute bg-[#039] h-[490px] left-1/2 top-[-0.31px] w-[1320px]">
      <div className="-translate-x-1/2 absolute h-[537px] left-1/2 top-[-47px] w-[1320px]" data-name="ChatGPT Image Jun 26, 2026, 02_22_45 PM 1">
        <img alt="" className="absolute inset-0 max-w-none object-bottom opacity-100 pointer-events-none size-full" src={"/35c09dd8025607269ed4acf8b846a1fed1b6f9b0.png"} />
      </div>
      <Frame49 />
    </div>
  );
}

function Footer() {
  return (
    <div className="relative mx-auto mt-[64px] mb-0 drop-shadow-[0px_-4px_6px_rgba(69,143,159,0.25)] h-[490px] overflow-clip w-[1320px]" data-name="footer">
      <Frame51 />
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-center relative shrink-0 w-full">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] min-w-full not-italic relative shrink-0 text-[#4f4f4f] text-[24px] text-center w-[min-content]">Why Join Us</p>
      <div className="bg-gradient-to-r from-[0.481%] from-white h-[2px] relative shrink-0 to-white via-1/2 via-[#039] w-[120px]" />
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-center relative shrink-0 w-full">
      <div className="[word-break:break-word] font-['Inria_Serif:Bold',sans-serif] leading-[0] min-w-full not-italic relative shrink-0 text-[#252525] text-[48px] text-center w-[min-content]">
        <p className="leading-[normal] mb-0">A Workplace</p>
        <p className="font-['Georgia:Italic',sans-serif] leading-[normal] text-[#039]">Built for Growth</p>
      </div>
      <div className="bg-gradient-to-r from-[0.481%] from-white h-[4px] relative shrink-0 to-white via-1/2 via-[#039] w-[240px]" />
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 w-[799px]">
      <Frame27 />
      <Frame16 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#4f4f4f] text-[16px] text-center w-full">We believe in creating an environment where our team can thrive, grow, and make a meaningful impact.</p>
    </div>
  );
}

function FluentArrowGrowth20Filled() {
  return (
    <div className="relative shrink-0 size-[42px]" data-name="fluent:arrow-growth-20-filled">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 42 42">
        <g id="fluent:arrow-growth-20-filled">
          <path d={svgPaths.pb440900} fill="var(--fill-0, #595BD4)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame21() {
  return (
    <div className="bg-white relative rounded-[60px] shrink-0 size-[78px]">
      <div className="content-stretch flex items-center justify-center overflow-clip p-[32px] relative rounded-[inherit] size-full">
        <FluentArrowGrowth20Filled />
      </div>
      <div aria-hidden className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[60px] shadow-[0px_0px_12px_1px_rgba(222,233,255,0.6)]" />
    </div>
  );
}

function Frame54() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#252525] text-[20px] w-[min-content]">
        <p className="leading-[normal]">Growth Mindset</p>
      </div>
      <div className="bg-gradient-to-r from-[0.481%] from-white h-[2px] relative shrink-0 to-white via-1/2 via-[#039] w-[120px]" />
    </div>
  );
}

function Frame22() {
  return (
    <div className="bg-white relative rounded-[16px] shrink-0 w-[270px]">
      <div className="content-stretch flex flex-col gap-[24px] items-start overflow-clip px-[16px] py-[24px] relative rounded-[inherit] size-full">
        <Frame21 />
        <Frame54 />
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#252525] text-[16px] w-[min-content]">
          <p className="leading-[29px]">We invest in your personal and professional growth every step of the way.</p>
        </div>
      </div>
      <div aria-hidden className="absolute border-[#e0e0e0] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_0px_12px_1px_rgba(222,233,255,0.6)]" />
    </div>
  );
}

function FluentMdl2LearningTools() {
  return (
    <div className="relative shrink-0 size-[42px]" data-name="fluent-mdl2:learning-tools">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 42 42">
        <g id="fluent-mdl2:learning-tools">
          <path d={svgPaths.p13c48dc0} fill="var(--fill-0, #595BD4)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame23() {
  return (
    <div className="bg-white relative rounded-[60px] shrink-0 size-[78px]">
      <div className="content-stretch flex items-center justify-center overflow-clip p-[32px] relative rounded-[inherit] size-full">
        <FluentMdl2LearningTools />
      </div>
      <div aria-hidden className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[60px] shadow-[0px_0px_12px_1px_rgba(222,233,255,0.6)]" />
    </div>
  );
}

function Frame55() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#252525] text-[20px] w-[min-content]">
        <p className="leading-[normal]">Continuous Learning</p>
      </div>
      <div className="bg-gradient-to-r from-[0.481%] from-white h-[2px] relative shrink-0 to-white via-1/2 via-[#039] w-[120px]" />
    </div>
  );
}

function Frame58() {
  return (
    <div className="bg-white relative rounded-[16px] shrink-0 w-[270px]">
      <div className="content-stretch flex flex-col gap-[24px] items-start overflow-clip px-[16px] py-[24px] relative rounded-[inherit] size-full">
        <Frame23 />
        <Frame55 />
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#252525] text-[16px] w-[min-content]">
          <p className="leading-[29px]">Access to courses, conferences, and certifications to stay ahead of the curve.</p>
        </div>
      </div>
      <div aria-hidden className="absolute border-[#e0e0e0] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_0px_12px_1px_rgba(222,233,255,0.6)]" />
    </div>
  );
}

function AntDesignTeamOutlined() {
  return (
    <div className="relative shrink-0 size-[42px]" data-name="ant-design:team-outlined">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 42 42">
        <g id="ant-design:team-outlined">
          <path d={svgPaths.p356ecb80} fill="var(--fill-0, #595BD4)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame28() {
  return (
    <div className="bg-white relative rounded-[60px] shrink-0 size-[78px]">
      <div className="content-stretch flex items-center justify-center overflow-clip p-[32px] relative rounded-[inherit] size-full">
        <AntDesignTeamOutlined />
      </div>
      <div aria-hidden className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[60px] shadow-[0px_0px_12px_1px_rgba(222,233,255,0.6)]" />
    </div>
  );
}

function Frame56() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#252525] text-[20px] w-[min-content]">
        <p className="leading-[normal]">Team Collaboration</p>
      </div>
      <div className="bg-gradient-to-r from-[0.481%] from-white h-[2px] relative shrink-0 to-white via-1/2 via-[#039] w-[120px]" />
    </div>
  );
}

function Frame59() {
  return (
    <div className="bg-white relative rounded-[16px] shrink-0 w-[270px]">
      <div className="content-stretch flex flex-col gap-[24px] items-start overflow-clip px-[16px] py-[24px] relative rounded-[inherit] size-full">
        <Frame28 />
        <Frame56 />
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#252525] text-[16px] w-[min-content]">
          <p className="leading-[29px]">Work with brilliant minds across three countries and multiple disciplines.</p>
        </div>
      </div>
      <div aria-hidden className="absolute border-[#e0e0e0] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_0px_12px_1px_rgba(222,233,255,0.6)]" />
    </div>
  );
}

function Icons8Idea() {
  return (
    <div className="relative shrink-0 size-[42px]" data-name="icons8:idea">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 42 42">
        <g id="icons8:idea">
          <path d={svgPaths.p1a56280} fill="var(--fill-0, #595BD4)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame29() {
  return (
    <div className="bg-white relative rounded-[60px] shrink-0 size-[78px]">
      <div className="content-stretch flex items-center justify-center overflow-clip p-[32px] relative rounded-[inherit] size-full">
        <Icons8Idea />
      </div>
      <div aria-hidden className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[60px] shadow-[0px_0px_12px_1px_rgba(222,233,255,0.6)]" />
    </div>
  );
}

function Frame57() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#252525] text-[20px] w-[min-content]">
        <p className="leading-[normal]">Innovation Culture</p>
      </div>
      <div className="bg-gradient-to-r from-[0.481%] from-white h-[2px] relative shrink-0 to-white via-1/2 via-[#039] w-[120px]" />
    </div>
  );
}

function Frame60() {
  return (
    <div className="bg-white relative rounded-[16px] shrink-0 w-[270px]">
      <div className="content-stretch flex flex-col gap-[24px] items-start overflow-clip px-[16px] py-[24px] relative rounded-[inherit] size-full">
        <Frame29 />
        <Frame57 />
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#252525] text-[16px] w-[min-content]">
          <p className="leading-[29px]">Experiment, iterate, and bring bold ideas to life in a supportive environment.</p>
        </div>
      </div>
      <div aria-hidden className="absolute border-[#e0e0e0] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_0px_12px_1px_rgba(222,233,255,0.6)]" />
    </div>
  );
}

function Frame68() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame22 />
      <Frame58 />
      <Frame59 />
      <Frame60 />
    </div>
  );
}

function WhyJoinUs() {
  return (
    <div className="relative mx-auto mt-[64px] content-stretch flex flex-col gap-[42px] items-center w-[1160px]" data-name="why join us">
      <Frame15 />
      <Frame68 />
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-center relative shrink-0 w-full">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] min-w-full not-italic relative shrink-0 text-[#4f4f4f] text-[24px] text-center w-[min-content]">Open Positions</p>
      <div className="bg-gradient-to-r from-[0.481%] from-white h-[2px] relative shrink-0 to-white via-1/2 via-[#039] w-[120px]" />
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-[799px]">
      <Frame30 />
    </div>
  );
}

function Frame69() {
  return (
    <div className="bg-[#eef4ff] content-stretch flex items-center justify-center px-[8px] py-[2px] relative rounded-[8px] shrink-0">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#252525] text-[14px] whitespace-nowrap">
        <p className="leading-[normal]">5+ Years</p>
      </div>
    </div>
  );
}

function Frame70() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#252525] text-[20px] whitespace-nowrap">
        <p className="leading-[normal]">Senior AI engineer</p>
      </div>
      <Frame69 />
    </div>
  );
}

function Frame61() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0">
      <Frame70 />
      <div className="bg-gradient-to-r from-[0.481%] from-white h-[2px] relative shrink-0 to-white via-1/2 via-[#039] w-[120px]" />
    </div>
  );
}

function UilSuitcase() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="uil:suitcase">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="uil:suitcase">
          <path d={svgPaths.p22af2380} fill="var(--fill-0, #5D5D5D)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame71() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <UilSuitcase />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5d5d5d] text-[16px] whitespace-nowrap">
        <p className="leading-[normal]">Engineering</p>
      </div>
    </div>
  );
}

function EmojioneV1FlagForSingapore() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="emojione-v1:flag-for-singapore">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="emojione-v1:flag-for-singapore">
          <path d={svgPaths.pc883000} fill="var(--fill-0, #E6E7E8)" id="Vector" />
          <path d={svgPaths.p3deb9180} fill="var(--fill-0, #EC1C24)" id="Vector_2" />
          <path d={svgPaths.p22ffff00} fill="var(--fill-0, white)" id="Vector_3" />
          <path d={svgPaths.pf1264c0} fill="var(--fill-0, white)" id="Vector_4" />
        </g>
      </svg>
    </div>
  );
}

function Frame72() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <EmojioneV1FlagForSingapore />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5d5d5d] text-[16px] whitespace-nowrap">
        <p className="leading-[normal]">Singapore</p>
      </div>
    </div>
  );
}

function WeuiTimeOutlined() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="weui:time-outlined">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="weui:time-outlined">
          <path clipRule="evenodd" d={svgPaths.pad97300} fill="var(--fill-0, black)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame73() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <WeuiTimeOutlined />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5d5d5d] text-[16px] whitespace-nowrap">
        <p className="leading-[normal]">Full-time</p>
      </div>
    </div>
  );
}

function Frame76() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full">
      <Frame71 />
      <Frame72 />
      <Frame73 />
    </div>
  );
}

function Frame77() {
  return (
    <div className="content-stretch flex flex-col h-[62px] items-start justify-between relative shrink-0 w-[369px]">
      <Frame61 />
      <Frame76 />
    </div>
  );
}

function Frame74() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5d5d5d] text-[16px] whitespace-nowrap">
        <p className="leading-[normal]">Posted 2 days ago</p>
      </div>
    </div>
  );
}

function Frame75() {
  return (
    <div className="content-stretch flex flex-col items-end justify-between relative self-stretch shrink-0 w-[159px]">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#039] text-[20px] whitespace-nowrap">
        <p className="leading-[normal]">S$120K-180K</p>
      </div>
      <Frame74 />
    </div>
  );
}

function Frame78() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <Frame77 />
      <Frame75 />
    </div>
  );
}

function Frame79() {
  return (
    <div className="bg-[rgba(115,117,239,0.5)] content-stretch flex items-center px-[12px] py-[4px] relative rounded-[16px] shrink-0">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#252525] text-[16px] whitespace-nowrap">
        <p className="leading-[normal]">Python</p>
      </div>
    </div>
  );
}

function Frame80() {
  return (
    <div className="bg-[rgba(115,117,239,0.5)] content-stretch flex items-center px-[12px] py-[4px] relative rounded-[16px] shrink-0">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#252525] text-[16px] whitespace-nowrap">
        <p className="leading-[normal]">TensorFlow</p>
      </div>
    </div>
  );
}

function Frame82() {
  return (
    <div className="bg-[rgba(115,117,239,0.5)] content-stretch flex items-center px-[12px] py-[4px] relative rounded-[16px] shrink-0">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#252525] text-[16px] whitespace-nowrap">
        <p className="leading-[normal]">Deep learning</p>
      </div>
    </div>
  );
}

function Frame81() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <Frame79 />
      <Frame80 />
      <Frame82 />
    </div>
  );
}

function IconParkOutlineDown() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="icon-park-outline:down">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="icon-park-outline:down">
          <path d="M18 9L12 15L6 9" id="Vector" stroke="var(--stroke-0, #003399)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function MdiArrowUp() {
  return (
    <div className="flex items-center justify-center relative shrink-0 size-[24px]">
      <div className="flex-none rotate-90">
        <div className="relative size-[24px]" data-name="mdi:arrow-up">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
            <g id="mdi:arrow-up">
              <path d={svgPaths.pc851800} fill="var(--fill-0, white)" id="Vector" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame86() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0">
      <div className="content-stretch flex gap-[8px] h-[42px] items-center px-[16px] py-[12px] relative rounded-[16px] shrink-0 cursor-pointer select-none hover:bg-slate-50 transition-colors duration-200" data-name="view role cta">
        <div aria-hidden className="absolute border border-[#039] border-solid inset-0 pointer-events-none rounded-[16px]" />
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#039] text-[20px] whitespace-nowrap">View role</p>
        <IconParkOutlineDown />
      </div>
      <div className="bg-[#039] content-stretch flex gap-[8px] h-[42px] items-center px-[16px] py-[12px] relative rounded-[16px] shrink-0 cursor-pointer select-none hover:bg-[#002266] transition-colors duration-200" data-name="Aplply cta">
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[20px] text-white whitespace-nowrap">Apply</p>
        <MdiArrowUp />
      </div>
    </div>
  );
}

function Frame83() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame81 />
      <Frame86 />
    </div>
  );
}

function Frame85() {
  return (
    <div className="bg-white relative rounded-[16px] shrink-0 w-full">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start p-[24px] relative size-full">
          <Frame78 />
          <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#252525] text-[16px] w-full">
            <p className="leading-[29px]">Lead development of cutting-edge AI solutions for enterprise clients across Asia-Pacific.</p>
          </div>
          <Frame83 />
        </div>
      </div>
      <div aria-hidden className="absolute border-[#e0e0e0] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_0px_12px_1px_rgba(222,233,255,0.15)]" />
    </div>
  );
}

function Frame90() {
  return (
    <div className="bg-[#eef4ff] content-stretch flex items-center justify-center px-[8px] py-[2px] relative rounded-[8px] shrink-0">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#252525] text-[14px] whitespace-nowrap">
        <p className="leading-[normal]">3+ Years</p>
      </div>
    </div>
  );
}

function Frame89() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#252525] text-[20px] whitespace-nowrap">
        <p className="leading-[normal]">Full Stack Developer</p>
      </div>
      <Frame90 />
    </div>
  );
}

function Frame62() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0">
      <Frame89 />
      <div className="bg-gradient-to-r from-[0.481%] from-white h-[2px] relative shrink-0 to-white via-1/2 via-[#039] w-[120px]" />
    </div>
  );
}

function UilSuitcase1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="uil:suitcase">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="uil:suitcase">
          <path d={svgPaths.p22af2380} fill="var(--fill-0, #5D5D5D)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame93() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <UilSuitcase1 />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5d5d5d] text-[16px] whitespace-nowrap">
        <p className="leading-[normal]">Engineering</p>
      </div>
    </div>
  );
}

function TwemojiFlagJapan() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="twemoji:flag-japan">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="twemoji:flag-japan">
          <path d={svgPaths.p2f976c00} fill="var(--fill-0, #EEEEEE)" id="Vector" />
          <path d={svgPaths.p344fbe00} fill="var(--fill-0, #ED1B2F)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Frame94() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <TwemojiFlagJapan />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5d5d5d] text-[16px] whitespace-nowrap">
        <p className="leading-[normal]">Japan</p>
      </div>
    </div>
  );
}

function WeuiTimeOutlined1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="weui:time-outlined">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="weui:time-outlined">
          <path clipRule="evenodd" d={svgPaths.pad97300} fill="var(--fill-0, black)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame95() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <WeuiTimeOutlined1 />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5d5d5d] text-[16px] whitespace-nowrap">
        <p className="leading-[normal]">Full-time</p>
      </div>
    </div>
  );
}

function Frame92() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full">
      <Frame93 />
      <Frame94 />
      <Frame95 />
    </div>
  );
}

function Frame88() {
  return (
    <div className="content-stretch flex flex-col h-[62px] items-start justify-between relative shrink-0 w-[369px]">
      <Frame62 />
      <Frame92 />
    </div>
  );
}

function Frame97() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5d5d5d] text-[16px] whitespace-nowrap">
        <p className="leading-[normal]">Posted 3 days ago</p>
      </div>
    </div>
  );
}

function Frame96() {
  return (
    <div className="content-stretch flex flex-col items-end justify-between relative self-stretch shrink-0 w-[159px]">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#039] text-[20px] whitespace-nowrap">
        <p className="leading-[normal]">¥8M – ¥12M</p>
      </div>
      <Frame97 />
    </div>
  );
}

function Frame87() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <Frame88 />
      <Frame96 />
    </div>
  );
}

function Frame100() {
  return (
    <div className="bg-[rgba(115,117,239,0.5)] content-stretch flex items-center px-[12px] py-[4px] relative rounded-[16px] shrink-0">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#252525] text-[16px] whitespace-nowrap">
        <p className="leading-[normal]">React</p>
      </div>
    </div>
  );
}

function Frame101() {
  return (
    <div className="bg-[rgba(115,117,239,0.5)] content-stretch flex items-center px-[12px] py-[4px] relative rounded-[16px] shrink-0">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#252525] text-[16px] whitespace-nowrap">
        <p className="leading-[normal]">Node.js</p>
      </div>
    </div>
  );
}

function Frame102() {
  return (
    <div className="bg-[rgba(115,117,239,0.5)] content-stretch flex items-center px-[12px] py-[4px] relative rounded-[16px] shrink-0">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#252525] text-[16px] whitespace-nowrap">
        <p className="leading-[normal]">TypeScript</p>
      </div>
    </div>
  );
}

function Frame103() {
  return (
    <div className="bg-[rgba(115,117,239,0.5)] content-stretch flex items-center px-[12px] py-[4px] relative rounded-[16px] shrink-0">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#252525] text-[16px] whitespace-nowrap">
        <p className="leading-[normal]">AWS</p>
      </div>
    </div>
  );
}

function Frame99() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <Frame100 />
      <Frame101 />
      <Frame102 />
      <Frame103 />
    </div>
  );
}

function IconParkOutlineDown1() {
  return (
    <div className="flex items-center justify-center relative shrink-0">
      <div className="-scale-y-100 flex-none">
        <div className="relative size-[24px]" data-name="icon-park-outline:down">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
            <g id="icon-park-outline:down">
              <path d="M18 9L12 15L6 9" id="Vector" stroke="var(--stroke-0, #003399)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function MdiArrowUp1() {
  return (
    <div className="flex items-center justify-center relative shrink-0 size-[24px]">
      <div className="flex-none rotate-90">
        <div className="relative size-[24px]" data-name="mdi:arrow-up">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
            <g id="mdi:arrow-up">
              <path d={svgPaths.pc851800} fill="var(--fill-0, white)" id="Vector" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame104() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0">
      <div className="content-stretch flex gap-[8px] h-[48px] items-center px-[16px] py-[12px] relative rounded-[16px] shrink-0 cursor-pointer select-none hover:bg-slate-50 transition-colors duration-200" data-name="view role cta">
        <div aria-hidden className="absolute border border-[#039] border-solid inset-0 pointer-events-none rounded-[16px]" />
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#039] text-[20px] whitespace-nowrap">View role</p>
        <IconParkOutlineDown1 />
      </div>
      <div className="bg-[#039] content-stretch flex gap-[8px] h-[42px] items-center px-[16px] py-[12px] relative rounded-[16px] shrink-0 cursor-pointer select-none hover:bg-[#002266] transition-colors duration-200" data-name="Aplply cta">
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[20px] text-white whitespace-nowrap">Apply</p>
        <MdiArrowUp1 />
      </div>
    </div>
  );
}

function Frame98() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame99 />
      <Frame104 />
    </div>
  );
}

function Frame91() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Frame87 />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#252525] text-[16px] w-full">
        <p className="leading-[29px]">Build scalable web applications using modern technologies and frameworks.</p>
      </div>
      <Frame98 />
    </div>
  );
}

function BxFile() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="bx:file">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="bx:file">
          <path d={svgPaths.p133eea00} fill="currentColor" id="Vector" />
          <path d={svgPaths.p1ef2a780} fill="currentColor" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Frame107() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
      <BxFile />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#252525] text-[20px] whitespace-nowrap">
        <p className="leading-[normal]">Key Responsibilities</p>
      </div>
    </div>
  );
}

function Frame108() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[8px] items-start leading-[0] not-italic relative shrink-0 text-[#5d5d5d] text-[16px] w-full">
      <div className="flex flex-col justify-center relative shrink-0 whitespace-nowrap">
        <ul>
          <li className="list-disc ms-[24px]">
            <span className="leading-[29px]">Develop web apps with React and Node.js</span>
          </li>
        </ul>
      </div>
      <div className="flex flex-col justify-center min-w-full relative shrink-0 w-[min-content]">
        <ul>
          <li className="list-disc ms-[24px]">
            <span className="leading-[29px]">Design RESTful APIs</span>
          </li>
        </ul>
      </div>
      <div className="flex flex-col justify-center min-w-full relative shrink-0 w-[min-content]">
        <ul>
          <li className="list-disc ms-[24px]">
            <span className="leading-[29px]">Collaborate with UI/UX designers</span>
          </li>
        </ul>
      </div>
      <div className="flex flex-col justify-center min-w-full relative shrink-0 w-[min-content]">
        <ul>
          <li className="list-disc ms-[24px]">
            <span className="leading-[29px]">Write clean, well-tested code</span>
          </li>
        </ul>
      </div>
      <div className="flex flex-col justify-center min-w-full relative shrink-0 w-[min-content]">
        <ul>
          <li className="list-disc ms-[24px]">
            <span className="leading-[29px]">Optimize performance</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

function Frame106() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0">
      <Frame107 />
      <Frame108 />
    </div>
  );
}

function IcBaselineStar() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="ic:baseline-star">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="ic:baseline-star">
          <path d={svgPaths.p9628000} fill="var(--fill-0, #252525)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame110() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
      <IcBaselineStar />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#252525] text-[20px] whitespace-nowrap">
        <p className="leading-[normal]">Qualifications</p>
      </div>
    </div>
  );
}

function Frame111() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[8px] items-start leading-[0] not-italic relative shrink-0 text-[#5d5d5d] text-[16px] w-full">
      <div className="flex flex-col justify-center relative shrink-0 w-full">
        <ul>
          <li className="list-disc ms-[24px]">
            <span className="leading-[29px]">{`Bachelor's in CS`}</span>
          </li>
        </ul>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 w-full">
        <ul>
          <li className="list-disc ms-[24px]">
            <span className="leading-[29px]">3+ years full-stack experience</span>
          </li>
        </ul>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 w-full">
        <ul>
          <li className="list-disc ms-[24px]">
            <span className="leading-[29px]">Proficiency in React, Node.js, TypeScript</span>
          </li>
        </ul>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 w-full">
        <ul>
          <li className="list-disc ms-[24px]">
            <span className="leading-[29px]">{`Database experience (SQL & NoSQL)`}</span>
          </li>
        </ul>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 w-full">
        <ul>
          <li className="list-disc ms-[24px]">
            <span className="leading-[29px]">Agile methodology knowledge</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

function Frame109() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[334px]">
      <Frame110 />
      <Frame111 />
    </div>
  );
}

function Frame105() {
  return (
    <div className="content-stretch flex gap-[48px] items-center relative shrink-0">
      <Frame106 />
      <Frame109 />
    </div>
  );
}

function Frame84() {
  return (
    <div className="bg-white relative rounded-[16px] shrink-0 w-full">
      <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[12px] items-start justify-center p-[24px] relative size-full">
          <Frame91 />
          <div className="flex items-center justify-center relative shrink-0">
            <div className="flex-none rotate-180">
              <div className="bg-gradient-to-r from-white h-[2px] relative to-[99.519%] to-white via-1/2 via-[#039] w-[1112px]" />
            </div>
          </div>
          <Frame105 />
        </div>
      </div>
      <div aria-hidden className="absolute border-[#e0e0e0] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_0px_12px_1px_rgba(222,233,255,0.15)]" />
    </div>
  );
}

function Frame116() {
  return (
    <div className="bg-[#eef4ff] content-stretch flex items-center justify-center px-[8px] py-[2px] relative rounded-[8px] shrink-0">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#252525] text-[14px] whitespace-nowrap">
        <p className="leading-[normal]">4+ Years</p>
      </div>
    </div>
  );
}

function Frame115() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#252525] text-[20px] whitespace-nowrap">
        <p className="leading-[normal]">Technical Recruiter</p>
      </div>
      <Frame116 />
    </div>
  );
}

function Frame63() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0">
      <Frame115 />
      <div className="bg-gradient-to-r from-[0.481%] from-white h-[2px] relative shrink-0 to-white via-1/2 via-[#039] w-[120px]" />
    </div>
  );
}

function UilSuitcase2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="uil:suitcase">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="uil:suitcase">
          <path d={svgPaths.p3d874100} fill="var(--fill-0, #5D5D5D)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame119() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <UilSuitcase2 />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5d5d5d] text-[16px] whitespace-nowrap">
        <p className="leading-[normal]">Recruitment</p>
      </div>
    </div>
  );
}

function TwemojiFlagIndia() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="twemoji:flag-india">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="twemoji:flag-india">
          <path d={svgPaths.p38286bf0} fill="var(--fill-0, #138808)" id="Vector" />
          <path d={svgPaths.p17288100} fill="var(--fill-0, #FF9933)" id="Vector_2" />
          <path d={svgPaths.p342f080} fill="var(--fill-0, #F7F7F7)" id="Vector_3" />
          <path d={svgPaths.p320afb80} fill="var(--fill-0, #000080)" id="Vector_4" />
          <path d={svgPaths.p194f3580} fill="var(--fill-0, #F7F7F7)" id="Vector_5" />
          <path d={svgPaths.p2dbef340} fill="var(--fill-0, #6666B3)" id="Vector_6" />
          <g id="Group">
            <path d={svgPaths.p40da7c0} fill="var(--fill-0, #000080)" id="Vector_7" />
            <path d={svgPaths.pc9bc800} fill="var(--fill-0, #000080)" id="Vector_8" />
            <path d={svgPaths.pbb1fe00} fill="var(--fill-0, #000080)" id="Vector_9" />
            <path d={svgPaths.p34603a40} fill="var(--fill-0, #000080)" id="Vector_10" />
            <path d={svgPaths.p19470180} fill="var(--fill-0, #000080)" id="Vector_11" />
            <path d={svgPaths.p320cc300} fill="var(--fill-0, #000080)" id="Vector_12" />
            <path d={svgPaths.p1ad25b00} fill="var(--fill-0, #000080)" id="Vector_13" />
            <path d={svgPaths.p1f736b80} fill="var(--fill-0, #000080)" id="Vector_14" />
            <path d={svgPaths.p4e9d100} fill="var(--fill-0, #000080)" id="Vector_15" />
            <path d={svgPaths.pe57ba00} fill="var(--fill-0, #000080)" id="Vector_16" />
            <path d={svgPaths.p872bd00} fill="var(--fill-0, #000080)" id="Vector_17" />
            <path d={svgPaths.p3ea2ef00} fill="var(--fill-0, #000080)" id="Vector_18" />
            <path d={svgPaths.p28f5d440} fill="var(--fill-0, #000080)" id="Vector_19" />
            <path d={svgPaths.p3a51cdf2} fill="var(--fill-0, #000080)" id="Vector_20" />
            <path d={svgPaths.p16a481b0} fill="var(--fill-0, #000080)" id="Vector_21" />
            <path d={svgPaths.pd2c8980} fill="var(--fill-0, #000080)" id="Vector_22" />
            <path d={svgPaths.pe4b400} fill="var(--fill-0, #000080)" id="Vector_23" />
            <path d={svgPaths.p21d7e100} fill="var(--fill-0, #000080)" id="Vector_24" />
            <path d={svgPaths.pd89e480} fill="var(--fill-0, #000080)" id="Vector_25" />
            <path d={svgPaths.p23ab1920} fill="var(--fill-0, #000080)" id="Vector_26" />
            <path d={svgPaths.pb332500} fill="var(--fill-0, #000080)" id="Vector_27" />
            <path d={svgPaths.p11ad2800} fill="var(--fill-0, #000080)" id="Vector_28" />
            <path d={svgPaths.p3e959500} fill="var(--fill-0, #000080)" id="Vector_29" />
            <path d={svgPaths.p232f9780} fill="var(--fill-0, #000080)" id="Vector_30" />
            <path d={svgPaths.p3d01ba80} fill="var(--fill-0, #000080)" id="Vector_31" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame120() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <TwemojiFlagIndia />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5d5d5d] text-[16px] whitespace-nowrap">
        <p className="leading-[normal]">India</p>
      </div>
    </div>
  );
}

function WeuiTimeOutlined2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="weui:time-outlined">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="weui:time-outlined">
          <path clipRule="evenodd" d={svgPaths.p234d7f00} fill="var(--fill-0, black)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame121() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <WeuiTimeOutlined2 />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5d5d5d] text-[16px] whitespace-nowrap">
        <p className="leading-[normal]">Full-time</p>
      </div>
    </div>
  );
}

function Frame118() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full">
      <Frame119 />
      <Frame120 />
      <Frame121 />
    </div>
  );
}

function Frame114() {
  return (
    <div className="content-stretch flex flex-col h-[62px] items-start justify-between relative shrink-0 w-[369px]">
      <Frame63 />
      <Frame118 />
    </div>
  );
}

function Frame123() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5d5d5d] text-[16px] whitespace-nowrap">
        <p className="leading-[normal]">Posted 3 days ago</p>
      </div>
    </div>
  );
}

function Frame122() {
  return (
    <div className="content-stretch flex flex-col items-end justify-between relative self-stretch shrink-0 w-[159px]">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#039] text-[20px] whitespace-nowrap">
        <p className="leading-[normal]">₹15L – ₹25L</p>
      </div>
      <Frame123 />
    </div>
  );
}

function Frame113() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <Frame114 />
      <Frame122 />
    </div>
  );
}

function Frame126() {
  return (
    <div className="bg-[rgba(115,117,239,0.5)] content-stretch flex items-center px-[12px] py-[4px] relative rounded-[16px] shrink-0">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#252525] text-[16px] whitespace-nowrap">
        <p className="leading-[normal]">Technical Recruiting</p>
      </div>
    </div>
  );
}

function Frame127() {
  return (
    <div className="bg-[rgba(115,117,239,0.5)] content-stretch flex items-center px-[12px] py-[4px] relative rounded-[16px] shrink-0">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#252525] text-[16px] whitespace-nowrap">
        <p className="leading-[normal]">Stakeholder Management</p>
      </div>
    </div>
  );
}

function Frame128() {
  return (
    <div className="bg-[rgba(115,117,239,0.5)] content-stretch flex items-center px-[12px] py-[4px] relative rounded-[16px] shrink-0">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#252525] text-[16px] whitespace-nowrap">
        <p className="leading-[normal]">Market Knowledge</p>
      </div>
    </div>
  );
}

function Frame125() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <Frame126 />
      <Frame127 />
      <Frame128 />
    </div>
  );
}

function IconParkOutlineDown2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="icon-park-outline:down">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="icon-park-outline:down">
          <path d="M18 9L12 15L6 9" id="Vector" stroke="var(--stroke-0, #003399)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function MdiArrowUp2() {
  return (
    <div className="flex items-center justify-center relative shrink-0 size-[24px]">
      <div className="flex-none rotate-90">
        <div className="relative size-[24px]" data-name="mdi:arrow-up">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
            <g id="mdi:arrow-up">
              <path d={svgPaths.pc851800} fill="var(--fill-0, white)" id="Vector" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame129() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0">
      <div className="content-stretch flex gap-[8px] h-[42px] items-center px-[16px] py-[12px] relative rounded-[16px] shrink-0 cursor-pointer select-none hover:bg-slate-50 transition-colors duration-200" data-name="view role cta">
        <div aria-hidden className="absolute border border-[#039] border-solid inset-0 pointer-events-none rounded-[16px]" />
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#039] text-[20px] whitespace-nowrap">View role</p>
        <IconParkOutlineDown2 />
      </div>
      <div className="bg-[#039] content-stretch flex gap-[8px] h-[42px] items-center px-[16px] py-[12px] relative rounded-[16px] shrink-0 cursor-pointer select-none hover:bg-[#002266] transition-colors duration-200" data-name="Aplply cta">
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[20px] text-white whitespace-nowrap">Apply</p>
        <MdiArrowUp2 />
      </div>
    </div>
  );
}

function Frame124() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame125 />
      <Frame129 />
    </div>
  );
}

function Frame112() {
  return (
    <div className="bg-white relative rounded-[16px] shrink-0 w-full">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start p-[24px] relative size-full">
          <Frame113 />
          <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#252525] text-[16px] w-full">
            <p className="leading-[29px]">Source and recruit top technology talent across Asia-Pacific markets.</p>
          </div>
          <Frame124 />
        </div>
      </div>
      <div aria-hidden className="absolute border-[#e0e0e0] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_0px_12px_1px_rgba(222,233,255,0.15)]" />
    </div>
  );
}

function Frame134() {
  return (
    <div className="bg-[#eef4ff] content-stretch flex items-center justify-center px-[8px] py-[2px] relative rounded-[8px] shrink-0">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#252525] text-[14px] whitespace-nowrap">
        <p className="leading-[normal]">6+ Years</p>
      </div>
    </div>
  );
}

function Frame133() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#252525] text-[20px] whitespace-nowrap">
        <p className="leading-[normal]">Cloud Solutions Architect</p>
      </div>
      <Frame134 />
    </div>
  );
}

function Frame64() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0">
      <Frame133 />
      <div className="bg-gradient-to-r from-[0.481%] from-white h-[2px] relative shrink-0 to-white via-1/2 via-[#039] w-[120px]" />
    </div>
  );
}

function UilSuitcase3() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="uil:suitcase">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="uil:suitcase">
          <path d={svgPaths.p3d874100} fill="var(--fill-0, #5D5D5D)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame136() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <UilSuitcase3 />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5d5d5d] text-[16px] whitespace-nowrap">
        <p className="leading-[normal]">Engineering</p>
      </div>
    </div>
  );
}

function EmojioneV1FlagForSingapore1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="emojione-v1:flag-for-singapore">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="emojione-v1:flag-for-singapore">
          <path d={svgPaths.pc883000} fill="var(--fill-0, #E6E7E8)" id="Vector" />
          <path d={svgPaths.p3deb9180} fill="var(--fill-0, #EC1C24)" id="Vector_2" />
          <path d={svgPaths.p167bfe70} fill="var(--fill-0, white)" id="Vector_3" />
          <path d={svgPaths.pf1264c0} fill="var(--fill-0, white)" id="Vector_4" />
        </g>
      </svg>
    </div>
  );
}

function Frame137() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <EmojioneV1FlagForSingapore1 />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5d5d5d] text-[16px] whitespace-nowrap">
        <p className="leading-[normal]">Singapore</p>
      </div>
    </div>
  );
}

function WeuiTimeOutlined3() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="weui:time-outlined">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="weui:time-outlined">
          <path clipRule="evenodd" d={svgPaths.p234d7f00} fill="var(--fill-0, black)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame138() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <WeuiTimeOutlined3 />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5d5d5d] text-[16px] whitespace-nowrap">
        <p className="leading-[normal]">Full-time</p>
      </div>
    </div>
  );
}

function Frame135() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full">
      <Frame136 />
      <Frame137 />
      <Frame138 />
    </div>
  );
}

function Frame132() {
  return (
    <div className="content-stretch flex flex-col h-[62px] items-start justify-between relative shrink-0 w-[369px]">
      <Frame64 />
      <Frame135 />
    </div>
  );
}

function Frame140() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5d5d5d] text-[16px] whitespace-nowrap">
        <p className="leading-[normal]">Posted 5 days ago</p>
      </div>
    </div>
  );
}

function Frame139() {
  return (
    <div className="content-stretch flex flex-col items-end justify-between relative self-stretch shrink-0 w-[159px]">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#039] text-[20px] whitespace-nowrap">
        <p className="leading-[normal]">S$140K – S$200K</p>
      </div>
      <Frame140 />
    </div>
  );
}

function Frame131() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <Frame132 />
      <Frame139 />
    </div>
  );
}

function Frame143() {
  return (
    <div className="bg-[rgba(115,117,239,0.5)] content-stretch flex items-center px-[12px] py-[4px] relative rounded-[16px] shrink-0">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#252525] text-[16px] whitespace-nowrap">
        <p className="leading-[normal]">AWS</p>
      </div>
    </div>
  );
}

function Frame144() {
  return (
    <div className="bg-[rgba(115,117,239,0.5)] content-stretch flex items-center px-[12px] py-[4px] relative rounded-[16px] shrink-0">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#252525] text-[16px] whitespace-nowrap">
        <p className="leading-[normal]">Azure</p>
      </div>
    </div>
  );
}

function Frame145() {
  return (
    <div className="bg-[rgba(115,117,239,0.5)] content-stretch flex items-center px-[12px] py-[4px] relative rounded-[16px] shrink-0">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#252525] text-[16px] whitespace-nowrap">
        <p className="leading-[normal]">Kubernetes</p>
      </div>
    </div>
  );
}

function Frame146() {
  return (
    <div className="bg-[rgba(115,117,239,0.5)] content-stretch flex items-center px-[12px] py-[4px] relative rounded-[16px] shrink-0">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#252525] text-[16px] whitespace-nowrap">
        <p className="leading-[normal]">DevOps</p>
      </div>
    </div>
  );
}

function Frame142() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <Frame143 />
      <Frame144 />
      <Frame145 />
      <Frame146 />
    </div>
  );
}

function IconParkOutlineDown3() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="icon-park-outline:down">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="icon-park-outline:down">
          <path d="M18 9L12 15L6 9" id="Vector" stroke="var(--stroke-0, #003399)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function MdiArrowUp3() {
  return (
    <div className="flex items-center justify-center relative shrink-0 size-[24px]">
      <div className="flex-none rotate-90">
        <div className="relative size-[24px]" data-name="mdi:arrow-up">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
            <g id="mdi:arrow-up">
              <path d={svgPaths.pc851800} fill="var(--fill-0, white)" id="Vector" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame147() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0">
      <div className="content-stretch flex gap-[8px] h-[42px] items-center px-[16px] py-[12px] relative rounded-[16px] shrink-0 cursor-pointer select-none hover:bg-slate-50 transition-colors duration-200" data-name="view role cta">
        <div aria-hidden className="absolute border border-[#039] border-solid inset-0 pointer-events-none rounded-[16px]" />
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#039] text-[20px] whitespace-nowrap">View role</p>
        <IconParkOutlineDown3 />
      </div>
      <div className="bg-[#039] content-stretch flex gap-[8px] h-[42px] items-center px-[16px] py-[12px] relative rounded-[16px] shrink-0 cursor-pointer select-none hover:bg-[#002266] transition-colors duration-200" data-name="Aplply cta">
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[20px] text-white whitespace-nowrap">Apply</p>
        <MdiArrowUp3 />
      </div>
    </div>
  );
}

function Frame141() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame142 />
      <Frame147 />
    </div>
  );
}

function Frame130() {
  return (
    <div className="bg-white relative rounded-[16px] shrink-0 w-full">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start p-[24px] relative size-full">
          <Frame131 />
          <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#252525] text-[16px] w-full">
            <p className="leading-[29px]">Design and implement cloud infrastructure solutions for enterprise clients.</p>
          </div>
          <Frame141 />
        </div>
      </div>
      <div aria-hidden className="absolute border-[#e0e0e0] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_0px_12px_1px_rgba(222,233,255,0.15)]" />
    </div>
  );
}

function Frame152() {
  return (
    <div className="bg-[#eef4ff] content-stretch flex items-center justify-center px-[8px] py-[2px] relative rounded-[8px] shrink-0">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#252525] text-[14px] whitespace-nowrap">
        <p className="leading-[normal]">4+ Years</p>
      </div>
    </div>
  );
}

function Frame151() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#252525] text-[20px] whitespace-nowrap">
        <p className="leading-[normal]">Data Scientist</p>
      </div>
      <Frame152 />
    </div>
  );
}

function Frame65() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0">
      <Frame151 />
      <div className="bg-gradient-to-r from-[0.481%] from-white h-[2px] relative shrink-0 to-white via-1/2 via-[#039] w-[120px]" />
    </div>
  );
}

function UilSuitcase4() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="uil:suitcase">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="uil:suitcase">
          <path d={svgPaths.p3d874100} fill="var(--fill-0, #5D5D5D)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame154() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <UilSuitcase4 />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5d5d5d] text-[16px] whitespace-nowrap">
        <p className="leading-[normal]">Analytics</p>
      </div>
    </div>
  );
}

function TwemojiFlagJapan1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="twemoji:flag-japan">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="twemoji:flag-japan">
          <path d={svgPaths.p2a1aee00} fill="var(--fill-0, #EEEEEE)" id="Vector" />
          <path d={svgPaths.p344fbe00} fill="var(--fill-0, #ED1B2F)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Frame155() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <TwemojiFlagJapan1 />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5d5d5d] text-[16px] whitespace-nowrap">
        <p className="leading-[normal]">Japan</p>
      </div>
    </div>
  );
}

function WeuiTimeOutlined4() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="weui:time-outlined">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="weui:time-outlined">
          <path clipRule="evenodd" d={svgPaths.p234d7f00} fill="var(--fill-0, black)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame156() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <WeuiTimeOutlined4 />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5d5d5d] text-[16px] whitespace-nowrap">
        <p className="leading-[normal]">Full-time</p>
      </div>
    </div>
  );
}

function Frame153() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full">
      <Frame154 />
      <Frame155 />
      <Frame156 />
    </div>
  );
}

function Frame150() {
  return (
    <div className="content-stretch flex flex-col h-[62px] items-start justify-between relative shrink-0 w-[369px]">
      <Frame65 />
      <Frame153 />
    </div>
  );
}

function Frame158() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5d5d5d] text-[16px] whitespace-nowrap">
        <p className="leading-[normal]">Posted 1 week ago</p>
      </div>
    </div>
  );
}

function Frame157() {
  return (
    <div className="content-stretch flex flex-col items-end justify-between relative self-stretch shrink-0 w-[159px]">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#039] text-[20px] whitespace-nowrap">
        <p className="leading-[normal]">¥9M – ¥14M</p>
      </div>
      <Frame158 />
    </div>
  );
}

function Frame149() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <Frame150 />
      <Frame157 />
    </div>
  );
}

function Frame161() {
  return (
    <div className="bg-[rgba(115,117,239,0.5)] content-stretch flex items-center px-[12px] py-[4px] relative rounded-[16px] shrink-0">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#252525] text-[16px] whitespace-nowrap">
        <p className="leading-[normal]">Python</p>
      </div>
    </div>
  );
}

function Frame162() {
  return (
    <div className="bg-[rgba(115,117,239,0.5)] content-stretch flex items-center px-[12px] py-[4px] relative rounded-[16px] shrink-0">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#252525] text-[16px] whitespace-nowrap">
        <p className="leading-[normal]">R</p>
      </div>
    </div>
  );
}

function Frame163() {
  return (
    <div className="bg-[rgba(115,117,239,0.5)] content-stretch flex items-center px-[12px] py-[4px] relative rounded-[16px] shrink-0">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#252525] text-[16px] whitespace-nowrap">
        <p className="leading-[normal]">SQL</p>
      </div>
    </div>
  );
}

function Frame164() {
  return (
    <div className="bg-[rgba(115,117,239,0.5)] content-stretch flex items-center px-[12px] py-[4px] relative rounded-[16px] shrink-0">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#252525] text-[16px] whitespace-nowrap">
        <p className="leading-[normal]">Machine Learning</p>
      </div>
    </div>
  );
}

function Frame160() {
  return (
    <div className="h-[34px] relative shrink-0 w-[473px]">
      {/* Home */}
      <div className="absolute h-[34px] left-0 top-0 w-[52px] cursor-pointer select-none group" data-name="Home">
        <p className={`[word-break:break-word] absolute font-['Inter:Semi_Bold',sans-serif] font-semibold inset-0 leading-[34px] not-italic text-center whitespace-nowrap transition-colors duration-200 ${
          ('Careers' as any) === 'Home' ? 'text-[#039]' : 'text-[#252525] group-hover:text-[#039]'
        }`}>Home</p>
      </div>

      {/* About us */}
      <div className="absolute h-[34px] left-[76px] top-0 w-[79px] cursor-pointer select-none group" data-name="About us">
        <p className={`[word-break:break-word] absolute font-['Inter:Semi_Bold',sans-serif] font-semibold inset-0 leading-[34px] not-italic text-center whitespace-nowrap transition-colors duration-200 ${
          ('Careers' as any) === 'About us' ? 'text-[#039]' : 'text-[#252525] group-hover:text-[#039]'
        }`}>About us</p>
      </div>

      {/* Services */}
      <div className="absolute content-stretch flex flex-col items-start left-[179px] top-[0] group/menu cursor-pointer select-none" data-name="service hover">
        <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Services/hover">
          <p className={`[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[34px] not-italic relative shrink-0 text-center whitespace-nowrap transition-colors duration-200 ${
            ('Careers' as any) === 'Services' ? 'text-[#039]' : 'text-[#252525] group-hover/menu:text-[#039]'
          }`}>Services</p>
          <div className={('Careers' as any) === 'Services' ? 'text-[#039]' : 'text-[#252525] group-hover/menu:text-[#039] transition-colors duration-200'}>
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
        <p className={`[word-break:break-word] absolute font-['Inter:Semi_Bold',sans-serif] font-semibold inset-0 leading-[34px] not-italic text-center whitespace-nowrap transition-colors duration-200 ${
          ('Careers' as any) === 'Careers' ? 'text-[#039]' : 'text-[#252525] group-hover:text-[#039]'
        }`}>Careers</p>
      </div>

      {/* Contact */}
      <div className="absolute h-[34px] left-[404px] top-0 w-[69px] cursor-pointer select-none group" data-name="Contact">
        <p className={`[word-break:break-word] absolute font-['Inter:Semi_Bold',sans-serif] font-semibold inset-[0_0_0_-1.45%] leading-[34px] not-italic text-center whitespace-nowrap transition-colors duration-200 ${
          ('Careers' as any) === 'Contact' ? 'text-[#039]' : 'text-[#252525] group-hover:text-[#039]'
        }`}>Contact</p>
      </div>
    </div>
  );
}

function IconParkOutlineDown4() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="icon-park-outline:down">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="icon-park-outline:down">
          <path d="M18 9L12 15L6 9" id="Vector" stroke="var(--stroke-0, #003399)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function MdiArrowUp4() {
  return (
    <div className="flex items-center justify-center relative shrink-0 size-[24px]">
      <div className="flex-none rotate-90">
        <div className="relative size-[24px]" data-name="mdi:arrow-up">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
            <g id="mdi:arrow-up">
              <path d={svgPaths.pc851800} fill="var(--fill-0, white)" id="Vector" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame165() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0">
      <div className="content-stretch flex gap-[8px] h-[42px] items-center px-[16px] py-[12px] relative rounded-[16px] shrink-0 cursor-pointer select-none hover:bg-slate-50 transition-colors duration-200" data-name="view role cta">
        <div aria-hidden className="absolute border border-[#039] border-solid inset-0 pointer-events-none rounded-[16px]" />
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#039] text-[20px] whitespace-nowrap">View role</p>
        <IconParkOutlineDown4 />
      </div>
      <div className="bg-[#039] content-stretch flex gap-[8px] h-[42px] items-center px-[16px] py-[12px] relative rounded-[16px] shrink-0 cursor-pointer select-none hover:bg-[#002266] transition-colors duration-200" data-name="Aplply cta">
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[20px] text-white whitespace-nowrap">Apply</p>
        <MdiArrowUp4 />
      </div>
    </div>
  );
}

function Frame159() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame160 />
      <Frame165 />
    </div>
  );
}

function Frame148() {
  return (
    <div className="bg-white relative rounded-[16px] shrink-0 w-full">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start p-[24px] relative size-full">
          <Frame149 />
          <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#252525] text-[16px] w-full">
            <p className="leading-[29px]">Analyze complex datasets to drive business insights and AI model development.</p>
          </div>
          <Frame159 />
        </div>
      </div>
      <div aria-hidden className="absolute border-[#e0e0e0] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_0px_12px_1px_rgba(222,233,255,0.15)]" />
    </div>
  );
}

function Frame170() {
  return (
    <div className="bg-[#eef4ff] content-stretch flex items-center justify-center px-[8px] py-[2px] relative rounded-[8px] shrink-0">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#252525] text-[14px] whitespace-nowrap">
        <p className="leading-[normal]">3+ Years</p>
      </div>
    </div>
  );
}

function Frame169() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#252525] text-[20px] whitespace-nowrap">
        <p className="leading-[normal]">DevOps Engineer</p>
      </div>
      <Frame170 />
    </div>
  );
}

function Frame66() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0">
      <Frame169 />
      <div className="bg-gradient-to-r from-[0.481%] from-white h-[2px] relative shrink-0 to-white via-1/2 via-[#039] w-[120px]" />
    </div>
  );
}

function UilSuitcase5() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="uil:suitcase">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="uil:suitcase">
          <path d={svgPaths.p3d874100} fill="var(--fill-0, #5D5D5D)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame172() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <UilSuitcase5 />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5d5d5d] text-[16px] whitespace-nowrap">
        <p className="leading-[normal]">Engineering</p>
      </div>
    </div>
  );
}

function TwemojiFlagIndia1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="twemoji:flag-india">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="twemoji:flag-india">
          <path d={svgPaths.p38286bf0} fill="var(--fill-0, #138808)" id="Vector" />
          <path d={svgPaths.p17288100} fill="var(--fill-0, #FF9933)" id="Vector_2" />
          <path d={svgPaths.p342f080} fill="var(--fill-0, #F7F7F7)" id="Vector_3" />
          <path d={svgPaths.p320afb80} fill="var(--fill-0, #000080)" id="Vector_4" />
          <path d={svgPaths.p194f3580} fill="var(--fill-0, #F7F7F7)" id="Vector_5" />
          <path d={svgPaths.p2dbef340} fill="var(--fill-0, #6666B3)" id="Vector_6" />
          <g id="Group">
            <path d={svgPaths.p40da7c0} fill="var(--fill-0, #000080)" id="Vector_7" />
            <path d={svgPaths.pc9bc800} fill="var(--fill-0, #000080)" id="Vector_8" />
            <path d={svgPaths.pbb1fe00} fill="var(--fill-0, #000080)" id="Vector_9" />
            <path d={svgPaths.p34603a40} fill="var(--fill-0, #000080)" id="Vector_10" />
            <path d={svgPaths.p19470180} fill="var(--fill-0, #000080)" id="Vector_11" />
            <path d={svgPaths.p320cc300} fill="var(--fill-0, #000080)" id="Vector_12" />
            <path d={svgPaths.p1ad25b00} fill="var(--fill-0, #000080)" id="Vector_13" />
            <path d={svgPaths.p1f736b80} fill="var(--fill-0, #000080)" id="Vector_14" />
            <path d={svgPaths.p4e9d100} fill="var(--fill-0, #000080)" id="Vector_15" />
            <path d={svgPaths.pe57ba00} fill="var(--fill-0, #000080)" id="Vector_16" />
            <path d={svgPaths.p872bd00} fill="var(--fill-0, #000080)" id="Vector_17" />
            <path d={svgPaths.p3ea2ef00} fill="var(--fill-0, #000080)" id="Vector_18" />
            <path d={svgPaths.p28f5d440} fill="var(--fill-0, #000080)" id="Vector_19" />
            <path d={svgPaths.p3a51cdf2} fill="var(--fill-0, #000080)" id="Vector_20" />
            <path d={svgPaths.p16a481b0} fill="var(--fill-0, #000080)" id="Vector_21" />
            <path d={svgPaths.pd2c8980} fill="var(--fill-0, #000080)" id="Vector_22" />
            <path d={svgPaths.pe4b400} fill="var(--fill-0, #000080)" id="Vector_23" />
            <path d={svgPaths.p21d7e100} fill="var(--fill-0, #000080)" id="Vector_24" />
            <path d={svgPaths.pd89e480} fill="var(--fill-0, #000080)" id="Vector_25" />
            <path d={svgPaths.p23ab1920} fill="var(--fill-0, #000080)" id="Vector_26" />
            <path d={svgPaths.pb332500} fill="var(--fill-0, #000080)" id="Vector_27" />
            <path d={svgPaths.p11ad2800} fill="var(--fill-0, #000080)" id="Vector_28" />
            <path d={svgPaths.p3e959500} fill="var(--fill-0, #000080)" id="Vector_29" />
            <path d={svgPaths.p232f9780} fill="var(--fill-0, #000080)" id="Vector_30" />
            <path d={svgPaths.p3d01ba80} fill="var(--fill-0, #000080)" id="Vector_31" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame173() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <TwemojiFlagIndia1 />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5d5d5d] text-[16px] whitespace-nowrap">
        <p className="leading-[normal]">India</p>
      </div>
    </div>
  );
}

function WeuiTimeOutlined5() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="weui:time-outlined">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="weui:time-outlined">
          <path clipRule="evenodd" d={svgPaths.p234d7f00} fill="var(--fill-0, black)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame174() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <WeuiTimeOutlined5 />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5d5d5d] text-[16px] whitespace-nowrap">
        <p className="leading-[normal]">Full-time</p>
      </div>
    </div>
  );
}

function Frame171() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full">
      <Frame172 />
      <Frame173 />
      <Frame174 />
    </div>
  );
}

function Frame168() {
  return (
    <div className="content-stretch flex flex-col h-[62px] items-start justify-between relative shrink-0 w-[369px]">
      <Frame66 />
      <Frame171 />
    </div>
  );
}

function Frame176() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5d5d5d] text-[16px] whitespace-nowrap">
        <p className="leading-[normal]">Posted 1 week ago</p>
      </div>
    </div>
  );
}

function Frame175() {
  return (
    <div className="content-stretch flex flex-col items-end justify-between relative self-stretch shrink-0 w-[159px]">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#039] text-[20px] whitespace-nowrap">
        <p className="leading-[normal]">₹12L – ₹20L</p>
      </div>
      <Frame176 />
    </div>
  );
}

function Frame167() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <Frame168 />
      <Frame175 />
    </div>
  );
}

function Frame179() {
  return (
    <div className="bg-[rgba(115,117,239,0.5)] content-stretch flex items-center px-[12px] py-[4px] relative rounded-[16px] shrink-0">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#252525] text-[16px] whitespace-nowrap">
        <p className="leading-[normal]">Docker</p>
      </div>
    </div>
  );
}

function Frame180() {
  return (
    <div className="bg-[rgba(115,117,239,0.5)] content-stretch flex items-center px-[12px] py-[4px] relative rounded-[16px] shrink-0">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#252525] text-[16px] whitespace-nowrap">
        <p className="leading-[normal]">Kubernetes</p>
      </div>
    </div>
  );
}

function Frame181() {
  return (
    <div className="bg-[rgba(115,117,239,0.5)] content-stretch flex items-center px-[12px] py-[4px] relative rounded-[16px] shrink-0">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#252525] text-[16px] whitespace-nowrap">
        <p className="leading-[normal]">Jenkins</p>
      </div>
    </div>
  );
}

function Frame182() {
  return (
    <div className="bg-[rgba(115,117,239,0.5)] content-stretch flex items-center px-[12px] py-[4px] relative rounded-[16px] shrink-0">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#252525] text-[16px] whitespace-nowrap">
        <p className="leading-[normal]">Terraform</p>
      </div>
    </div>
  );
}

function Frame178() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <Frame179 />
      <Frame180 />
      <Frame181 />
      <Frame182 />
    </div>
  );
}

function IconParkOutlineDown5() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="icon-park-outline:down">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="icon-park-outline:down">
          <path d="M18 9L12 15L6 9" id="Vector" stroke="var(--stroke-0, #003399)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function MdiArrowUp5() {
  return (
    <div className="flex items-center justify-center relative shrink-0 size-[24px]">
      <div className="flex-none rotate-90">
        <div className="relative size-[24px]" data-name="mdi:arrow-up">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
            <g id="mdi:arrow-up">
              <path d={svgPaths.pc851800} fill="var(--fill-0, white)" id="Vector" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame183() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0">
      <div className="content-stretch flex gap-[8px] h-[42px] items-center px-[16px] py-[12px] relative rounded-[16px] shrink-0 cursor-pointer select-none hover:bg-slate-50 transition-colors duration-200" data-name="view role cta">
        <div aria-hidden className="absolute border border-[#039] border-solid inset-0 pointer-events-none rounded-[16px]" />
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#039] text-[20px] whitespace-nowrap">View role</p>
        <IconParkOutlineDown5 />
      </div>
      <div className="bg-[#039] content-stretch flex gap-[8px] h-[42px] items-center px-[16px] py-[12px] relative rounded-[16px] shrink-0 cursor-pointer select-none hover:bg-[#002266] transition-colors duration-200" data-name="Aplply cta">
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[20px] text-white whitespace-nowrap">Apply</p>
        <MdiArrowUp5 />
      </div>
    </div>
  );
}

function Frame177() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame178 />
      <Frame183 />
    </div>
  );
}

function Frame166() {
  return (
    <div className="bg-white relative rounded-[16px] shrink-0 w-full">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start p-[24px] relative size-full">
          <Frame167 />
          <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#252525] text-[16px] w-full">
            <p className="leading-[29px]">Implement and maintain CI/CD pipelines and cloud infrastructure.</p>
          </div>
          <Frame177 />
        </div>
      </div>
      <div aria-hidden className="absolute border-[#e0e0e0] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_0px_12px_1px_rgba(222,233,255,0.15)]" />
    </div>
  );
}


function DocumentIcon() {
  return (
    <svg className="size-[20px] text-[#252525] shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  );
}

function StarIcon() {
  return (
    <svg className="size-[20px] text-[#252525] shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.907c.969 0 1.371 1.24.588 1.81l-3.97 2.883a1 1 0 00-.364 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.971-2.883a1 1 0 00-1.176 0l-3.97 2.883c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.364-1.118l-3.97-2.883c-.783-.57-.38-1.81.588-1.81h4.906a1 1 0 00.951-.69l1.519-4.674z" />
    </svg>
  );
}

function ArrowRightIcon() {
  return (
    <svg className="size-[20px] text-current shrink-0 ml-[4px]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
    </svg>
  );
}

function ChevronDownIcon({ isExpanded }: { isExpanded: boolean }) {
  return (
    <svg 
      className={`size-[20px] text-[#039] shrink-0 transition-transform duration-200 ${isExpanded ? "rotate-180" : ""}`} 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2.5" 
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
}

interface JobCardProps {
  job: typeof JOBS_DATA[0];
  isExpanded: boolean;
  onToggle: () => void;
  onApply: () => void;
}

function JobCard({ job, isExpanded, onToggle, onApply }: JobCardProps) {
  const renderFlag = () => {
    if (job.location.includes("Japan")) return <TwemojiFlagJapan />;
    if (job.location.includes("India")) return <TwemojiFlagIndia />;
    return <EmojioneV1FlagForSingapore />;
  };

  return (
    <div className="bg-white relative rounded-[16px] border border-[#e0e0e0] border-solid shadow-[0px_0px_12px_1px_rgba(222,233,255,0.15)] w-full overflow-hidden transition-all duration-300">
      <div className="p-[24px] flex flex-col gap-[20px] w-full">
        {/* Header: Title, Department, Location, Type, Salary, Posted Date */}
        <div className="flex justify-between items-start w-full">
          <div className="flex flex-col gap-[8px]">
            {/* Title */}
            <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[normal] not-italic text-[#252525] text-[24px]">
              <p>{job.title}</p>
            </div>
            
            {/* Metadata (Department, Location, Type) */}
            <div className="flex gap-[24px] items-center flex-wrap">
              {/* Department */}
              <div className="flex gap-[8px] items-center">
                <UilSuitcase />
                <span className="font-['Inter:Regular',sans-serif] font-normal text-[#5d5d5d] text-[16px]">
                  {job.department}
                </span>
              </div>
              {/* Location */}
              <div className="flex gap-[8px] items-center">
                {renderFlag()}
                <span className="font-['Inter:Regular',sans-serif] font-normal text-[#5d5d5d] text-[16px]">
                  {job.location}
                </span>
              </div>
              {/* Type */}
              <div className="flex gap-[8px] items-center">
                <WeuiTimeOutlined />
                <span className="font-['Inter:Regular',sans-serif] font-normal text-[#5d5d5d] text-[16px]">
                  {job.type}
                </span>
              </div>
            </div>
          </div>

          {/* Salary and Posted */}
          <div className="flex flex-col items-end gap-[4px] shrink-0 text-right">
            <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#039] text-[20px] whitespace-nowrap">
              {job.salary}
            </span>
            <span className="font-['Inter:Regular',sans-serif] font-normal text-[#5d5d5d] text-[16px] whitespace-nowrap">
              {job.posted}
            </span>
          </div>
        </div>

        {/* Short Description */}
        <div className="font-['Inter:Regular',sans-serif] font-normal text-[#252525] text-[16px] leading-[29px] w-full">
          <p>{job.description}</p>
        </div>

        {/* Bottom Panel: Technology Tags & CTA buttons */}
        <div className="flex justify-between items-center w-full mt-[4px] flex-wrap gap-[16px]">
          {/* Technology tags */}
          <div className="flex gap-[8px] items-center flex-wrap">
            {job.tags && job.tags.map((tag, idx) => (
              <div 
                key={idx}
                className="bg-[#eef4ff] text-[#039] font-['Inter:Regular',sans-serif] font-medium px-[16px] py-[6px] rounded-[16px] text-[16px] border border-[#d6e4ff]"
              >
                {tag}
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex gap-[24px] items-center shrink-0">
            {/* View role button */}
            <div 
              onClick={(e) => { e.preventDefault(); e.stopPropagation(); onToggle(); }}
              className="flex gap-[8px] h-[42px] items-center px-[20px] py-[10px] rounded-[16px] cursor-pointer select-none border border-[#039] bg-white hover:bg-slate-50 transition-colors duration-200"
            >
              <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#039] text-[18px] whitespace-nowrap">
                View role
              </p>
              <ChevronDownIcon isExpanded={isExpanded} />
            </div>

            {/* Apply button */}
            <div 
              onClick={(e) => { e.preventDefault(); e.stopPropagation(); onApply(); }}
              className="bg-[#039] text-white border border-[#039] flex gap-[8px] h-[42px] items-center px-[20px] py-[10px] rounded-[16px] cursor-pointer select-none hover:bg-transparent hover:text-[#039] transition-colors duration-200"
              data-name="Apply cta"
            >
              <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[18px] text-current whitespace-nowrap">
                Apply
              </p>
              <ArrowRightIcon />
            </div>
          </div>
        </div>

        {/* Expandable Section with smooth transition */}
        <div 
          className="overflow-hidden transition-all duration-300 ease-in-out w-full"
          style={{ 
            maxHeight: isExpanded ? '1000px' : '0px',
            opacity: isExpanded ? 1 : 0,
            marginTop: isExpanded ? '16px' : '0px'
          }}
        >
          {/* Horizontal Divider Line */}
          <div className="border-t border-[#e0e0e0] w-full pt-[24px] mb-[20px]" />

          {/* Two-Column Grid */}
          <div className="grid grid-cols-2 gap-[48px] w-full">
            {/* Left Column: Key Responsibilities */}
            <div className="flex flex-col gap-[16px]">
              <div className="flex gap-[8px] items-center text-[#252525]">
                <DocumentIcon />
                <h4 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[20px] leading-tight">
                  Key Responsibilities
                </h4>
              </div>
              <ul className="list-disc pl-[24px] flex flex-col gap-[10px] text-[#5d5d5d] text-[16px] leading-[26px]">
                {job.responsibilities.map((r, idx) => (
                  <li key={idx}>{r}</li>
                ))}
              </ul>
            </div>

            {/* Right Column: Qualifications */}
            <div className="flex flex-col gap-[16px]">
              <div className="flex gap-[8px] items-center text-[#252525]">
                <StarIcon />
                <h4 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[20px] leading-tight">
                  Qualifications
                </h4>
              </div>
              <ul className="list-disc pl-[24px] flex flex-col gap-[10px] text-[#5d5d5d] text-[16px] leading-[26px]">
                {job.requirements.map((r, idx) => (
                  <li key={idx}>{r}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame117({ onApply }: { onApply: (job: any) => void }) {
  const [expandedJobs, setExpandedJobs] = useState<Record<number, boolean>>({});

  const toggleExpand = (jobId: number) => {
    setExpandedJobs(prev => ({
      ...prev,
      [jobId]: !prev[jobId]
    }));
  };

  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
      {JOBS_DATA.map(job => (
        <JobCard 
          key={job.id} 
          job={job} 
          isExpanded={!!expandedJobs[job.id]} 
          onToggle={() => toggleExpand(job.id)} 
          onApply={() => onApply(job)}
        />
      ))}
    </div>
  );
}

function OpenPositions({ onApply }: { onApply: (job: any) => void }) {
  return (
    <div className="relative mx-auto mt-[64px] bg-[#eef4ff] content-stretch flex flex-col gap-[42px] items-center px-[80px] py-[48px] w-[1320px]" data-name="open positions">
      <Frame17 />
      <Frame117 onApply={onApply} />
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-center relative shrink-0 w-full">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] min-w-full not-italic relative shrink-0 text-[#4f4f4f] text-[24px] text-center w-[min-content]">{`Perks & Benefits`}</p>
      <div className="bg-gradient-to-r from-[0.481%] from-white h-[2px] relative shrink-0 to-white via-1/2 via-[#039] w-[120px]" />
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-center relative shrink-0 w-full">
      <p className="[word-break:break-word] font-['Inria_Serif:Bold',sans-serif] leading-[normal] min-w-full not-italic relative shrink-0 text-[#252525] text-[48px] text-center w-[min-content]">What We Offer</p>
      <div className="bg-gradient-to-r from-[0.481%] from-white h-[4px] relative shrink-0 to-white via-1/2 via-[#039] w-[240px]" />
    </div>
  );
}

function Frame184() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 w-[799px]">
      <Frame31 />
      <Frame18 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#4f4f4f] text-[16px] text-center w-full">From learning opportunities and exposure to wellness and career advancement, we provide the support you need to succeed</p>
    </div>
  );
}

function Floor() {
  return (
    <div className="col-1 h-[81.389px] ml-0 mt-[50.3px] relative row-1 w-[140.979px]" data-name="Floor">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 140.979 81.3889">
        <g id="Floor">
          <path d={svgPaths.pe7adc00} fill="var(--fill-0, #FAFAFA)" id="floor" />
        </g>
      </svg>
    </div>
  );
}

function Shadows() {
  return (
    <div className="col-1 h-[27.565px] ml-[1.09px] mt-[94.22px] relative row-1 w-[136.815px]" data-name="Shadows">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 136.815 27.5652">
        <g id="Shadows">
          <path d={svgPaths.p34eda500} fill="var(--fill-0, #E0E0E0)" id="Shadow" />
          <path d={svgPaths.p39acb180} fill="var(--fill-0, #E0E0E0)" id="shadow" />
          <path d={svgPaths.p3cefe000} fill="var(--fill-0, #E0E0E0)" id="shadow_2" />
          <path d={svgPaths.p2492fd00} fill="var(--fill-0, #E0E0E0)" id="shadow_3" />
        </g>
      </svg>
    </div>
  );
}

function World() {
  return (
    <div className="col-1 h-[77.385px] ml-[3.11px] mt-[2.5px] relative row-1 w-[77.4px]" data-name="World">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 77.4002 77.3851">
        <g id="World">
          <path d={svgPaths.pf708500} fill="var(--fill-0, #595BD4)" id="Vector" />
          <path d={svgPaths.pf708500} fill="var(--fill-0, white)" id="Vector_2" opacity="0.5" />
          <g id="Group" opacity="0.5">
            <path d={svgPaths.p3a82fe00} fill="var(--fill-0, white)" id="Vector_3" />
            <path d={svgPaths.p28763300} fill="var(--fill-0, white)" id="Vector_4" />
            <path d={svgPaths.p368c100} fill="var(--fill-0, white)" id="Vector_5" />
            <path d={svgPaths.p36d84a00} fill="var(--fill-0, white)" id="Vector_6" />
            <path d={svgPaths.p25552400} fill="var(--fill-0, white)" id="Vector_7" />
            <path d={svgPaths.p10b5900} fill="var(--fill-0, white)" id="Vector_8" />
            <path d={svgPaths.p2b8dd580} fill="var(--fill-0, white)" id="Vector_9" />
            <path d={svgPaths.p1b7f1b0} fill="var(--fill-0, white)" id="Vector_10" />
            <path d={svgPaths.p3dd47b00} fill="var(--fill-0, white)" id="Vector_11" />
            <path d={svgPaths.p3834ed00} fill="var(--fill-0, white)" id="Vector_12" />
            <path d={svgPaths.pd8f2380} fill="var(--fill-0, white)" id="Vector_13" />
            <path d={svgPaths.p2d67b200} fill="var(--fill-0, white)" id="Vector_14" />
            <path d={svgPaths.p9748900} fill="var(--fill-0, white)" id="Vector_15" />
            <path d={svgPaths.p13dab00} fill="var(--fill-0, white)" id="Vector_16" />
            <path d={svgPaths.pcf43600} fill="var(--fill-0, white)" id="Vector_17" />
            <path d={svgPaths.p23a78400} fill="var(--fill-0, white)" id="Vector_18" />
            <path d={svgPaths.pfea8540} fill="var(--fill-0, white)" id="Vector_19" />
            <path d={svgPaths.p12622500} fill="var(--fill-0, white)" id="Vector_20" />
            <path d={svgPaths.p3342d480} fill="var(--fill-0, white)" id="Vector_21" />
          </g>
          <path d={svgPaths.p3d4eaf80} fill="var(--fill-0, white)" id="Vector_22" opacity="0.2" />
          <g id="Group_2" opacity="0.15">
            <path d={svgPaths.p2f912e00} fill="var(--fill-0, #595BD4)" id="Vector_23" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Lines() {
  return (
    <div className="col-1 h-[80.251px] ml-0 mt-0 relative row-1 w-[88.89px]" data-name="Lines">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 88.8897 80.251">
        <g id="Lines">
          <path d={svgPaths.p31aa0ef0} fill="var(--fill-0, #FAFAFA)" id="Vector" />
          <path d={svgPaths.p2a014900} fill="var(--fill-0, #FAFAFA)" id="Vector_2" />
          <path d={svgPaths.p2925b80} fill="var(--fill-0, #FAFAFA)" id="Vector_3" />
          <path d={svgPaths.p20650480} fill="var(--fill-0, #FAFAFA)" id="Vector_4" />
          <path d={svgPaths.p34d4be00} fill="var(--fill-0, #FAFAFA)" id="Vector_5" />
          <path d={svgPaths.p3ddfeb00} fill="var(--fill-0, #EBEBEB)" id="Vector_6" />
          <path d={svgPaths.p102fff80} fill="var(--fill-0, #FAFAFA)" id="Vector_7" />
          <path d={svgPaths.p2087bc00} fill="var(--fill-0, #FAFAFA)" id="Vector_8" />
          <path d={svgPaths.p12332c00} fill="var(--fill-0, #FAFAFA)" id="Vector_9" />
          <path d={svgPaths.p3abdde00} fill="var(--fill-0, #FAFAFA)" id="Vector_10" />
          <path d={svgPaths.p37de1480} fill="var(--fill-0, #FAFAFA)" id="Vector_11" />
          <path d={svgPaths.p1f2ee800} fill="var(--fill-0, #FAFAFA)" id="Vector_12" />
          <path d={svgPaths.p396ef200} fill="var(--fill-0, #FAFAFA)" id="Vector_13" />
          <path d={svgPaths.p14610d00} fill="var(--fill-0, #FAFAFA)" id="Vector_14" />
          <path d={svgPaths.p255dc0f0} fill="var(--fill-0, #FAFAFA)" id="Vector_15" />
          <path d={svgPaths.p33bac900} fill="var(--fill-0, #FAFAFA)" id="Vector_16" />
          <path d={svgPaths.p2a24aa00} fill="var(--fill-0, #FAFAFA)" id="Vector_17" />
          <path d={svgPaths.p3f42a500} fill="var(--fill-0, #FAFAFA)" id="Vector_18" />
          <path d={svgPaths.p13b6f700} fill="var(--fill-0, #FAFAFA)" id="Vector_19" />
          <path d={svgPaths.p178d2c80} fill="var(--fill-0, #FAFAFA)" id="Vector_20" />
          <path d={svgPaths.p1a8d3a80} fill="var(--fill-0, #FAFAFA)" id="Vector_21" />
          <path d={svgPaths.p198e8600} fill="var(--fill-0, #EBEBEB)" id="Vector_22" />
          <path d={svgPaths.p2bc83300} fill="var(--fill-0, #EBEBEB)" id="Vector_23" />
          <path d={svgPaths.p3f6ccf00} fill="var(--fill-0, #EBEBEB)" id="Vector_24" />
          <path d={svgPaths.p1165e200} fill="var(--fill-0, #EBEBEB)" id="Vector_25" />
          <path d={svgPaths.p3964d80} fill="var(--fill-0, #EBEBEB)" id="Vector_26" />
          <path d={svgPaths.p1dd53d00} fill="var(--fill-0, #EBEBEB)" id="Vector_27" />
          <path d={svgPaths.p16834b00} fill="var(--fill-0, #EBEBEB)" id="Vector_28" />
          <path d={svgPaths.p12b9f500} fill="var(--fill-0, #EBEBEB)" id="Vector_29" />
          <path d={svgPaths.p34239900} fill="var(--fill-0, #EBEBEB)" id="Vector_30" />
          <path d={svgPaths.p2bbce00} fill="var(--fill-0, #EBEBEB)" id="Vector_31" />
          <path d={svgPaths.p881d80} fill="var(--fill-0, #EBEBEB)" id="Vector_32" />
          <path d={svgPaths.p1ce86b00} fill="var(--fill-0, #EBEBEB)" id="Vector_33" />
          <path d={svgPaths.p213c36c0} fill="var(--fill-0, #EBEBEB)" id="Vector_34" />
          <path d={svgPaths.p1f4b4800} fill="var(--fill-0, #EBEBEB)" id="Vector_35" />
          <path d={svgPaths.p1e265170} fill="var(--fill-0, #EBEBEB)" id="Vector_36" />
          <path d={svgPaths.pf41300} fill="var(--fill-0, #EBEBEB)" id="Vector_37" />
          <path d={svgPaths.p14929540} fill="var(--fill-0, #EBEBEB)" id="Vector_38" />
          <path d={svgPaths.p13844df0} fill="var(--fill-0, #EBEBEB)" id="Vector_39" />
          <path d={svgPaths.p172b0100} fill="var(--fill-0, #EBEBEB)" id="Vector_40" />
          <path d={svgPaths.p2637ce00} fill="var(--fill-0, #EBEBEB)" id="Vector_41" />
          <path d={svgPaths.p3b0095b0} fill="var(--fill-0, #EBEBEB)" id="Vector_42" />
          <path d={svgPaths.p22f36900} fill="var(--fill-0, #FAFAFA)" id="Vector_43" />
          <path d={svgPaths.p13fb2300} fill="var(--fill-0, #EBEBEB)" id="Vector_44" />
          <path d={svgPaths.p3d952c80} fill="var(--fill-0, #EBEBEB)" id="Vector_45" />
          <path d={svgPaths.p3f503c80} fill="var(--fill-0, #EBEBEB)" id="Vector_46" />
          <path d={svgPaths.p146ae00} fill="var(--fill-0, #EBEBEB)" id="Vector_47" />
          <path d={svgPaths.pe369180} fill="var(--fill-0, #EBEBEB)" id="Vector_48" />
          <path d={svgPaths.p37cd7800} fill="var(--fill-0, #EBEBEB)" id="Vector_49" />
          <path d={svgPaths.p39162100} fill="var(--fill-0, #EBEBEB)" id="Vector_50" />
          <path d={svgPaths.pb951380} fill="var(--fill-0, #EBEBEB)" id="Vector_51" />
          <path d={svgPaths.p24f2100} fill="var(--fill-0, #EBEBEB)" id="Vector_52" />
          <path d={svgPaths.p3fe2b100} fill="var(--fill-0, #EBEBEB)" id="Vector_53" />
          <path d={svgPaths.p968fd80} fill="var(--fill-0, #EBEBEB)" id="Vector_54" />
          <path d={svgPaths.pc728480} fill="var(--fill-0, #EBEBEB)" id="Vector_55" />
          <path d={svgPaths.p3d666380} fill="var(--fill-0, #EBEBEB)" id="Vector_56" />
          <path d={svgPaths.p7c12280} fill="var(--fill-0, #FAFAFA)" id="Vector_57" />
          <path d={svgPaths.p5252f80} fill="var(--fill-0, #FAFAFA)" id="Vector_58" />
          <path d={svgPaths.p31bc23f2} fill="var(--fill-0, #FAFAFA)" id="Vector_59" />
          <path d={svgPaths.p2a83c400} fill="var(--fill-0, #FAFAFA)" id="Vector_60" />
          <path d={svgPaths.p48aa300} fill="var(--fill-0, #FAFAFA)" id="Vector_61" />
          <path d={svgPaths.p1866be80} fill="var(--fill-0, #FAFAFA)" id="Vector_62" />
          <path d={svgPaths.p2c7f7d60} fill="var(--fill-0, #FAFAFA)" id="Vector_63" />
          <path d={svgPaths.p2b807e00} fill="var(--fill-0, #FAFAFA)" id="Vector_64" />
          <path d={svgPaths.pab3df20} fill="var(--fill-0, #FAFAFA)" id="Vector_65" />
          <path d={svgPaths.p23a3480} fill="var(--fill-0, #FAFAFA)" id="Vector_66" />
          <path d={svgPaths.p38e27d00} fill="var(--fill-0, #FAFAFA)" id="Vector_67" />
          <path d={svgPaths.pbc1b280} fill="var(--fill-0, #FAFAFA)" id="Vector_68" />
          <path d={svgPaths.p2dfdfc00} fill="var(--fill-0, #FAFAFA)" id="Vector_69" />
          <path d={svgPaths.pc489280} fill="var(--fill-0, #FAFAFA)" id="Vector_70" />
          <path d={svgPaths.p93ab380} fill="var(--fill-0, #EBEBEB)" id="Vector_71" />
        </g>
      </svg>
    </div>
  );
}

function Earth() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[27.02px] mt-0 place-items-start relative row-1" data-name="Earth">
      <World />
      <Lines />
    </div>
  );
}

function Pins() {
  return (
    <div className="col-1 h-[43.106px] ml-0 mt-0 relative row-1 w-[60.873px]" data-name="Pins">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 60.873 43.1063">
        <g id="Pins">
          <path d={svgPaths.p3e2e7d80} fill="var(--fill-0, #595BD4)" id="Pin" />
          <path d={svgPaths.p1612fe80} fill="var(--fill-0, #595BD4)" id="pin" />
          <path d={svgPaths.p316c4380} fill="var(--fill-0, #595BD4)" id="pin_2" />
          <path d={svgPaths.p27a1c00} fill="var(--fill-0, #595BD4)" id="pin_3" />
          <path d={svgPaths.p3ef0e6f0} fill="var(--fill-0, #595BD4)" id="pin_4" />
          <path d={svgPaths.p3534f880} fill="var(--fill-0, #595BD4)" id="pin_5" />
          <path d={svgPaths.p6bb43c0} fill="var(--fill-0, #595BD4)" id="pin_6" />
          <path d={svgPaths.p3768fd80} fill="var(--fill-0, #595BD4)" id="pin_7" />
        </g>
      </svg>
    </div>
  );
}

function Locators() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[36.97px] mt-[19.35px] place-items-start relative row-1" data-name="Locators">
      <Pins />
    </div>
  );
}

function PaperPlane() {
  return (
    <div className="col-1 h-[28.349px] ml-0 mt-0 relative row-1 w-[28.263px]" data-name="paper-plane">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28.2626 28.3492">
        <g id="paper-plane">
          <path d={svgPaths.p35b56800} fill="var(--fill-0, #595BD4)" id="Vector" />
          <path d={svgPaths.p39a92790} fill="var(--fill-0, #595BD4)" id="Vector_2" />
          <path d={svgPaths.p289db580} fill="var(--fill-0, #595BD4)" id="Vector_3" />
          <path d={svgPaths.p289db580} fill="var(--fill-0, black)" id="Vector_4" opacity="0.2" />
          <path d={svgPaths.p31a52280} fill="var(--fill-0, #E0E0E0)" id="Vector_5" />
        </g>
      </svg>
    </div>
  );
}

function PaperPlane2() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[87.74px] mt-[4.52px] place-items-start relative row-1" data-name="paper-plane-2">
      <PaperPlane />
    </div>
  );
}

function PaperPlane3() {
  return (
    <div className="col-1 h-[34.614px] ml-0 mt-0 relative row-1 w-[26.505px]" data-name="paper-plane">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26.5052 34.614">
        <g id="paper-plane">
          <path d={svgPaths.p13fdd100} fill="var(--fill-0, #595BD4)" id="Vector" />
          <path d={svgPaths.p8232400} fill="var(--fill-0, #595BD4)" id="Vector_2" />
          <path d={svgPaths.p7a04e00} fill="var(--fill-0, #595BD4)" id="Vector_3" />
          <path d={svgPaths.p7a04e00} fill="var(--fill-0, black)" id="Vector_4" opacity="0.2" />
          <path d={svgPaths.pee40380} fill="var(--fill-0, #595BD4)" id="Vector_5" />
          <path d={svgPaths.p16991d00} fill="var(--fill-0, black)" id="Vector_6" opacity="0.2" />
          <path d={svgPaths.p324c0c00} fill="var(--fill-0, #E0E0E0)" id="Vector_7" />
          <path d={svgPaths.p15058880} fill="var(--fill-0, #E0E0E0)" id="Vector_8" />
        </g>
      </svg>
    </div>
  );
}

function PaperPlanes() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1" data-name="paper-planes">
      <PaperPlane3 />
    </div>
  );
}

function PaperPlane1() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[20.49px] mt-[40.42px] place-items-start relative row-1" data-name="paper-plane-1">
      <PaperPlanes />
    </div>
  );
}

function SpeechBubble() {
  return (
    <div className="col-1 h-[9.939px] ml-[98.83px] mt-[35.65px] relative row-1 w-[15.537px]" data-name="speech-bubble">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.5365 9.93857">
        <g id="speech-bubble">
          <path d={svgPaths.p6855480} fill="var(--fill-0, #F0F0F0)" id="Vector" />
          <path d={svgPaths.p39e4be80} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={svgPaths.p214e1a00} fill="var(--fill-0, white)" id="Vector_3" />
          <path d={svgPaths.p3f764f00} fill="var(--fill-0, white)" id="Vector_4" />
          <path d={svgPaths.p23a45a00} fill="var(--fill-0, white)" id="Vector_5" />
          <path d={svgPaths.p36b67e00} fill="var(--fill-0, white)" id="Vector_6" />
        </g>
      </svg>
    </div>
  );
}

function SpeechBubble1() {
  return (
    <div className="col-1 h-[9.933px] ml-0 mt-[24.7px] relative row-1 w-[15.537px]" data-name="speech-bubble">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.5365 9.93258">
        <g id="speech-bubble">
          <path d={svgPaths.p36f5ae80} fill="var(--fill-0, #F0F0F0)" id="Vector" />
          <path d={svgPaths.p271ad800} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={svgPaths.p41d2d80} fill="var(--fill-0, white)" id="Vector_3" />
          <path d={svgPaths.p1794a580} fill="var(--fill-0, white)" id="Vector_4" />
          <path d={svgPaths.p35859b00} fill="var(--fill-0, white)" id="Vector_5" />
        </g>
      </svg>
    </div>
  );
}

function SpeechBubble2() {
  return (
    <div className="col-1 h-[8.642px] ml-[5.65px] mt-[59.04px] relative row-1 w-[15.537px]" data-name="speech-bubble">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.5365 8.64236">
        <g id="speech-bubble">
          <path d={svgPaths.p6e600} fill="var(--fill-0, #F0F0F0)" id="Vector" />
          <path d={svgPaths.p3042b100} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={svgPaths.p7fdc00} fill="var(--fill-0, white)" id="Vector_3" />
          <path d={svgPaths.pc27dc00} fill="var(--fill-0, white)" id="Vector_4" />
          <path d={svgPaths.p33648200} fill="var(--fill-0, white)" id="Vector_5" />
          <path d={svgPaths.p1da41e70} fill="var(--fill-0, white)" id="Vector_6" />
        </g>
      </svg>
    </div>
  );
}

function SpeechBubble3() {
  return (
    <div className="col-1 h-[9.927px] ml-[86.34px] mt-0 relative row-1 w-[27.16px]" data-name="speech-bubble">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27.1604 9.9266">
        <g id="speech-bubble">
          <path d={svgPaths.p2a1bd680} fill="var(--fill-0, #F0F0F0)" id="Vector" />
          <path d={svgPaths.p219b0d00} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={svgPaths.p21418e00} fill="var(--fill-0, white)" id="Vector_3" />
          <path d={svgPaths.p8b4a930} fill="var(--fill-0, white)" id="Vector_4" />
          <path d={svgPaths.p327c5100} fill="var(--fill-0, white)" id="Vector_5" />
          <path d={svgPaths.pdf74b00} fill="var(--fill-0, white)" id="Vector_6" />
        </g>
      </svg>
    </div>
  );
}

function SpeechBubbles1() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[13.1px] mt-[2.5px] place-items-start relative row-1" data-name="speech-bubbles-2">
      <SpeechBubble />
      <SpeechBubble1 />
      <SpeechBubble2 />
      <SpeechBubble3 />
    </div>
  );
}

function SpeechBubble4() {
  return (
    <div className="col-1 h-[11.854px] ml-0 mt-0 relative row-1 w-[21.829px]" data-name="speech-bubble">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.8289 11.8544">
        <g id="speech-bubble">
          <path d={svgPaths.p15a9a580} fill="var(--fill-0, #FAFAFA)" id="Vector" />
          <path d={svgPaths.p1a47c080} fill="var(--fill-0, #455A64)" id="Vector_2" />
          <path d={svgPaths.p3cdc1570} fill="var(--fill-0, #595BD4)" id="Vector_3" />
          <path d={svgPaths.p39790500} fill="var(--fill-0, #595BD4)" id="Vector_4" />
          <path d={svgPaths.p3f76300} fill="var(--fill-0, #595BD4)" id="Vector_5" />
          <path d={svgPaths.p43d8600} fill="var(--fill-0, #595BD4)" id="Vector_6" />
          <path d={svgPaths.p54f3900} fill="var(--fill-0, #595BD4)" id="Vector_7" />
        </g>
      </svg>
    </div>
  );
}

function SpeechBubble5() {
  return (
    <div className="col-1 h-[12.663px] ml-[82.89px] mt-[61.38px] relative row-1 w-[19.835px]" data-name="speech-bubble">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.8352 12.6627">
        <g id="speech-bubble">
          <path d={svgPaths.p3f727080} fill="var(--fill-0, #FAFAFA)" id="Vector" />
          <path d={svgPaths.p351eb600} fill="var(--fill-0, #455A64)" id="Vector_2" />
          <path d={svgPaths.p1fb41480} fill="var(--fill-0, #595BD4)" id="Vector_3" />
          <path d={svgPaths.p2004fa80} fill="var(--fill-0, #595BD4)" id="Vector_4" />
        </g>
      </svg>
    </div>
  );
}

function SpeechBubbles() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[18.79px] mt-[2.3px] place-items-start relative row-1" data-name="speech-bubbles-1">
      <SpeechBubble4 />
      <SpeechBubble5 />
    </div>
  );
}

function Bottom1() {
  return (
    <div className="col-1 h-[46.349px] ml-0 mt-0 relative row-1 w-[20.444px]" data-name="bottom">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.444 46.3492">
        <g id="bottom">
          <path d={svgPaths.p39d72f00} fill="var(--fill-0, #263238)" id="Vector" />
          <path d={svgPaths.p6e5980} fill="var(--fill-0, #263238)" id="Vector_2" />
          <path d={svgPaths.p204636b0} fill="var(--fill-0, #B16668)" id="Vector_3" />
          <path d={svgPaths.pc2f3100} fill="var(--fill-0, #37474F)" id="Vector_4" />
          <path d={svgPaths.p19e22f40} fill="var(--fill-0, #263238)" id="Vector_5" />
          <path d={svgPaths.p1aac4e00} fill="var(--fill-0, #B16668)" id="Vector_6" />
          <path d={svgPaths.p3c5e4600} fill="var(--fill-0, #37474F)" id="Vector_7" />
          <path d={svgPaths.p3d2c8c00} fill="var(--fill-0, #37474F)" id="Vector_8" />
          <path d={svgPaths.pbad200} fill="var(--fill-0, #263238)" id="Vector_9" />
        </g>
      </svg>
    </div>
  );
}

function Bottom() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[4.93px] mt-[25.77px] place-items-start relative row-1" data-name="Bottom">
      <Bottom1 />
    </div>
  );
}

function Top() {
  return (
    <div className="col-1 h-[34.349px] ml-0 mt-0 relative row-1 w-[29.06px]" data-name="Top">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29.0602 34.3485">
        <g id="Top">
          <path d={svgPaths.p2f9e5200} fill="var(--fill-0, #B16668)" id="Vector" />
          <path d={svgPaths.p34cdb880} fill="var(--fill-0, #9A4A4D)" id="Vector_2" />
          <path d={svgPaths.p39027670} fill="var(--fill-0, #F0F0F0)" id="Vector_3" />
          <path d={svgPaths.p3fca5400} fill="var(--fill-0, #595BD4)" id="Vector_4" />
          <path d={svgPaths.p3ce62080} fill="var(--fill-0, black)" id="Vector_5" opacity="0.15" />
          <path d={svgPaths.peee7a00} fill="var(--fill-0, #FAFAFA)" id="Chest" />
          <path d={svgPaths.pcc25f00} fill="var(--fill-0, #595BD4)" id="Vector_6" />
          <path d={svgPaths.pcc25f00} fill="var(--fill-0, black)" id="Vector_7" opacity="0.3" />
          <path d={svgPaths.p30994680} fill="var(--fill-0, black)" id="Vector_8" opacity="0.2" />
          <path d={svgPaths.p1d13b880} fill="var(--fill-0, #595BD4)" id="Vector_9" />
          <path d={svgPaths.p1d13b880} fill="var(--fill-0, black)" id="Vector_10" opacity="0.3" />
          <path d={svgPaths.p26db3c00} fill="var(--fill-0, black)" id="Vector_11" opacity="0.2" />
          <g id="Arm">
            <path d={svgPaths.p2855ba80} fill="var(--fill-0, #9A4A4D)" id="Vector_12" />
            <path d={svgPaths.pd12d6f0} fill="var(--fill-0, #B16668)" id="Vector_13" />
            <path d={svgPaths.pdd05280} fill="var(--fill-0, #AF6152)" id="Vector_14" />
            <path d={svgPaths.p1c4ca040} fill="var(--fill-0, #F0F0F0)" id="Vector_15" />
            <path d={svgPaths.pebe1170} fill="var(--fill-0, #595BD4)" id="Vector_16" />
            <path d={svgPaths.p370b80f0} fill="var(--fill-0, black)" id="Vector_17" opacity="0.15" />
          </g>
          <path d={svgPaths.p392b4780} fill="var(--fill-0, #263238)" id="Hair" />
          <path d={svgPaths.p33bf4a00} fill="var(--fill-0, #263238)" id="Vector_18" />
          <g id="Head">
            <path d={svgPaths.p28d99000} fill="var(--fill-0, #B16668)" id="Vector_19" />
            <path d={svgPaths.p9375080} fill="var(--fill-0, #9A4A4D)" id="Vector_20" />
            <path d={svgPaths.p210c4f00} fill="var(--fill-0, #FFA8A7)" id="Vector_21" />
            <path d={svgPaths.p2415b300} fill="var(--fill-0, #263238)" id="Vector_22" />
            <path d={svgPaths.p502b700} fill="var(--fill-0, #263238)" id="Vector_23" />
            <path d={svgPaths.p3ec6ce00} fill="var(--fill-0, #263238)" id="Vector_24" />
            <path d={svgPaths.p37250700} fill="var(--fill-0, #263238)" id="Vector_25" />
            <path d={svgPaths.pbf4ba00} fill="var(--fill-0, #9A4A4D)" id="Vector_26" />
            <path d={svgPaths.p15dbab00} fill="var(--fill-0, #9A4A4D)" id="Vector_27" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Character() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1" data-name="Character">
      <Bottom />
      <Top />
    </div>
  );
}

function Character4() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[107.9px] mt-[46.27px] place-items-start relative row-1" data-name="character-4">
      <Character />
    </div>
  );
}

function Bottom2() {
  return (
    <div className="col-1 h-[43.001px] ml-[11.91px] mt-[25.34px] relative row-1 w-[21.428px]" data-name="bottom">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.4283 43.0014">
        <g id="bottom">
          <path d={svgPaths.pd3f7d00} fill="var(--fill-0, black)" id="Vector" />
          <path d={svgPaths.p90e2d00} fill="var(--fill-0, #263238)" id="Vector_2" />
          <path d={svgPaths.pd3d5c0} fill="var(--fill-0, #37474F)" id="Vector_3" />
          <path d={svgPaths.p38a01280} fill="var(--fill-0, black)" id="Vector_4" opacity="0.15" />
          <path d={svgPaths.p1f9351f0} fill="var(--fill-0, black)" id="Vector_5" opacity="0.15" />
          <path d={svgPaths.p222a87b0} fill="var(--fill-0, black)" id="Vector_6" opacity="0.15" />
          <path d={svgPaths.p12049d00} fill="var(--fill-0, black)" id="Vector_7" opacity="0.15" />
          <path d={svgPaths.p2e08f600} fill="var(--fill-0, black)" id="Vector_8" opacity="0.15" />
          <path d={svgPaths.p106dbe80} fill="var(--fill-0, black)" id="Vector_9" opacity="0.15" />
          <path d={svgPaths.p12353f90} fill="var(--fill-0, #263238)" id="Vector_10" />
          <path d={svgPaths.p3d355500} fill="var(--fill-0, #263238)" id="Vector_11" />
          <path d={svgPaths.p1d2f0ec0} fill="var(--fill-0, #263238)" id="Vector_12" />
          <path d={svgPaths.p1d6dc870} fill="var(--fill-0, #263238)" id="Vector_13" />
          <path d={svgPaths.p34e97370} fill="var(--fill-0, #263238)" id="Vector_14" />
          <path d={svgPaths.p2711de00} fill="var(--fill-0, #263238)" id="Vector_15" />
          <path d={svgPaths.p34fbd70} fill="var(--fill-0, #37474F)" id="Vector_16" />
          <path d={svgPaths.p3c1f4580} fill="var(--fill-0, black)" id="Vector_17" opacity="0.15" />
          <path d={svgPaths.p3743bb80} fill="var(--fill-0, black)" id="Vector_18" opacity="0.15" />
          <path d={svgPaths.p17ef1b80} fill="var(--fill-0, black)" id="Vector_19" opacity="0.15" />
          <path d={svgPaths.p32e27770} fill="var(--fill-0, black)" id="Vector_20" opacity="0.15" />
          <path d={svgPaths.p2c01f380} fill="var(--fill-0, black)" id="Vector_21" opacity="0.15" />
          <path d={svgPaths.pe8ab472} fill="var(--fill-0, black)" id="Vector_22" opacity="0.15" />
          <path d={svgPaths.p2177eb80} fill="var(--fill-0, black)" id="Vector_23" opacity="0.15" />
          <path d={svgPaths.p2a04be80} fill="var(--fill-0, black)" id="Vector_24" opacity="0.15" />
          <path d={svgPaths.p3a5c7000} fill="var(--fill-0, black)" id="Vector_25" opacity="0.15" />
          <path d={svgPaths.p28134180} fill="var(--fill-0, #263238)" id="Vector_26" />
          <path d={svgPaths.p2a150800} fill="var(--fill-0, #263238)" id="Vector_27" />
          <path d={svgPaths.p2c937080} fill="var(--fill-0, #263238)" id="Vector_28" />
          <path d={svgPaths.pd8b3130} fill="var(--fill-0, #263238)" id="Vector_29" />
          <path d={svgPaths.p36df6600} fill="var(--fill-0, #263238)" id="Vector_30" />
          <path d={svgPaths.p88dd800} fill="var(--fill-0, black)" id="Vector_31" />
          <path d={svgPaths.p16bdd300} fill="var(--fill-0, black)" id="Vector_32" />
          <path d={svgPaths.p1ce2f300} fill="var(--fill-0, black)" id="Vector_33" />
        </g>
      </svg>
    </div>
  );
}

function Arm() {
  return (
    <div className="col-1 h-[14.91px] ml-[0.77px] mt-[11.29px] relative row-1 w-[19.064px]" data-name="arm">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.0637 14.9105">
        <g id="arm">
          <path d={svgPaths.p3dd42840} fill="var(--fill-0, #FFA8A7)" id="Vector" />
          <path d={svgPaths.p2cd93c0} fill="var(--fill-0, #37474F)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Chest() {
  return (
    <div className="col-1 h-[19.805px] ml-0 mt-0 relative row-1 w-[13.517px]" data-name="chest">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.517 19.8045">
        <g id="chest">
          <path d={svgPaths.pa150c80} fill="var(--fill-0, #455A64)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Top2() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[16.55px] mt-[10.24px] place-items-start relative row-1" data-name="top">
      <Chest />
    </div>
  );
}

function Head() {
  return (
    <div className="col-1 h-[13.683px] ml-[18.91px] mt-0 relative row-1 w-[8.777px]" data-name="head">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.77718 13.6827">
        <g id="head">
          <path d={svgPaths.p23f30880} fill="var(--fill-0, #263238)" id="Vector" />
          <path d={svgPaths.p221db780} fill="var(--fill-0, #FFA8A7)" id="Vector_2" />
          <path d={svgPaths.p1c51a200} fill="var(--fill-0, #F28F8F)" id="Vector_3" />
          <path d={svgPaths.p2ce3d900} fill="var(--fill-0, #F28F8F)" id="Vector_4" />
          <path d={svgPaths.p32359e00} fill="var(--fill-0, #263238)" id="Vector_5" />
          <path d={svgPaths.p23e59480} fill="var(--fill-0, #263238)" id="Vector_6" />
          <path d={svgPaths.p257e3000} fill="var(--fill-0, #263238)" id="Vector_7" />
          <path d={svgPaths.pc72d280} fill="var(--fill-0, #B16668)" id="Vector_8" />
          <path d={svgPaths.p3cca6200} fill="var(--fill-0, #F28F8F)" id="Vector_9" />
          <path d={svgPaths.p3e6caf40} fill="var(--fill-0, #263238)" id="Vector_10" />
        </g>
      </svg>
    </div>
  );
}

function Tie() {
  return (
    <div className="col-1 h-[4.815px] ml-[20.23px] mt-[9.49px] relative row-1 w-[6.586px]" data-name="Tie">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.58596 4.81497">
        <g id="Tie">
          <path d={svgPaths.p266c0b80} fill="var(--fill-0, #37474F)" id="Vector" />
          <path d={svgPaths.p2252fc00} fill="var(--fill-0, #37474F)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Box() {
  return (
    <div className="col-1 h-[21.398px] ml-0 mt-[12.26px] relative row-1 w-[19.066px]" data-name="Box">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.066 21.3977">
        <g id="Box">
          <g id="box">
            <g id="back-box">
              <path d={svgPaths.pd7ab680} fill="var(--fill-0, black)" id="Vector" />
              <path d={svgPaths.p2d5d5c00} fill="var(--fill-0, #37474F)" id="Vector_2" />
              <path d={svgPaths.p18e97480} fill="var(--fill-0, #263238)" id="Vector_3" />
            </g>
            <g id="front-box">
              <path d={svgPaths.p19f9c80} fill="var(--fill-0, #263238)" id="Vector_4" />
              <path d={svgPaths.p30611e00} fill="var(--fill-0, #37474F)" id="Vector_5" />
              <path d={svgPaths.p11052c00} fill="var(--fill-0, #455A64)" id="Vector_6" />
            </g>
            <path d={svgPaths.p10e83d00} fill="var(--fill-0, #E0E0E0)" id="Vector_7" />
            <path d={svgPaths.p25eae1f0} fill="var(--fill-0, #E0E0E0)" id="Vector_8" />
            <path d={svgPaths.p29ad1c00} fill="var(--fill-0, #E0E0E0)" id="Vector_9" />
            <path d={svgPaths.p235cc440} fill="var(--fill-0, #E0E0E0)" id="Vector_10" />
            <path d={svgPaths.p37bd9e40} fill="var(--fill-0, #E0E0E0)" id="Vector_11" />
            <path d={svgPaths.p13d79180} fill="var(--fill-0, #E0E0E0)" id="Vector_12" />
            <path d={svgPaths.pe0f6e00} fill="var(--fill-0, #E0E0E0)" id="Vector_13" />
            <path d={svgPaths.p7d8d090} fill="var(--fill-0, #E0E0E0)" id="Vector_14" />
            <path d={svgPaths.p17daf300} fill="var(--fill-0, #E0E0E0)" id="Vector_15" />
            <path d={svgPaths.p1222f700} fill="var(--fill-0, #FAFAFA)" id="Vector_16" />
            <path d={svgPaths.p2e405e00} fill="var(--fill-0, #455A64)" id="Vector_17" />
            <path d={svgPaths.p7654700} fill="var(--fill-0, #455A64)" id="Vector_18" />
            <path d={svgPaths.p35f81100} fill="var(--fill-0, #455A64)" id="Vector_19" />
            <path d={svgPaths.p28352af0} fill="var(--fill-0, #455A64)" id="Vector_20" />
            <path d={svgPaths.pa3d4e80} fill="var(--fill-0, #455A64)" id="Vector_21" />
            <path d={svgPaths.p2bf8c71} fill="var(--fill-0, #455A64)" id="Vector_22" />
            <path d={svgPaths.p308e1c00} fill="var(--fill-0, #455A64)" id="Vector_23" />
            <path d={svgPaths.p246f7400} fill="var(--fill-0, #455A64)" id="Vector_24" />
            <path d={svgPaths.p3eb62080} fill="var(--fill-0, #455A64)" id="Vector_25" />
            <path d={svgPaths.p346b5980} fill="var(--fill-0, #455A64)" id="Vector_26" />
            <path d={svgPaths.p11ceff00} fill="var(--fill-0, #455A64)" id="Vector_27" />
            <path d={svgPaths.p1809b200} fill="var(--fill-0, #455A64)" id="Vector_28" />
            <path d={svgPaths.p3f9b8b00} fill="var(--fill-0, #455A64)" id="Vector_29" />
            <path d={svgPaths.p33bf7980} fill="var(--fill-0, #455A64)" id="Vector_30" />
          </g>
          <path d={svgPaths.p1a7d9d00} fill="var(--fill-0, #455A64)" id="Vector_31" />
          <path d={svgPaths.p3847b580} fill="var(--fill-0, white)" id="Vector_32" opacity="0.1" />
          <path d={svgPaths.p788d500} fill="var(--fill-0, #595BD4)" id="Vector_33" />
          <path d={svgPaths.p127e0e00} fill="var(--fill-0, #595BD4)" id="Vector_34" />
          <path d={svgPaths.p127e0e00} fill="var(--fill-0, black)" id="Vector_35" opacity="0.25" />
        </g>
      </svg>
    </div>
  );
}

function Top1() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1" data-name="top">
      <Arm />
      <Top2 />
      <Head />
      <Tie />
      <div className="col-1 h-[13.151px] ml-[28.17px] mt-[11.55px] relative row-1 w-[7.125px]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.12484 13.1506">
          <path d={svgPaths.p23fd3180} fill="var(--fill-0, #37474F)" id="Vector" />
        </svg>
      </div>
      <div className="col-1 h-[2.586px] ml-[30.53px] mt-[20.33px] relative row-1 w-[3.928px]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.92753 2.58642">
          <path d={svgPaths.p3b7acc80} fill="var(--fill-0, #263238)" id="Vector" />
        </svg>
      </div>
      <div className="col-1 h-[4.733px] ml-[28.82px] mt-[20.62px] relative row-1 w-[6.366px]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.36587 4.73316">
          <path d={svgPaths.p399a800} fill="var(--fill-0, #FFA8A7)" id="Vector" />
        </svg>
      </div>
      <div className="col-1 h-[7.467px] ml-[26.71px] mt-[19.64px] relative row-1 w-[6.668px]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.66798 7.46679">
          <path d={svgPaths.p10e24000} fill="var(--fill-0, #FFA8A7)" id="Vector" />
        </svg>
      </div>
      <div className="col-1 h-[6.242px] ml-[30.98px] mt-[19.69px] relative row-1 w-[2.416px]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.41647 6.24154">
          <path d={svgPaths.p13a40100} fill="var(--fill-0, #F28F8F)" id="Vector" />
        </svg>
      </div>
      <div className="col-1 h-[0.433px] ml-[29.37px] mt-[21.77px] relative row-1 w-[1.272px]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.27226 0.433226">
          <path d={svgPaths.p3fb62c00} fill="var(--fill-0, #F28F8F)" id="Vector" />
        </svg>
      </div>
      <div className="col-1 h-[1.884px] ml-[26.71px] mt-[23.55px] relative row-1 w-[1.82px]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.82008 1.88417">
          <path d={svgPaths.p1bd23180} fill="var(--fill-0, #F28F8F)" id="Vector" />
        </svg>
      </div>
      <Box />
    </div>
  );
}

function Chartacter() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1" data-name="Chartacter">
      <Bottom2 />
      <Top1 />
    </div>
  );
}

function Character3() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[66.24px] mt-[38.03px] place-items-start relative row-1" data-name="character-3">
      <Chartacter />
    </div>
  );
}

function Bottom3() {
  return (
    <div className="col-1 h-[43.686px] ml-[1.92px] mt-[25.46px] relative row-1 w-[21.857px]" data-name="bottom">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.8566 43.6865">
        <g id="bottom">
          <path d={svgPaths.p22f5d840} fill="var(--fill-0, #C8856A)" id="Vector" />
          <path d={svgPaths.p12c27200} fill="var(--fill-0, black)" id="Vector_2" />
          <path d={svgPaths.p14593bd0} fill="var(--fill-0, #263238)" id="Vector_3" />
          <path d={svgPaths.p1b7bc980} fill="var(--fill-0, #FAFAFA)" id="Vector_4" />
          <path d={svgPaths.p75bbca0} fill="var(--fill-0, #F0F0F0)" id="Vector_5" />
          <path d={svgPaths.p2e42c00} fill="var(--fill-0, #F0F0F0)" id="Vector_6" />
          <path d={svgPaths.p32e53f00} fill="var(--fill-0, #F0F0F0)" id="Vector_7" />
          <path d={svgPaths.p33918f00} fill="var(--fill-0, #F0F0F0)" id="Vector_8" />
          <path d={svgPaths.p3fff0700} fill="var(--fill-0, #C8856A)" id="Vector_9" />
          <path d={svgPaths.p3fa70700} fill="var(--fill-0, black)" id="Vector_10" />
          <path d={svgPaths.pf8e8180} fill="var(--fill-0, #263238)" id="Vector_11" />
          <path d={svgPaths.p3bfe9480} fill="var(--fill-0, #FAFAFA)" id="Vector_12" />
          <path d={svgPaths.p1bc90000} fill="var(--fill-0, #F0F0F0)" id="Vector_13" />
          <path d={svgPaths.p12eb8380} fill="var(--fill-0, #F0F0F0)" id="Vector_14" />
          <path d={svgPaths.pafd0c00} fill="var(--fill-0, #F0F0F0)" id="Vector_15" />
          <path d={svgPaths.p275b7300} fill="var(--fill-0, #EBEBEB)" id="Vector_16" />
          <path d={svgPaths.p1984200} fill="var(--fill-0, #37474F)" id="Vector_17" />
          <path d={svgPaths.p3ac6d500} fill="var(--fill-0, #263238)" id="Vector_18" />
        </g>
      </svg>
    </div>
  );
}

function Top3() {
  return (
    <div className="col-1 h-[38.545px] ml-0 mt-0 relative row-1 w-[33.691px]" data-name="top">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33.6914 38.5448">
        <g id="top">
          <g id="arm">
            <path d={svgPaths.p101e8b00} fill="var(--fill-0, #C8856A)" id="Vector" />
            <path d={svgPaths.p3ddfdaf0} fill="var(--fill-0, #AF6152)" id="Vector_2" />
          </g>
          <path d={svgPaths.p3b1c1a00} fill="var(--fill-0, #E0E0E0)" id="Vector_3" />
          <g id="chest">
            <g id="head">
              <path d={svgPaths.p18363600} fill="var(--fill-0, #263238)" id="Vector_4" />
              <path d={svgPaths.p18184f80} fill="var(--fill-0, #C8856A)" id="Vector_5" />
              <path d={svgPaths.p3218a100} fill="var(--fill-0, #263238)" id="Vector_6" />
              <path d={svgPaths.p10c9d5f0} fill="var(--fill-0, #263238)" id="Vector_7" />
              <path d={svgPaths.p3312a600} fill="var(--fill-0, #263238)" id="Vector_8" />
              <path d={svgPaths.p9db8e00} fill="var(--fill-0, #263238)" id="Vector_9" />
              <path d={svgPaths.pd829600} fill="var(--fill-0, #AF6152)" id="Vector_10" />
              <path d={svgPaths.p178a1f80} fill="var(--fill-0, #263238)" id="Vector_11" />
              <path d={svgPaths.p1f2be580} fill="var(--fill-0, #C8856A)" id="Vector_12" />
              <path d={svgPaths.p62b5af0} fill="var(--fill-0, #AF6152)" id="Vector_13" />
              <path d={svgPaths.p137d1300} fill="var(--fill-0, #FFA8A7)" id="Vector_14" />
            </g>
            <path d={svgPaths.p2b989d00} fill="var(--fill-0, #F0F0F0)" id="Vector_15" />
            <path d={svgPaths.p189100c0} fill="var(--fill-0, #455A64)" id="Vector_16" />
          </g>
          <g id="arm_2">
            <path d={svgPaths.p4df3300} fill="var(--fill-0, #C8856A)" id="Vector_17" />
            <path d={svgPaths.p13647cb0} fill="var(--fill-0, #AF6152)" id="Vector_18" />
            <path d={svgPaths.p867bc0} fill="var(--fill-0, #AF6152)" id="Vector_19" />
            <path d={svgPaths.p26002380} fill="var(--fill-0, #AF6152)" id="Vector_20" />
          </g>
          <path d={svgPaths.p111f90} fill="var(--fill-0, #E0E0E0)" id="Vector_21" />
        </g>
      </svg>
    </div>
  );
}

function Character1() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1" data-name="character">
      <Bottom3 />
      <Top3 />
    </div>
  );
}

function Character2() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[36.41px] mt-[37.42px] place-items-start relative row-1" data-name="character-2">
      <Character1 />
    </div>
  );
}

function Bottom4() {
  return (
    <div className="col-1 h-[43.221px] ml-0 mt-[23.62px] relative row-1 w-[18.564px]" data-name="bottom">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.5641 43.2214">
        <g id="bottom">
          <path d={svgPaths.p3260c2f0} fill="var(--fill-0, #37474F)" id="Vector" />
          <path d={svgPaths.p27b58000} fill="var(--fill-0, #FFBDA7)" id="Vector_2" />
          <path d={svgPaths.p26b04900} fill="var(--fill-0, #FFBDA7)" id="Vector_3" />
          <path d={svgPaths.p1e733d00} fill="var(--fill-0, #263238)" id="Vector_4" />
          <path d={svgPaths.p2f114a00} fill="var(--fill-0, #37474F)" id="Vector_5" />
          <path d={svgPaths.p10e53f00} fill="var(--fill-0, #595BD4)" id="Vector_6" />
          <g id="Group" opacity="0.5">
            <path d={svgPaths.p36fad800} fill="var(--fill-0, white)" id="Vector_7" />
          </g>
          <path d={svgPaths.p1b342071} fill="var(--fill-0, #595BD4)" id="Vector_8" />
          <g id="Group_2" opacity="0.2">
            <path d={svgPaths.p3c36df80} fill="var(--fill-0, white)" id="Vector_9" />
          </g>
          <path d={svgPaths.p32362900} fill="var(--fill-0, #595BD4)" id="Vector_10" />
          <g id="Group_3" opacity="0.2">
            <path d={svgPaths.p32362900} fill="var(--fill-0, white)" id="Vector_11" />
          </g>
          <g id="Group_4" opacity="0.5">
            <path d={svgPaths.p21463c80} fill="var(--fill-0, #595BD4)" id="Vector_12" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Arm1() {
  return (
    <div className="col-1 h-[11.169px] ml-[11.04px] mt-[11.62px] relative row-1 w-[11.37px]" data-name="arm">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.3702 11.1691">
        <g id="arm">
          <path d={svgPaths.p17aee500} fill="var(--fill-0, #FFBDA7)" id="Vector" />
          <path d={svgPaths.p8248880} fill="var(--fill-0, #595BD4)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Chest1() {
  return (
    <div className="col-1 h-[28.837px] ml-[1.43px] mt-0 relative row-1 w-[13.564px]" data-name="chest">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.5638 28.8367">
        <g id="chest">
          <path d={svgPaths.p13ce5f80} fill="var(--fill-0, #595BD4)" id="Vector" />
          <path d={svgPaths.p13ce5f80} fill="var(--fill-0, black)" id="Vector_2" opacity="0.15" />
          <path d={svgPaths.p2bd87280} fill="var(--fill-0, black)" id="Vector_3" opacity="0.2" />
          <path d={svgPaths.p5ecb380} fill="var(--fill-0, black)" id="Vector_4" opacity="0.2" />
          <path d={svgPaths.p2973f200} fill="var(--fill-0, #263238)" id="Vector_5" />
          <path d={svgPaths.p4479f80} fill="var(--fill-0, #263238)" id="Vector_6" />
          <path d={svgPaths.p3c2c7200} fill="var(--fill-0, #FFBDA7)" id="Vector_7" />
          <path d={svgPaths.p1c33a480} fill="var(--fill-0, #F0997A)" id="Vector_8" />
          <path d={svgPaths.p2919c400} fill="var(--fill-0, #F0997A)" id="Vector_9" />
          <path d={svgPaths.p29a09200} fill="var(--fill-0, #B16668)" id="Vector_10" />
          <path d={svgPaths.p13ed2690} fill="var(--fill-0, #F28F8F)" id="Vector_11" />
          <path d={svgPaths.p163fb900} fill="var(--fill-0, #263238)" id="Vector_12" />
          <path d={svgPaths.p17508a00} fill="var(--fill-0, #263238)" id="Vector_13" />
          <path d={svgPaths.p679ce40} fill="var(--fill-0, #263238)" id="Vector_14" />
          <path d={svgPaths.p327ae100} fill="var(--fill-0, #263238)" id="Vector_15" />
          <path d={svgPaths.p21e48300} fill="var(--fill-0, #263238)" id="Vector_16" />
          <path d={svgPaths.p18392900} fill="var(--fill-0, #263238)" id="Vector_17" />
          <path d={svgPaths.p2c0daf80} fill="var(--fill-0, #595BD4)" id="Vector_18" />
          <path d={svgPaths.p2c0daf80} fill="var(--fill-0, black)" id="Vector_19" opacity="0.3" />
          <path d={svgPaths.p27a34580} fill="var(--fill-0, #595BD4)" id="Vector_20" />
          <path d={svgPaths.p27a34580} fill="var(--fill-0, black)" id="Vector_21" opacity="0.3" />
        </g>
      </svg>
    </div>
  );
}

function Arms() {
  return (
    <div className="col-1 h-[19.503px] ml-0 mt-[11.81px] relative row-1 w-[24.357px]" data-name="Arms">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24.3567 19.5031">
        <g id="Arms">
          <path d={svgPaths.p1976ea80} fill="var(--fill-0, #FFBDA7)" id="Vector" />
          <g id="pin">
            <path d={svgPaths.p34e6df00} fill="var(--fill-0, #263238)" id="Vector_2" />
            <path d={svgPaths.p38172f00} fill="var(--fill-0, black)" id="Vector_3" opacity="0.2" />
            <path d={svgPaths.p17f1cb00} fill="var(--fill-0, #37474F)" id="Vector_4" />
            <path d={svgPaths.pe16ba00} fill="var(--fill-0, #455A64)" id="Vector_5" />
            <g id="Group" opacity="0.1">
              <path d={svgPaths.p6c0e370} fill="var(--fill-0, #FAFAFA)" id="Vector_6" />
            </g>
          </g>
          <path d={svgPaths.pb8b6a00} fill="var(--fill-0, #FFBDA7)" id="Vector_7" />
          <path d={svgPaths.p2f5e7880} fill="var(--fill-0, #595BD4)" id="Vector_8" />
          <path d={svgPaths.p11441800} fill="var(--fill-0, #FFBDA7)" id="Vector_9" />
        </g>
      </svg>
    </div>
  );
}

function Top4() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[1.15px] mt-0 place-items-start relative row-1" data-name="top">
      <Arm1 />
      <Chest1 />
      <Arms />
    </div>
  );
}

function Character6() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1" data-name="character">
      <Bottom4 />
      <Top4 />
    </div>
  );
}

function Character5() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[5.7px] mt-[51.74px] place-items-start relative row-1" data-name="character-1">
      <Character6 />
    </div>
  );
}

function GlobalizationAmico() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1" data-name="globalization/amico">
      <Floor />
      <Shadows />
      <Earth />
      <Locators />
      <PaperPlane2 />
      <PaperPlane1 />
      <SpeechBubbles1 />
      <SpeechBubbles />
      <Character4 />
      <Character3 />
      <Character2 />
      <Character5 />
    </div>
  );
}

function Group1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <GlobalizationAmico />
    </div>
  );
}

function Frame1() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start leading-[normal] not-italic relative shrink-0 text-[#252525] w-full">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[20px] w-full">Global Opportunities</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[16px] w-full">Work across Singapore, Japan, and India with relocation support.</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col items-start relative rounded-bl-[24px] rounded-br-[24px] shrink-0 w-[360px]">
      <Frame1 />
    </div>
  );
}

function Frame188() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full">
      <Frame3 />
    </div>
  );
}

function Frame187() {
  return (
    <div className="bg-white relative rounded-[16px] shrink-0 w-[360px]">
      <div className="content-stretch flex flex-col gap-[16px] items-start overflow-clip p-[16px] relative rounded-[inherit] size-full">
        <Group1 />
        <Frame188 />
      </div>
      <div aria-hidden className="absolute border-[#e0e0e0] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_0px_12px_1px_rgba(159,159,159,0.15)]" />
    </div>
  );
}

function BackgroundComplete() {
  return (
    <div className="col-1 h-[129.812px] ml-[4.48px] mt-0 relative row-1 w-[135.432px]" data-name="background-complete">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 135.431 129.812">
        <g id="background-complete">
          <path d={svgPaths.p3b7fb500} fill="var(--fill-0, #EBEBEB)" id="Vector" />
          <path d={svgPaths.p2fd6d400} fill="var(--fill-0, #EBEBEB)" id="Vector_2" />
          <path d={svgPaths.p51b1200} fill="var(--fill-0, #EBEBEB)" id="Vector_3" />
          <path d={svgPaths.p31cfb400} fill="var(--fill-0, #E0E0E0)" id="Vector_4" />
          <path d={svgPaths.pc3840} fill="var(--fill-0, #E0E0E0)" id="Vector_5" />
          <path d={svgPaths.p210acb00} fill="var(--fill-0, #E0E0E0)" id="Vector_6" />
          <path d={svgPaths.pd0d2b80} fill="var(--fill-0, #E0E0E0)" id="Vector_7" />
          <path d={svgPaths.p105b580} fill="var(--fill-0, #E0E0E0)" id="Vector_8" />
          <path d={svgPaths.p1e087680} fill="var(--fill-0, #EBEBEB)" id="Vector_9" />
          <path d={svgPaths.p26ab8500} fill="var(--fill-0, #E0E0E0)" id="Vector_10" />
          <path d={svgPaths.p26439600} fill="var(--fill-0, #F5F5F5)" id="Vector_11" />
          <path d={svgPaths.p3d651880} fill="var(--fill-0, #F5F5F5)" id="Vector_12" />
          <path d={svgPaths.p10506d80} fill="var(--fill-0, #F5F5F5)" id="Vector_13" />
          <path d={svgPaths.p24f0ab80} fill="var(--fill-0, #E0E0E0)" id="Vector_14" />
          <path d={svgPaths.p3f9a4100} fill="var(--fill-0, #FAFAFA)" id="Vector_15" />
          <path d={svgPaths.pe341980} fill="var(--fill-0, #E0E0E0)" id="Vector_16" />
          <path d={svgPaths.p3f318f00} fill="var(--fill-0, #FAFAFA)" id="Vector_17" />
          <path d={svgPaths.p1961a500} fill="var(--fill-0, #E0E0E0)" id="Vector_18" />
          <path d={svgPaths.p7755380} fill="var(--fill-0, #E0E0E0)" id="Vector_19" />
          <path d={svgPaths.p539cc80} fill="var(--fill-0, #E0E0E0)" id="Vector_20" />
          <path d={svgPaths.p3196f400} fill="var(--fill-0, #E0E0E0)" id="Vector_21" />
          <path d={svgPaths.p35e12580} fill="var(--fill-0, #E0E0E0)" id="Vector_22" />
          <path d={svgPaths.p3cd65600} fill="var(--fill-0, #EBEBEB)" id="Vector_23" />
          <path d={svgPaths.pbc8a800} fill="var(--fill-0, #E0E0E0)" id="Vector_24" />
          <path d={svgPaths.p39f13600} fill="var(--fill-0, #FAFAFA)" id="Vector_25" />
          <path d={svgPaths.p29330600} fill="var(--fill-0, #E0E0E0)" id="Vector_26" />
          <path d={svgPaths.p381c31f0} fill="var(--fill-0, #FAFAFA)" id="Vector_27" />
          <path d={svgPaths.p2d5a4c00} fill="var(--fill-0, #E0E0E0)" id="Vector_28" />
          <path d={svgPaths.p2bf12300} fill="var(--fill-0, #E0E0E0)" id="Vector_29" />
          <path d={svgPaths.p330717c0} fill="var(--fill-0, #E0E0E0)" id="Vector_30" />
          <path d={svgPaths.p1fbd05c0} fill="var(--fill-0, #E0E0E0)" id="Vector_31" />
          <path d={svgPaths.p6542240} fill="var(--fill-0, #E0E0E0)" id="Vector_32" />
          <path d={svgPaths.p640e6f0} fill="var(--fill-0, #EBEBEB)" id="Vector_33" />
          <path d={svgPaths.p3587b180} fill="var(--fill-0, #E0E0E0)" id="Vector_34" />
          <path d={svgPaths.p28558700} fill="var(--fill-0, #E0E0E0)" id="Vector_35" />
          <path d={svgPaths.ped31280} fill="var(--fill-0, #E0E0E0)" id="Vector_36" />
          <path d={svgPaths.p2b74d100} fill="var(--fill-0, #E0E0E0)" id="Vector_37" />
          <path d={svgPaths.p28620500} fill="var(--fill-0, #E0E0E0)" id="Vector_38" />
          <path d={svgPaths.p35d46d00} fill="var(--fill-0, #EBEBEB)" id="Vector_39" />
          <path d={svgPaths.p3c811680} fill="var(--fill-0, #F5F5F5)" id="Vector_40" />
          <path d={svgPaths.p9cc9000} fill="var(--fill-0, #E0E0E0)" id="Vector_41" />
          <path d={svgPaths.pc0d9e00} fill="var(--fill-0, #EBEBEB)" id="Vector_42" />
          <path d={svgPaths.p13c72d00} fill="var(--fill-0, #FAFAFA)" id="Vector_43" />
          <path d={svgPaths.pa482300} fill="var(--fill-0, #EBEBEB)" id="Vector_44" />
          <path d={svgPaths.p1dada240} fill="var(--fill-0, #E0E0E0)" id="Vector_45" />
        </g>
      </svg>
    </div>
  );
}

function BackgroundSimple() {
  return (
    <div className="col-1 h-[100.959px] ml-[14.34px] mt-[11.12px] relative row-1 w-[116.962px]" data-name="background-simple">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="background-simple" opacity="0">
          <path d={svgPaths.p2ff67a00} fill="var(--fill-0, #F5F5F5)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Elements() {
  return (
    <div className="col-1 h-[82.544px] ml-[11.06px] mt-[7.89px] relative row-1 w-[116.251px]" data-name="Elements">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 116.251 82.5443">
        <g id="Elements">
          <path d={svgPaths.p37850000} fill="var(--fill-0, #455A64)" id="Vector" />
          <path d={svgPaths.p2f340f00} fill="var(--fill-0, #455A64)" id="Vector_2" />
          <path d={svgPaths.p293fe200} fill="var(--fill-0, #455A64)" id="Vector_3" />
          <path d={svgPaths.p12bada80} fill="var(--fill-0, #455A64)" id="Vector_4" />
          <path d={svgPaths.p1f6c3e80} fill="var(--fill-0, #455A64)" id="Vector_5" />
          <path d={svgPaths.p325a1780} fill="var(--fill-0, #455A64)" id="Vector_6" />
          <path d={svgPaths.p253ca340} fill="var(--fill-0, #455A64)" id="Vector_7" />
          <path d={svgPaths.p3a487a80} fill="var(--fill-0, #455A64)" id="Vector_8" />
          <path d={svgPaths.p1da5b500} fill="var(--fill-0, #455A64)" id="Vector_9" />
          <path d={svgPaths.p7478b00} fill="var(--fill-0, #455A64)" id="Vector_10" />
          <path d={svgPaths.pb5c1500} fill="var(--fill-0, #455A64)" id="Vector_11" />
          <path d={svgPaths.p2cd66c00} fill="var(--fill-0, #455A64)" id="Vector_12" />
          <path d={svgPaths.p2b582b80} fill="var(--fill-0, #455A64)" id="Vector_13" />
          <path d={svgPaths.p392a0000} fill="var(--fill-0, #455A64)" id="Vector_14" />
          <path d={svgPaths.p3b496280} fill="var(--fill-0, #455A64)" id="Vector_15" />
          <path d={svgPaths.p33706500} fill="var(--fill-0, #455A64)" id="Vector_16" />
          <path d={svgPaths.p80f8780} fill="var(--fill-0, #455A64)" id="Vector_17" />
          <path d={svgPaths.p1092ab00} fill="var(--fill-0, #455A64)" id="Vector_18" />
          <path d={svgPaths.p3be06300} fill="var(--fill-0, #595BD4)" id="Vector_19" />
          <path d={svgPaths.p1d419e00} fill="var(--fill-0, #595BD4)" id="Vector_20" />
          <path d={svgPaths.p3c0cf400} fill="var(--fill-0, #595BD4)" id="Vector_21" />
          <path d={svgPaths.p3234d600} fill="var(--fill-0, #595BD4)" id="Vector_22" />
          <path d={svgPaths.p3ef78500} fill="var(--fill-0, #595BD4)" id="Vector_23" />
          <path d={svgPaths.p115d5200} fill="var(--fill-0, #595BD4)" id="Vector_24" />
          <path d={svgPaths.p6bd38f0} fill="var(--fill-0, #595BD4)" id="Vector_25" />
          <g id="Group" opacity="0.3">
            <path d={svgPaths.p2c1b6300} fill="var(--fill-0, white)" id="Vector_26" />
          </g>
          <g id="Group_2" opacity="0.3">
            <path d={svgPaths.p2a61c200} fill="var(--fill-0, white)" id="Vector_27" />
          </g>
          <path d={svgPaths.pb3396c0} fill="var(--fill-0, #595BD4)" id="Vector_28" />
          <g id="Group_3" opacity="0.3">
            <path d={svgPaths.p2d1a8a80} fill="var(--fill-0, black)" id="Vector_29" />
          </g>
          <g id="Group_4" opacity="0.3">
            <path d={svgPaths.pc817880} fill="var(--fill-0, white)" id="Vector_30" />
          </g>
          <path d={svgPaths.p133caa80} fill="var(--fill-0, #595BD4)" id="Vector_31" />
          <g id="Group_5" opacity="0.4">
            <path d={svgPaths.p2f0cae00} fill="var(--fill-0, black)" id="Vector_32" />
          </g>
          <g id="Group_6" opacity="0.4">
            <path d={svgPaths.p3d4dad80} fill="var(--fill-0, black)" id="Vector_33" />
          </g>
          <g id="Group_7" opacity="0.4">
            <path d={svgPaths.p3ce55680} fill="var(--fill-0, black)" id="Vector_34" />
          </g>
          <path d={svgPaths.p34f76b00} fill="var(--fill-0, #263238)" id="Vector_35" />
          <path d={svgPaths.pe554600} fill="var(--fill-0, #263238)" id="Vector_36" />
          <path d={svgPaths.p366d5c00} fill="var(--fill-0, #263238)" id="Vector_37" />
          <path d={svgPaths.p29c97000} fill="var(--fill-0, #263238)" id="Vector_38" />
          <path d={svgPaths.p201d3500} fill="var(--fill-0, #263238)" id="Vector_39" />
          <path d={svgPaths.p2c7afa40} fill="var(--fill-0, #263238)" id="Vector_40" />
          <path d={svgPaths.p10cbc100} fill="var(--fill-0, #263238)" id="Vector_41" />
          <path d={svgPaths.p5c6a480} fill="var(--fill-0, #263238)" id="Vector_42" />
          <path d={svgPaths.p2bcdd400} fill="var(--fill-0, #263238)" id="Vector_43" />
          <path d={svgPaths.p1b2f1100} fill="var(--fill-0, #263238)" id="Vector_44" />
          <path d={svgPaths.p391ef100} fill="var(--fill-0, #263238)" id="Vector_45" />
          <path d={svgPaths.p3fcc7180} fill="var(--fill-0, #263238)" id="Vector_46" />
          <path d={svgPaths.p3344c900} fill="var(--fill-0, #263238)" id="Vector_47" />
          <path d={svgPaths.p388b3b80} fill="var(--fill-0, #263238)" id="Vector_48" />
          <path d={svgPaths.p249f1b00} fill="var(--fill-0, #263238)" id="Vector_49" />
          <path d={svgPaths.p7285000} fill="var(--fill-0, #263238)" id="Vector_50" />
          <path d={svgPaths.p348e1300} fill="var(--fill-0, #263238)" id="Vector_51" />
          <path d={svgPaths.pdbcf00} fill="var(--fill-0, #263238)" id="Vector_52" />
          <path d={svgPaths.p31e25e80} fill="var(--fill-0, #595BD4)" id="Vector_53" />
          <path d={svgPaths.p109c5080} fill="var(--fill-0, #263238)" id="Vector_54" />
          <path d={svgPaths.p24e3d880} fill="var(--fill-0, #263238)" id="Vector_55" />
          <path d={svgPaths.p26914600} fill="var(--fill-0, #263238)" id="Vector_56" />
          <path d={svgPaths.p3561de00} fill="var(--fill-0, #263238)" id="Vector_57" />
          <path d={svgPaths.p34492800} fill="var(--fill-0, #263238)" id="Vector_58" />
          <path d={svgPaths.p3bf95680} fill="var(--fill-0, #263238)" id="Vector_59" />
          <path d={svgPaths.p19535300} fill="var(--fill-0, #263238)" id="Vector_60" />
          <path d={svgPaths.p3409f980} fill="var(--fill-0, #263238)" id="Vector_61" />
          <path d={svgPaths.p883c900} fill="var(--fill-0, #263238)" id="Vector_62" />
          <path d={svgPaths.p34a83180} fill="var(--fill-0, #263238)" id="Vector_63" />
          <path d={svgPaths.p1d25c880} fill="var(--fill-0, #263238)" id="Vector_64" />
          <path d={svgPaths.p2a858b00} fill="var(--fill-0, #263238)" id="Vector_65" />
          <path d={svgPaths.p15b02800} fill="var(--fill-0, #263238)" id="Vector_66" />
          <path d={svgPaths.p138e540} fill="var(--fill-0, #263238)" id="Vector_67" />
          <path d={svgPaths.p28dcf780} fill="var(--fill-0, #263238)" id="Vector_68" />
          <path d={svgPaths.p2804a130} fill="var(--fill-0, #263238)" id="Vector_69" />
          <path d={svgPaths.p413ac70} fill="var(--fill-0, #595BD4)" id="Vector_70" />
          <path d={svgPaths.pa7dd600} fill="var(--fill-0, #595BD4)" id="Vector_71" />
          <path d={svgPaths.p341bc00} fill="var(--fill-0, #595BD4)" id="Vector_72" />
          <path d={svgPaths.p232a5480} fill="var(--fill-0, #595BD4)" id="Vector_73" />
          <path d={svgPaths.p32005300} fill="var(--fill-0, #595BD4)" id="Vector_74" />
          <path d={svgPaths.p1e77a620} fill="var(--fill-0, #595BD4)" id="Vector_75" />
          <path d={svgPaths.p2122d580} fill="var(--fill-0, #595BD4)" id="Vector_76" />
          <path d={svgPaths.p24a49f00} fill="var(--fill-0, #595BD4)" id="Vector_77" />
          <path d={svgPaths.p5129dc0} fill="var(--fill-0, #595BD4)" id="Vector_78" />
          <path d={svgPaths.p2fbb780} fill="var(--fill-0, #595BD4)" id="Vector_79" />
          <path d={svgPaths.p3de0db80} fill="var(--fill-0, #595BD4)" id="Vector_80" />
          <path d={svgPaths.p3a9fed80} fill="var(--fill-0, #595BD4)" id="Vector_81" />
          <path d={svgPaths.p1343baf0} fill="var(--fill-0, #595BD4)" id="Vector_82" />
          <path d={svgPaths.p25e16f00} fill="var(--fill-0, #595BD4)" id="Vector_83" />
          <path d={svgPaths.p24837a00} fill="var(--fill-0, #595BD4)" id="Vector_84" />
          <path d={svgPaths.p1965400} fill="var(--fill-0, #595BD4)" id="Vector_85" />
          <path d={svgPaths.p25e0590} fill="var(--fill-0, #595BD4)" id="Vector_86" />
          <path d={svgPaths.p15c56000} fill="var(--fill-0, #595BD4)" id="Vector_87" />
          <path d={svgPaths.pacb5780} fill="var(--fill-0, #595BD4)" id="Vector_88" />
          <path d={svgPaths.p1e940800} fill="var(--fill-0, #595BD4)" id="Vector_89" />
          <path d={svgPaths.pc1df280} fill="var(--fill-0, #595BD4)" id="Vector_90" />
          <path d={svgPaths.p33ba3580} fill="var(--fill-0, #595BD4)" id="Vector_91" />
          <path d={svgPaths.p262c4900} fill="var(--fill-0, #595BD4)" id="Vector_92" />
          <path d={svgPaths.p502a980} fill="var(--fill-0, #595BD4)" id="Vector_93" />
          <path d={svgPaths.p32e59b00} fill="var(--fill-0, #595BD4)" id="Vector_94" />
          <path d={svgPaths.p1074a500} fill="var(--fill-0, #595BD4)" id="Vector_95" />
          <path d={svgPaths.p1e886b00} fill="var(--fill-0, #595BD4)" id="Vector_96" />
          <path d={svgPaths.p2dd18f2} fill="var(--fill-0, #595BD4)" id="Vector_97" />
          <path d={svgPaths.pe64ef00} fill="var(--fill-0, #263238)" id="Vector_98" />
          <path d={svgPaths.p1e0f6900} fill="var(--fill-0, #263238)" id="Vector_99" />
          <path d={svgPaths.p22e2e280} fill="var(--fill-0, #263238)" id="Vector_100" />
          <path d={svgPaths.pd4ce800} fill="var(--fill-0, #263238)" id="Vector_101" />
          <path d={svgPaths.p2c1a8580} fill="var(--fill-0, #263238)" id="Vector_102" />
          <path d={svgPaths.p37988c00} fill="var(--fill-0, #263238)" id="Vector_103" />
          <path d={svgPaths.p1be07680} fill="var(--fill-0, #263238)" id="Vector_104" />
          <path d={svgPaths.p33a4f500} fill="var(--fill-0, #263238)" id="Vector_105" />
        </g>
      </svg>
    </div>
  );
}

function Character7() {
  return (
    <div className="col-1 h-[98.296px] ml-[31.07px] mt-[31.7px] relative row-1 w-[98.941px]" data-name="Character">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 98.9418 98.296">
        <g id="Character">
          <path d={svgPaths.p128ac100} fill="var(--fill-0, #FFBE9D)" id="Vector" />
          <path d={svgPaths.p3683d980} fill="var(--fill-0, #595BD4)" id="Vector_2" />
          <path d={svgPaths.pc231700} fill="var(--fill-0, #595BD4)" id="Vector_3" />
          <path d={svgPaths.p3135ea80} fill="var(--fill-0, #595BD4)" id="Vector_4" />
          <path d={svgPaths.p3ca7ec00} fill="var(--fill-0, #263238)" id="Vector_5" />
          <path d={svgPaths.p20ae9240} fill="var(--fill-0, #263238)" id="Vector_6" />
          <path d={svgPaths.p117c9300} fill="var(--fill-0, #263238)" id="Vector_7" />
          <path d={svgPaths.p2d2dc900} fill="var(--fill-0, #263238)" id="Vector_8" />
          <path d={svgPaths.p14a80c00} fill="var(--fill-0, #263238)" id="Vector_9" />
          <g id="Group" opacity="0.3">
            <path d={svgPaths.p4846200} fill="var(--fill-0, black)" id="Vector_10" />
          </g>
          <g id="Group_2" opacity="0.3">
            <path d={svgPaths.p28064b00} fill="var(--fill-0, black)" id="Vector_11" />
          </g>
          <path d={svgPaths.pa8e9f00} fill="var(--fill-0, #263238)" id="Vector_12" />
          <path d={svgPaths.p30a1e080} fill="var(--fill-0, #263238)" id="Vector_13" />
          <path d={svgPaths.p1c1d3e00} fill="var(--fill-0, #263238)" id="Vector_14" />
          <path d={svgPaths.p1ede5080} fill="var(--fill-0, #FFBE9D)" id="Vector_15" />
          <path d={svgPaths.p207b000} fill="var(--fill-0, #263238)" id="Vector_16" />
          <path d={svgPaths.p39a2fa80} fill="var(--fill-0, #263238)" id="Vector_17" />
          <path d={svgPaths.p3d923d80} fill="var(--fill-0, #263238)" id="Vector_18" />
          <path d={svgPaths.p10579d00} fill="var(--fill-0, #EB996E)" id="Vector_19" />
          <path d={svgPaths.p25931f60} fill="var(--fill-0, #EB996E)" id="Vector_20" />
          <path d={svgPaths.p9bda000} fill="var(--fill-0, #263238)" id="Vector_21" />
          <path d={svgPaths.p340c1080} fill="var(--fill-0, #263238)" id="Vector_22" />
          <path d={svgPaths.p3ffc6900} fill="var(--fill-0, #263238)" id="Vector_23" />
          <path d={svgPaths.p2d408600} fill="var(--fill-0, #263238)" id="Vector_24" />
          <path d={svgPaths.p135c4980} fill="var(--fill-0, #263238)" id="Vector_25" />
          <path d={svgPaths.p2753bc40} fill="var(--fill-0, #455A64)" id="Vector_26" />
          <path d={svgPaths.pbe70800} fill="var(--fill-0, #263238)" id="Vector_27" />
          <path d={svgPaths.p36167e00} fill="var(--fill-0, #263238)" id="Vector_28" />
          <path d={svgPaths.p4a54900} fill="var(--fill-0, #263238)" id="Vector_29" />
          <path d={svgPaths.p8eaf400} fill="var(--fill-0, #FFBE9D)" id="Vector_30" />
          <path d={svgPaths.p1fe3da00} fill="var(--fill-0, #EB996E)" id="Vector_31" />
          <path d={svgPaths.p264f0000} fill="var(--fill-0, #455A64)" id="Vector_32" />
          <path d={svgPaths.p37f36500} fill="var(--fill-0, #455A64)" id="Vector_33" />
          <path d={svgPaths.p3044cd80} fill="var(--fill-0, #455A64)" id="Vector_34" />
          <path d={svgPaths.p2a7e3200} fill="var(--fill-0, #455A64)" id="Vector_35" />
          <path d={svgPaths.p20f7f800} fill="var(--fill-0, white)" id="Vector_36" />
          <path d={svgPaths.p2cc5de80} fill="var(--fill-0, white)" id="Vector_37" />
          <path d={svgPaths.pff7ef00} fill="var(--fill-0, white)" id="Vector_38" />
          <path d={svgPaths.p2d65fc00} fill="var(--fill-0, #E0E0E0)" id="Vector_39" />
          <path d={svgPaths.p1b832e00} fill="var(--fill-0, #E0E0E0)" id="Vector_40" />
          <path d={svgPaths.p3e4ff900} fill="var(--fill-0, #FFBE9D)" id="Vector_41" />
          <path d={svgPaths.p31641500} fill="var(--fill-0, #EB996E)" id="Vector_42" />
          <path d={svgPaths.p3f078180} fill="var(--fill-0, #EB996E)" id="Vector_43" />
          <path d={svgPaths.p35f8d900} fill="var(--fill-0, #EB996E)" id="Vector_44" />
          <path d={svgPaths.p2601ee80} fill="var(--fill-0, #EB996E)" id="Vector_45" />
          <path d={svgPaths.p1d022d80} fill="var(--fill-0, #EB996E)" id="Vector_46" />
          <path d={svgPaths.ped3600} fill="var(--fill-0, #EB996E)" id="Vector_47" />
          <path d={svgPaths.p3e382380} fill="var(--fill-0, #EB996E)" id="Vector_48" />
          <path d={svgPaths.pc21f980} fill="var(--fill-0, #EB996E)" id="Vector_49" />
          <path d={svgPaths.paa36600} fill="var(--fill-0, #F5F5F5)" id="Vector_50" />
          <path d={svgPaths.p387bb130} fill="var(--fill-0, #455A64)" id="Vector_51" />
          <path d={svgPaths.p3a19de00} fill="var(--fill-0, #263238)" id="Vector_52" />
          <path d={svgPaths.p30a6da00} fill="var(--fill-0, #E0E0E0)" id="Vector_53" />
          <path d={svgPaths.p1edb5272} fill="var(--fill-0, #E0E0E0)" id="Vector_54" />
          <path d={svgPaths.p2b8ded80} fill="var(--fill-0, #263238)" id="Vector_55" />
          <path d={svgPaths.p3f8f0100} fill="var(--fill-0, #263238)" id="Vector_56" />
          <path d={svgPaths.p280f9480} fill="var(--fill-0, #263238)" id="Vector_57" />
          <path d={svgPaths.p367298c0} fill="var(--fill-0, #FFBE9D)" id="Vector_58" />
          <path d={svgPaths.p19b4bd00} fill="var(--fill-0, #EB996E)" id="Vector_59" />
          <path d={svgPaths.p23c77a00} fill="var(--fill-0, #EB996E)" id="Vector_60" />
          <path d={svgPaths.p3d3d8e00} fill="var(--fill-0, #EB996E)" id="Vector_61" />
          <path d={svgPaths.p2e40ac00} fill="var(--fill-0, #EB996E)" id="Vector_62" />
          <path d={svgPaths.p3ca9b280} fill="var(--fill-0, #EB996E)" id="Vector_63" />
          <path d={svgPaths.p22635e00} fill="var(--fill-0, #EB996E)" id="Vector_64" />
          <path d={svgPaths.p37e23a80} fill="var(--fill-0, #EB996E)" id="Vector_65" />
          <path d={svgPaths.pcc45f00} fill="var(--fill-0, #EB996E)" id="Vector_66" />
        </g>
      </svg>
    </div>
  );
}

function Desk() {
  return (
    <div className="col-1 h-[0.165px] ml-0 mt-[129.32px] relative row-1 w-[143.261px]" data-name="Desk">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 143.261 0.165424">
        <g id="Desk">
          <path d={svgPaths.p8425a00} fill="var(--fill-0, #263238)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Device() {
  return (
    <div className="col-1 h-[35.553px] ml-[4.07px] mt-[93.92px] relative row-1 w-[68.139px]" data-name="Device">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 68.1395 35.5533">
        <g id="Device">
          <path d={svgPaths.p2fccf00} fill="var(--fill-0, #E0E0E0)" id="Vector" />
          <path d={svgPaths.p18f6700} fill="var(--fill-0, #263238)" id="Vector_2" />
          <path d={svgPaths.p23196c00} fill="var(--fill-0, white)" id="Vector_3" />
          <path d={svgPaths.p18c1e480} fill="var(--fill-0, #263238)" id="Vector_4" />
        </g>
      </svg>
    </div>
  );
}

function LearningPana() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="learning/pana">
      <BackgroundComplete />
      <BackgroundSimple />
      <Elements />
      <Character7 />
      <Desk />
      <Device />
    </div>
  );
}

function Frame2() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start leading-[normal] not-italic relative shrink-0 text-[#252525] w-full">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[20px] w-full">{`Learning & Development`}</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[16px] w-full">Learning budget, conferences, certifications, and skill development.</p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col items-start relative rounded-bl-[24px] rounded-br-[24px] shrink-0 w-[360px]">
      <Frame2 />
    </div>
  );
}

function Frame190() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full">
      <Frame4 />
    </div>
  );
}

function Frame189() {
  return (
    <div className="bg-white relative rounded-[16px] shrink-0 w-[360px]">
      <div className="content-stretch flex flex-col gap-[16px] items-start overflow-clip p-[16px] relative rounded-[inherit] size-full">
        <LearningPana />
        <Frame190 />
      </div>
      <div aria-hidden className="absolute border-[#e0e0e0] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_0px_12px_1px_rgba(159,159,159,0.15)]" />
    </div>
  );
}

function BackgroundComplete1() {
  return (
    <div className="col-1 h-[129.418px] ml-0 mt-0 relative row-1 w-[132.618px]" data-name="background-complete">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 132.617 129.418">
        <g id="background-complete">
          <path d={svgPaths.p2f28b680} fill="var(--fill-0, #EBEBEB)" id="Vector" />
          <path d={svgPaths.p7061500} fill="var(--fill-0, #FAFAFA)" id="Vector_2" />
          <path d={svgPaths.p3637700} fill="var(--fill-0, #FAFAFA)" id="Vector_3" />
          <path d={svgPaths.p18974800} fill="var(--fill-0, #FAFAFA)" id="Vector_4" />
          <path d={svgPaths.p1a579180} fill="var(--fill-0, #FAFAFA)" id="Vector_5" />
          <path d={svgPaths.p16e55c00} fill="var(--fill-0, #FAFAFA)" id="Vector_6" />
          <path d={svgPaths.p1aa3c400} fill="var(--fill-0, #FAFAFA)" id="Vector_7" />
          <path d={svgPaths.p1e6739f0} fill="var(--fill-0, #FAFAFA)" id="Vector_8" />
          <path d={svgPaths.pc570880} fill="var(--fill-0, #FAFAFA)" id="Vector_9" />
          <path d={svgPaths.p3b2b2d80} fill="var(--fill-0, #E0E0E0)" id="Vector_10" />
          <path d={svgPaths.p3b4e9400} fill="var(--fill-0, #E0E0E0)" id="Vector_11" />
          <path d={svgPaths.p1410b400} fill="var(--fill-0, #E0E0E0)" id="Vector_12" />
          <path d={svgPaths.p1b658300} fill="var(--fill-0, #E0E0E0)" id="Vector_13" />
          <path d={svgPaths.p298d1680} fill="var(--fill-0, #E0E0E0)" id="Vector_14" />
          <path d={svgPaths.p3ce42580} fill="var(--fill-0, #E0E0E0)" id="Vector_15" />
          <path d={svgPaths.pebd1100} fill="var(--fill-0, #E0E0E0)" id="Vector_16" />
          <path d={svgPaths.p18f18a00} fill="var(--fill-0, #E0E0E0)" id="Vector_17" />
          <path d={svgPaths.p2c0dd00} fill="var(--fill-0, #E0E0E0)" id="Vector_18" />
          <path d={svgPaths.p37f847a0} fill="var(--fill-0, #E0E0E0)" id="Vector_19" />
          <path d={svgPaths.p91a1c80} fill="var(--fill-0, #E0E0E0)" id="Vector_20" />
          <path d={svgPaths.peb8e100} fill="var(--fill-0, #E0E0E0)" id="Vector_21" />
          <path d={svgPaths.p2c9f4f00} fill="var(--fill-0, #F5F5F5)" id="Vector_22" />
          <path d={svgPaths.p83e1d80} fill="var(--fill-0, #E0E0E0)" id="Vector_23" />
          <path d={svgPaths.p1442f280} fill="var(--fill-0, #F5F5F5)" id="Vector_24" />
          <path d={svgPaths.p1df14300} fill="var(--fill-0, #E0E0E0)" id="Vector_25" />
          <path d={svgPaths.p986d680} fill="var(--fill-0, #E0E0E0)" id="Vector_26" />
          <path d={svgPaths.p20a09200} fill="var(--fill-0, #E0E0E0)" id="Vector_27" />
          <path d={svgPaths.p34704500} fill="var(--fill-0, #E0E0E0)" id="Vector_28" />
          <path d={svgPaths.p1c12af80} fill="var(--fill-0, #E0E0E0)" id="Vector_29" />
          <path d={svgPaths.p24c53600} fill="var(--fill-0, #E0E0E0)" id="Vector_30" />
          <path d={svgPaths.p155b6b00} fill="var(--fill-0, #E0E0E0)" id="Vector_31" />
          <path d={svgPaths.pd4b7400} fill="var(--fill-0, #E0E0E0)" id="Vector_32" />
          <path d={svgPaths.p45d0c80} fill="var(--fill-0, #EBEBEB)" id="Vector_33" />
          <path d={svgPaths.p696eb00} fill="var(--fill-0, #E0E0E0)" id="Vector_34" />
          <path d={svgPaths.p1bf0600} fill="var(--fill-0, #E0E0E0)" id="Vector_35" />
          <path d={svgPaths.p2bebe900} fill="var(--fill-0, #E0E0E0)" id="Vector_36" />
          <path d={svgPaths.p27773a00} fill="var(--fill-0, #E0E0E0)" id="Vector_37" />
          <path d={svgPaths.p196e5280} fill="var(--fill-0, #E0E0E0)" id="Vector_38" />
          <path d={svgPaths.p27b4be40} fill="var(--fill-0, white)" id="Vector_39" />
          <path d={svgPaths.pfe9e200} fill="var(--fill-0, white)" id="Vector_40" />
          <path d={svgPaths.p24ca0f80} fill="var(--fill-0, #EBEBEB)" id="Vector_41" />
          <path d={svgPaths.p7624980} fill="var(--fill-0, #FAFAFA)" id="Vector_42" />
          <path d={svgPaths.p3f928f00} fill="var(--fill-0, #E0E0E0)" id="Vector_43" />
          <path d={svgPaths.p21c33a80} fill="var(--fill-0, #E0E0E0)" id="Vector_44" />
          <path d={svgPaths.p364dc680} fill="var(--fill-0, #E0E0E0)" id="Vector_45" />
          <path d={svgPaths.p2fcb7a40} fill="var(--fill-0, #E0E0E0)" id="Vector_46" />
          <path d={svgPaths.p23a3c780} fill="var(--fill-0, #E0E0E0)" id="Vector_47" />
          <path d={svgPaths.p1d494f00} fill="var(--fill-0, #E0E0E0)" id="Vector_48" />
          <path d={svgPaths.pd430600} fill="var(--fill-0, #E0E0E0)" id="Vector_49" />
          <path d={svgPaths.p17f09b00} fill="var(--fill-0, #E0E0E0)" id="Vector_50" />
          <path d={svgPaths.pa00a100} fill="var(--fill-0, #E0E0E0)" id="Vector_51" />
          <path d={svgPaths.p20a3cb00} fill="var(--fill-0, #E0E0E0)" id="Vector_52" />
          <path d={svgPaths.p4913a00} fill="var(--fill-0, #E0E0E0)" id="Vector_53" />
          <path d={svgPaths.p359e9a40} fill="var(--fill-0, #E0E0E0)" id="Vector_54" />
          <path d={svgPaths.p2e4f4d80} fill="var(--fill-0, #E0E0E0)" id="Vector_55" />
          <path d={svgPaths.p2d0eac80} fill="var(--fill-0, #E0E0E0)" id="Vector_56" />
          <path d={svgPaths.p14684c0} fill="var(--fill-0, #F5F5F5)" id="Vector_57" />
          <path d={svgPaths.p24d12880} fill="var(--fill-0, #F5F5F5)" id="Vector_58" />
          <path d={svgPaths.p1a04c400} fill="var(--fill-0, #E0E0E0)" id="Vector_59" />
          <path d={svgPaths.p3f106700} fill="var(--fill-0, #E0E0E0)" id="Vector_60" />
          <path d={svgPaths.p24979780} fill="var(--fill-0, #F5F5F5)" id="Vector_61" />
          <path d={svgPaths.p2e50b500} fill="var(--fill-0, #E0E0E0)" id="Vector_62" />
        </g>
      </svg>
    </div>
  );
}

function BackgroundSimple1() {
  return (
    <div className="col-1 h-[91.586px] ml-[10.22px] mt-[8.96px] relative row-1 w-[107.458px]" data-name="background-simple">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="background-simple" opacity="0">
          <path d={svgPaths.p3e165140} fill="var(--fill-0, #EBEBEB)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Device1() {
  return (
    <div className="col-1 h-[107.541px] ml-[25.05px] mt-[22.31px] relative row-1 w-[74.937px]" data-name="Device">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 74.9367 107.541">
        <g id="Device">
          <path d={svgPaths.p828c3e0} fill="var(--fill-0, #263238)" id="Vector" />
          <path d={svgPaths.p312fd580} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={svgPaths.p381152c0} fill="var(--fill-0, #455A64)" id="Vector_3" />
          <path d={svgPaths.p35192700} fill="var(--fill-0, #455A64)" id="Vector_4" />
          <path d={svgPaths.p32ba9b00} fill="var(--fill-0, #595BD4)" id="Vector_5" />
          <path d={svgPaths.p2852fbf2} fill="var(--fill-0, white)" id="Vector_6" />
          <path d={svgPaths.p1f048500} fill="var(--fill-0, white)" id="Vector_7" />
          <path d={svgPaths.p12820080} fill="var(--fill-0, white)" id="Vector_8" />
          <path d={svgPaths.p34aeef00} fill="var(--fill-0, white)" id="Vector_9" />
          <path d={svgPaths.pd5bf100} fill="var(--fill-0, white)" id="Vector_10" />
          <path d={svgPaths.p2c805800} fill="var(--fill-0, white)" id="Vector_11" />
          <path d={svgPaths.p26c2b800} fill="var(--fill-0, white)" id="Vector_12" />
          <path d={svgPaths.p2d153180} fill="var(--fill-0, white)" id="Vector_13" />
          <path d={svgPaths.p2fd25080} fill="var(--fill-0, white)" id="Vector_14" />
          <path d={svgPaths.p32d39680} fill="var(--fill-0, #263238)" id="Vector_15" />
          <path d={svgPaths.p21f380c0} fill="var(--fill-0, #263238)" id="Vector_16" />
          <path d={svgPaths.p3cccb880} fill="var(--fill-0, #263238)" id="Vector_17" />
          <path d={svgPaths.pde36800} fill="var(--fill-0, #263238)" id="Vector_18" />
          <path d={svgPaths.p20727d00} fill="var(--fill-0, #263238)" id="Vector_19" />
          <path d={svgPaths.pc5b6e80} fill="var(--fill-0, #263238)" id="Vector_20" />
          <path d={svgPaths.pb2f5a00} fill="var(--fill-0, #263238)" id="Vector_21" />
          <path d={svgPaths.p28a94300} fill="var(--fill-0, #263238)" id="Vector_22" />
          <path d={svgPaths.p3574fa00} fill="var(--fill-0, #263238)" id="Vector_23" />
          <path d={svgPaths.pca2db00} fill="var(--fill-0, #263238)" id="Vector_24" />
          <path d={svgPaths.p2a277080} fill="var(--fill-0, #263238)" id="Vector_25" />
          <path d={svgPaths.p146f9800} fill="var(--fill-0, #263238)" id="Vector_26" />
          <path d={svgPaths.p7bea700} fill="var(--fill-0, #263238)" id="Vector_27" />
          <path d={svgPaths.p48bef00} fill="var(--fill-0, #263238)" id="Vector_28" />
          <path d={svgPaths.p35d88b80} fill="var(--fill-0, #263238)" id="Vector_29" />
          <path d={svgPaths.pdf38a00} fill="var(--fill-0, #263238)" id="Vector_30" />
          <path d={svgPaths.p26153500} fill="var(--fill-0, #263238)" id="Vector_31" />
          <path d={svgPaths.p185d9200} fill="var(--fill-0, #263238)" id="Vector_32" />
          <path d={svgPaths.p1d76c800} fill="var(--fill-0, #263238)" id="Vector_33" />
          <path d={svgPaths.p12dda200} fill="var(--fill-0, #263238)" id="Vector_34" />
          <path d={svgPaths.p833cc80} fill="var(--fill-0, #263238)" id="Vector_35" />
          <path d={svgPaths.p15047280} fill="var(--fill-0, #263238)" id="Vector_36" />
          <path d={svgPaths.p3ee67c00} fill="var(--fill-0, #595BD4)" id="Vector_37" />
          <path d={svgPaths.p968ee00} fill="var(--fill-0, white)" id="Vector_38" />
          <path d={svgPaths.p1e4a100} fill="var(--fill-0, white)" id="Vector_39" />
          <path d={svgPaths.p2eb57380} fill="var(--fill-0, white)" id="Vector_40" />
          <path d={svgPaths.p1027dc00} fill="var(--fill-0, white)" id="Vector_41" />
          <path d={svgPaths.p3311e5f0} fill="var(--fill-0, white)" id="Vector_42" />
          <path d={svgPaths.p34c05180} fill="var(--fill-0, white)" id="Vector_43" />
          <path d={svgPaths.p3f4102f0} fill="var(--fill-0, white)" id="Vector_44" />
          <path d={svgPaths.p39f14e00} fill="var(--fill-0, white)" id="Vector_45" />
          <path d={svgPaths.p3e7ae100} fill="var(--fill-0, white)" id="Vector_46" />
          <path d={svgPaths.p27fc2900} fill="var(--fill-0, white)" id="Vector_47" />
        </g>
      </svg>
    </div>
  );
}

function Floor1() {
  return (
    <div className="col-1 h-[0.153px] ml-[1.68px] mt-[129.59px] relative row-1 w-[128.284px]" data-name="Floor">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 128.284 0.152779">
        <g id="Floor">
          <path d={svgPaths.p1573f6c0} fill="var(--fill-0, #263238)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Character8() {
  return (
    <div className="col-1 h-[96.537px] ml-[97.4px] mt-[33.46px] relative row-1 w-[32.939px]" data-name="Character">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32.9401 96.5371">
        <g id="Character">
          <path d={svgPaths.p2fcf3080} fill="var(--fill-0, #595BD4)" id="Vector" />
          <g id="Group" opacity="0.6">
            <path d={svgPaths.p4f64280} fill="var(--fill-0, white)" id="Vector_2" />
          </g>
          <g id="Group_2" opacity="0.6">
            <path d={svgPaths.p3ff2df40} fill="var(--fill-0, white)" id="Vector_3" />
          </g>
          <path d={svgPaths.p3d381d00} fill="var(--fill-0, #263238)" id="Vector_4" />
          <path d={svgPaths.p2067f000} fill="var(--fill-0, #263238)" id="Vector_5" />
          <path d={svgPaths.p1151ac00} fill="var(--fill-0, #263238)" id="Vector_6" />
          <path d={svgPaths.p3dbd7100} fill="var(--fill-0, #263238)" id="Vector_7" />
          <g id="Group_3" opacity="0.3">
            <path d={svgPaths.p13d06900} fill="var(--fill-0, black)" id="Vector_8" />
          </g>
          <path d={svgPaths.p205bf300} fill="var(--fill-0, #263238)" id="Vector_9" />
          <path d={svgPaths.p16e6a900} fill="var(--fill-0, #263238)" id="Vector_10" />
          <path d={svgPaths.p52d5d80} fill="var(--fill-0, #263238)" id="Vector_11" />
          <path d={svgPaths.p3387b100} fill="var(--fill-0, #595BD4)" id="Vector_12" />
          <g id="Group_4" opacity="0.6">
            <path d={svgPaths.pa875d00} fill="var(--fill-0, white)" id="Vector_13" />
          </g>
          <g id="Group_5" opacity="0.6">
            <path d={svgPaths.p2b3a100} fill="var(--fill-0, white)" id="Vector_14" />
          </g>
          <path d={svgPaths.p24093c00} fill="var(--fill-0, #263238)" id="Vector_15" />
          <path d={svgPaths.p25ccc300} fill="var(--fill-0, #263238)" id="Vector_16" />
          <path d={svgPaths.p153e5600} fill="var(--fill-0, #263238)" id="Vector_17" />
          <path d={svgPaths.p345c5700} fill="var(--fill-0, #263238)" id="Vector_18" />
          <g id="Group_6" opacity="0.3">
            <path d={svgPaths.pf2cda00} fill="var(--fill-0, black)" id="Vector_19" />
          </g>
          <path d={svgPaths.p100aac00} fill="var(--fill-0, #263238)" id="Vector_20" />
          <path d={svgPaths.p25454500} fill="var(--fill-0, #263238)" id="Vector_21" />
          <path d={svgPaths.p74a6b80} fill="var(--fill-0, #263238)" id="Vector_22" />
          <path d={svgPaths.p11cf080} fill="var(--fill-0, #EBEBEB)" id="Vector_23" />
          <path d={svgPaths.p28f96b80} fill="var(--fill-0, #263238)" id="Vector_24" />
          <path d={svgPaths.pb6ce1f0} fill="var(--fill-0, #EBEBEB)" id="Vector_25" />
          <path d={svgPaths.p32c9f200} fill="var(--fill-0, #595BD4)" id="Vector_26" />
          <path d={svgPaths.p15446e00} fill="var(--fill-0, #EBEBEB)" id="Vector_27" />
          <path d={svgPaths.p1afc7180} fill="var(--fill-0, #EBEBEB)" id="Vector_28" />
          <path d={svgPaths.p2e59f00} fill="var(--fill-0, #595BD4)" id="Vector_29" />
          <path d={svgPaths.p2bd71e00} fill="var(--fill-0, #263238)" id="Vector_30" />
          <path d={svgPaths.pd8fb980} fill="var(--fill-0, #263238)" id="Vector_31" />
          <path d={svgPaths.p3b383180} fill="var(--fill-0, #263238)" id="Vector_32" />
          <path d={svgPaths.pd709558} fill="var(--fill-0, #E0E0E0)" id="Vector_33" />
          <path d={svgPaths.p4040800} fill="var(--fill-0, #263238)" id="Vector_34" />
          <path d={svgPaths.p10e33380} fill="var(--fill-0, #E0E0E0)" id="Vector_35" />
          <path d={svgPaths.pc0a7c00} fill="var(--fill-0, #263238)" id="Vector_36" />
          <path d={svgPaths.p384d6a00} fill="var(--fill-0, #E0E0E0)" id="Vector_37" />
          <path d={svgPaths.p18c46cf0} fill="var(--fill-0, #263238)" id="Vector_38" />
          <path d={svgPaths.p2e6dfb00} fill="var(--fill-0, #263238)" id="Vector_39" />
          <path d={svgPaths.p3f886c0} fill="var(--fill-0, #263238)" id="Vector_40" />
          <path d={svgPaths.p1fbdb000} fill="var(--fill-0, #263238)" id="Vector_41" />
          <path d={svgPaths.p38e48100} fill="var(--fill-0, #263238)" id="Vector_42" />
          <path d={svgPaths.p33b40ef0} fill="var(--fill-0, #263238)" id="Vector_43" />
          <path d={svgPaths.p26f497a0} fill="var(--fill-0, #EBEBEB)" id="Vector_44" />
          <path d={svgPaths.p33fed180} fill="var(--fill-0, #EBEBEB)" id="Vector_45" />
          <path d={svgPaths.p2a07bd00} fill="var(--fill-0, #263238)" id="Vector_46" />
          <path d={svgPaths.p1ac4100} fill="var(--fill-0, #263238)" id="Vector_47" />
          <path d={svgPaths.p3e805f00} fill="var(--fill-0, #263238)" id="Vector_48" />
          <path d={svgPaths.p1f2ec900} fill="var(--fill-0, #263238)" id="Vector_49" />
          <path d={svgPaths.p20af6e00} fill="var(--fill-0, #263238)" id="Vector_50" />
          <path d={svgPaths.p3dc1ae80} fill="var(--fill-0, #263238)" id="Vector_51" />
          <path d={svgPaths.p34eebe80} fill="var(--fill-0, #263238)" id="Vector_52" />
          <path d={svgPaths.p33f3c000} fill="var(--fill-0, #263238)" id="Vector_53" />
          <path d={svgPaths.p97dbf00} fill="var(--fill-0, #263238)" id="Vector_54" />
          <path d={svgPaths.p1902e680} fill="var(--fill-0, #263238)" id="Vector_55" />
          <path d={svgPaths.pe319900} fill="var(--fill-0, #263238)" id="Vector_56" />
          <path d={svgPaths.p22886080} fill="var(--fill-0, #263238)" id="Vector_57" />
          <path d={svgPaths.p1c4b4f80} fill="var(--fill-0, #263238)" id="Vector_58" />
          <path d={svgPaths.p20886df0} fill="var(--fill-0, #FFBE9D)" id="Vector_59" />
          <path d={svgPaths.p20ddea00} fill="var(--fill-0, #EB996E)" id="Vector_60" />
          <path d={svgPaths.p2a5b9a80} fill="var(--fill-0, #FFBE9D)" id="Vector_61" />
          <path d={svgPaths.p1504d200} fill="var(--fill-0, #EB996E)" id="Vector_62" />
          <path d={svgPaths.p2a3dea00} fill="var(--fill-0, #263238)" id="Vector_63" />
          <path d={svgPaths.p225eda80} fill="var(--fill-0, #263238)" id="Vector_64" />
          <path d={svgPaths.p17539c80} fill="var(--fill-0, #263238)" id="Vector_65" />
          <path d={svgPaths.p3de1d500} fill="var(--fill-0, #263238)" id="Vector_66" />
          <path d={svgPaths.p26e67980} fill="var(--fill-0, #263238)" id="Vector_67" />
          <path d={svgPaths.p319a8d80} fill="var(--fill-0, #263238)" id="Vector_68" />
          <path d={svgPaths.p2808b080} fill="var(--fill-0, #263238)" id="Vector_69" />
          <path d={svgPaths.p24089300} fill="var(--fill-0, #263238)" id="Vector_70" />
          <path d={svgPaths.p37c5d600} fill="var(--fill-0, #263238)" id="Vector_71" />
          <path d={svgPaths.p1ddd38c0} fill="var(--fill-0, #263238)" id="Vector_72" />
          <path d={svgPaths.pc97ac00} fill="var(--fill-0, #455A64)" id="Vector_73" />
          <path d={svgPaths.p1705d000} fill="var(--fill-0, #455A64)" id="Vector_74" />
          <path d={svgPaths.p1277d340} fill="var(--fill-0, #455A64)" id="Vector_75" />
          <path d={svgPaths.p1ee8e180} fill="var(--fill-0, #455A64)" id="Vector_76" />
          <path d={svgPaths.p3f473602} fill="var(--fill-0, #FFBE9D)" id="Vector_77" />
          <path d={svgPaths.pb754c00} fill="var(--fill-0, #EB996E)" id="Vector_78" />
          <path d={svgPaths.p168dc780} fill="var(--fill-0, #EB996E)" id="Vector_79" />
          <path d={svgPaths.p345d280} fill="var(--fill-0, #EB996E)" id="Vector_80" />
          <path d={svgPaths.pcad3a00} fill="var(--fill-0, #EB996E)" id="Vector_81" />
          <path d={svgPaths.p3c5d7b00} fill="var(--fill-0, #EB996E)" id="Vector_82" />
          <path d={svgPaths.p13989080} fill="var(--fill-0, #FFBE9D)" id="Vector_83" />
        </g>
      </svg>
    </div>
  );
}

function Shield() {
  return (
    <div className="col-1 h-[36.889px] ml-[0.12px] mt-[2.37px] relative row-1 w-[46.313px]" data-name="Shield">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 46.3135 36.8893">
        <g id="Shield">
          <path d={svgPaths.p3249a072} fill="var(--fill-0, #595BD4)" id="Vector" />
          <g id="Group" opacity="0.8">
            <path d={svgPaths.p167cce00} fill="var(--fill-0, white)" id="Vector_2" />
          </g>
          <path d={svgPaths.p109b9680} fill="var(--fill-0, #595BD4)" id="Vector_3" />
          <path d={svgPaths.p103de700} fill="var(--fill-0, white)" id="Vector_4" />
          <path d={svgPaths.p39762900} fill="var(--fill-0, #595BD4)" id="Vector_5" />
          <path d={svgPaths.p18b5b540} fill="var(--fill-0, #595BD4)" id="Vector_6" />
          <path d={svgPaths.p3c151900} fill="var(--fill-0, #595BD4)" id="Vector_7" />
          <path d={svgPaths.p35543a00} fill="var(--fill-0, #595BD4)" id="Vector_8" />
          <path d={svgPaths.p2c219f80} fill="var(--fill-0, #595BD4)" id="Vector_9" />
          <path d={svgPaths.pb6f5e80} fill="var(--fill-0, #595BD4)" id="Vector_10" />
          <path d={svgPaths.pd0dd200} fill="var(--fill-0, #595BD4)" id="Vector_11" />
          <path d={svgPaths.p356e9cb2} fill="var(--fill-0, #595BD4)" id="Vector_12" />
          <path d={svgPaths.pb76f880} fill="var(--fill-0, #595BD4)" id="Vector_13" />
        </g>
      </svg>
    </div>
  );
}

function InsurancePana() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="insurance/pana">
      <BackgroundComplete1 />
      <BackgroundSimple1 />
      <Device1 />
      <Floor1 />
      <Character8 />
      <Shield />
    </div>
  );
}

function Frame6() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start leading-[normal] not-italic relative shrink-0 text-[#252525] w-full">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[20px] w-full">{`Health & Wellness`}</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[16px] w-full">Comprehensive health insurance, mental health support, and wellness programs.</p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col items-start relative rounded-bl-[24px] rounded-br-[24px] shrink-0 w-[360px]">
      <Frame6 />
    </div>
  );
}

function Frame192() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full">
      <Frame5 />
    </div>
  );
}

function Frame191() {
  return (
    <div className="bg-white relative rounded-[16px] shrink-0 w-[360px]">
      <div className="content-stretch flex flex-col gap-[16px] items-start overflow-clip p-[16px] relative rounded-[inherit] size-full">
        <InsurancePana />
        <Frame192 />
      </div>
      <div aria-hidden className="absolute border-[#e0e0e0] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_0px_12px_1px_rgba(159,159,159,0.15)]" />
    </div>
  );
}

function Frame186() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame187 />
      <Frame189 />
      <Frame191 />
    </div>
  );
}

function BackgroundComplete2() {
  return (
    <div className="col-1 h-[121.022px] ml-0 mt-0 relative row-1 w-[171.994px]" data-name="background-complete">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 171.994 121.022">
        <g id="background-complete">
          <path d={svgPaths.p2741f200} fill="var(--fill-0, #EBEBEB)" id="Vector" />
          <path d={svgPaths.p38f1c880} fill="var(--fill-0, #EBEBEB)" id="Vector_2" />
          <path d={svgPaths.p359a5500} fill="var(--fill-0, #EBEBEB)" id="Vector_3" />
          <path d={svgPaths.p39033da0} fill="var(--fill-0, #EBEBEB)" id="Vector_4" />
          <path d={svgPaths.p108e5100} fill="var(--fill-0, #EBEBEB)" id="Vector_5" />
          <path d={svgPaths.p338b7e00} fill="var(--fill-0, #EBEBEB)" id="Vector_6" />
          <path d={svgPaths.p1af4ac00} fill="var(--fill-0, #EBEBEB)" id="Vector_7" />
          <path d={svgPaths.p27aae00} fill="var(--fill-0, #EBEBEB)" id="Vector_8" />
          <path d={svgPaths.p1461fa00} fill="var(--fill-0, #EBEBEB)" id="Vector_9" />
          <path d={svgPaths.p3100b680} fill="var(--fill-0, #EBEBEB)" id="Vector_10" />
          <path d={svgPaths.p10999a80} fill="var(--fill-0, #EBEBEB)" id="Vector_11" />
          <path d={svgPaths.p18909380} fill="var(--fill-0, #EBEBEB)" id="Vector_12" />
          <path d={svgPaths.p8cae000} fill="var(--fill-0, #EBEBEB)" id="Vector_13" />
          <path d={svgPaths.pbe9e980} fill="var(--fill-0, #EBEBEB)" id="Vector_14" />
          <path d={svgPaths.p25202200} fill="var(--fill-0, #EBEBEB)" id="Vector_15" />
          <path d={svgPaths.p28867f80} fill="var(--fill-0, #E0E0E0)" id="Vector_16" />
          <path d={svgPaths.p3200c100} fill="var(--fill-0, #EBEBEB)" id="Vector_17" />
          <path d={svgPaths.p3fc14300} fill="var(--fill-0, #EBEBEB)" id="Vector_18" />
          <path d={svgPaths.pd1a5580} fill="var(--fill-0, #EBEBEB)" id="Vector_19" />
          <path d={svgPaths.p49b14f0} fill="var(--fill-0, #EBEBEB)" id="Vector_20" />
          <path d={svgPaths.p35498800} fill="var(--fill-0, #EBEBEB)" id="Vector_21" />
          <path d={svgPaths.p18b53f00} fill="var(--fill-0, #EBEBEB)" id="Vector_22" />
          <path d={svgPaths.p3bdac680} fill="var(--fill-0, #E0E0E0)" id="Vector_23" />
          <path d={svgPaths.p36a69f40} fill="var(--fill-0, #E0E0E0)" id="Vector_24" />
          <path d={svgPaths.p25155d80} fill="var(--fill-0, #E0E0E0)" id="Vector_25" />
          <path d={svgPaths.p3d2e72f0} fill="var(--fill-0, #E0E0E0)" id="Vector_26" />
          <path d={svgPaths.p35d8d70} fill="var(--fill-0, #EBEBEB)" id="Vector_27" opacity="0.7" />
          <path d={svgPaths.p9151000} fill="var(--fill-0, #E0E0E0)" id="Vector_28" />
          <path d={svgPaths.p91ab800} fill="var(--fill-0, #E0E0E0)" id="Vector_29" />
          <path d={svgPaths.p3b0c4600} fill="var(--fill-0, #E0E0E0)" id="Vector_30" />
          <path d={svgPaths.pd7dbef0} fill="var(--fill-0, #E0E0E0)" id="Vector_31" />
          <path d={svgPaths.pdc99400} fill="var(--fill-0, #E0E0E0)" id="Vector_32" />
          <path d={svgPaths.p2f67ab00} fill="var(--fill-0, #E0E0E0)" id="Vector_33" />
          <path d={svgPaths.p26284300} fill="var(--fill-0, #E0E0E0)" id="Vector_34" />
          <path d={svgPaths.p3799c900} fill="var(--fill-0, #E0E0E0)" id="Vector_35" />
          <path d={svgPaths.p3fcb7380} fill="var(--fill-0, #E0E0E0)" id="Vector_36" />
          <path d={svgPaths.p7a174f0} fill="var(--fill-0, #E0E0E0)" id="Vector_37" />
          <path d={svgPaths.p3adc25c0} fill="var(--fill-0, #E0E0E0)" id="Vector_38" />
          <path d={svgPaths.p32627300} fill="var(--fill-0, #E0E0E0)" id="Vector_39" />
          <path d={svgPaths.p34c47200} fill="var(--fill-0, #E0E0E0)" id="Vector_40" />
          <path d={svgPaths.p2d470a00} fill="var(--fill-0, #E0E0E0)" id="Vector_41" />
          <path d={svgPaths.p21dbf300} fill="var(--fill-0, #E0E0E0)" id="Vector_42" />
          <path d={svgPaths.p177d4b00} fill="var(--fill-0, #F0F0F0)" id="Vector_43" />
          <path d={svgPaths.p14d6cb00} fill="var(--fill-0, #E0E0E0)" id="Vector_44" />
          <path d={svgPaths.pc861cf0} fill="var(--fill-0, #E0E0E0)" id="Vector_45" />
          <path d={svgPaths.p1a641a00} fill="var(--fill-0, #E0E0E0)" id="Vector_46" />
          <path d={svgPaths.pe9df000} fill="var(--fill-0, #E0E0E0)" id="Vector_47" />
          <path d={svgPaths.p1399cef0} fill="var(--fill-0, #E0E0E0)" id="Vector_48" />
          <path d={svgPaths.p12c9bc00} fill="var(--fill-0, #E0E0E0)" id="Vector_49" />
          <path d={svgPaths.p3b53c500} fill="var(--fill-0, #E0E0E0)" id="Vector_50" />
          <path d={svgPaths.p37393100} fill="var(--fill-0, #E0E0E0)" id="Vector_51" />
          <path d={svgPaths.p1bbbc600} fill="var(--fill-0, #E0E0E0)" id="Vector_52" />
          <path d={svgPaths.p3333d700} fill="var(--fill-0, #E0E0E0)" id="Vector_53" />
          <path d={svgPaths.pa4eed00} fill="var(--fill-0, #E0E0E0)" id="Vector_54" />
          <path d={svgPaths.p2101c500} fill="var(--fill-0, #E0E0E0)" id="Vector_55" />
          <path d={svgPaths.p10532b00} fill="var(--fill-0, #E0E0E0)" id="Vector_56" />
          <path d={svgPaths.p2aa54080} fill="var(--fill-0, #E0E0E0)" id="Vector_57" />
          <path d={svgPaths.p35335000} fill="var(--fill-0, #E0E0E0)" id="Vector_58" />
          <path d={svgPaths.p14037e00} fill="var(--fill-0, #E0E0E0)" id="Vector_59" />
          <path d={svgPaths.p22d2de80} fill="var(--fill-0, #E0E0E0)" id="Vector_60" />
          <path d={svgPaths.p25186000} fill="var(--fill-0, #E0E0E0)" id="Vector_61" />
          <path d={svgPaths.pd1c5c00} fill="var(--fill-0, #E0E0E0)" id="Vector_62" />
          <path d={svgPaths.p2ed76c00} fill="var(--fill-0, #E0E0E0)" id="Vector_63" />
          <path d={svgPaths.p38684dc0} fill="var(--fill-0, #EBEBEB)" id="Vector_64" />
          <path d={svgPaths.p3729f00} fill="var(--fill-0, #E0E0E0)" id="Vector_65" />
          <path d={svgPaths.p294890} fill="var(--fill-0, #E0E0E0)" id="Vector_66" />
          <path d={svgPaths.p3f465980} fill="var(--fill-0, #EBEBEB)" id="Vector_67" />
          <path d={svgPaths.p2adf26b1} fill="var(--fill-0, #E0E0E0)" id="Vector_68" />
          <path d={svgPaths.p3cc30b00} fill="var(--fill-0, #E0E0E0)" id="Vector_69" />
          <path d={svgPaths.p3363e380} fill="var(--fill-0, #E0E0E0)" id="Vector_70" />
          <path d={svgPaths.p34e40080} fill="var(--fill-0, #EBEBEB)" id="Vector_71" />
          <path d={svgPaths.p3d705cf0} fill="var(--fill-0, #F0F0F0)" id="Vector_72" />
          <path d={svgPaths.p22d1ca80} fill="var(--fill-0, #F0F0F0)" id="Vector_73" />
          <path d={svgPaths.p3601a200} fill="var(--fill-0, #F0F0F0)" id="Vector_74" />
          <path d={svgPaths.p70b8080} fill="var(--fill-0, #F0F0F0)" id="Vector_75" />
          <path d={svgPaths.p13101700} fill="var(--fill-0, #F0F0F0)" id="Vector_76" />
          <path d={svgPaths.p389f6180} fill="var(--fill-0, #F0F0F0)" id="Vector_77" />
          <path d={svgPaths.p24a47480} fill="var(--fill-0, #F0F0F0)" id="Vector_78" />
          <path d={svgPaths.p11d4e000} fill="var(--fill-0, #F0F0F0)" id="Vector_79" />
          <path d={svgPaths.p1aac8300} fill="var(--fill-0, #F0F0F0)" id="Vector_80" />
          <path d={svgPaths.p94ea400} fill="var(--fill-0, #F0F0F0)" id="Vector_81" />
          <path d={svgPaths.p373de900} fill="var(--fill-0, #F0F0F0)" id="Vector_82" />
          <path d={svgPaths.p239c9ac0} fill="var(--fill-0, #F0F0F0)" id="Vector_83" />
          <path d={svgPaths.p3ca86500} fill="var(--fill-0, #F0F0F0)" id="Vector_84" />
          <path d={svgPaths.p37f40400} fill="var(--fill-0, #F0F0F0)" id="Vector_85" />
          <path d={svgPaths.p99fd380} fill="var(--fill-0, #F0F0F0)" id="Vector_86" />
          <path d={svgPaths.p321a8c80} fill="var(--fill-0, #F0F0F0)" id="Vector_87" />
          <path d={svgPaths.p109dbc00} fill="var(--fill-0, #F0F0F0)" id="Vector_88" />
          <path d={svgPaths.p3dd313c0} fill="var(--fill-0, #F0F0F0)" id="Vector_89" />
          <path d={svgPaths.p24aac280} fill="var(--fill-0, #F0F0F0)" id="Vector_90" />
          <path d={svgPaths.p2304c980} fill="var(--fill-0, #F0F0F0)" id="Vector_91" />
          <path d={svgPaths.p18cab400} fill="var(--fill-0, #F0F0F0)" id="Vector_92" />
          <path d={svgPaths.p33fc6d80} fill="var(--fill-0, #F0F0F0)" id="Vector_93" />
          <path d={svgPaths.p24427a00} fill="var(--fill-0, #F0F0F0)" id="Vector_94" />
          <path d={svgPaths.p384c6500} fill="var(--fill-0, #F0F0F0)" id="Vector_95" />
          <path d={svgPaths.p32c03000} fill="var(--fill-0, #F0F0F0)" id="Vector_96" />
          <path d={svgPaths.p4c6e700} fill="var(--fill-0, #F0F0F0)" id="Vector_97" />
          <path d={svgPaths.p293fb780} fill="var(--fill-0, #F0F0F0)" id="Vector_98" />
          <path d={svgPaths.p22978400} fill="var(--fill-0, #F0F0F0)" id="Vector_99" />
          <path d={svgPaths.p7ca6600} fill="var(--fill-0, #F0F0F0)" id="Vector_100" />
          <path d={svgPaths.p38115180} fill="var(--fill-0, #E6E6E6)" id="Vector_101" />
          <path d={svgPaths.p2d6db300} fill="var(--fill-0, #F0F0F0)" id="Vector_102" />
          <path d={svgPaths.p1ed8f700} fill="var(--fill-0, #E6E6E6)" id="Vector_103" />
          <path d={svgPaths.p3839a900} fill="var(--fill-0, #E6E6E6)" id="Vector_104" />
          <path d={svgPaths.p24669400} fill="var(--fill-0, #E6E6E6)" id="Vector_105" />
          <path d={svgPaths.p331cf500} fill="var(--fill-0, #E6E6E6)" id="Vector_106" />
          <path d={svgPaths.p2c64c700} fill="var(--fill-0, #E6E6E6)" id="Vector_107" />
          <path d={svgPaths.pb6700f0} fill="var(--fill-0, #E6E6E6)" id="Vector_108" />
          <path d={svgPaths.p1fee2c0} fill="var(--fill-0, #E6E6E6)" id="Vector_109" />
          <path d={svgPaths.p12068500} fill="var(--fill-0, #E6E6E6)" id="Vector_110" />
          <path d={svgPaths.p21e91b00} fill="var(--fill-0, #E6E6E6)" id="Vector_111" />
          <path d={svgPaths.p14437300} fill="var(--fill-0, #E6E6E6)" id="Vector_112" />
          <path d={svgPaths.p3370f380} fill="var(--fill-0, #E6E6E6)" id="Vector_113" />
          <path d={svgPaths.p22211180} fill="var(--fill-0, #E6E6E6)" id="Vector_114" />
          <path d={svgPaths.pd818000} fill="var(--fill-0, #E6E6E6)" id="Vector_115" />
          <path d={svgPaths.p16bef330} fill="var(--fill-0, #F0F0F0)" id="Vector_116" />
          <path d={svgPaths.p1e422400} fill="var(--fill-0, #E6E6E6)" id="Vector_117" />
          <path d={svgPaths.p234f7900} fill="var(--fill-0, #E6E6E6)" id="Vector_118" />
          <path d={svgPaths.p1be1b80} fill="var(--fill-0, #E6E6E6)" id="Vector_119" />
          <path d={svgPaths.p3e93a200} fill="var(--fill-0, #E6E6E6)" id="Vector_120" />
          <path d={svgPaths.p1d0b4000} fill="var(--fill-0, #E6E6E6)" id="Vector_121" />
          <path d={svgPaths.p868f300} fill="var(--fill-0, #E6E6E6)" id="Vector_122" />
          <path d={svgPaths.p25eb3c80} fill="var(--fill-0, #E6E6E6)" id="Vector_123" />
          <path d={svgPaths.p1664fc40} fill="var(--fill-0, #E6E6E6)" id="Vector_124" />
          <path d={svgPaths.p3e2a6f00} fill="var(--fill-0, #E6E6E6)" id="Vector_125" />
          <path d={svgPaths.p10e25900} fill="var(--fill-0, #E6E6E6)" id="Vector_126" />
          <path d={svgPaths.p336ef080} fill="var(--fill-0, #E6E6E6)" id="Vector_127" />
          <path d={svgPaths.p1f92000} fill="var(--fill-0, #E6E6E6)" id="Vector_128" />
          <path d={svgPaths.p9df2df2} fill="var(--fill-0, #E6E6E6)" id="Vector_129" />
          <path d={svgPaths.p29ba2f00} fill="var(--fill-0, #F0F0F0)" id="Vector_130" />
          <path d={svgPaths.p16b82800} fill="var(--fill-0, #E6E6E6)" id="Vector_131" />
          <path d={svgPaths.p1044ae00} fill="var(--fill-0, #E6E6E6)" id="Vector_132" />
          <path d={svgPaths.p11edd900} fill="var(--fill-0, #E6E6E6)" id="Vector_133" />
          <path d={svgPaths.p3f3da200} fill="var(--fill-0, #E6E6E6)" id="Vector_134" />
          <path d={svgPaths.p1c575b00} fill="var(--fill-0, #E6E6E6)" id="Vector_135" />
          <path d={svgPaths.p3bf4e5f0} fill="var(--fill-0, #E6E6E6)" id="Vector_136" />
          <path d={svgPaths.p1b938800} fill="var(--fill-0, #E6E6E6)" id="Vector_137" />
          <path d={svgPaths.p3db8e180} fill="var(--fill-0, #E6E6E6)" id="Vector_138" />
          <path d={svgPaths.p1f83ae80} fill="var(--fill-0, #E6E6E6)" id="Vector_139" />
          <path d={svgPaths.p39fb6b80} fill="var(--fill-0, #E6E6E6)" id="Vector_140" />
          <path d={svgPaths.p22bf3b00} fill="var(--fill-0, #E6E6E6)" id="Vector_141" />
          <path d={svgPaths.p1bf00b60} fill="var(--fill-0, #E6E6E6)" id="Vector_142" />
          <path d={svgPaths.p1f49d580} fill="var(--fill-0, #E6E6E6)" id="Vector_143" />
          <path d={svgPaths.p3f8b0cc0} fill="var(--fill-0, #F0F0F0)" id="Vector_144" />
          <path d={svgPaths.p2f6fa00} fill="var(--fill-0, #E6E6E6)" id="Vector_145" />
          <path d={svgPaths.p324c2200} fill="var(--fill-0, #E6E6E6)" id="Vector_146" />
          <path d={svgPaths.pacf2980} fill="var(--fill-0, #E6E6E6)" id="Vector_147" />
          <path d={svgPaths.p1135edf2} fill="var(--fill-0, #E6E6E6)" id="Vector_148" />
          <path d={svgPaths.pb1d9500} fill="var(--fill-0, #E6E6E6)" id="Vector_149" />
          <path d={svgPaths.p9efdd00} fill="var(--fill-0, #E6E6E6)" id="Vector_150" />
          <path d={svgPaths.p197b3f00} fill="var(--fill-0, #E6E6E6)" id="Vector_151" />
          <path d={svgPaths.p33e52c00} fill="var(--fill-0, #E6E6E6)" id="Vector_152" />
          <path d={svgPaths.p260cf1f0} fill="var(--fill-0, #E6E6E6)" id="Vector_153" />
          <path d={svgPaths.p350e5f00} fill="var(--fill-0, #E6E6E6)" id="Vector_154" />
          <path d={svgPaths.p3a43dc80} fill="var(--fill-0, #E6E6E6)" id="Vector_155" />
          <path d={svgPaths.p19452400} fill="var(--fill-0, #E6E6E6)" id="Vector_156" />
        </g>
      </svg>
    </div>
  );
}

function BackgroundSimple2() {
  return (
    <div className="col-1 h-[97.421px] ml-[28.41px] mt-[11.58px] relative row-1 w-[119.845px]" data-name="background-simple">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="background-simple" opacity="0">
          <path d={svgPaths.p24e0d800} fill="var(--fill-0, #595BD4)" id="Vector" />
          <path d={svgPaths.p24e0d800} fill="var(--fill-0, white)" id="Vector_2" opacity="0.9" />
        </g>
      </svg>
    </div>
  );
}

function Shadow() {
  return (
    <div className="col-1 h-[7.788px] ml-[19.3px] mt-[122.21px] relative row-1 w-[133.392px]" data-name="Shadow">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 133.392 7.7879">
        <g id="Shadow">
          <path d={svgPaths.p3af41500} fill="var(--fill-0, #F5F5F5)" id="path" />
        </g>
      </svg>
    </div>
  );
}

function Rewards() {
  return (
    <div className="col-1 h-[77.43px] ml-[19.37px] mt-[49.34px] relative row-1 w-[70.328px]" data-name="Rewards">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 70.3281 77.4303">
        <g id="Rewards">
          <path d={svgPaths.p1bd81ef0} fill="var(--fill-0, #263238)" id="Vector" />
          <path d={svgPaths.p1bd81ef0} fill="var(--fill-0, white)" id="Vector_2" opacity="0.2" />
          <path d={svgPaths.p24da0000} fill="var(--fill-0, #595BD4)" id="Vector_3" />
          <path d={svgPaths.p24da0000} fill="var(--fill-0, white)" id="Vector_4" opacity="0.6" />
          <path d={svgPaths.p2aa20100} fill="var(--fill-0, #595BD4)" id="Vector_5" />
          <path d={svgPaths.p4d5f7b0} fill="var(--fill-0, #595BD4)" id="Vector_6" />
          <path d={svgPaths.p4d5f7b0} fill="var(--fill-0, white)" id="Vector_7" opacity="0.7" />
          <path d={svgPaths.p36b97b00} fill="var(--fill-0, #263238)" id="Vector_8" />
          <path d={svgPaths.p1bfb0e00} fill="var(--fill-0, #595BD4)" id="Vector_9" />
          <path d={svgPaths.p1bfb0e00} fill="var(--fill-0, white)" id="Vector_10" opacity="0.2" />
          <path d={svgPaths.p23c6aa00} fill="var(--fill-0, black)" id="Vector_11" opacity="0.2" />
          <path d={svgPaths.p1f801e00} fill="var(--fill-0, #263238)" id="Vector_12" />
          <path d={svgPaths.p10f20480} fill="var(--fill-0, #263238)" id="Vector_13" />
          <path d={svgPaths.p1dbb0c00} fill="var(--fill-0, black)" id="Vector_14" opacity="0.2" />
          <path d={svgPaths.pb14c100} fill="var(--fill-0, #595BD4)" id="Vector_15" />
          <path d={svgPaths.p372a4a00} fill="var(--fill-0, #595BD4)" id="Vector_16" />
          <path d={svgPaths.p372a4a00} fill="var(--fill-0, white)" id="Vector_17" opacity="0.6" />
          <path d={svgPaths.p225ed600} fill="var(--fill-0, black)" id="Vector_18" opacity="0.1" />
          <path d={svgPaths.p5d60d00} fill="var(--fill-0, white)" id="Vector_19" opacity="0.2" />
          <path d={svgPaths.p25068c00} fill="var(--fill-0, #595BD4)" id="Vector_20" />
          <path d={svgPaths.p5b01780} fill="var(--fill-0, #595BD4)" id="Vector_21" />
        </g>
      </svg>
    </div>
  );
}

function Plant() {
  return (
    <div className="col-1 h-[35.663px] ml-[130.04px] mt-[91.11px] relative row-1 w-[20.63px]" data-name="Plant">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.6282 35.6631">
        <g id="Plant">
          <path d={svgPaths.p3642ff48} id="Vector" stroke="var(--stroke-0, #595BD4)" strokeMiterlimit="10" />
          <path d={svgPaths.pd386000} id="Vector_2" stroke="var(--stroke-0, #595BD4)" strokeMiterlimit="10" />
          <path d={svgPaths.p51bf3c0} id="Vector_3" stroke="var(--stroke-0, #595BD4)" strokeMiterlimit="10" />
          <path d={svgPaths.pecea680} id="Vector_4" stroke="var(--stroke-0, #595BD4)" strokeMiterlimit="10" />
          <path d={svgPaths.p2ba94700} id="Vector_5" stroke="var(--stroke-0, #595BD4)" strokeMiterlimit="10" />
          <path d={svgPaths.p6b5ad40} id="Vector_6" stroke="var(--stroke-0, #595BD4)" strokeMiterlimit="10" />
          <path d={svgPaths.pd636340} fill="var(--fill-0, #595BD4)" id="Vector_7" />
          <path d={svgPaths.pd636340} fill="var(--fill-0, white)" id="Vector_8" opacity="0.2" />
          <path d={svgPaths.p2678fe00} fill="var(--fill-0, #595BD4)" id="Vector_9" />
          <path d={svgPaths.p2678fe00} fill="var(--fill-0, white)" id="Vector_10" opacity="0.2" />
          <path d={svgPaths.p1f319a80} fill="var(--fill-0, #595BD4)" id="Vector_11" />
          <path d={svgPaths.p1f319a80} fill="var(--fill-0, white)" id="Vector_12" opacity="0.2" />
          <path d={svgPaths.p7e16800} fill="var(--fill-0, #595BD4)" id="Vector_13" />
          <path d={svgPaths.p7e16800} fill="var(--fill-0, white)" id="Vector_14" opacity="0.2" />
          <path d={svgPaths.p3666e300} fill="var(--fill-0, #595BD4)" id="Vector_15" />
          <path d={svgPaths.p3666e300} fill="var(--fill-0, white)" id="Vector_16" opacity="0.2" />
          <path d={svgPaths.p37806e00} fill="var(--fill-0, #595BD4)" id="Vector_17" />
          <path d={svgPaths.p37806e00} fill="var(--fill-0, white)" id="Vector_18" opacity="0.2" />
          <path d={svgPaths.p10477100} fill="var(--fill-0, #595BD4)" id="Vector_19" />
          <path d={svgPaths.p10477100} fill="var(--fill-0, white)" id="Vector_20" opacity="0.2" />
          <path d={svgPaths.p1d0b7600} fill="var(--fill-0, #595BD4)" id="Vector_21" />
          <path d={svgPaths.p1d0b7600} fill="var(--fill-0, white)" id="Vector_22" opacity="0.2" />
          <path d={svgPaths.pb425a00} fill="var(--fill-0, #595BD4)" id="Vector_23" />
          <path d={svgPaths.pb425a00} fill="var(--fill-0, white)" id="Vector_24" opacity="0.5" />
          <path d={svgPaths.p3a8b6c80} fill="var(--fill-0, #595BD4)" id="Vector_25" />
          <path d={svgPaths.p3a8b6c80} fill="var(--fill-0, white)" id="Vector_26" opacity="0.2" />
        </g>
      </svg>
    </div>
  );
}

function Character9() {
  return (
    <div className="col-1 h-[97.903px] ml-[97.29px] mt-[28.88px] relative row-1 w-[32.527px]" data-name="character-2">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32.5264 97.9027">
        <g id="character-2">
          <path d={svgPaths.p3a23c000} fill="var(--fill-0, #263238)" id="Vector" />
          <path d={svgPaths.p1631c800} fill="var(--fill-0, #B97964)" id="Vector_2" />
          <path d={svgPaths.p3721e800} fill="var(--fill-0, #595BD4)" id="Vector_3" />
          <path d={svgPaths.p91e6000} fill="var(--fill-0, white)" id="Vector_4" opacity="0.2" />
          <path d={svgPaths.p1d5422c0} fill="var(--fill-0, black)" id="Vector_5" opacity="0.2" />
          <path d={svgPaths.p3ad2b780} fill="var(--fill-0, #B97964)" id="Vector_6" />
          <path d={svgPaths.p3515e780} fill="var(--fill-0, #263238)" id="Vector_7" />
          <path d={svgPaths.p3a5c7100} fill="var(--fill-0, #B97964)" id="Vector_8" />
          <path d={svgPaths.p2590ca80} fill="var(--fill-0, #263238)" id="Vector_9" />
          <path d={svgPaths.pe429c00} fill="var(--fill-0, #B97964)" id="Vector_10" />
          <path d={svgPaths.p3bd66a00} fill="var(--fill-0, #B97964)" id="Vector_11" />
          <path d={svgPaths.p11af4d00} fill="var(--fill-0, #595BD4)" id="Vector_12" />
          <path d={svgPaths.pc78d5f0} fill="var(--fill-0, white)" id="Vector_13" opacity="0.4" />
          <path d={svgPaths.p2f588e00} fill="var(--fill-0, black)" id="Vector_14" opacity="0.2" />
          <path d={svgPaths.p210c0600} fill="var(--fill-0, #263238)" id="Vector_15" />
          <path d={svgPaths.p3c835480} fill="var(--fill-0, white)" id="Vector_16" />
          <path d={svgPaths.p39aa0300} fill="var(--fill-0, #595BD4)" id="Vector_17" />
          <path d={svgPaths.p39aa0300} fill="var(--fill-0, white)" id="Vector_18" opacity="0.4" />
          <path d={svgPaths.p8376800} fill="var(--fill-0, #595BD4)" id="Vector_19" />
          <path d={svgPaths.p8376800} fill="var(--fill-0, white)" id="Vector_20" opacity="0.4" />
          <path d={svgPaths.p300ba000} fill="var(--fill-0, #595BD4)" id="Vector_21" />
          <path d={svgPaths.p29d27100} fill="var(--fill-0, #263238)" id="Vector_22" />
          <g id="Group" opacity="0.1">
            <path d={svgPaths.p2a6f1e00} fill="var(--fill-0, white)" id="Vector_23" />
          </g>
          <path d={svgPaths.p1700e580} fill="var(--fill-0, #B97964)" id="Vector_24" />
          <path d={svgPaths.p6624b00} fill="var(--fill-0, black)" id="Vector_25" opacity="0.2" />
          <path d={svgPaths.p1d8f4970} fill="var(--fill-0, #B97964)" id="Vector_26" />
          <path d={svgPaths.p20c64800} fill="var(--fill-0, #A24E3F)" id="Vector_27" />
          <path d={svgPaths.p20b34800} fill="var(--fill-0, #263238)" id="Vector_28" />
          <path d={svgPaths.p2f466cf0} fill="var(--fill-0, #263238)" id="Vector_29" />
          <path d={svgPaths.pd0c8b00} fill="var(--fill-0, #263238)" id="Vector_30" />
          <path d={svgPaths.p1206f780} fill="var(--fill-0, #263238)" id="Vector_31" />
          <path d={svgPaths.p210d93e0} id="Vector_32" stroke="var(--stroke-0, #2E353A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.72468" />
          <path d={svgPaths.p1d762f00} id="Vector_33" stroke="var(--stroke-0, #2E353A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.72468" />
          <path d={svgPaths.p538fb00} fill="var(--fill-0, #263238)" id="Vector_34" />
          <path d={svgPaths.p43f8600} fill="var(--fill-0, white)" id="Vector_35" />
          <path d={svgPaths.p37502f00} fill="var(--fill-0, #DE5753)" id="Vector_36" />
          <path d={svgPaths.p97d6500} fill="var(--fill-0, #263238)" id="Vector_37" />
          <path d={svgPaths.pe810c80} fill="var(--fill-0, #263238)" id="Vector_38" />
          <path d={svgPaths.p18eb5540} id="Vector_39" stroke="var(--stroke-0, #263238)" strokeMiterlimit="10" strokeWidth="0.5" />
          <path d={svgPaths.p3bc13500} fill="var(--fill-0, #B97964)" id="Vector_40" />
          <path d={svgPaths.p11705100} fill="var(--fill-0, #B97964)" id="Vector_41" />
          <path d={svgPaths.p2ad9c700} fill="var(--fill-0, #595BD4)" id="Vector_42" />
          <path d={svgPaths.p1c796370} fill="var(--fill-0, white)" id="Vector_43" opacity="0.2" />
          <path d={svgPaths.p35014800} fill="var(--fill-0, #595BD4)" id="Vector_44" />
          <path d={svgPaths.p177b5180} fill="var(--fill-0, white)" id="Vector_45" opacity="0.2" />
          <path d={svgPaths.p2a815400} fill="var(--fill-0, white)" id="Vector_46" opacity="0.2" />
          <path d={svgPaths.pf268c80} fill="var(--fill-0, white)" id="Vector_47" opacity="0.2" />
          <path d={svgPaths.p96ea800} fill="var(--fill-0, black)" id="Vector_48" opacity="0.2" />
          <path d={svgPaths.p2e22fc00} fill="var(--fill-0, black)" id="Vector_49" opacity="0.2" />
          <path d={svgPaths.p33078780} fill="var(--fill-0, #595BD4)" id="Vector_50" />
          <path d={svgPaths.p3b9a3400} fill="var(--fill-0, #595BD4)" id="Vector_51" />
          <path d={svgPaths.p33078780} fill="var(--fill-0, white)" id="Vector_52" opacity="0.7" />
          <path d={svgPaths.p3b9a3400} fill="var(--fill-0, white)" id="Vector_53" opacity="0.7" />
          <path d={svgPaths.p8764100} fill="var(--fill-0, #B97964)" id="Vector_54" />
          <path d={svgPaths.p2b2f0400} fill="var(--fill-0, #595BD4)" id="Vector_55" />
          <path d={svgPaths.p2b2f0400} fill="var(--fill-0, white)" id="Vector_56" opacity="0.2" />
        </g>
      </svg>
    </div>
  );
}

function SpeechBubble6() {
  return (
    <div className="col-1 h-[9.636px] ml-[80.63px] mt-[13.83px] relative row-1 w-[8.39px]" data-name="speech-bubble">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.38972 9.63559">
        <g id="speech-bubble">
          <path d={svgPaths.pf46e200} fill="var(--fill-0, #595BD4)" id="Vector" />
          <path d={svgPaths.p29e25840} fill="var(--fill-0, white)" id="Vector_2" opacity="0.6" />
          <path d={svgPaths.p76bc200} fill="var(--fill-0, #595BD4)" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function Group() {
  return (
    <div className="col-1 h-[107.363px] ml-0 mt-0 relative row-1 w-[40.796px]" data-name="group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40.7963 107.363">
        <g id="group">
          <path d={svgPaths.p16fabb00} fill="var(--fill-0, #263238)" id="Vector" />
          <path d={svgPaths.p19f92980} fill="var(--fill-0, #263238)" id="Vector_2" />
          <path d={svgPaths.p30af5a40} fill="var(--fill-0, #263238)" id="Vector_3" />
          <path d={svgPaths.p30af5a40} fill="var(--fill-0, white)" id="Vector_4" opacity="0.2" />
          <path d={svgPaths.p2b7aa280} fill="var(--fill-0, black)" id="Vector_5" opacity="0.2" />
          <path d={svgPaths.p14fbba00} fill="var(--fill-0, #263238)" id="Vector_6" />
          <path d={svgPaths.p11f373c0} fill="var(--fill-0, #263238)" id="Vector_7" />
          <path d={svgPaths.pe1b4500} fill="var(--fill-0, #263238)" id="Vector_8" />
          <path d={svgPaths.p2d482100} fill="var(--fill-0, white)" id="Vector_9" />
          <path d={svgPaths.p11f373c0} fill="var(--fill-0, white)" id="Vector_10" opacity="0.2" />
          <path d={svgPaths.pe1b4500} fill="var(--fill-0, white)" id="Vector_11" opacity="0.2" />
          <path d={svgPaths.p34368900} fill="var(--fill-0, #EBB376)" id="Vector_12" />
          <path d={svgPaths.p2b97a280} fill="var(--fill-0, #595BD4)" id="Vector_13" />
          <path d={svgPaths.p15186a00} fill="var(--fill-0, white)" id="Vector_14" opacity="0.6" />
          <path d={svgPaths.p1ffdb280} fill="var(--fill-0, black)" id="Vector_15" opacity="0.2" />
          <path d={svgPaths.p278f5f00} fill="var(--fill-0, #595BD4)" id="Vector_16" />
          <path d={svgPaths.p252ca980} fill="var(--fill-0, white)" id="Vector_17" opacity="0.6" />
          <path d={svgPaths.p2bcab080} fill="var(--fill-0, black)" id="Vector_18" opacity="0.2" />
          <path d={svgPaths.p12242000} fill="var(--fill-0, #EBB376)" id="Vector_19" />
          <path d={svgPaths.p8e00d00} fill="var(--fill-0, black)" id="Vector_20" opacity="0.2" />
          <path d={svgPaths.pd8a4000} fill="var(--fill-0, #263238)" id="Vector_21" />
          <path d={svgPaths.p302b00} fill="var(--fill-0, #EBB376)" id="Vector_22" />
          <path d={svgPaths.p3aba4a00} fill="var(--fill-0, #263238)" id="Vector_23" />
          <path d={svgPaths.pdcb0700} fill="var(--fill-0, #263238)" id="Vector_24" />
          <path d={svgPaths.pf743600} fill="var(--fill-0, #D58745)" id="Vector_25" />
          <path d={svgPaths.p12707f00} fill="var(--fill-0, #263238)" id="Vector_26" />
          <path d={svgPaths.p1b49b800} fill="var(--fill-0, #263238)" id="Vector_27" />
          <path d={svgPaths.p1b728300} fill="var(--fill-0, #263238)" id="Vector_28" />
          <path d={svgPaths.p3b628900} fill="var(--fill-0, #EBB376)" id="Vector_29" />
          <path d={svgPaths.p3ee980} fill="var(--fill-0, #263238)" id="Vector_30" />
          <path d={svgPaths.p1e4d45c0} fill="var(--fill-0, white)" id="Vector_31" />
          <path d={svgPaths.p32387900} fill="var(--fill-0, #DE5753)" id="Vector_32" />
          <path d={svgPaths.p67c1a80} fill="var(--fill-0, #263238)" id="Vector_33" />
          <path d={svgPaths.p4c1ebc0} fill="var(--fill-0, #263238)" id="Vector_34" />
          <path d={svgPaths.p30f0e200} fill="var(--fill-0, #595BD4)" id="Vector_35" />
          <path d={svgPaths.p30f0e200} fill="var(--fill-0, white)" id="Vector_36" opacity="0.7" />
          <path d={svgPaths.p3972cf80} fill="var(--fill-0, #EBB376)" id="Vector_37" />
          <path d={svgPaths.p3e7abd00} fill="var(--fill-0, #595BD4)" id="Vector_38" />
          <path d={svgPaths.p3e7abd00} fill="var(--fill-0, white)" id="Vector_39" opacity="0.7" />
          <path d={svgPaths.p16f93e00} fill="var(--fill-0, #595BD4)" id="Vector_40" />
          <path d={svgPaths.p2dfcfe00} fill="var(--fill-0, #595BD4)" id="Vector_41" />
          <g id="Group" opacity="0.2">
            <path d={svgPaths.p31269e00} fill="var(--fill-0, black)" id="Vector_42" />
            <path d={svgPaths.p282da00} fill="var(--fill-0, black)" id="Vector_43" />
          </g>
          <path d={svgPaths.p19772e00} fill="var(--fill-0, #595BD4)" id="Vector_44" />
          <path d={svgPaths.p14629f00} fill="var(--fill-0, #263238)" id="Vector_45" />
          <path d={svgPaths.p22711000} fill="var(--fill-0, white)" id="Vector_46" opacity="0.2" />
          <path d={svgPaths.p3dafc280} fill="var(--fill-0, white)" id="Vector_47" />
          <path d={svgPaths.p3ed10000} fill="var(--fill-0, white)" id="Vector_48" opacity="0.3" />
          <path d={svgPaths.p3b72db70} fill="var(--fill-0, #595BD4)" id="Vector_49" />
          <path d={svgPaths.p3b72db70} fill="var(--fill-0, white)" id="Vector_50" opacity="0.2" />
          <path d={svgPaths.p13504100} fill="var(--fill-0, #595BD4)" id="Vector_51" />
          <path d={svgPaths.p277f0400} fill="var(--fill-0, white)" id="Vector_52" opacity="0.4" />
          <path d={svgPaths.p364ef700} fill="var(--fill-0, #595BD4)" id="Vector_53" />
          <path d={svgPaths.p31490d70} fill="var(--fill-0, #595BD4)" id="Vector_54" />
        </g>
      </svg>
    </div>
  );
}

function Character10() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[62.36px] mt-[19.4px] place-items-start relative row-1" data-name="character-1">
      <Group />
    </div>
  );
}

function AwardsRafiki() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="awards/rafiki">
      <BackgroundComplete2 />
      <BackgroundSimple2 />
      <Shadow />
      <Rewards />
      <Plant />
      <Character9 />
      <SpeechBubble6 />
      <Character10 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start leading-[normal] not-italic relative shrink-0 text-[#252525] w-full">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[20px] w-full">{`Recognition & Rewards`}</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[16px] w-full">Performance bonuses, stock options, and recognition programs.</p>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col items-start relative rounded-bl-[24px] rounded-br-[24px] shrink-0 w-[360px]">
      <Frame8 />
    </div>
  );
}

function Frame195() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full">
      <Frame7 />
    </div>
  );
}

function Frame194() {
  return (
    <div className="bg-white relative rounded-[16px] shrink-0 w-[360px]">
      <div className="content-stretch flex flex-col gap-[16px] items-start overflow-clip p-[16px] relative rounded-[inherit] size-full">
        <AwardsRafiki />
        <Frame195 />
      </div>
      <div aria-hidden className="absolute border-[#e0e0e0] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_0px_12px_1px_rgba(159,159,159,0.15)]" />
    </div>
  );
}

function BackgroundComplete3() {
  return (
    <div className="col-1 h-[127.086px] ml-0 mt-[2.91px] relative row-1 w-[130.34px]" data-name="background-complete">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 130.34 127.086">
        <g id="background-complete">
          <path d={svgPaths.p11ceaa00} fill="var(--fill-0, #E0E0E0)" id="Vector" />
          <path d={svgPaths.p71acb00} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={svgPaths.p3e447b00} fill="var(--fill-0, #E0E0E0)" id="Vector_3" />
          <path d={svgPaths.p57a6980} fill="var(--fill-0, white)" id="Vector_4" />
          <path d={svgPaths.p1c7fe300} fill="var(--fill-0, #E0E0E0)" id="Vector_5" />
          <path d={svgPaths.p1d9f0eb0} fill="var(--fill-0, #E0E0E0)" id="Vector_6" />
          <path d={svgPaths.pf0a9600} fill="var(--fill-0, #E0E0E0)" id="Vector_7" />
          <path d={svgPaths.p219ac400} fill="var(--fill-0, white)" id="Vector_8" />
          <path d={svgPaths.p1d72f500} fill="var(--fill-0, #E0E0E0)" id="Vector_9" />
          <path d={svgPaths.p2c0d800} fill="var(--fill-0, #E0E0E0)" id="Vector_10" />
          <path d={svgPaths.p3512d100} fill="var(--fill-0, #E0E0E0)" id="Vector_11" />
          <path d={svgPaths.p3b872600} fill="var(--fill-0, #E0E0E0)" id="Vector_12" />
          <path d={svgPaths.p1792c480} fill="var(--fill-0, #F5F5F5)" id="Vector_13" />
          <path d={svgPaths.p2b12080} fill="var(--fill-0, #E0E0E0)" id="Vector_14" />
          <path d={svgPaths.p33961800} fill="var(--fill-0, #E0E0E0)" id="Vector_15" />
          <path d={svgPaths.p16ce3500} fill="var(--fill-0, #E0E0E0)" id="Vector_16" />
          <path d={svgPaths.p26a3ae00} fill="var(--fill-0, #E0E0E0)" id="Vector_17" />
          <path d={svgPaths.p1a0fd100} fill="var(--fill-0, #E0E0E0)" id="Vector_18" />
          <path d={svgPaths.pcca8c80} fill="var(--fill-0, #E0E0E0)" id="Vector_19" />
          <path d={svgPaths.p2e08c280} fill="var(--fill-0, #E0E0E0)" id="Vector_20" />
          <path d={svgPaths.p25fc0700} fill="var(--fill-0, #E0E0E0)" id="Vector_21" />
          <path d={svgPaths.p10b64a80} fill="var(--fill-0, #E0E0E0)" id="Vector_22" />
          <path d={svgPaths.p2beb680} fill="var(--fill-0, #E0E0E0)" id="Vector_23" />
          <path d={svgPaths.p12d92600} fill="var(--fill-0, #E0E0E0)" id="Vector_24" />
          <path d={svgPaths.p2fbb84c0} fill="var(--fill-0, #E0E0E0)" id="Vector_25" />
          <path d={svgPaths.p3044eb00} fill="var(--fill-0, #FAFAFA)" id="Vector_26" />
          <path d={svgPaths.p1cdc9680} fill="var(--fill-0, #E0E0E0)" id="Vector_27" />
          <path d={svgPaths.p34595600} fill="var(--fill-0, #E0E0E0)" id="Vector_28" />
          <path d={svgPaths.p3b3af280} fill="var(--fill-0, #E0E0E0)" id="Vector_29" />
          <path d={svgPaths.p200f8d00} fill="var(--fill-0, #E0E0E0)" id="Vector_30" />
          <path d={svgPaths.p369f4e00} fill="var(--fill-0, #E0E0E0)" id="Vector_31" />
          <path d={svgPaths.p33708700} fill="var(--fill-0, #E0E0E0)" id="Vector_32" />
          <path d={svgPaths.p5897510} fill="var(--fill-0, #E0E0E0)" id="Vector_33" />
          <path d={svgPaths.p1c169b80} fill="var(--fill-0, #E0E0E0)" id="Vector_34" />
          <path d={svgPaths.p2231a000} fill="var(--fill-0, #E0E0E0)" id="Vector_35" />
          <path d={svgPaths.p251ef00} fill="var(--fill-0, #EBEBEB)" id="Vector_36" />
          <path d={svgPaths.pee32a80} fill="var(--fill-0, #EBEBEB)" id="Vector_37" />
          <path d={svgPaths.p3c875700} fill="var(--fill-0, #E0E0E0)" id="Vector_38" />
          <path d={svgPaths.p15658a00} fill="var(--fill-0, #EBEBEB)" id="Vector_39" />
          <path d={svgPaths.p2b71b880} fill="var(--fill-0, #E0E0E0)" id="Vector_40" />
          <path d={svgPaths.p4765200} fill="var(--fill-0, #E0E0E0)" id="Vector_41" />
          <path d={svgPaths.p21ecb770} fill="var(--fill-0, #E0E0E0)" id="Vector_42" />
          <path d={svgPaths.p152bba00} fill="var(--fill-0, #E0E0E0)" id="Vector_43" />
          <path d={svgPaths.p25559580} fill="var(--fill-0, #E0E0E0)" id="Vector_44" />
          <path d={svgPaths.pc8ff100} fill="var(--fill-0, #E0E0E0)" id="Vector_45" />
          <path d={svgPaths.p2b489e80} fill="var(--fill-0, #E0E0E0)" id="Vector_46" />
          <path d={svgPaths.pfd3d900} fill="var(--fill-0, #EBEBEB)" id="Vector_47" />
          <path d={svgPaths.p21e4b6f0} fill="var(--fill-0, #E0E0E0)" id="Vector_48" />
          <path d={svgPaths.p32dc4500} fill="var(--fill-0, #E0E0E0)" id="Vector_49" />
          <path d={svgPaths.p8dea500} fill="var(--fill-0, #E0E0E0)" id="Vector_50" />
          <path d={svgPaths.p9b17a40} fill="var(--fill-0, #E0E0E0)" id="Vector_51" />
          <path d={svgPaths.pee55200} fill="var(--fill-0, #E0E0E0)" id="Vector_52" />
          <path d={svgPaths.p1701f900} fill="var(--fill-0, #E0E0E0)" id="Vector_53" />
          <path d={svgPaths.p238d4b00} fill="var(--fill-0, #E0E0E0)" id="Vector_54" />
          <path d={svgPaths.pa7fb200} fill="var(--fill-0, #E0E0E0)" id="Vector_55" />
          <path d={svgPaths.p228a4a00} fill="var(--fill-0, #EBEBEB)" id="Vector_56" />
          <path d={svgPaths.p1c5b9380} fill="var(--fill-0, #E0E0E0)" id="Vector_57" />
          <path d={svgPaths.p29863c80} fill="var(--fill-0, #E0E0E0)" id="Vector_58" />
          <path d={svgPaths.p318a06f0} fill="var(--fill-0, #EBEBEB)" id="Vector_59" />
          <path d={svgPaths.p381e7a00} fill="var(--fill-0, #E0E0E0)" id="Vector_60" />
          <path d={svgPaths.p8916400} fill="var(--fill-0, #E0E0E0)" id="Vector_61" />
          <path d={svgPaths.p26352700} fill="var(--fill-0, #E0E0E0)" id="Vector_62" />
          <path d={svgPaths.pceb0c80} fill="var(--fill-0, #E0E0E0)" id="Vector_63" />
          <path d={svgPaths.p2ed6ce00} fill="var(--fill-0, #E0E0E0)" id="Vector_64" />
          <path d={svgPaths.p109b3780} fill="var(--fill-0, #EBEBEB)" id="Vector_65" />
          <path d={svgPaths.p5cd0400} fill="var(--fill-0, #E0E0E0)" id="Vector_66" />
          <path d={svgPaths.p6504700} fill="var(--fill-0, #E0E0E0)" id="Vector_67" />
          <path d={svgPaths.p39056d00} fill="var(--fill-0, #E0E0E0)" id="Vector_68" />
          <path d={svgPaths.p1d5ea7a0} fill="var(--fill-0, #E0E0E0)" id="Vector_69" />
          <path d={svgPaths.p4c98e52} fill="var(--fill-0, #E0E0E0)" id="Vector_70" />
          <path d={svgPaths.p262b600} fill="var(--fill-0, #E0E0E0)" id="Vector_71" />
          <path d={svgPaths.p3d01bd80} fill="var(--fill-0, #F5F5F5)" id="Vector_72" />
          <path d={svgPaths.p343a0600} fill="var(--fill-0, #E0E0E0)" id="Vector_73" />
        </g>
      </svg>
    </div>
  );
}

function BackgroundSimple3() {
  return (
    <div className="col-1 h-[83.215px] ml-[29.94px] mt-[8.39px] relative row-1 w-[96.418px]" data-name="background-simple">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="background-simple" opacity="0">
          <path d={svgPaths.p1b100000} fill="var(--fill-0, #F5F5F5)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Floor2() {
  return (
    <div className="col-1 h-[0.151px] ml-[7.06px] mt-[129.63px] relative row-1 w-[118.84px]" data-name="Floor">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 118.84 0.151088">
        <g id="Floor">
          <path d={svgPaths.p12530680} fill="var(--fill-0, #263238)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Plant1() {
  return (
    <div className="col-1 h-[21.843px] ml-[92.46px] mt-[48.29px] relative row-1 w-[13.679px]" data-name="Plant">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.6786 21.8433">
        <g id="Plant">
          <path d={svgPaths.p1d7c6580} fill="var(--fill-0, #455A64)" id="Vector" />
          <path d={svgPaths.pd32fdb0} fill="var(--fill-0, #455A64)" id="Vector_2" />
          <path d={svgPaths.pd3ab200} fill="var(--fill-0, #455A64)" id="Vector_3" />
          <path d={svgPaths.p5d5e680} fill="var(--fill-0, #455A64)" id="Vector_4" />
          <path d={svgPaths.p3eb15680} fill="var(--fill-0, #263238)" id="Vector_5" />
          <path d={svgPaths.p257d9200} fill="var(--fill-0, #263238)" id="Vector_6" />
          <path d={svgPaths.p35f7e900} fill="var(--fill-0, #263238)" id="Vector_7" />
          <path d={svgPaths.p3f802900} fill="var(--fill-0, #263238)" id="Vector_8" />
          <path d={svgPaths.p284b5580} fill="var(--fill-0, #455A64)" id="Vector_9" />
          <path d={svgPaths.p3f6d7b00} fill="var(--fill-0, #263238)" id="Vector_10" />
          <path d={svgPaths.p1cdaa700} fill="var(--fill-0, #263238)" id="Vector_11" />
          <path d={svgPaths.p11636500} fill="var(--fill-0, #263238)" id="Vector_12" />
          <path d={svgPaths.p17eb300} fill="var(--fill-0, #595BD4)" id="Vector_13" />
          <g id="Group" opacity="0.3">
            <path d={svgPaths.p53f2400} fill="var(--fill-0, black)" id="Vector_14" />
          </g>
          <path d={svgPaths.p3540c380} fill="var(--fill-0, #595BD4)" id="Vector_15" />
        </g>
      </svg>
    </div>
  );
}

function Mail() {
  return (
    <div className="col-1 h-[11.032px] ml-[36.73px] mt-[3.31px] relative row-1 w-[13.464px]" data-name="Mail">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.4645 11.0322">
        <g id="Mail">
          <path d={svgPaths.p3b41da00} fill="var(--fill-0, #595BD4)" id="Vector" />
          <path d={svgPaths.p2b565980} fill="var(--fill-0, #263238)" id="Vector_2" />
          <path d={svgPaths.p3e406280} fill="var(--fill-0, #263238)" id="Vector_3" />
          <path d={svgPaths.p126d0780} fill="var(--fill-0, #263238)" id="Vector_4" />
        </g>
      </svg>
    </div>
  );
}

function Document() {
  return (
    <div className="col-1 h-[17.036px] ml-[87.58px] mt-[2.48px] relative row-1 w-[13.821px]" data-name="Document">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.8215 17.0365">
        <g id="Document">
          <path d={svgPaths.p34eb1800} fill="var(--fill-0, #595BD4)" id="Vector" />
          <path d={svgPaths.p21977400} fill="var(--fill-0, #595BD4)" id="Vector_2" />
          <g id="Group" opacity="0.2">
            <path d={svgPaths.p14526ef0} fill="var(--fill-0, black)" id="Vector_3" />
          </g>
          <g id="Group_2" opacity="0.3">
            <path d={svgPaths.p17f93300} fill="var(--fill-0, white)" id="Vector_4" />
          </g>
          <path d={svgPaths.p17a6e980} fill="var(--fill-0, #FAFAFA)" id="Vector_5" />
          <path d={svgPaths.p2106b00} fill="var(--fill-0, #FAFAFA)" id="Vector_6" />
          <path d={svgPaths.p3b078800} fill="var(--fill-0, #FAFAFA)" id="Vector_7" />
          <path d={svgPaths.p3276f800} fill="var(--fill-0, #FAFAFA)" id="Vector_8" />
          <path d={svgPaths.p4897e00} fill="var(--fill-0, #FAFAFA)" id="Vector_9" />
          <path d={svgPaths.p13773b00} fill="var(--fill-0, #FAFAFA)" id="Vector_10" />
        </g>
      </svg>
    </div>
  );
}

function Clock() {
  return (
    <div className="col-1 h-[21.888px] ml-[54.95px] mt-0 relative row-1 w-[28.389px]" data-name="Clock">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28.3885 21.888">
        <g id="Clock">
          <path d={svgPaths.p12369900} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p2ed00b80} fill="var(--fill-0, #263238)" id="Vector_2" />
          <path d={svgPaths.p22183780} fill="var(--fill-0, #263238)" id="Vector_3" />
          <path d={svgPaths.pc06cb00} fill="var(--fill-0, #263238)" id="Vector_4" />
          <path d={svgPaths.p123cfa00} fill="var(--fill-0, #263238)" id="Vector_5" />
          <path d={svgPaths.p370f55c0} fill="var(--fill-0, #263238)" id="Vector_6" />
          <path d={svgPaths.p2181d080} fill="var(--fill-0, #263238)" id="Vector_7" />
          <path d={svgPaths.p25121400} fill="var(--fill-0, #263238)" id="Vector_8" />
          <path d={svgPaths.p26d0600} fill="var(--fill-0, #263238)" id="Vector_9" />
          <path d={svgPaths.pc87cc00} fill="var(--fill-0, #263238)" id="Vector_10" />
          <path d={svgPaths.pb66ea00} fill="var(--fill-0, #263238)" id="Vector_11" />
          <path d={svgPaths.p1f3340f2} fill="var(--fill-0, #263238)" id="Vector_12" />
          <path d={svgPaths.p3f06eb70} fill="var(--fill-0, #263238)" id="Vector_13" />
          <path d={svgPaths.p292f6af0} fill="var(--fill-0, #263238)" id="Vector_14" />
          <path d={svgPaths.p372435c0} fill="var(--fill-0, #263238)" id="Vector_15" />
          <path d={svgPaths.p11ce4500} fill="var(--fill-0, #263238)" id="Vector_16" />
          <path d={svgPaths.p3ca41c20} fill="var(--fill-0, #263238)" id="Vector_17" />
          <path d={svgPaths.p434a980} fill="var(--fill-0, #263238)" id="Vector_18" />
          <path d={svgPaths.p31b45000} fill="var(--fill-0, #263238)" id="Vector_19" />
          <path d={svgPaths.p9693400} fill="var(--fill-0, #263238)" id="Vector_20" />
          <path d={svgPaths.p38f66470} fill="var(--fill-0, #263238)" id="Vector_21" />
          <path d={svgPaths.p20d8e600} fill="var(--fill-0, #263238)" id="Vector_22" />
          <path d={svgPaths.p13e62a00} fill="var(--fill-0, #263238)" id="Vector_23" />
          <path d={svgPaths.p3ebf1d00} fill="var(--fill-0, #263238)" id="Vector_24" />
          <path d={svgPaths.p345dd3e0} fill="var(--fill-0, #263238)" id="Vector_25" />
          <path d={svgPaths.p29f30f00} fill="var(--fill-0, #263238)" id="Vector_26" />
          <path d={svgPaths.p372b5fa0} fill="var(--fill-0, #263238)" id="Vector_27" />
        </g>
      </svg>
    </div>
  );
}

function Progress() {
  return (
    <div className="col-1 h-[12.849px] ml-[51.01px] mt-[30.13px] relative row-1 w-[40.322px]" data-name="Progress">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40.3222 12.8487">
        <g id="Progress">
          <path d={svgPaths.p193dad60} fill="var(--fill-0, #FAFAFA)" id="Vector" />
          <path d={svgPaths.p38cf7ff0} fill="var(--fill-0, #263238)" id="Vector_2" />
          <path d={svgPaths.p2732a780} fill="var(--fill-0, #595BD4)" id="Vector_3" />
          <path d={svgPaths.p2d51b9f0} fill="var(--fill-0, #263238)" id="Vector_4" />
          <path d={svgPaths.p2bec3500} fill="var(--fill-0, #263238)" id="Vector_5" />
          <path d={svgPaths.p21267080} fill="var(--fill-0, #263238)" id="Vector_6" />
          <path d={svgPaths.p2bc8db00} fill="var(--fill-0, #263238)" id="Vector_7" />
          <path d={svgPaths.p171c4700} fill="var(--fill-0, #263238)" id="Vector_8" />
          <path d={svgPaths.p5a3c4f0} fill="var(--fill-0, #263238)" id="Vector_9" />
          <path d={svgPaths.p2df6200} fill="var(--fill-0, #263238)" id="Vector_10" />
          <g id="Group" opacity="0.3">
            <path d={svgPaths.p147d7080} fill="var(--fill-0, white)" id="Vector_11" />
          </g>
          <g id="Group_2" opacity="0.3">
            <path d={svgPaths.pa8c4200} fill="var(--fill-0, white)" id="Vector_12" />
          </g>
          <g id="Group_3" opacity="0.3">
            <path d={svgPaths.p30905f00} fill="var(--fill-0, white)" id="Vector_13" />
          </g>
          <g id="Group_4" opacity="0.3">
            <path d={svgPaths.p18061300} fill="var(--fill-0, white)" id="Vector_14" />
          </g>
          <g id="Group_5" opacity="0.3">
            <path d={svgPaths.p13a37900} fill="var(--fill-0, white)" id="Vector_15" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Character11() {
  return (
    <div className="col-1 h-[110.527px] ml-[12.4px] mt-[19.16px] relative row-1 w-[77.001px]" data-name="Character">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 77.0021 110.526">
        <g id="Character">
          <path d={svgPaths.p1da49400} fill="var(--fill-0, #E0E0E0)" id="Vector" />
          <path d={svgPaths.p303a8080} fill="var(--fill-0, #E0E0E0)" id="Vector_2" />
          <path d={svgPaths.pd4ba680} fill="var(--fill-0, #E0E0E0)" id="Vector_3" />
          <path d={svgPaths.p3f76b6c0} fill="var(--fill-0, #263238)" id="Vector_4" />
          <path d={svgPaths.pa863500} fill="var(--fill-0, #263238)" id="Vector_5" />
          <path d={svgPaths.p3131b100} fill="var(--fill-0, #263238)" id="Vector_6" />
          <path d={svgPaths.p28bf0e80} fill="var(--fill-0, #E0E0E0)" id="Vector_7" />
          <path d={svgPaths.p3e565280} fill="var(--fill-0, #E0E0E0)" id="Vector_8" />
          <path d={svgPaths.p8d82400} fill="var(--fill-0, #455A64)" id="Vector_9" />
          <path d={svgPaths.p25cf9300} fill="var(--fill-0, #263238)" id="Vector_10" />
          <path d={svgPaths.p2e2e7870} fill="var(--fill-0, #455A64)" id="Vector_11" />
          <path d={svgPaths.p22e9aa80} fill="var(--fill-0, #FFBE9D)" id="Vector_12" />
          <path d={svgPaths.p10eae300} fill="var(--fill-0, #EB996E)" id="Vector_13" />
          <path d={svgPaths.p13deb00} fill="var(--fill-0, #263238)" id="Vector_14" />
          <path d={svgPaths.p176a4500} fill="var(--fill-0, #263238)" id="Vector_15" />
          <path d={svgPaths.p21d01e00} fill="var(--fill-0, #263238)" id="Vector_16" />
          <path d={svgPaths.p1ebed540} fill="var(--fill-0, #263238)" id="Vector_17" />
          <path d={svgPaths.p40d3c00} fill="var(--fill-0, #263238)" id="Vector_18" />
          <path d={svgPaths.p3dee1500} fill="var(--fill-0, #FFBE9D)" id="Vector_19" />
          <path d={svgPaths.pebe7500} fill="var(--fill-0, #EB996E)" id="Vector_20" />
          <path d={svgPaths.p137b68f0} fill="var(--fill-0, #263238)" id="Vector_21" />
          <path d={svgPaths.p515da00} fill="var(--fill-0, #263238)" id="Vector_22" />
          <path d={svgPaths.pa0fa700} fill="var(--fill-0, #455A64)" id="Vector_23" />
          <path d={svgPaths.p1bad5ec0} fill="var(--fill-0, #455A64)" id="Vector_24" />
          <path d={svgPaths.p221b0500} fill="var(--fill-0, #263238)" id="Vector_25" />
          <path d={svgPaths.p294c43c0} fill="var(--fill-0, #263238)" id="Vector_26" />
          <path d={svgPaths.p34f7e100} fill="var(--fill-0, #263238)" id="Vector_27" />
          <path d={svgPaths.p6dc4300} fill="var(--fill-0, #595BD4)" id="Vector_28" />
          <path d={svgPaths.p18603000} fill="var(--fill-0, #595BD4)" id="Vector_29" />
          <g id="Group" opacity="0.3">
            <path d={svgPaths.p3b2fd74f} fill="var(--fill-0, black)" id="Vector_30" />
          </g>
          <path d={svgPaths.p303b4f00} fill="var(--fill-0, #263238)" id="Vector_31" />
          <path d={svgPaths.p11a31900} fill="var(--fill-0, #263238)" id="Vector_32" />
          <path d={svgPaths.p346f2e00} fill="var(--fill-0, #263238)" id="Vector_33" />
          <g id="Group_2" opacity="0.3">
            <path d={svgPaths.p10ce2b00} fill="var(--fill-0, black)" id="Vector_34" />
          </g>
          <g id="Group_3" opacity="0.3">
            <path d={svgPaths.p1d0c0280} fill="var(--fill-0, black)" id="Vector_35" />
          </g>
          <path d={svgPaths.p14382300} fill="var(--fill-0, #455A64)" id="Vector_36" />
          <g id="Group_4" opacity="0.3">
            <path d={svgPaths.p3c125eb0} fill="var(--fill-0, black)" id="Vector_37" />
          </g>
          <path d={svgPaths.p2fd6c320} fill="var(--fill-0, #E0E0E0)" id="Vector_38" />
          <g id="Group_5" opacity="0.6">
            <path d={svgPaths.p14f34400} fill="var(--fill-0, white)" id="Vector_39" />
          </g>
          <path d={svgPaths.p2ac19f80} fill="var(--fill-0, #263238)" id="Vector_40" />
          <path d={svgPaths.p2a5b8c20} fill="var(--fill-0, #263238)" id="Vector_41" />
          <path d={svgPaths.p109f9900} fill="var(--fill-0, #263238)" id="Vector_42" />
          <path d={svgPaths.p25c16200} fill="var(--fill-0, #263238)" id="Vector_43" />
          <path d={svgPaths.pd994d00} fill="var(--fill-0, #455A64)" id="Vector_44" />
          <path d={svgPaths.p24fdd6c0} fill="var(--fill-0, #E0E0E0)" id="Vector_45" />
          <g id="Group_6" opacity="0.6">
            <path d={svgPaths.p39463180} fill="var(--fill-0, white)" id="Vector_46" />
          </g>
          <path d={svgPaths.p9618800} fill="var(--fill-0, #263238)" id="Vector_47" />
          <path d={svgPaths.pbbf5400} fill="var(--fill-0, #263238)" id="Vector_48" />
          <path d={svgPaths.p36592a00} fill="var(--fill-0, #263238)" id="Vector_49" />
          <path d={svgPaths.p340c3a00} fill="var(--fill-0, #263238)" id="Vector_50" />
          <path d={svgPaths.p3afef300} fill="var(--fill-0, #263238)" id="Vector_51" />
          <path d={svgPaths.p167c5540} fill="var(--fill-0, #263238)" id="Vector_52" />
          <path d={svgPaths.p99acc00} fill="var(--fill-0, #455A64)" id="Vector_53" />
          <path d={svgPaths.p1c4cf100} fill="var(--fill-0, #FFBE9D)" id="Vector_54" />
          <path d={svgPaths.p23213900} fill="var(--fill-0, #EB996E)" id="Vector_55" />
          <path d={svgPaths.p32665400} fill="var(--fill-0, #EB996E)" id="Vector_56" />
          <path d={svgPaths.p20ad5380} fill="var(--fill-0, #EB996E)" id="Vector_57" />
          <path d={svgPaths.p1ca61680} fill="var(--fill-0, #263238)" id="Vector_58" />
          <path d={svgPaths.p3de2af00} fill="var(--fill-0, #595BD4)" id="Vector_59" />
          <path d={svgPaths.p2bdf2c00} fill="var(--fill-0, #FFBE9D)" id="Vector_60" />
          <path d={svgPaths.p1ae5e000} fill="var(--fill-0, #EB996E)" id="Vector_61" />
          <path d={svgPaths.p57cf280} fill="var(--fill-0, #EB996E)" id="Vector_62" />
          <path d={svgPaths.p18821100} fill="var(--fill-0, #263238)" id="Vector_63" />
          <path d={svgPaths.p22a0cf00} fill="var(--fill-0, #263238)" id="Vector_64" />
          <path d={svgPaths.p36d5c900} fill="var(--fill-0, #263238)" id="Vector_65" />
          <path d={svgPaths.p2fbd9380} fill="var(--fill-0, #263238)" id="Vector_66" />
          <path d={svgPaths.p3a5bdf00} fill="var(--fill-0, #455A64)" id="Vector_67" />
          <path d={svgPaths.pe698580} fill="var(--fill-0, #263238)" id="Vector_68" />
          <path d={svgPaths.p22fceb00} fill="var(--fill-0, #455A64)" id="Vector_69" />
        </g>
      </svg>
    </div>
  );
}

function Table() {
  return (
    <div className="col-1 h-[59.577px] ml-[38px] mt-[70.2px] relative row-1 w-[77.586px]" data-name="Table">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 77.5858 59.5765">
        <g id="Table">
          <path d={svgPaths.p14989080} fill="var(--fill-0, #455A64)" id="Vector" />
          <path d={svgPaths.p2c44f00} fill="var(--fill-0, #455A64)" id="Vector_2" />
          <path d={svgPaths.pea18900} fill="var(--fill-0, #263238)" id="Vector_3" />
          <path d={svgPaths.p2c45d100} fill="var(--fill-0, #455A64)" id="Vector_4" />
          <path d={svgPaths.pc23a940} fill="var(--fill-0, #263238)" id="Vector_5" />
        </g>
      </svg>
    </div>
  );
}

function WorkInProgressPana() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="work-in-progress/pana">
      <BackgroundComplete3 />
      <BackgroundSimple3 />
      <Floor2 />
      <Plant1 />
      <Mail />
      <Document />
      <Clock />
      <Progress />
      <Character11 />
      <Table />
    </div>
  );
}

function Frame10() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start leading-[normal] not-italic relative shrink-0 text-[#252525] w-full">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[20px] w-full">Work-Life Balance</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[16px] w-full">Flexible hours, remote work options, and generous vacation policy</p>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col items-start relative rounded-bl-[24px] rounded-br-[24px] shrink-0 w-[360px]">
      <Frame10 />
    </div>
  );
}

function Frame197() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full">
      <Frame9 />
    </div>
  );
}

function Frame196() {
  return (
    <div className="bg-white relative rounded-[16px] shrink-0 w-[360px]">
      <div className="content-stretch flex flex-col gap-[16px] items-start overflow-clip p-[16px] relative rounded-[inherit] size-full">
        <WorkInProgressPana />
        <Frame197 />
      </div>
      <div aria-hidden className="absolute border-[#e0e0e0] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_0px_12px_1px_rgba(159,159,159,0.15)]" />
    </div>
  );
}

function Floor3() {
  return (
    <div className="col-1 h-[77.805px] ml-0 mt-[52.2px] relative row-1 w-[134.751px]" data-name="Floor">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 134.751 77.8052">
        <g id="Floor">
          <path d={svgPaths.p1bad6f00} fill="var(--fill-0, #FAFAFA)" id="floor" />
        </g>
      </svg>
    </div>
  );
}

function Shadows1() {
  return (
    <div className="col-1 h-[51.529px] ml-[3.6px] mt-[70.15px] relative row-1 w-[118.067px]" data-name="Shadows">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 118.068 51.5288">
        <g id="Shadows">
          <path d={svgPaths.p1e30900} fill="var(--fill-0, #E0E0E0)" id="Shadow" />
          <path d={svgPaths.p3962eb00} fill="var(--fill-0, #E0E0E0)" id="shadow" />
          <path d={svgPaths.p30454770} fill="var(--fill-0, #E0E0E0)" id="shadow_2" />
          <path d={svgPaths.p336fde00} fill="var(--fill-0, #E0E0E0)" id="shadow_3" />
          <path d={svgPaths.p19e15f80} fill="var(--fill-0, #E0E0E0)" id="shadow_4" />
          <path d={svgPaths.pddbd600} fill="var(--fill-0, #E0E0E0)" id="shadow_5" />
        </g>
      </svg>
    </div>
  );
}

function Symbols() {
  return (
    <div className="col-1 h-[64.314px] ml-[2.59px] mt-0 relative row-1 w-[130.888px]" data-name="Symbols">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 130.888 64.3141">
        <g id="Symbols">
          <path d={svgPaths.p1cdb4380} fill="var(--fill-0, #F0F0F0)" id="Money" />
          <path d={svgPaths.p39200200} fill="var(--fill-0, #F0F0F0)" id="money" />
          <path d={svgPaths.pf769c00} fill="var(--fill-0, #F0F0F0)" id="money_2" />
          <path d={svgPaths.p2e5bce00} fill="var(--fill-0, #F0F0F0)" id="money_3" />
          <path d={svgPaths.p123e0a80} fill="var(--fill-0, #F0F0F0)" id="money_4" />
          <path d={svgPaths.p81c9c00} fill="var(--fill-0, #F0F0F0)" id="money_5" />
          <path d={svgPaths.p38c74380} fill="var(--fill-0, #F0F0F0)" id="money_6" />
          <path d={svgPaths.p2ee57c00} fill="var(--fill-0, #F0F0F0)" id="money_7" />
        </g>
      </svg>
    </div>
  );
}

function Plants2() {
  return (
    <div className="col-1 h-[10.791px] ml-0 mt-[7.04px] relative row-1 w-[9.544px]" data-name="plants">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.54367 10.7916">
        <g id="plants">
          <path d={svgPaths.p3ca3be00} fill="var(--fill-0, #455A64)" id="Vector" />
          <path d={svgPaths.p20590e00} fill="var(--fill-0, #455A64)" id="Vector_2" />
          <path d={svgPaths.p194ed00} fill="var(--fill-0, #455A64)" id="Vector_3" />
          <path d={svgPaths.p38397800} fill="var(--fill-0, #37474F)" id="Vector_4" />
          <path d={svgPaths.p37a6ed80} fill="var(--fill-0, #37474F)" id="Vector_5" />
          <path d={svgPaths.p3b901800} fill="var(--fill-0, #37474F)" id="Vector_6" />
          <path d={svgPaths.p2ca19500} fill="var(--fill-0, #455A64)" id="Vector_7" />
          <path d={svgPaths.p2900ecf0} fill="var(--fill-0, #37474F)" id="Vector_8" />
        </g>
      </svg>
    </div>
  );
}

function Plants3() {
  return (
    <div className="col-1 h-[15.487px] ml-[5.72px] mt-0 relative row-1 w-[6.734px]" data-name="plants">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.73286 15.4868">
        <g id="plants">
          <path d={svgPaths.p237e5980} fill="var(--fill-0, #455A64)" id="Vector" />
          <path d={svgPaths.p15399700} fill="var(--fill-0, #455A64)" id="Vector_2" />
          <path d={svgPaths.p18ed2780} fill="var(--fill-0, #455A64)" id="Vector_3" />
          <path d={svgPaths.pc54df00} fill="var(--fill-0, #37474F)" id="Vector_4" />
          <path d={svgPaths.p1239f80} fill="var(--fill-0, #37474F)" id="Vector_5" />
          <path d={svgPaths.p3a50f000} fill="var(--fill-0, #37474F)" id="Vector_6" />
          <path d={svgPaths.p2edce680} fill="var(--fill-0, #455A64)" id="Vector_7" />
          <path d={svgPaths.p1dc5e600} fill="var(--fill-0, #37474F)" id="Vector_8" />
        </g>
      </svg>
    </div>
  );
}

function Plants1() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1" data-name="plants">
      <Plants2 />
      <Plants3 />
    </div>
  );
}

function Plants5() {
  return (
    <div className="col-1 h-[10.855px] ml-0 mt-0 relative row-1 w-[9.837px]" data-name="plants">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.83672 10.8554">
        <g id="plants">
          <path d={svgPaths.p35661a00} fill="var(--fill-0, #455A64)" id="Vector" />
          <path d={svgPaths.p153880} fill="var(--fill-0, #455A64)" id="Vector_2" />
          <path d={svgPaths.pb135d70} fill="var(--fill-0, #455A64)" id="Vector_3" />
          <path d={svgPaths.p359b5580} fill="var(--fill-0, #37474F)" id="Vector_4" />
          <path d={svgPaths.p3785e0f0} fill="var(--fill-0, #37474F)" id="Vector_5" />
          <path d={svgPaths.p1c72cb00} fill="var(--fill-0, #37474F)" id="Vector_6" />
          <path d={svgPaths.p36cf7a00} fill="var(--fill-0, #455A64)" id="Vector_7" />
          <path d={svgPaths.p3994c400} fill="var(--fill-0, #37474F)" id="Vector_8" />
        </g>
      </svg>
    </div>
  );
}

function Plants4() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[102.89px] mt-[24.5px] place-items-start relative row-1" data-name="plants">
      <Plants5 />
    </div>
  );
}

function Plants() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[15.08px] mt-[61.68px] place-items-start relative row-1" data-name="Plants">
      <Plants1 />
      <Plants4 />
    </div>
  );
}

function Arrow() {
  return (
    <div className="col-1 h-[62.103px] ml-[40.15px] mt-0 relative row-1 w-[62.174px]" data-name="Arrow">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 62.1739 62.1034">
        <g id="Arrow">
          <path d={svgPaths.p1ebcd300} fill="var(--fill-0, #595BD4)" id="Vector" />
          <path d={svgPaths.p242ca100} fill="var(--fill-0, #595BD4)" id="Vector_2" />
          <path d={svgPaths.p2d194130} fill="var(--fill-0, white)" id="Vector_3" opacity="0.3" />
          <path d={svgPaths.p3de01000} fill="var(--fill-0, black)" id="Vector_4" opacity="0.15" />
          <path d={svgPaths.p324b4100} fill="var(--fill-0, black)" id="Vector_5" opacity="0.3" />
        </g>
      </svg>
    </div>
  );
}

function Arrow1() {
  return (
    <div className="col-1 h-[48.254px] ml-0 mt-[27.73px] relative row-1 w-[46.184px]" data-name="arrow">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 46.1836 48.2533">
        <g id="arrow">
          <path d={svgPaths.p183d0ff0} fill="var(--fill-0, #595BD4)" id="Vector" />
          <path d={svgPaths.p183d0ff0} fill="var(--fill-0, white)" id="Vector_2" opacity="0.4" />
          <path d={svgPaths.p80bcb00} fill="var(--fill-0, #595BD4)" id="Vector_3" />
          <path d={svgPaths.p80bcb00} fill="var(--fill-0, white)" id="Vector_4" opacity="0.6" />
          <path d={svgPaths.p3b766d00} fill="var(--fill-0, #595BD4)" id="Vector_5" />
          <path d={svgPaths.p3b766d00} fill="var(--fill-0, white)" id="Vector_6" opacity="0.8" />
          <path d={svgPaths.p4eaf400} fill="var(--fill-0, #595BD4)" id="Vector_7" opacity="0.3" />
        </g>
      </svg>
    </div>
  );
}

function Arrow2() {
  return (
    <div className="col-1 h-[42.883px] ml-[74.58px] mt-[39.56px] relative row-1 w-[41.48px]" data-name="arrow">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 41.4797 42.8829">
        <g id="arrow">
          <path d={svgPaths.p33651300} fill="var(--fill-0, #595BD4)" id="Vector" />
          <path d={svgPaths.p33651300} fill="var(--fill-0, white)" id="Vector_2" opacity="0.4" />
          <path d={svgPaths.p385d1800} fill="var(--fill-0, #595BD4)" id="Vector_3" />
          <path d={svgPaths.p385d1800} fill="var(--fill-0, white)" id="Vector_4" opacity="0.6" />
          <path d={svgPaths.p345a77f0} fill="var(--fill-0, #595BD4)" id="Vector_5" />
          <path d={svgPaths.p345a77f0} fill="var(--fill-0, white)" id="Vector_6" opacity="0.8" />
          <path d={svgPaths.p2e9c9a80} fill="var(--fill-0, #595BD4)" id="Vector_7" opacity="0.3" />
        </g>
      </svg>
    </div>
  );
}

function Arrows() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[15.86px] mt-[16.24px] place-items-start relative row-1" data-name="Arrows">
      <Arrow />
      <Arrow1 />
      <Arrow2 />
    </div>
  );
}

function Coin() {
  return (
    <div className="col-1 h-[11.641px] ml-0 mt-0 relative row-1 w-[19.224px]" data-name="Coin">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.2238 11.6413">
        <g id="Coin">
          <path d={svgPaths.p872e80} fill="var(--fill-0, #595BD4)" id="Vector" />
          <path d={svgPaths.p872e80} fill="var(--fill-0, black)" id="Vector_2" opacity="0.25" />
          <path d={svgPaths.p3d088600} fill="var(--fill-0, black)" id="Vector_3" opacity="0.1" />
          <path d={svgPaths.p9d34100} fill="var(--fill-0, black)" id="Vector_4" opacity="0.1" />
          <path d={svgPaths.p19308c80} fill="var(--fill-0, #595BD4)" id="Vector_5" opacity="0.5" />
          <path d={svgPaths.p363fe80} fill="var(--fill-0, #595BD4)" id="Vector_6" />
          <path d={svgPaths.p363fe80} fill="var(--fill-0, black)" id="Vector_7" opacity="0.2" />
          <path d={svgPaths.p383d9280} fill="var(--fill-0, #F5F5F5)" id="Vector_8" opacity="0.5" />
          <path d={svgPaths.p3d36aa00} fill="var(--fill-0, #F5F5F5)" id="Vector_9" opacity="0.5" />
          <path d={svgPaths.p3faa3000} fill="var(--fill-0, #595BD4)" id="Vector_10" />
          <path d={svgPaths.p3faa3000} fill="var(--fill-0, white)" id="Vector_11" opacity="0.4" />
          <path d={svgPaths.p3de9bc80} fill="var(--fill-0, white)" id="Vector_12" opacity="0.2" />
          <path d={svgPaths.p30305000} fill="var(--fill-0, white)" id="Vector_13" opacity="0.5" />
          <path d={svgPaths.p9f1bc80} fill="var(--fill-0, #595BD4)" id="Vector_14" />
          <path d={svgPaths.p9f1bc80} fill="var(--fill-0, white)" id="Vector_15" opacity="0.3" />
          <path d={svgPaths.pc11be00} fill="var(--fill-0, #595BD4)" id="Vector_16" />
          <path d={svgPaths.pc11be00} fill="var(--fill-0, black)" id="Vector_17" opacity="0.2" />
          <path d={svgPaths.p25f00300} fill="var(--fill-0, #595BD4)" id="Vector_18" />
          <path d={svgPaths.p25f00300} fill="var(--fill-0, black)" id="Vector_19" opacity="0.5" />
          <path d={svgPaths.p1fe34180} fill="var(--fill-0, #595BD4)" id="Vector_20" />
          <path d={svgPaths.p1fe34180} fill="var(--fill-0, black)" id="Vector_21" opacity="0.35" />
          <path d={svgPaths.pd748f00} fill="var(--fill-0, #595BD4)" id="Vector_22" />
          <path d={svgPaths.p2a2e72f0} fill="var(--fill-0, #595BD4)" id="Vector_23" />
          <g id="Group" opacity="0.3">
            <path d={svgPaths.p2b30b100} fill="var(--fill-0, white)" id="Vector_24" />
          </g>
          <path d={svgPaths.pee45940} fill="var(--fill-0, #F5F5F5)" id="Vector_25" opacity="0.45" />
          <path d={svgPaths.p10641c80} fill="var(--fill-0, #F5F5F5)" id="Vector_26" opacity="0.45" />
          <path d={svgPaths.p2d7e972} fill="var(--fill-0, #F5F5F5)" id="Vector_27" opacity="0.45" />
          <path d={svgPaths.p24e54d00} fill="var(--fill-0, #F5F5F5)" id="Vector_28" opacity="0.45" />
          <path d={svgPaths.pa7f0300} fill="var(--fill-0, #F5F5F5)" id="Vector_29" opacity="0.45" />
          <path d={svgPaths.p1633c280} fill="var(--fill-0, #F5F5F5)" id="Vector_30" opacity="0.45" />
          <path d={svgPaths.p3b271f00} fill="var(--fill-0, #F5F5F5)" id="Vector_31" opacity="0.45" />
          <path d={svgPaths.p270e000} fill="var(--fill-0, white)" id="Vector_32" />
        </g>
      </svg>
    </div>
  );
}

function Coins1() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[97.68px] mt-[25.73px] place-items-start relative row-1" data-name="coins">
      <Coin />
    </div>
  );
}

function Coin1() {
  return (
    <div className="col-1 h-[11.641px] ml-[1.2px] mt-[6.65px] relative row-1 w-[17.358px]" data-name="coin">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.3583 11.6406">
        <g id="coin">
          <path d={svgPaths.p77bac00} fill="var(--fill-0, #595BD4)" id="Vector" />
          <path d={svgPaths.p77bac00} fill="var(--fill-0, black)" id="Vector_2" opacity="0.25" />
          <path d={svgPaths.p3f0f5a00} fill="var(--fill-0, black)" id="Vector_3" opacity="0.1" />
          <path d={svgPaths.pd5de400} fill="var(--fill-0, black)" id="Vector_4" opacity="0.1" />
          <path d={svgPaths.p1a5e1880} fill="var(--fill-0, #595BD4)" id="Vector_5" opacity="0.5" />
          <path d={svgPaths.p31ce2a0} fill="var(--fill-0, #595BD4)" id="Vector_6" />
          <path d={svgPaths.p31ce2a0} fill="var(--fill-0, black)" id="Vector_7" opacity="0.2" />
          <path d={svgPaths.p25783f00} fill="var(--fill-0, #F5F5F5)" id="Vector_8" opacity="0.5" />
          <path d={svgPaths.p18f4cc80} fill="var(--fill-0, #F5F5F5)" id="Vector_9" opacity="0.5" />
          <path d={svgPaths.p3f299800} fill="var(--fill-0, #595BD4)" id="Vector_10" />
          <path d={svgPaths.p3f299800} fill="var(--fill-0, white)" id="Vector_11" opacity="0.4" />
          <path d={svgPaths.p35238e00} fill="var(--fill-0, white)" id="Vector_12" opacity="0.2" />
          <path d={svgPaths.ped04b80} fill="var(--fill-0, white)" id="Vector_13" opacity="0.5" />
          <path d={svgPaths.p189a1d80} fill="var(--fill-0, #595BD4)" id="Vector_14" />
          <path d={svgPaths.p189a1d80} fill="var(--fill-0, white)" id="Vector_15" opacity="0.3" />
          <path d={svgPaths.p2a3ca900} fill="var(--fill-0, #595BD4)" id="Vector_16" />
          <path d={svgPaths.p2a3ca900} fill="var(--fill-0, black)" id="Vector_17" opacity="0.2" />
          <path d={svgPaths.p3fd61280} fill="var(--fill-0, #595BD4)" id="Vector_18" />
          <path d={svgPaths.p3fd61280} fill="var(--fill-0, black)" id="Vector_19" opacity="0.5" />
          <path d={svgPaths.p8a0ee00} fill="var(--fill-0, #595BD4)" id="Vector_20" />
          <path d={svgPaths.p8a0ee00} fill="var(--fill-0, black)" id="Vector_21" opacity="0.35" />
          <path d={svgPaths.p3626a7b0} fill="var(--fill-0, #595BD4)" id="Vector_22" />
          <path d={svgPaths.p1acc8b80} fill="var(--fill-0, #595BD4)" id="Vector_23" />
          <g id="Group" opacity="0.3">
            <path d={svgPaths.p37e37380} fill="var(--fill-0, white)" id="Vector_24" />
          </g>
          <path d={svgPaths.pa2daa00} fill="var(--fill-0, #F5F5F5)" id="Vector_25" opacity="0.45" />
          <path d={svgPaths.p15d0b580} fill="var(--fill-0, #F5F5F5)" id="Vector_26" opacity="0.45" />
          <path d={svgPaths.p22fe5870} fill="var(--fill-0, #F5F5F5)" id="Vector_27" opacity="0.45" />
          <path d={svgPaths.p34dc9480} fill="var(--fill-0, #F5F5F5)" id="Vector_28" opacity="0.45" />
          <path d={svgPaths.p341e7280} fill="var(--fill-0, #F5F5F5)" id="Vector_29" opacity="0.45" />
          <path d={svgPaths.p2e81a680} fill="var(--fill-0, #F5F5F5)" id="Vector_30" opacity="0.45" />
          <path d={svgPaths.p8652500} fill="var(--fill-0, #F5F5F5)" id="Vector_31" opacity="0.45" />
        </g>
      </svg>
    </div>
  );
}

function Coin2() {
  return (
    <div className="col-1 h-[11.643px] ml-[2.26px] mt-[4px] relative row-1 w-[17.369px]" data-name="coin">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.3691 11.6435">
        <g id="coin">
          <path d={svgPaths.p91d300} fill="var(--fill-0, #595BD4)" id="Vector" />
          <path d={svgPaths.p91d300} fill="var(--fill-0, black)" id="Vector_2" opacity="0.25" />
          <path d={svgPaths.p3f348380} fill="var(--fill-0, black)" id="Vector_3" opacity="0.1" />
          <path d={svgPaths.p41a1900} fill="var(--fill-0, black)" id="Vector_4" opacity="0.1" />
          <path d={svgPaths.pc8a9af0} fill="var(--fill-0, #595BD4)" id="Vector_5" opacity="0.5" />
          <path d={svgPaths.p3d214200} fill="var(--fill-0, #595BD4)" id="Vector_6" />
          <path d={svgPaths.p3d214200} fill="var(--fill-0, black)" id="Vector_7" opacity="0.2" />
          <path d={svgPaths.p15e50f00} fill="var(--fill-0, #F5F5F5)" id="Vector_8" opacity="0.5" />
          <path d={svgPaths.p1e004e00} fill="var(--fill-0, #F5F5F5)" id="Vector_9" opacity="0.5" />
          <path d={svgPaths.pb67a500} fill="var(--fill-0, #595BD4)" id="Vector_10" />
          <path d={svgPaths.pb67a500} fill="var(--fill-0, white)" id="Vector_11" opacity="0.4" />
          <path d={svgPaths.p2bbbca00} fill="var(--fill-0, white)" id="Vector_12" opacity="0.2" />
          <path d={svgPaths.p18593200} fill="var(--fill-0, white)" id="Vector_13" opacity="0.5" />
          <path d={svgPaths.p1c362a00} fill="var(--fill-0, #595BD4)" id="Vector_14" />
          <path d={svgPaths.p1c362a00} fill="var(--fill-0, white)" id="Vector_15" opacity="0.3" />
          <path d={svgPaths.p37934600} fill="var(--fill-0, #595BD4)" id="Vector_16" />
          <path d={svgPaths.p37934600} fill="var(--fill-0, black)" id="Vector_17" opacity="0.2" />
          <path d={svgPaths.p10222880} fill="var(--fill-0, #595BD4)" id="Vector_18" />
          <path d={svgPaths.p10222880} fill="var(--fill-0, black)" id="Vector_19" opacity="0.5" />
          <path d={svgPaths.p24845480} fill="var(--fill-0, #595BD4)" id="Vector_20" />
          <path d={svgPaths.p24845480} fill="var(--fill-0, black)" id="Vector_21" opacity="0.35" />
          <path d={svgPaths.p3199ca00} fill="var(--fill-0, #595BD4)" id="Vector_22" />
          <path d={svgPaths.p2f02500} fill="var(--fill-0, #595BD4)" id="Vector_23" />
          <g id="Group" opacity="0.3">
            <path d={svgPaths.p2f02500} fill="var(--fill-0, white)" id="Vector_24" />
          </g>
          <path d={svgPaths.p3c55a800} fill="var(--fill-0, #F5F5F5)" id="Vector_25" opacity="0.45" />
          <path d={svgPaths.p7acd000} fill="var(--fill-0, #F5F5F5)" id="Vector_26" opacity="0.45" />
          <path d={svgPaths.p21fb6980} fill="var(--fill-0, #F5F5F5)" id="Vector_27" opacity="0.45" />
          <path d={svgPaths.p32c81a00} fill="var(--fill-0, #F5F5F5)" id="Vector_28" opacity="0.45" />
          <path d={svgPaths.p35fc2400} fill="var(--fill-0, #F5F5F5)" id="Vector_29" opacity="0.45" />
          <path d={svgPaths.ped37800} fill="var(--fill-0, #F5F5F5)" id="Vector_30" opacity="0.45" />
          <path d={svgPaths.p227dcf00} fill="var(--fill-0, #F5F5F5)" id="Vector_31" opacity="0.45" />
        </g>
      </svg>
    </div>
  );
}

function Coin3() {
  return (
    <div className="col-1 h-[11.641px] ml-[0.93px] mt-[2.27px] relative row-1 w-[17.361px]" data-name="coin">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.36 11.641">
        <g id="coin">
          <path d={svgPaths.p26eee80} fill="var(--fill-0, #595BD4)" id="Vector" />
          <path d={svgPaths.p26eee80} fill="var(--fill-0, black)" id="Vector_2" opacity="0.25" />
          <path d={svgPaths.pf760780} fill="var(--fill-0, black)" id="Vector_3" opacity="0.1" />
          <path d={svgPaths.p1e40d600} fill="var(--fill-0, black)" id="Vector_4" opacity="0.1" />
          <path d={svgPaths.p25b7d580} fill="var(--fill-0, #595BD4)" id="Vector_5" opacity="0.5" />
          <path d={svgPaths.p3cdd1c70} fill="var(--fill-0, #595BD4)" id="Vector_6" />
          <path d={svgPaths.p3cdd1c70} fill="var(--fill-0, black)" id="Vector_7" opacity="0.2" />
          <path d={svgPaths.p4ee3e40} fill="var(--fill-0, #F5F5F5)" id="Vector_8" opacity="0.5" />
          <path d={svgPaths.p311fa780} fill="var(--fill-0, #F5F5F5)" id="Vector_9" opacity="0.5" />
          <path d={svgPaths.pe598400} fill="var(--fill-0, #595BD4)" id="Vector_10" />
          <path d={svgPaths.pe598400} fill="var(--fill-0, white)" id="Vector_11" opacity="0.4" />
          <path d={svgPaths.p16882cf0} fill="var(--fill-0, white)" id="Vector_12" opacity="0.2" />
          <path d={svgPaths.p1a1d7300} fill="var(--fill-0, white)" id="Vector_13" opacity="0.5" />
          <path d={svgPaths.p116ace80} fill="var(--fill-0, #595BD4)" id="Vector_14" />
          <path d={svgPaths.p116ace80} fill="var(--fill-0, white)" id="Vector_15" opacity="0.3" />
          <path d={svgPaths.p19180570} fill="var(--fill-0, #595BD4)" id="Vector_16" />
          <path d={svgPaths.p19180570} fill="var(--fill-0, black)" id="Vector_17" opacity="0.2" />
          <path d={svgPaths.p393b45c0} fill="var(--fill-0, #595BD4)" id="Vector_18" />
          <path d={svgPaths.p393b45c0} fill="var(--fill-0, black)" id="Vector_19" opacity="0.5" />
          <path d={svgPaths.p242e1b80} fill="var(--fill-0, #595BD4)" id="Vector_20" />
          <path d={svgPaths.p242e1b80} fill="var(--fill-0, black)" id="Vector_21" opacity="0.35" />
          <path d={svgPaths.p7628700} fill="var(--fill-0, #595BD4)" id="Vector_22" />
          <path d={svgPaths.p34e61000} fill="var(--fill-0, #595BD4)" id="Vector_23" />
          <g id="Group" opacity="0.3">
            <path d={svgPaths.p18506500} fill="var(--fill-0, white)" id="Vector_24" />
          </g>
          <path d={svgPaths.p30fdf180} fill="var(--fill-0, #F5F5F5)" id="Vector_25" opacity="0.45" />
          <path d={svgPaths.p3d0b300} fill="var(--fill-0, #F5F5F5)" id="Vector_26" opacity="0.45" />
          <path d={svgPaths.p33db9100} fill="var(--fill-0, #F5F5F5)" id="Vector_27" opacity="0.45" />
          <path d={svgPaths.p39e3c580} fill="var(--fill-0, #F5F5F5)" id="Vector_28" opacity="0.45" />
          <path d={svgPaths.p20683a00} fill="var(--fill-0, #F5F5F5)" id="Vector_29" opacity="0.45" />
          <path d={svgPaths.p296d0300} fill="var(--fill-0, #F5F5F5)" id="Vector_30" opacity="0.45" />
          <path d={svgPaths.p362b6c80} fill="var(--fill-0, #F5F5F5)" id="Vector_31" opacity="0.45" />
        </g>
      </svg>
    </div>
  );
}

function Coin4() {
  return (
    <div className="col-1 h-[11.641px] ml-0 mt-0 relative row-1 w-[19.237px]" data-name="coin">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.2376 11.6409">
        <g id="coin">
          <path d={svgPaths.p22542900} fill="var(--fill-0, #595BD4)" id="Vector" />
          <path d={svgPaths.p22542900} fill="var(--fill-0, black)" id="Vector_2" opacity="0.25" />
          <path d={svgPaths.pe8ae000} fill="var(--fill-0, black)" id="Vector_3" opacity="0.1" />
          <path d={svgPaths.p3cad5200} fill="var(--fill-0, black)" id="Vector_4" opacity="0.1" />
          <path d={svgPaths.p2a070300} fill="var(--fill-0, #595BD4)" id="Vector_5" opacity="0.5" />
          <path d={svgPaths.p5587700} fill="var(--fill-0, #595BD4)" id="Vector_6" />
          <path d={svgPaths.p5587700} fill="var(--fill-0, black)" id="Vector_7" opacity="0.2" />
          <path d={svgPaths.p39d91a00} fill="var(--fill-0, #F5F5F5)" id="Vector_8" opacity="0.5" />
          <path d={svgPaths.p34669af0} fill="var(--fill-0, #F5F5F5)" id="Vector_9" opacity="0.5" />
          <path d={svgPaths.p7e8b580} fill="var(--fill-0, #595BD4)" id="Vector_10" />
          <path d={svgPaths.p7e8b580} fill="var(--fill-0, white)" id="Vector_11" opacity="0.4" />
          <path d={svgPaths.p2ee79880} fill="var(--fill-0, white)" id="Vector_12" opacity="0.2" />
          <path d={svgPaths.p2e1dc000} fill="var(--fill-0, white)" id="Vector_13" opacity="0.5" />
          <path d={svgPaths.p31983e00} fill="var(--fill-0, #595BD4)" id="Vector_14" />
          <path d={svgPaths.p31983e00} fill="var(--fill-0, white)" id="Vector_15" opacity="0.3" />
          <path d={svgPaths.p20bb0980} fill="var(--fill-0, #595BD4)" id="Vector_16" />
          <path d={svgPaths.p20bb0980} fill="var(--fill-0, black)" id="Vector_17" opacity="0.2" />
          <path d={svgPaths.p1e434000} fill="var(--fill-0, #595BD4)" id="Vector_18" />
          <path d={svgPaths.p1e434000} fill="var(--fill-0, black)" id="Vector_19" opacity="0.5" />
          <path d={svgPaths.p32606e00} fill="var(--fill-0, #595BD4)" id="Vector_20" />
          <path d={svgPaths.p32606e00} fill="var(--fill-0, black)" id="Vector_21" opacity="0.35" />
          <path d={svgPaths.p3f01a200} fill="var(--fill-0, #595BD4)" id="Vector_22" />
          <path d={svgPaths.p26bd0180} fill="var(--fill-0, #595BD4)" id="Vector_23" />
          <g id="Group" opacity="0.3">
            <path d={svgPaths.p1f99b500} fill="var(--fill-0, white)" id="Vector_24" />
          </g>
          <path d={svgPaths.p46e3200} fill="var(--fill-0, #F5F5F5)" id="Vector_25" opacity="0.45" />
          <path d={svgPaths.p2676f400} fill="var(--fill-0, #F5F5F5)" id="Vector_26" opacity="0.45" />
          <path d={svgPaths.pf24f470} fill="var(--fill-0, #F5F5F5)" id="Vector_27" opacity="0.45" />
          <path d={svgPaths.p35027800} fill="var(--fill-0, #F5F5F5)" id="Vector_28" opacity="0.45" />
          <path d={svgPaths.p34783280} fill="var(--fill-0, #F5F5F5)" id="Vector_29" opacity="0.45" />
          <path d={svgPaths.p2affea80} fill="var(--fill-0, #F5F5F5)" id="Vector_30" opacity="0.45" />
          <path d={svgPaths.p26e08200} fill="var(--fill-0, #F5F5F5)" id="Vector_31" opacity="0.45" />
          <path d={svgPaths.p242efd00} fill="var(--fill-0, white)" id="Vector_32" />
        </g>
      </svg>
    </div>
  );
}

function Coins2() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[11px] mt-[10.87px] place-items-start relative row-1" data-name="coins">
      <Coin1 />
      <Coin2 />
      <Coin3 />
      <Coin4 />
    </div>
  );
}

function Coin5() {
  return (
    <div className="col-1 h-[11.639px] ml-[1.19px] mt-[2.77px] relative row-1 w-[17.36px]" data-name="coin">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.3602 11.6394">
        <g id="coin">
          <path d={svgPaths.p33baba1} fill="var(--fill-0, #595BD4)" id="Vector" />
          <path d={svgPaths.p33baba1} fill="var(--fill-0, black)" id="Vector_2" opacity="0.25" />
          <path d={svgPaths.pf45d500} fill="var(--fill-0, black)" id="Vector_3" opacity="0.1" />
          <path d={svgPaths.p80ba300} fill="var(--fill-0, black)" id="Vector_4" opacity="0.1" />
          <path d={svgPaths.p3a658200} fill="var(--fill-0, #595BD4)" id="Vector_5" opacity="0.5" />
          <path d={svgPaths.p17133600} fill="var(--fill-0, #595BD4)" id="Vector_6" />
          <path d={svgPaths.p17133600} fill="var(--fill-0, black)" id="Vector_7" opacity="0.2" />
          <path d={svgPaths.p99aa80} fill="var(--fill-0, #F5F5F5)" id="Vector_8" opacity="0.5" />
          <path d={svgPaths.pfd3ad70} fill="var(--fill-0, #F5F5F5)" id="Vector_9" opacity="0.5" />
          <path d={svgPaths.pe5131f0} fill="var(--fill-0, #595BD4)" id="Vector_10" />
          <path d={svgPaths.pe5131f0} fill="var(--fill-0, white)" id="Vector_11" opacity="0.4" />
          <path d={svgPaths.p1718d880} fill="var(--fill-0, white)" id="Vector_12" opacity="0.2" />
          <path d={svgPaths.p1a298740} fill="var(--fill-0, white)" id="Vector_13" opacity="0.5" />
          <path d={svgPaths.p340b0880} fill="var(--fill-0, #595BD4)" id="Vector_14" />
          <path d={svgPaths.p340b0880} fill="var(--fill-0, white)" id="Vector_15" opacity="0.3" />
          <path d={svgPaths.p122b9720} fill="var(--fill-0, #595BD4)" id="Vector_16" />
          <path d={svgPaths.p122b9720} fill="var(--fill-0, black)" id="Vector_17" opacity="0.2" />
          <path d={svgPaths.p282d8d00} fill="var(--fill-0, #595BD4)" id="Vector_18" />
          <path d={svgPaths.p282d8d00} fill="var(--fill-0, black)" id="Vector_19" opacity="0.5" />
          <path d={svgPaths.p19c89680} fill="var(--fill-0, #595BD4)" id="Vector_20" />
          <path d={svgPaths.p19c89680} fill="var(--fill-0, black)" id="Vector_21" opacity="0.35" />
          <path d={svgPaths.p1849f400} fill="var(--fill-0, #595BD4)" id="Vector_22" />
          <path d={svgPaths.p13b16280} fill="var(--fill-0, #595BD4)" id="Vector_23" />
          <g id="Group" opacity="0.3">
            <path d={svgPaths.p37d22700} fill="var(--fill-0, white)" id="Vector_24" />
          </g>
          <path d={svgPaths.p6f86300} fill="var(--fill-0, #F5F5F5)" id="Vector_25" opacity="0.45" />
          <path d={svgPaths.p3fc1d00} fill="var(--fill-0, #F5F5F5)" id="Vector_26" opacity="0.45" />
          <path d={svgPaths.p149c9180} fill="var(--fill-0, #F5F5F5)" id="Vector_27" opacity="0.45" />
          <path d={svgPaths.p2a213d00} fill="var(--fill-0, #F5F5F5)" id="Vector_28" opacity="0.45" />
          <path d={svgPaths.p13922580} fill="var(--fill-0, #F5F5F5)" id="Vector_29" opacity="0.45" />
          <path d={svgPaths.p3e5c600} fill="var(--fill-0, #F5F5F5)" id="Vector_30" opacity="0.45" />
          <path d={svgPaths.p139fa580} fill="var(--fill-0, #F5F5F5)" id="Vector_31" opacity="0.45" />
        </g>
      </svg>
    </div>
  );
}

function Coin6() {
  return (
    <div className="col-1 h-[11.643px] ml-0 mt-0 relative row-1 w-[19.234px]" data-name="coin">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.2348 11.6426">
        <g id="coin">
          <path d={svgPaths.p33d94600} fill="var(--fill-0, #595BD4)" id="Vector" />
          <path d={svgPaths.p33d94600} fill="var(--fill-0, black)" id="Vector_2" opacity="0.25" />
          <path d={svgPaths.p3df8a200} fill="var(--fill-0, black)" id="Vector_3" opacity="0.1" />
          <path d={svgPaths.p3d535900} fill="var(--fill-0, black)" id="Vector_4" opacity="0.1" />
          <path d={svgPaths.p2a8bc500} fill="var(--fill-0, #595BD4)" id="Vector_5" opacity="0.5" />
          <path d={svgPaths.p117dee00} fill="var(--fill-0, #595BD4)" id="Vector_6" />
          <path d={svgPaths.p117dee00} fill="var(--fill-0, black)" id="Vector_7" opacity="0.2" />
          <path d={svgPaths.p1daec270} fill="var(--fill-0, #F5F5F5)" id="Vector_8" opacity="0.5" />
          <path d={svgPaths.p2897a200} fill="var(--fill-0, #F5F5F5)" id="Vector_9" opacity="0.5" />
          <path d={svgPaths.p37d52e00} fill="var(--fill-0, #595BD4)" id="Vector_10" />
          <path d={svgPaths.p37d52e00} fill="var(--fill-0, white)" id="Vector_11" opacity="0.4" />
          <path d={svgPaths.p16742700} fill="var(--fill-0, white)" id="Vector_12" opacity="0.2" />
          <path d={svgPaths.p2f9d3600} fill="var(--fill-0, white)" id="Vector_13" opacity="0.5" />
          <path d={svgPaths.p34a45580} fill="var(--fill-0, #595BD4)" id="Vector_14" />
          <path d={svgPaths.p34a45580} fill="var(--fill-0, white)" id="Vector_15" opacity="0.3" />
          <path d={svgPaths.p3b84fbf0} fill="var(--fill-0, #595BD4)" id="Vector_16" />
          <path d={svgPaths.p3b84fbf0} fill="var(--fill-0, black)" id="Vector_17" opacity="0.2" />
          <path d={svgPaths.p30e35100} fill="var(--fill-0, #595BD4)" id="Vector_18" />
          <path d={svgPaths.p30e35100} fill="var(--fill-0, black)" id="Vector_19" opacity="0.5" />
          <path d={svgPaths.p1daada00} fill="var(--fill-0, #595BD4)" id="Vector_20" />
          <path d={svgPaths.p1daada00} fill="var(--fill-0, black)" id="Vector_21" opacity="0.35" />
          <path d={svgPaths.pdb47180} fill="var(--fill-0, #595BD4)" id="Vector_22" />
          <path d={svgPaths.p24085840} fill="var(--fill-0, #595BD4)" id="Vector_23" />
          <g id="Group" opacity="0.3">
            <path d={svgPaths.p1e49c400} fill="var(--fill-0, white)" id="Vector_24" />
          </g>
          <path d={svgPaths.p3b7d5170} fill="var(--fill-0, #F5F5F5)" id="Vector_25" opacity="0.45" />
          <path d={svgPaths.p284f0600} fill="var(--fill-0, #F5F5F5)" id="Vector_26" opacity="0.45" />
          <path d={svgPaths.p11c25500} fill="var(--fill-0, #F5F5F5)" id="Vector_27" opacity="0.45" />
          <path d={svgPaths.paa8bf80} fill="var(--fill-0, #F5F5F5)" id="Vector_28" opacity="0.45" />
          <path d={svgPaths.p38192680} fill="var(--fill-0, #F5F5F5)" id="Vector_29" opacity="0.45" />
          <path d={svgPaths.p1316cf80} fill="var(--fill-0, #F5F5F5)" id="Vector_30" opacity="0.45" />
          <path d={svgPaths.p161b5980} fill="var(--fill-0, #F5F5F5)" id="Vector_31" opacity="0.45" />
          <path d={svgPaths.p1f9acc00} fill="var(--fill-0, white)" id="Vector_32" />
        </g>
      </svg>
    </div>
  );
}

function Coins3() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-[23.29px] place-items-start relative row-1" data-name="coins">
      <Coin5 />
      <Coin6 />
    </div>
  );
}

function Coin7() {
  return (
    <div className="col-1 h-[11.641px] ml-[1.64px] mt-[4.86px] relative row-1 w-[17.357px]" data-name="coin">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.3583 11.6412">
        <g id="coin">
          <path d={svgPaths.p1c449980} fill="var(--fill-0, #595BD4)" id="Vector" />
          <path d={svgPaths.p1c449980} fill="var(--fill-0, black)" id="Vector_2" opacity="0.25" />
          <path d={svgPaths.p1299b00} fill="var(--fill-0, black)" id="Vector_3" opacity="0.1" />
          <path d={svgPaths.p35993a80} fill="var(--fill-0, black)" id="Vector_4" opacity="0.1" />
          <path d={svgPaths.p38003f00} fill="var(--fill-0, #595BD4)" id="Vector_5" opacity="0.5" />
          <path d={svgPaths.p380ffe00} fill="var(--fill-0, #595BD4)" id="Vector_6" />
          <path d={svgPaths.p380ffe00} fill="var(--fill-0, black)" id="Vector_7" opacity="0.2" />
          <path d={svgPaths.pa352100} fill="var(--fill-0, #F5F5F5)" id="Vector_8" opacity="0.5" />
          <path d={svgPaths.p24f1aa00} fill="var(--fill-0, #F5F5F5)" id="Vector_9" opacity="0.5" />
          <path d={svgPaths.p20e41df0} fill="var(--fill-0, #595BD4)" id="Vector_10" />
          <path d={svgPaths.p20e41df0} fill="var(--fill-0, white)" id="Vector_11" opacity="0.4" />
          <path d={svgPaths.pcc51700} fill="var(--fill-0, white)" id="Vector_12" opacity="0.2" />
          <path d={svgPaths.p65d6f00} fill="var(--fill-0, white)" id="Vector_13" opacity="0.5" />
          <path d={svgPaths.p30b4af80} fill="var(--fill-0, #595BD4)" id="Vector_14" />
          <path d={svgPaths.p30b4af80} fill="var(--fill-0, white)" id="Vector_15" opacity="0.3" />
          <path d={svgPaths.p36f6c780} fill="var(--fill-0, #595BD4)" id="Vector_16" />
          <path d={svgPaths.p36f6c780} fill="var(--fill-0, black)" id="Vector_17" opacity="0.2" />
          <path d={svgPaths.p39633200} fill="var(--fill-0, #595BD4)" id="Vector_18" />
          <path d={svgPaths.p39633200} fill="var(--fill-0, black)" id="Vector_19" opacity="0.5" />
          <path d={svgPaths.p1e47900} fill="var(--fill-0, #595BD4)" id="Vector_20" />
          <path d={svgPaths.p1e47900} fill="var(--fill-0, black)" id="Vector_21" opacity="0.35" />
          <path d={svgPaths.p6913f00} fill="var(--fill-0, #595BD4)" id="Vector_22" />
          <path d={svgPaths.p1924af0} fill="var(--fill-0, #595BD4)" id="Vector_23" />
          <g id="Group" opacity="0.3">
            <path d={svgPaths.p17661f80} fill="var(--fill-0, white)" id="Vector_24" />
          </g>
          <path d={svgPaths.p35995700} fill="var(--fill-0, #F5F5F5)" id="Vector_25" opacity="0.45" />
          <path d={svgPaths.pd8fea00} fill="var(--fill-0, #F5F5F5)" id="Vector_26" opacity="0.45" />
          <path d={svgPaths.p14c55f80} fill="var(--fill-0, #F5F5F5)" id="Vector_27" opacity="0.45" />
          <path d={svgPaths.p178bd880} fill="var(--fill-0, #F5F5F5)" id="Vector_28" opacity="0.45" />
          <path d={svgPaths.p1c805940} fill="var(--fill-0, #F5F5F5)" id="Vector_29" opacity="0.45" />
          <path d={svgPaths.p1e9a3680} fill="var(--fill-0, #F5F5F5)" id="Vector_30" opacity="0.45" />
          <path d={svgPaths.p2403200} fill="var(--fill-0, #F5F5F5)" id="Vector_31" opacity="0.45" />
        </g>
      </svg>
    </div>
  );
}

function Coin8() {
  return (
    <div className="col-1 h-[11.638px] ml-0 mt-[2.22px] relative row-1 w-[17.373px]" data-name="coin">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.3718 11.6384">
        <g id="coin">
          <path d={svgPaths.p3a949cf0} fill="var(--fill-0, #595BD4)" id="Vector" />
          <path d={svgPaths.p3a949cf0} fill="var(--fill-0, black)" id="Vector_2" opacity="0.25" />
          <path d={svgPaths.pd11ee00} fill="var(--fill-0, black)" id="Vector_3" opacity="0.1" />
          <path d={svgPaths.p3216f540} fill="var(--fill-0, black)" id="Vector_4" opacity="0.1" />
          <path d={svgPaths.p3296f200} fill="var(--fill-0, #595BD4)" id="Vector_5" opacity="0.5" />
          <path d={svgPaths.p6393300} fill="var(--fill-0, #595BD4)" id="Vector_6" />
          <path d={svgPaths.p6393300} fill="var(--fill-0, black)" id="Vector_7" opacity="0.2" />
          <path d={svgPaths.p23dcb00} fill="var(--fill-0, #F5F5F5)" id="Vector_8" opacity="0.5" />
          <path d={svgPaths.p221c7400} fill="var(--fill-0, #F5F5F5)" id="Vector_9" opacity="0.5" />
          <path d={svgPaths.p16820b80} fill="var(--fill-0, #595BD4)" id="Vector_10" />
          <path d={svgPaths.p16820b80} fill="var(--fill-0, white)" id="Vector_11" opacity="0.4" />
          <path d={svgPaths.p320f0800} fill="var(--fill-0, white)" id="Vector_12" opacity="0.2" />
          <path d={svgPaths.p19d8d780} fill="var(--fill-0, white)" id="Vector_13" opacity="0.5" />
          <path d={svgPaths.p1a9517f0} fill="var(--fill-0, #595BD4)" id="Vector_14" />
          <path d={svgPaths.p1a9517f0} fill="var(--fill-0, white)" id="Vector_15" opacity="0.3" />
          <path d={svgPaths.p2765a80} fill="var(--fill-0, #595BD4)" id="Vector_16" />
          <path d={svgPaths.p2765a80} fill="var(--fill-0, black)" id="Vector_17" opacity="0.2" />
          <path d={svgPaths.p2df25280} fill="var(--fill-0, #595BD4)" id="Vector_18" />
          <path d={svgPaths.p2df25280} fill="var(--fill-0, black)" id="Vector_19" opacity="0.5" />
          <path d={svgPaths.pfe4c180} fill="var(--fill-0, #595BD4)" id="Vector_20" />
          <path d={svgPaths.pfe4c180} fill="var(--fill-0, black)" id="Vector_21" opacity="0.35" />
          <path d={svgPaths.pf66bf00} fill="var(--fill-0, #595BD4)" id="Vector_22" />
          <path d={svgPaths.p1f3bf980} fill="var(--fill-0, #595BD4)" id="Vector_23" />
          <g id="Group" opacity="0.3">
            <path d={svgPaths.p2468c740} fill="var(--fill-0, white)" id="Vector_24" />
          </g>
          <path d={svgPaths.p12f45000} fill="var(--fill-0, #F5F5F5)" id="Vector_25" opacity="0.45" />
          <path d={svgPaths.p2101e00} fill="var(--fill-0, #F5F5F5)" id="Vector_26" opacity="0.45" />
          <path d={svgPaths.p9549370} fill="var(--fill-0, #F5F5F5)" id="Vector_27" opacity="0.45" />
          <path d={svgPaths.p178bd880} fill="var(--fill-0, #F5F5F5)" id="Vector_28" opacity="0.45" />
          <path d={svgPaths.p21de3600} fill="var(--fill-0, #F5F5F5)" id="Vector_29" opacity="0.45" />
          <path d={svgPaths.p224a7e00} fill="var(--fill-0, #F5F5F5)" id="Vector_30" opacity="0.45" />
          <path d={svgPaths.p2275b600} fill="var(--fill-0, #F5F5F5)" id="Vector_31" opacity="0.45" />
        </g>
      </svg>
    </div>
  );
}

function Coin9() {
  return (
    <div className="col-1 h-[11.641px] ml-[0.18px] mt-0 relative row-1 w-[19.223px]" data-name="coin">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.2235 11.6405">
        <g id="coin">
          <path d={svgPaths.p3d04a600} fill="var(--fill-0, #595BD4)" id="Vector" />
          <path d={svgPaths.p3d04a600} fill="var(--fill-0, black)" id="Vector_2" opacity="0.25" />
          <path d={svgPaths.p374d1700} fill="var(--fill-0, black)" id="Vector_3" opacity="0.1" />
          <path d={svgPaths.p3ad17700} fill="var(--fill-0, black)" id="Vector_4" opacity="0.1" />
          <path d={svgPaths.p528a00} fill="var(--fill-0, #595BD4)" id="Vector_5" opacity="0.5" />
          <path d={svgPaths.p1f0e0080} fill="var(--fill-0, #595BD4)" id="Vector_6" />
          <path d={svgPaths.p1f0e0080} fill="var(--fill-0, black)" id="Vector_7" opacity="0.2" />
          <path d={svgPaths.p277aa100} fill="var(--fill-0, #F5F5F5)" id="Vector_8" opacity="0.5" />
          <path d={svgPaths.p237e5980} fill="var(--fill-0, #F5F5F5)" id="Vector_9" opacity="0.5" />
          <path d={svgPaths.p3a803ea0} fill="var(--fill-0, #595BD4)" id="Vector_10" />
          <path d={svgPaths.p3a803ea0} fill="var(--fill-0, white)" id="Vector_11" opacity="0.4" />
          <path d={svgPaths.p1aac2d00} fill="var(--fill-0, white)" id="Vector_12" opacity="0.2" />
          <path d={svgPaths.p132e3900} fill="var(--fill-0, white)" id="Vector_13" opacity="0.5" />
          <path d={svgPaths.p8eb9200} fill="var(--fill-0, #595BD4)" id="Vector_14" />
          <path d={svgPaths.p8eb9200} fill="var(--fill-0, white)" id="Vector_15" opacity="0.3" />
          <path d={svgPaths.p2bb85700} fill="var(--fill-0, #595BD4)" id="Vector_16" />
          <path d={svgPaths.p2bb85700} fill="var(--fill-0, black)" id="Vector_17" opacity="0.2" />
          <path d={svgPaths.pd2db100} fill="var(--fill-0, #595BD4)" id="Vector_18" />
          <path d={svgPaths.pd2db100} fill="var(--fill-0, black)" id="Vector_19" opacity="0.5" />
          <path d={svgPaths.p254d2f80} fill="var(--fill-0, #595BD4)" id="Vector_20" />
          <path d={svgPaths.p254d2f80} fill="var(--fill-0, black)" id="Vector_21" opacity="0.35" />
          <path d={svgPaths.p22ebf700} fill="var(--fill-0, #595BD4)" id="Vector_22" />
          <path d={svgPaths.p23de1a00} fill="var(--fill-0, #595BD4)" id="Vector_23" />
          <g id="Group" opacity="0.3">
            <path d={svgPaths.p37a78b40} fill="var(--fill-0, white)" id="Vector_24" />
          </g>
          <path d={svgPaths.p34bf900} fill="var(--fill-0, #F5F5F5)" id="Vector_25" opacity="0.45" />
          <path d={svgPaths.p1a461680} fill="var(--fill-0, #F5F5F5)" id="Vector_26" opacity="0.45" />
          <path d={svgPaths.p26298a00} fill="var(--fill-0, #F5F5F5)" id="Vector_27" opacity="0.45" />
          <path d={svgPaths.paa8bf80} fill="var(--fill-0, #F5F5F5)" id="Vector_28" opacity="0.45" />
          <path d={svgPaths.p38192680} fill="var(--fill-0, #F5F5F5)" id="Vector_29" opacity="0.45" />
          <path d={svgPaths.p85a8cf0} fill="var(--fill-0, #F5F5F5)" id="Vector_30" opacity="0.45" />
          <path d={svgPaths.p19d60f00} fill="var(--fill-0, #F5F5F5)" id="Vector_31" opacity="0.45" />
          <path d={svgPaths.p103b2380} fill="var(--fill-0, white)" id="Vector_32" />
        </g>
      </svg>
    </div>
  );
}

function Coins4() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[80.97px] mt-[24px] place-items-start relative row-1" data-name="coins">
      <Coin7 />
      <Coin8 />
      <Coin9 />
    </div>
  );
}

function Coin10() {
  return (
    <div className="col-1 h-[11.64px] ml-[3.07px] mt-[2.77px] relative row-1 w-[17.369px]" data-name="coin">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.3683 11.6405">
        <g id="coin">
          <path d={svgPaths.p28ff9e00} fill="var(--fill-0, #595BD4)" id="Vector" />
          <path d={svgPaths.p28ff9e00} fill="var(--fill-0, black)" id="Vector_2" opacity="0.25" />
          <path d={svgPaths.p311bd7c0} fill="var(--fill-0, black)" id="Vector_3" opacity="0.1" />
          <path d={svgPaths.p30383c00} fill="var(--fill-0, black)" id="Vector_4" opacity="0.1" />
          <path d={svgPaths.p33a0a100} fill="var(--fill-0, #595BD4)" id="Vector_5" opacity="0.5" />
          <path d={svgPaths.p2a9d6c80} fill="var(--fill-0, #595BD4)" id="Vector_6" />
          <path d={svgPaths.p2a9d6c80} fill="var(--fill-0, black)" id="Vector_7" opacity="0.2" />
          <path d={svgPaths.p12d08e80} fill="var(--fill-0, #F5F5F5)" id="Vector_8" opacity="0.5" />
          <path d={svgPaths.p117d6600} fill="var(--fill-0, #F5F5F5)" id="Vector_9" opacity="0.5" />
          <path d={svgPaths.p1d74fc00} fill="var(--fill-0, #595BD4)" id="Vector_10" />
          <path d={svgPaths.p1d74fc00} fill="var(--fill-0, white)" id="Vector_11" opacity="0.4" />
          <path d={svgPaths.pd94e600} fill="var(--fill-0, white)" id="Vector_12" opacity="0.2" />
          <path d={svgPaths.p20994900} fill="var(--fill-0, white)" id="Vector_13" opacity="0.5" />
          <path d={svgPaths.p25015380} fill="var(--fill-0, #595BD4)" id="Vector_14" />
          <path d={svgPaths.p25015380} fill="var(--fill-0, white)" id="Vector_15" opacity="0.3" />
          <path d={svgPaths.p1569f800} fill="var(--fill-0, #595BD4)" id="Vector_16" />
          <path d={svgPaths.p1569f800} fill="var(--fill-0, black)" id="Vector_17" opacity="0.2" />
          <path d={svgPaths.p1af85500} fill="var(--fill-0, #595BD4)" id="Vector_18" />
          <path d={svgPaths.p1af85500} fill="var(--fill-0, black)" id="Vector_19" opacity="0.5" />
          <path d={svgPaths.p161e4100} fill="var(--fill-0, #595BD4)" id="Vector_20" />
          <path d={svgPaths.p161e4100} fill="var(--fill-0, black)" id="Vector_21" opacity="0.35" />
          <path d={svgPaths.pdf3b200} fill="var(--fill-0, #595BD4)" id="Vector_22" />
          <path d={svgPaths.p3cfdc00} fill="var(--fill-0, #595BD4)" id="Vector_23" />
          <g id="Group" opacity="0.3">
            <path d={svgPaths.p115c3d00} fill="var(--fill-0, white)" id="Vector_24" />
          </g>
          <path d={svgPaths.p16f55e80} fill="var(--fill-0, #F5F5F5)" id="Vector_25" opacity="0.45" />
          <path d={svgPaths.pcff8e80} fill="var(--fill-0, #F5F5F5)" id="Vector_26" opacity="0.45" />
          <path d={svgPaths.p27c0b600} fill="var(--fill-0, #F5F5F5)" id="Vector_27" opacity="0.45" />
          <path d={svgPaths.p1037ff00} fill="var(--fill-0, #F5F5F5)" id="Vector_28" opacity="0.45" />
          <path d={svgPaths.p27877400} fill="var(--fill-0, #F5F5F5)" id="Vector_29" opacity="0.45" />
          <path d={svgPaths.p369e8800} fill="var(--fill-0, #F5F5F5)" id="Vector_30" opacity="0.45" />
          <path d={svgPaths.p20ae6400} fill="var(--fill-0, #F5F5F5)" id="Vector_31" opacity="0.45" />
        </g>
      </svg>
    </div>
  );
}

function Coin11() {
  return (
    <div className="col-1 h-[11.641px] ml-0 mt-0 relative row-1 w-[19.234px]" data-name="coin">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.2349 11.6408">
        <g id="coin">
          <path d={svgPaths.p2436c000} fill="var(--fill-0, #595BD4)" id="Vector" />
          <path d={svgPaths.p2436c000} fill="var(--fill-0, black)" id="Vector_2" opacity="0.25" />
          <path d={svgPaths.p1caa1f00} fill="var(--fill-0, black)" id="Vector_3" opacity="0.1" />
          <path d={svgPaths.p139c700} fill="var(--fill-0, black)" id="Vector_4" opacity="0.1" />
          <path d={svgPaths.pa60a600} fill="var(--fill-0, #595BD4)" id="Vector_5" opacity="0.5" />
          <path d={svgPaths.p253d6b00} fill="var(--fill-0, #595BD4)" id="Vector_6" />
          <path d={svgPaths.p253d6b00} fill="var(--fill-0, black)" id="Vector_7" opacity="0.2" />
          <path d={svgPaths.p2ad69280} fill="var(--fill-0, #F5F5F5)" id="Vector_8" opacity="0.5" />
          <path d={svgPaths.p8921100} fill="var(--fill-0, #F5F5F5)" id="Vector_9" opacity="0.5" />
          <path d={svgPaths.p3363d680} fill="var(--fill-0, #595BD4)" id="Vector_10" />
          <path d={svgPaths.p3363d680} fill="var(--fill-0, white)" id="Vector_11" opacity="0.4" />
          <path d={svgPaths.p3bb8c600} fill="var(--fill-0, white)" id="Vector_12" opacity="0.2" />
          <path d={svgPaths.p3292d3f0} fill="var(--fill-0, white)" id="Vector_13" opacity="0.5" />
          <path d={svgPaths.p2d63b600} fill="var(--fill-0, #595BD4)" id="Vector_14" />
          <path d={svgPaths.p2d63b600} fill="var(--fill-0, white)" id="Vector_15" opacity="0.3" />
          <path d={svgPaths.p39d3d900} fill="var(--fill-0, #595BD4)" id="Vector_16" />
          <path d={svgPaths.p39d3d900} fill="var(--fill-0, black)" id="Vector_17" opacity="0.2" />
          <path d={svgPaths.p3496bb00} fill="var(--fill-0, #595BD4)" id="Vector_18" />
          <path d={svgPaths.p3496bb00} fill="var(--fill-0, black)" id="Vector_19" opacity="0.5" />
          <path d={svgPaths.p2cf41900} fill="var(--fill-0, #595BD4)" id="Vector_20" />
          <path d={svgPaths.p2cf41900} fill="var(--fill-0, black)" id="Vector_21" opacity="0.35" />
          <path d={svgPaths.pd883c00} fill="var(--fill-0, #595BD4)" id="Vector_22" />
          <path d={svgPaths.p56d9a00} fill="var(--fill-0, #595BD4)" id="Vector_23" />
          <g id="Group" opacity="0.3">
            <path d={svgPaths.p56d9a00} fill="var(--fill-0, white)" id="Vector_24" />
          </g>
          <path d={svgPaths.p2cbf7300} fill="var(--fill-0, #F5F5F5)" id="Vector_25" opacity="0.45" />
          <path d={svgPaths.p3084280} fill="var(--fill-0, #F5F5F5)" id="Vector_26" opacity="0.45" />
          <path d={svgPaths.pdd10f80} fill="var(--fill-0, #F5F5F5)" id="Vector_27" opacity="0.45" />
          <path d={svgPaths.p30e6ba00} fill="var(--fill-0, #F5F5F5)" id="Vector_28" opacity="0.45" />
          <path d={svgPaths.pb3faf80} fill="var(--fill-0, #F5F5F5)" id="Vector_29" opacity="0.45" />
          <path d={svgPaths.pc251780} fill="var(--fill-0, #F5F5F5)" id="Vector_30" opacity="0.45" />
          <path d={svgPaths.p3e092a00} fill="var(--fill-0, #F5F5F5)" id="Vector_31" opacity="0.45" />
          <path d={svgPaths.p33214700} fill="var(--fill-0, white)" id="Vector_32" />
        </g>
      </svg>
    </div>
  );
}

function Coins5() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[77.02px] mt-0 place-items-start relative row-1" data-name="coins">
      <Coin10 />
      <Coin11 />
    </div>
  );
}

function Coins() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[3.71px] mt-[65.5px] place-items-start relative row-1" data-name="Coins">
      <Coins1 />
      <Coins2 />
      <Coins3 />
      <Coins4 />
      <Coins5 />
    </div>
  );
}

function Chart() {
  return (
    <div className="col-1 h-[36.005px] ml-0 mt-0 relative row-1 w-[25.967px]" data-name="Chart">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25.9669 36.0044">
        <g id="Chart">
          <path d={svgPaths.p15898780} fill="var(--fill-0, #E0E0E0)" id="Vector" />
          <g id="speach-bubble">
            <path d={svgPaths.p2bf1a280} fill="var(--fill-0, #595BD4)" id="Vector_2" />
            <path d={svgPaths.p2bf1a280} fill="var(--fill-0, black)" id="Vector_3" opacity="0.2" />
            <path d={svgPaths.pd990900} fill="var(--fill-0, #595BD4)" id="Vector_4" />
            <path d={svgPaths.p1f9aef40} fill="var(--fill-0, black)" id="Vector_5" opacity="0.2" />
            <g id="Group" opacity="0.2">
              <path d={svgPaths.pf1be980} fill="var(--fill-0, white)" id="Vector_6" />
            </g>
            <path d={svgPaths.pd98bc80} fill="var(--fill-0, #FAFAFA)" id="Vector_7" />
            <path d={svgPaths.p256acd00} fill="var(--fill-0, #595BD4)" id="Vector_8" />
          </g>
          <g id="bar-graph">
            <path d={svgPaths.pafc9700} fill="var(--fill-0, #595BD4)" id="Vector_9" />
            <path d={svgPaths.pafc9700} fill="var(--fill-0, black)" id="Vector_10" opacity="0.2" />
            <path d={svgPaths.p3864c100} fill="var(--fill-0, #595BD4)" id="Vector_11" />
            <path d={svgPaths.p17fa8800} fill="var(--fill-0, #595BD4)" id="Vector_12" />
            <path d={svgPaths.p17fa8800} fill="var(--fill-0, white)" id="Vector_13" opacity="0.25" />
            <path d={svgPaths.p37ad6c80} fill="var(--fill-0, white)" id="Vector_14" opacity="0.3" />
            <path d={svgPaths.p2c948a00} fill="var(--fill-0, #595BD4)" id="Vector_15" />
            <path d={svgPaths.p2c948a00} fill="var(--fill-0, white)" id="Vector_16" opacity="0.1" />
            <path d={svgPaths.p2bc3dc10} fill="var(--fill-0, #595BD4)" id="Vector_17" />
            <path d={svgPaths.p2bc3dc10} fill="var(--fill-0, white)" id="Vector_18" opacity="0.3" />
            <path d={svgPaths.p289f54c0} fill="var(--fill-0, #595BD4)" id="Vector_19" />
            <path d={svgPaths.p289f54c0} fill="var(--fill-0, white)" id="Vector_20" opacity="0.55" />
            <path d={svgPaths.p2be91200} fill="var(--fill-0, white)" id="Vector_21" opacity="0.3" />
            <path d={svgPaths.pfcd2c00} fill="var(--fill-0, #595BD4)" id="Vector_22" />
            <path d={svgPaths.pfcd2c00} fill="var(--fill-0, black)" id="Vector_23" opacity="0.2" />
            <path d={svgPaths.p2527aa80} fill="var(--fill-0, #595BD4)" id="Vector_24" />
            <path d={svgPaths.p17cf00f0} fill="var(--fill-0, #595BD4)" id="Vector_25" />
            <path d={svgPaths.p17cf00f0} fill="var(--fill-0, white)" id="Vector_26" opacity="0.25" />
            <path d={svgPaths.p27787e00} fill="var(--fill-0, white)" id="Vector_27" opacity="0.3" />
            <path d={svgPaths.p1328da00} fill="var(--fill-0, #595BD4)" id="Vector_28" />
            <path d={svgPaths.p1328da00} fill="var(--fill-0, black)" id="Vector_29" opacity="0.45" />
            <path d={svgPaths.p24d41080} fill="var(--fill-0, #595BD4)" id="Vector_30" />
            <path d={svgPaths.p24d41080} fill="var(--fill-0, black)" id="Vector_31" opacity="0.3" />
            <path d={svgPaths.p9834500} fill="var(--fill-0, #595BD4)" id="Vector_32" />
            <path d={svgPaths.p9834500} fill="var(--fill-0, black)" id="Vector_33" opacity="0.15" />
            <path d={svgPaths.pa1b7800} fill="var(--fill-0, white)" id="Vector_34" opacity="0.3" />
          </g>
          <path d={svgPaths.p661b80} fill="var(--fill-0, #595BD4)" id="Vector_35" />
        </g>
      </svg>
    </div>
  );
}

function SpeechBubble7() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[10.15px] mt-[16.19px] place-items-start relative row-1" data-name="speech-bubble">
      <Chart />
    </div>
  );
}

function Bottom5() {
  return (
    <div className="col-1 h-[61.252px] ml-[2.64px] mt-[55.16px] relative row-1 w-[32.215px]" data-name="Bottom">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32.2163 61.2523">
        <g id="Bottom">
          <path d={svgPaths.p15c68800} fill="var(--fill-0, black)" id="Vector" />
          <path d={svgPaths.p2897f400} fill="var(--fill-0, #263238)" id="Vector_2" />
          <path d={svgPaths.pe24d00} fill="var(--fill-0, #37474F)" id="Vector_3" />
          <path d={svgPaths.p3cff900} fill="var(--fill-0, black)" id="Vector_4" opacity="0.15" />
          <path d={svgPaths.p3b998600} fill="var(--fill-0, black)" id="Vector_5" opacity="0.15" />
          <path d={svgPaths.p9c90b00} fill="var(--fill-0, black)" id="Vector_6" opacity="0.15" />
          <path d={svgPaths.p9f8fa00} fill="var(--fill-0, black)" id="Vector_7" opacity="0.15" />
          <path d={svgPaths.p39862a00} fill="var(--fill-0, black)" id="Vector_8" opacity="0.15" />
          <path d={svgPaths.p2cfd4a00} fill="var(--fill-0, black)" id="Vector_9" opacity="0.15" />
          <path d={svgPaths.p37580440} fill="var(--fill-0, #263238)" id="Vector_10" />
          <path d={svgPaths.p1ed53980} fill="var(--fill-0, #263238)" id="Vector_11" />
          <path d={svgPaths.p395f5e00} fill="var(--fill-0, #263238)" id="Vector_12" />
          <path d={svgPaths.pc6c6b00} fill="var(--fill-0, #263238)" id="Vector_13" />
          <path d={svgPaths.pe0eb0c0} fill="var(--fill-0, #263238)" id="Vector_14" />
          <path d={svgPaths.p3f1e9d00} fill="var(--fill-0, #263238)" id="Vector_15" />
          <path d={svgPaths.p3c51700} fill="var(--fill-0, #37474F)" id="Vector_16" />
          <path d={svgPaths.paa70100} fill="var(--fill-0, black)" id="Vector_17" opacity="0.15" />
          <path d={svgPaths.p3fc76800} fill="var(--fill-0, black)" id="Vector_18" opacity="0.15" />
          <path d={svgPaths.p3b0d2a00} fill="var(--fill-0, black)" id="Vector_19" opacity="0.15" />
          <path d={svgPaths.pbb99500} fill="var(--fill-0, black)" id="Vector_20" opacity="0.15" />
          <path d={svgPaths.p62c2a80} fill="var(--fill-0, black)" id="Vector_21" opacity="0.15" />
          <path d={svgPaths.p129ff080} fill="var(--fill-0, black)" id="Vector_22" opacity="0.15" />
          <path d={svgPaths.p1bf74380} fill="var(--fill-0, black)" id="Vector_23" opacity="0.15" />
          <path d={svgPaths.pc5ab100} fill="var(--fill-0, black)" id="Vector_24" opacity="0.15" />
          <path d={svgPaths.pddb1b80} fill="var(--fill-0, black)" id="Vector_25" opacity="0.15" />
          <path d={svgPaths.p3b08b200} fill="var(--fill-0, #263238)" id="Vector_26" />
          <path d={svgPaths.p175e1580} fill="var(--fill-0, #263238)" id="Vector_27" />
          <path d={svgPaths.p20be7a80} fill="var(--fill-0, #263238)" id="Vector_28" />
          <path d={svgPaths.p232c6080} fill="var(--fill-0, #263238)" id="Vector_29" />
          <path d={svgPaths.p13a4e080} fill="var(--fill-0, #263238)" id="Vector_30" />
          <path d={svgPaths.p2b845cf0} fill="var(--fill-0, black)" id="Vector_31" />
          <path d={svgPaths.p2619ba80} fill="var(--fill-0, black)" id="Vector_32" />
          <path d={svgPaths.p26be3580} fill="var(--fill-0, black)" id="Vector_33" />
        </g>
      </svg>
    </div>
  );
}

function Arm2() {
  return (
    <div className="col-1 h-[37.75px] ml-0 mt-[32.81px] relative row-1 w-[13.348px]" data-name="Arm">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3483 37.7495">
        <g id="Arm">
          <path d={svgPaths.p246ac7b0} fill="var(--fill-0, #F28F8F)" id="Vector" />
          <path d={svgPaths.pa5c5580} fill="var(--fill-0, #FFA8A7)" id="Vector_2" />
          <path d={svgPaths.p2b86a480} fill="var(--fill-0, #37474F)" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function Chest2() {
  return (
    <div className="col-1 h-[30.377px] ml-0 mt-0 relative row-1 w-[21.123px]" data-name="Chest">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.1236 30.3774">
        <g id="Chest">
          <path d={svgPaths.p12757c80} fill="var(--fill-0, #455A64)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Top6() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[9.98px] mt-[29.97px] place-items-start relative row-1" data-name="top">
      <Chest2 />
    </div>
  );
}

function Head2() {
  return (
    <div className="col-1 h-[20.727px] ml-0 mt-0 relative row-1 w-[12.875px]" data-name="head">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.8729 20.7271">
        <g id="head">
          <path d={svgPaths.p27241c00} fill="var(--fill-0, #263238)" id="Vector" />
          <g id="head_2">
            <path d={svgPaths.pe16a900} fill="var(--fill-0, #FFA8A7)" id="Vector_2" />
          </g>
          <path d={svgPaths.p1ec6b500} fill="var(--fill-0, #263238)" id="Vector_3" />
          <path d={svgPaths.p2714f600} fill="var(--fill-0, #263238)" id="Vector_4" />
          <path d={svgPaths.p70d37f0} fill="var(--fill-0, #B16668)" id="Vector_5" />
          <path d={svgPaths.p6dfb5f0} fill="var(--fill-0, #F28F8F)" id="Vector_6" />
          <path d={svgPaths.p86e9880} fill="var(--fill-0, #263238)" id="Vector_7" />
          <path d={svgPaths.p13c45100} fill="var(--fill-0, #263238)" id="Vector_8" />
          <path d={svgPaths.p3a25d220} fill="var(--fill-0, #F28F8F)" id="Vector_9" />
          <path d={svgPaths.p399a200} fill="var(--fill-0, #F28F8F)" id="Vector_10" />
        </g>
      </svg>
    </div>
  );
}

function Tie1() {
  return (
    <div className="col-1 h-[6.534px] ml-[1.5px] mt-[14.77px] relative row-1 w-[9.791px]" data-name="Tie">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.79123 6.53408">
        <g id="Tie">
          <path d={svgPaths.p3d4eb500} fill="var(--fill-0, #37474F)" id="Vector" />
          <path d={svgPaths.p2bf14f80} fill="var(--fill-0, #37474F)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Head1() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[13.69px] mt-[15.39px] place-items-start relative row-1" data-name="Head">
      <Head2 />
      <Tie1 />
    </div>
  );
}

function Top5() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1" data-name="Top">
      <Arm2 />
      <Top6 />
      <Head1 />
      <div className="col-1 h-[5.368px] ml-[36.25px] mt-0 relative row-1 w-[2.194px]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.19433 5.36848">
          <path d={svgPaths.p2a9e1500} fill="var(--fill-0, #FFA8A7)" id="Vector" />
        </svg>
      </div>
      <div className="col-1 h-[16.16px] ml-[33.42px] mt-[4.75px] relative row-1 w-[6.668px]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.66809 16.16">
          <path d={svgPaths.pe79c000} fill="var(--fill-0, #FFA8A7)" id="Vector" />
        </svg>
      </div>
      <div className="col-1 h-[2.589px] ml-[34.51px] mt-[4.7px] relative row-1 w-[3.266px]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.26641 2.5891">
          <path d={svgPaths.p36a42700} fill="var(--fill-0, #F28F8F)" id="Vector" />
        </svg>
      </div>
      <div className="col-1 h-[2.731px] ml-[34.94px] mt-[5.12px] relative row-1 w-[2.76px]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.75988 2.73079">
          <path d={svgPaths.p28a68e00} fill="var(--fill-0, #F28F8F)" id="Vector" />
        </svg>
      </div>
      <div className="col-1 h-[2.66px] ml-[35.7px] mt-[5.88px] relative row-1 w-[2.197px]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.19698 2.66047">
          <path d={svgPaths.p24e5f700} fill="var(--fill-0, #F28F8F)" id="Vector" />
        </svg>
      </div>
      <div className="col-1 h-[1.296px] ml-[36.82px] mt-[7.06px] relative row-1 w-[0.681px]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.68066 1.29592">
          <path d={svgPaths.p26e46080} fill="var(--fill-0, #F28F8F)" id="Vector" />
        </svg>
      </div>
      <div className="col-1 h-[2.183px] ml-[36.18px] mt-[8.19px] relative row-1 w-[1.798px]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.79782 2.18282">
          <path d={svgPaths.p8d2e800} fill="var(--fill-0, #F28F8F)" id="Vector" />
        </svg>
      </div>
      <div className="col-1 h-[0.418px] ml-[33.61px] mt-[6.72px] relative row-1 w-[1.068px]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.06783 0.417765">
          <path d={svgPaths.p2a2f6280} fill="var(--fill-0, #F28F8F)" id="Vector" />
        </svg>
      </div>
      <div className="col-1 h-[0.535px] ml-[34.51px] mt-[5.67px] relative row-1 w-[0.191px]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.190768 0.534616">
          <path d={svgPaths.p3f5a9a00} fill="var(--fill-0, #F28F8F)" id="Vector" />
        </svg>
      </div>
      <div className="col-1 h-[0.832px] ml-[34.26px] mt-[7.16px] relative row-1 w-[0.656px]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.655527 0.832063">
          <path d={svgPaths.pf43f100} fill="var(--fill-0, #F28F8F)" id="Vector" />
        </svg>
      </div>
      <div className="col-1 h-[26.868px] ml-[27.55px] mt-[13.26px] relative row-1 w-[12.479px]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.4788 26.8684">
          <path d={svgPaths.pac50100} fill="var(--fill-0, #37474F)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Chartacter1() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1" data-name="Chartacter">
      <Bottom5 />
      <Top5 />
    </div>
  );
}

function Character12() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[35.9px] mt-[0.78px] place-items-start relative row-1" data-name="Character">
      <Chartacter1 />
    </div>
  );
}

function BusinessGrowthAmico() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="business-growth/amico">
      <Floor3 />
      <Shadows1 />
      <Symbols />
      <Plants />
      <Arrows />
      <Coins />
      <SpeechBubble7 />
      <Character12 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start leading-[normal] not-italic relative shrink-0 text-[#252525] w-full">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[20px] w-full">Work-Life Balance</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[16px] w-full">Flexible hours, remote work options, and generous vacation policy</p>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-col items-start relative rounded-bl-[24px] rounded-br-[24px] shrink-0 w-[360px]">
      <Frame14 />
    </div>
  );
}

function Frame199() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full">
      <Frame11 />
    </div>
  );
}

function Frame198() {
  return (
    <div className="bg-white relative rounded-[16px] shrink-0 w-[360px]">
      <div className="content-stretch flex flex-col gap-[16px] items-start overflow-clip p-[16px] relative rounded-[inherit] size-full">
        <BusinessGrowthAmico />
        <Frame199 />
      </div>
      <div aria-hidden className="absolute border-[#e0e0e0] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_0px_12px_1px_rgba(159,159,159,0.15)]" />
    </div>
  );
}

function Frame193() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame194 />
      <Frame196 />
      <Frame198 />
    </div>
  );
}

function Frame185() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
      <Frame186 />
      <Frame193 />
    </div>
  );
}

function Perks() {
  return (
    <div className="relative mx-auto mt-[64px] content-stretch flex flex-col gap-[42px] items-center w-[1160px]" data-name="perks">
      <Frame184 />
      <Frame185 />
    </div>
  );
}

function MingcuteDownLine() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="mingcute:down-line">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Group">
          <g id="Vector" />
          <path clipRule="evenodd" d={svgPaths.p1d7b5970} fill="var(--fill-0, #252525)" fillRule="evenodd" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Frame67() {
  return (
    <div className="h-[34px] relative shrink-0 w-[473px]">
      {/* Home */}
      <div className="absolute h-[34px] left-0 top-0 w-[52px] cursor-pointer select-none group" data-name="Home">
        <p className={`[word-break:break-word] absolute font-['Inter:Semi_Bold',sans-serif] font-semibold inset-0 leading-[34px] not-italic text-center whitespace-nowrap transition-colors duration-200 ${
          ('Careers' as any) === 'Home' ? 'text-[#039]' : 'text-[#252525] group-hover:text-[#039]'
        }`}>Home</p>
      </div>

      {/* About us */}
      <div className="absolute h-[34px] left-[76px] top-0 w-[79px] cursor-pointer select-none group" data-name="About us">
        <p className={`[word-break:break-word] absolute font-['Inter:Semi_Bold',sans-serif] font-semibold inset-0 leading-[34px] not-italic text-center whitespace-nowrap transition-colors duration-200 ${
          ('Careers' as any) === 'About us' ? 'text-[#039]' : 'text-[#252525] group-hover:text-[#039]'
        }`}>About us</p>
      </div>

      {/* Services */}
      <div className="absolute content-stretch flex flex-col items-start left-[179px] top-[0] group/menu cursor-pointer select-none" data-name="service hover">
        <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Services/hover">
          <p className={`[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[34px] not-italic relative shrink-0 text-center whitespace-nowrap transition-colors duration-200 ${
            ('Careers' as any) === 'Services' ? 'text-[#039]' : 'text-[#252525] group-hover/menu:text-[#039]'
          }`}>Services</p>
          <div className={('Careers' as any) === 'Services' ? 'text-[#039]' : 'text-[#252525] group-hover/menu:text-[#039] transition-colors duration-200'}>
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
        <p className={`[word-break:break-word] absolute font-['Inter:Semi_Bold',sans-serif] font-semibold inset-0 leading-[34px] not-italic text-center whitespace-nowrap transition-colors duration-200 ${
          ('Careers' as any) === 'Careers' ? 'text-[#039]' : 'text-[#252525] group-hover:text-[#039]'
        }`}>Careers</p>
      </div>

      {/* Contact */}
      <div className="absolute h-[34px] left-[404px] top-0 w-[69px] cursor-pointer select-none group" data-name="Contact">
        <p className={`[word-break:break-word] absolute font-['Inter:Semi_Bold',sans-serif] font-semibold inset-[0_0_0_-1.45%] leading-[34px] not-italic text-center whitespace-nowrap transition-colors duration-200 ${
          ('Careers' as any) === 'Contact' ? 'text-[#039]' : 'text-[#252525] group-hover:text-[#039]'
        }`}>Contact</p>
      </div>
    </div>
  );
}

function Frame20() {
  return (
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
}

function Frame19() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0">
      <div className="bg-[#f0f0f0] border border-transparent h-[42px] overflow-clip relative rounded-[16px] shrink-0 w-[146px] cursor-pointer select-none transition-all duration-200 ease-in-out hover:bg-white hover:border-[#039] text-[#252525] hover:text-[#039] group" data-name="Component 4">
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[34px] left-[calc(50%+0.5px)] not-italic text-current text-[18px] text-center top-[calc(50%-17px)] whitespace-nowrap transition-colors duration-200">Admin Login</p>
      </div>
      <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Component 2">
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[34px] not-italic relative shrink-0 text-[#039] text-[18px] text-center whitespace-nowrap">EN</p>
        <Frame20 />
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[34px] not-italic relative shrink-0 text-[18px] text-[rgba(37,37,37,0.5)] text-center whitespace-nowrap">JP</p>
      </div>
    </div>
  );
}

function TopNavBar() {
  return (
    <div className="absolute bottom-0 h-[87px] left-1/2 pointer-events-none top-0">
      <div className="-translate-x-1/2 bg-white content-stretch drop-shadow-[0px_4px_6px_rgba(255,255,255,0.25)] flex items-center justify-between pointer-events-auto px-[80px] py-[20px] sticky top-0 w-[1320px]" data-name="top nav bar">
        <div aria-hidden className="absolute border-[#7e7e7e] border-b-[0.5px] border-solid inset-0 pointer-events-none" />
        <div className="h-[47px] relative shrink-0 w-[120px]" data-name="image 3">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={"/7ecaeb90479ec9f347e9551f375a8aa2cdf47444.png"} />
        </div>
        <Frame67 />
        <Frame19 />
      </div>
    </div>
  );
}

function TapNavBar() {
  return (
    <div className="absolute bottom-0 h-[4620px] left-0 pointer-events-none top-0">
      <div className="h-[87px] pointer-events-auto sticky top-0 w-[1320px]" data-name="tap nav bar">
        <TopNavBar />
      </div>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute inset-[21.43%_11.82%_19.48%_11.9%]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24.4088 18.9091">
        <g id="Group 8">
          <path d={svgPaths.p264f0ff1} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p15d96d80} fill="var(--fill-0, white)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function NounChatbot() {
  return (
    <div className="overflow-clip relative shrink-0 size-[32px]" data-name="noun-chatbot-7315686 1">
      <Group2 />
    </div>
  );
}

function Frame200() {
  return (
    <button className="absolute bg-[#039] content-stretch cursor-pointer flex items-center justify-center left-[336px] overflow-clip p-[11px] rounded-[32px] shadow-[0px_0px_12px_1px_rgba(61,104,213,0.4)] size-[48px] top-[465px]">
      <NounChatbot />
    </button>
  );
}

const JOBS_DATA = [
  {
    id: 1,
    title: "Senior AI engineer",
    location: "Tokyo, Japan",
    experience: "3+ Years",
    salary: "S$120K-180K",
    posted: "Posted 2 days ago",
    department: "Engineering",
    type: "Full-time",
    tags: ["Python", "TensorFlow", "PyTorch"],
    description: "Lead development of cutting-edge AI solutions for enterprise clients across Asia-Pacific.",
    responsibilities: [
      "Design and build production-grade AI/ML models.",
      "Architect scalable pipeline infrastructure for training and inference.",
      "Collaborate with cross-functional product and engineering teams."
    ],
    requirements: [
      "3+ years of experience with Python, PyTorch/TensorFlow, and cloud AI tools.",
      "Deep understanding of NLP, computer vision, or LLMs.",
      "Fluent or professional proficiency in English; Japanese is a plus."
    ]
  },
  {
    id: 2,
    title: "Full Stack Developer",
    location: "Bengaluru, India",
    experience: "4+ Years",
    salary: "S$80K-120K",
    posted: "Posted 2 days ago",
    department: "Engineering",
    type: "Full-time",
    tags: ["React", "Node.js", "databases"],
    description: "Build scalable web applications using modern technologies and frameworks.",
    responsibilities: [
      "Develop web apps with React and Node.js.",
      "Design RESTful APIs.",
      "Collaborate with UI/UX designers."
    ],
    requirements: [
      "4+ years of React, Node.js, and database experience.",
      "Experience with relational and non-relational databases.",
      "Strong understanding of CSS, Tailwind, and responsive layout design."
    ]
  },
  {
    id: 3,
    title: "Technical Recruiter",
    location: "Singapore",
    experience: "6+ Years",
    salary: "S$90K-140K",
    posted: "Posted 3 days ago",
    department: "Recruiting",
    type: "Full-time",
    tags: ["Technical Recruiting", "Sourcing", "Applicant Tracking Systems"],
    description: "Source and recruit top technology talent across Asia-Pacific markets.",
    responsibilities: [
      "Source, screen, and interview tech candidates.",
      "Coordinate with department leads on hiring needs.",
      "Manage the full-cycle recruitment process."
    ],
    requirements: [
      "6+ years of tech recruiting experience in APAC.",
      "Strong understanding of modern software engineering stacks.",
      "Excellent communication and candidate negotiation skills."
    ]
  },
  {
    id: 4,
    title: "Cloud Solutions Architect",
    location: "Tokyo, Japan",
    experience: "4+ Years",
    salary: "¥10M-15M",
    posted: "Posted 5 days ago",
    department: "Architecture",
    type: "Full-time",
    tags: ["AWS", "Terraform", "Docker"],
    description: "Design and implement cloud infrastructure solutions for enterprise clients.",
    responsibilities: [
      "Architect AWS/Azure/GCP cloud environments.",
      "Assist clients with migrations and cloud-native adoptions.",
      "Define cloud security guidelines and compliance measures."
    ],
    requirements: [
      "4+ years of cloud architecture and systems engineering experience.",
      "AWS or Google Cloud Solutions Architect Professional certification.",
      "Experience with Infrastructure as Code (IaC) tools."
    ]
  },
  {
    id: 5,
    title: "Data Scientist",
    location: "Bengaluru, India",
    experience: "3+ Years",
    salary: "S$100K-150K",
    posted: "Posted 1 week ago",
    department: "Data Science",
    type: "Full-time",
    tags: ["Python", "SQL", "Tableau"],
    description: "Analyze complex datasets to drive business insights and AI model development.",
    responsibilities: [
      "Perform data cleaning, transformation, and statistical analysis.",
      "Create dashboards and reports to present insights to leadership.",
      "Develop predictive data models."
    ],
    requirements: [
      "3+ years of Python/R, SQL, and data visualization tools (Tableau, PowerBI).",
      "Solid knowledge of machine learning algorithms and statistical modeling.",
      "Degree in Statistics, Computer Science, or Mathematics."
    ]
  },
  {
    id: 6,
    title: "DevOps Engineer",
    location: "Tokyo, Japan",
    experience: "3+ Years",
    salary: "¥8M-12M",
    posted: "Posted 1 week ago",
    department: "Operations",
    type: "Full-time",
    tags: ["Docker", "Kubernetes", "Terraform"],
    description: "Implement and maintain CI/CD pipelines and cloud infrastructure.",
    responsibilities: [
      "Build and automate CI/CD pipelines.",
      "Monitor system performance, uptime, and infrastructure health.",
      "Implement infrastructure as code (IaC) using Terraform."
    ],
    requirements: [
      "3+ years of experience with Docker, Kubernetes, CI/CD, and Terraform.",
      "Strong Linux systems administration experience.",
      "Familiarity with cloud security practices and automated testing."
    ]
  }
];

const renderFlag = (location: string) => {
  const loc = location.toLowerCase();
  if (loc.includes("japan")) {
    return (
      <span className="inline-flex items-center gap-[6px]">
        <span className="inline-block w-[16px] h-[11px] bg-white border border-slate-300 rounded-[2px] relative shrink-0">
          <span className="absolute size-[5px] bg-[#BC002D] rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        </span>
        Japan
      </span>
    );
  }
  if (loc.includes("india")) {
    return (
      <span className="inline-flex items-center gap-[6px]">
        <span className="inline-block w-[16px] h-[11px] bg-white border border-slate-300 rounded-[2px] relative overflow-hidden shrink-0">
          <span className="absolute top-0 left-0 right-0 h-[3.6px] bg-[#FF9933]" />
          <span className="absolute bottom-0 left-0 right-0 h-[3.6px] bg-[#128807]" />
          <span className="absolute size-[3px] border border-[#000080] rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        </span>
        India
      </span>
    );
  }
  if (loc.includes("singapore")) {
    return (
      <span className="inline-flex items-center gap-[6px]">
        <span className="inline-block w-[16px] h-[11px] bg-white border border-slate-300 rounded-[2px] relative overflow-hidden shrink-0">
          <span className="absolute top-0 left-0 right-0 h-[5.5px] bg-[#E00A19]" />
        </span>
        Singapore
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-[6px]">
      📍 {location}
    </span>
  );
};

export default function CarriorPage() {
  const [selectedJob, setSelectedJob] = useState<any | null>(null);
  const [applyingJob, setApplyingJob] = useState<any | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", experience: "", coverLetter: "" });
  const [attachedFileName, setAttachedFileName] = useState<string>("");
  const [isDragging, setIsDragging] = useState(false);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };
  const handleDragLeave = () => {
    setIsDragging(false);
  };
  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file) {
      if (file.size > 10 * 1024 * 1024) {
        alert("File size exceeds 10MB limit.");
        return;
      }
      if (file.name.endsWith(".pdf") || file.name.endsWith(".docx") || file.name.endsWith(".doc")) {
        setAttachedFileName(file.name);
      } else {
        alert("Supported formats are PDF, DOCX, DOC.");
      }
    }
  };

  const handlePageClick = (e: React.MouseEvent) => {
    let el = e.target as HTMLElement | null;
    while (el && el !== e.currentTarget) {
      const name = el.getAttribute("data-name");
      if (name === "view role cta") {
        e.preventDefault();
        e.stopPropagation();
        const jobCard = el.closest('[class*="bg-white"]');
        if (jobCard) {
          const textContent = jobCard.textContent || "";
          const job = JOBS_DATA.find(j => textContent.toLowerCase().includes(j.title.toLowerCase()));
          if (job) {
            setSelectedJob(job);
          }
        }
        return;
      }
      if (name === "Aplply cta" || name === "Apply cta") {
        e.preventDefault();
        e.stopPropagation();
        const jobCard = el.closest('[class*="bg-white"]');
        if (jobCard) {
          const textContent = jobCard.textContent || "";
          const job = JOBS_DATA.find(j => textContent.toLowerCase().includes(j.title.toLowerCase()));
          if (job) {
            setApplyingJob(job);
            setFormSubmitted(false);
            setFormData({ name: "", email: "", phone: "", experience: "", coverLetter: "" });
            setAttachedFileName("");
          }
        }
        return;
      }
      if (name === "CTA 1" || el.textContent?.trim() === "View open positions") {
        e.preventDefault();
        e.stopPropagation();
        const openPositionsEl = document.querySelector('[data-name="open positions"]');
        if (openPositionsEl) {
          openPositionsEl.scrollIntoView({ behavior: 'smooth' });
        }
        return;
      }
      el = el.parentElement;
    }
  };

  const handleApplySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="bg-white relative w-full h-auto flex flex-col gap-0 pb-[80px]" data-name="carrior page" onClick={handlePageClick}>
      <CarrierHeroSection />
      <WhyJoinUs />
      <OpenPositions onApply={(job) => {
        setApplyingJob(job);
        setFormSubmitted(false);
        setFormData({ name: "", email: "", phone: "", experience: "", coverLetter: "" });
        setAttachedFileName("");
      }} />
      <Perks />
      <Footer />
      <TapNavBar />

      {/* --- Job Details Modal --- */}
      {selectedJob && createPortal(
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[999999] flex items-center justify-center p-[24px]" onClick={() => setSelectedJob(null)}>
          <div className="bg-white rounded-[24px] shadow-2xl w-[640px] max-w-full max-h-[90vh] overflow-y-auto no-scrollbar flex flex-col relative p-[32px] border border-slate-100 animate-in fade-in zoom-in-95 duration-200" onClick={(e) => e.stopPropagation()}>
            <button className="absolute right-[24px] top-[24px] text-slate-400 hover:text-slate-600 cursor-pointer select-none transition-colors text-[24px] font-light focus:outline-none" onClick={() => setSelectedJob(null)}>
              &times;
            </button>
            <div className="flex flex-col">
              <h3 className="text-[26px] font-bold text-[#252525] font-['Inter:Semi_Bold',sans-serif] leading-tight">
                {selectedJob.title}
              </h3>
              <div className="flex gap-[8px] mt-[16px] flex-wrap">
                <span className="bg-[#eef4ff] text-[#039] px-[12px] py-[6px] rounded-[12px] text-[14px] font-medium">
                  {selectedJob.location}
                </span>
                <span className="bg-[#f5f5f5] text-[#4f4f4f] px-[12px] py-[6px] rounded-[12px] text-[14px] font-medium">
                  {selectedJob.experience}
                </span>
              </div>
              <p className="text-[#4f4f4f] leading-[26px] text-[16px] mt-[20px] pb-[20px] border-b border-slate-100">
                {selectedJob.description}
              </p>
              
              <h4 className="text-[18px] font-semibold text-[#252525] mt-[24px]">Key Responsibilities</h4>
              <ul className="list-disc pl-[20px] space-y-[10px] mt-[12px] text-[#5d5d5d] text-[15px] leading-[24px]">
                {selectedJob.responsibilities.map((r: string, idx: number) => (
                  <li key={idx}>{r}</li>
                ))}
              </ul>

              <h4 className="text-[18px] font-semibold text-[#252525] mt-[24px]">Requirements</h4>
              <ul className="list-disc pl-[20px] space-y-[10px] mt-[12px] text-[#5d5d5d] text-[15px] leading-[24px]">
                {selectedJob.requirements.map((r: string, idx: number) => (
                  <li key={idx}>{r}</li>
                ))}
              </ul>

              <div className="flex gap-[16px] mt-[36px]">
                <button 
                  className="flex-1 py-[12px] text-center border border-slate-200 rounded-[16px] text-[#4f4f4f] hover:bg-slate-50 cursor-pointer select-none transition-colors font-medium text-[16px] focus:outline-none"
                  onClick={() => setSelectedJob(null)}
                >
                  Close
                </button>
                <button 
                  className="flex-1 py-[12px] text-center bg-[#039] text-white hover:bg-[#002266] rounded-[16px] cursor-pointer select-none transition-colors font-medium text-[16px] focus:outline-none"
                  onClick={() => {
                    setApplyingJob(selectedJob);
                    setSelectedJob(null);
                    setFormSubmitted(false);
                    setFormData({ name: "", email: "", phone: "", experience: "", coverLetter: "" });
                    setAttachedFileName("");
                  }}
                >
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}

      {/* --- Apply Modal --- */}
      {applyingJob && createPortal(
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[999999] flex items-center justify-center p-[16px] sm:p-[24px]" 
          onClick={() => setApplyingJob(null)}
        >
          <div 
            className="bg-white rounded-[24px] shadow-2xl w-[580px] max-w-full my-auto overflow-hidden flex flex-col relative border border-slate-100 animate-in fade-in zoom-in-95 duration-200" 
            onClick={(e) => e.stopPropagation()}
            style={{ maxHeight: "calc(100vh - 48px)" }}
          >
            <button 
              className="absolute right-[24px] top-[24px] text-slate-400 hover:text-slate-600 cursor-pointer select-none transition-colors text-[28px] font-light focus:outline-none z-10" 
              onClick={() => setApplyingJob(null)}
            >
              &times;
            </button>
            
            {!formSubmitted ? (
              <form 
                onSubmit={handleApplySubmit} 
                className="flex flex-col h-full overflow-hidden font-['Inter',sans-serif]"
              >
                {/* Header Section */}
                <div className="p-[32px] pb-[0px] shrink-0">
                  <div className="flex flex-col">
                    <div className="flex items-center gap-[12px] flex-wrap">
                      <h3 className="text-[24px] font-bold text-[#252525] leading-tight">
                        {applyingJob.title}
                      </h3>
                      <span className="bg-[#eef4ff] text-[#039] px-[12px] py-[4px] rounded-[12px] text-[13px] font-semibold whitespace-nowrap shrink-0">
                        {applyingJob.experience}
                      </span>
                    </div>
                    <div className="bg-gradient-to-r from-[#039] via-[#039]/60 to-transparent h-[3px] w-[160px] rounded-full mt-[8px]" />
                  </div>
                  
                  {/* Job Metadata Tags */}
                  <div className="flex gap-[20px] mt-[16px] text-slate-500 text-[14px] flex-wrap items-center">
                    <span className="flex items-center gap-[6px] text-[#4f4f4f]">
                      <svg className="size-[16px] text-slate-400 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M20 7H4a2 2 0 00-2 2v10a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" />
                      </svg>
                      {applyingJob.department}
                    </span>
                    <span className="flex items-center gap-[6px] text-[#4f4f4f]">
                      {renderFlag(applyingJob.location)}
                    </span>
                    <span className="flex items-center gap-[6px] text-[#4f4f4f]">
                      <svg className="size-[16px] text-slate-400 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="10" />
                        <polyline points="12 6 12 12 16 14" />
                      </svg>
                      {applyingJob.type}
                    </span>
                  </div>
                  
                  {/* Job Description */}
                  <p className="text-[#4f4f4f] text-[14px] sm:text-[15px] leading-relaxed mt-[16px]">
                    {applyingJob.description}
                  </p>
                  
                  {/* Divisor Underline */}
                  <div className="bg-gradient-to-r from-transparent via-[#039]/30 to-transparent h-[1px] w-full my-[24px]" />
                </div>

                {/* Form Fields */}
                <div className="p-[32px] pt-[0px] pb-[32px] space-y-[20px] overflow-y-auto no-scrollbar flex-1">
                  {/* Row 1: Name and Email */}
                  <div className="flex gap-[20px] flex-col sm:flex-row">
                    <div className="flex-1 flex flex-col">
                      <label className="text-[16px] font-semibold text-[#252525] mb-[6px] block">Your name*</label>
                      <div className="h-[44px] rounded-[16px] border border-[#d0d0d0] w-full bg-white flex items-center px-[16px] focus-within:border-[#039] transition-colors">
                        <input
                          type="text"
                          required
                          placeholder="Your full name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full h-full bg-transparent outline-none text-[14px] text-[#252525] placeholder:text-[#b0b0b0]"
                        />
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col">
                      <label className="text-[16px] font-semibold text-[#252525] mb-[6px] block">Email Address*</label>
                      <div className="h-[44px] rounded-[16px] border border-[#d0d0d0] w-full bg-white flex items-center px-[16px] focus-within:border-[#039] transition-colors">
                        <input
                          type="email"
                          required
                          placeholder="123@gmail.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full h-full bg-transparent outline-none text-[14px] text-[#252525] placeholder:text-[#b0b0b0]"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Row 2: Phone and Experience */}
                  <div className="flex gap-[20px] flex-col sm:flex-row">
                    <div className="flex-1 flex flex-col">
                      <label className="text-[16px] font-semibold text-[#252525] mb-[6px] block">Phone number</label>
                      <div className="h-[44px] rounded-[16px] border border-[#d0d0d0] w-full bg-white flex items-center px-[16px] focus-within:border-[#039] transition-colors">
                        <input
                          type="tel"
                          placeholder="+1 234 567 8900"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full h-full bg-transparent outline-none text-[14px] text-[#252525] placeholder:text-[#b0b0b0]"
                        />
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col">
                      <label className="text-[16px] font-semibold text-[#252525] mb-[6px] block">Years of Experience</label>
                      <div className="h-[44px] rounded-[16px] border border-[#d0d0d0] w-full bg-white flex items-center px-[16px] focus-within:border-[#039] transition-colors">
                        <input
                          type="text"
                          placeholder="e.g.3 years"
                          value={formData.experience}
                          onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                          className="w-full h-full bg-transparent outline-none text-[14px] text-[#252525] placeholder:text-[#b0b0b0]"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Row 3: Cover Letter */}
                  <div className="flex flex-col">
                    <label className="text-[16px] font-semibold text-[#252525] mb-[6px] block">Cover Letter</label>
                    <textarea
                      rows={4}
                      placeholder="Tell us why you’re the perfect fit.."
                      value={formData.coverLetter}
                      onChange={(e) => setFormData({ ...formData, coverLetter: e.target.value })}
                      className="w-full px-[16px] py-[12px] border border-[#d0d0d0] rounded-[16px] focus:outline-none focus:border-[#039] text-[14px] text-[#252525] placeholder:text-[#b0b0b0] resize-none"
                    />
                  </div>

                  {/* Row 4: Resume Upload */}
                  <div className="flex flex-col">
                    <div
                      onDragOver={handleDragOver}
                      onDragLeave={handleDragLeave}
                      onDrop={handleDrop}
                      className={`border ${isDragging ? 'border-[#039] bg-[#eef4ff]/30' : 'border-[#d0d0d0]'} rounded-[20px] p-[24px] text-center hover:bg-slate-50 transition-colors cursor-pointer relative group`}
                    >
                      <input
                        type="file"
                        accept=".pdf,.doc,.docx"
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (file) {
                            if (file.size > 10 * 1024 * 1024) {
                              alert("File size exceeds 10MB limit.");
                              e.target.value = "";
                              return;
                            }
                            setAttachedFileName(file.name);
                          }
                        }}
                        className="absolute inset-0 opacity-0 cursor-pointer"
                      />
                      <div className="flex flex-col items-center justify-center pointer-events-none select-none">
                        <div className="flex items-center gap-[8px] justify-center mb-[8px]">
                          <svg className="size-[20px] text-slate-700 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                          <span className="text-[#252525] text-[16px] font-bold">
                            {attachedFileName ? "✓ " + attachedFileName : "Upload Your Resume"}
                          </span>
                        </div>
                        <span className="text-slate-400 text-[13px] mb-[4px]">
                          {attachedFileName ? "Drag & Drop or browse to replace" : "Drag & Drop your file here"}
                        </span>
                        <span className="text-slate-400 text-[13px] mb-[8px]">Or</span>
                        <div className="px-[32px] py-[8px] border border-[#039] rounded-[16px] text-[#039] font-bold text-[15px] bg-white group-hover:bg-[#039] group-hover:text-white transition-colors duration-200 mb-[8px]">
                          Browse Files
                        </div>
                        <span className="text-slate-400 text-[12px]">
                          Supported formats: PDF, DOCX &middot; Maximum size: 10MB
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Actions Row */}
                  <div className="flex gap-[20px] pt-[12px] justify-center">
                    <button
                      type="button"
                      className="px-[36px] py-[10px] border border-[#039] text-[#039] rounded-[16px] font-bold text-[16px] hover:bg-[#039] hover:text-white transition-colors duration-200 cursor-pointer focus:outline-none"
                      onClick={() => setApplyingJob(null)}
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-[36px] py-[10px] bg-[#039] text-white border border-[#039] rounded-[16px] font-bold text-[16px] hover:bg-transparent hover:text-[#039] transition-colors duration-200 cursor-pointer flex items-center gap-[8px] focus:outline-none"
                    >
                      Apply
                      <svg className="size-[16px] shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </button>
                  </div>
                </div>
              </form>
            ) : (
              <div className="flex flex-col items-center justify-center p-[40px] text-center my-auto">
                <div className="size-[64px] bg-green-50 rounded-full flex items-center justify-center text-green-500 text-[32px] font-bold">
                  ✓
                </div>
                <h3 className="text-[22px] font-bold text-slate-800 mt-[20px]">
                  Application Submitted!
                </h3>
                <p className="text-slate-500 mt-[10px] text-[15px] leading-relaxed">
                  Thank you for applying to the <strong>{applyingJob.title}</strong> role. Our team will review your CV and cover details and reach out to you shortly.
                </p>
                <button 
                  className="bg-[#039] hover:bg-[#002266] text-white py-[10px] px-[40px] rounded-[12px] mt-[28px] cursor-pointer transition-colors font-semibold text-[15px] focus:outline-none"
                  onClick={() => setApplyingJob(null)}
                >
                  Close
                </button>
              </div>
            )}
          </div>
        </div>,
        document.body
      )}
    </div>
  );
}