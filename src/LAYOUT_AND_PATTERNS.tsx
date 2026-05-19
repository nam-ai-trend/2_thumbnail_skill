import React from 'react';
import { COLORS } from './COLOR_PALETTE';
import { BaseWhiteText, GkNeonText, MeCyberText } from './DESIGN_GUIDE';

// ==========================================
// 🟢 네온 스타일 (깔끔, 직관, 정보전달)
// ==========================================

// 패턴 1: [A → B] 변화 / 마스터형 (도구 업그레이드, 비포&애프터)
export const GkTransitionLayout: React.FC<{
  beforeLogo: React.ReactNode;
  afterLogo: React.ReactNode;
  line1: React.ReactNode; 
  line2: React.ReactNode; 
  backgroundImage?: string; // 배경 이미지 경로
}> = ({ beforeLogo, afterLogo, line1, line2, backgroundImage }) => (
  <div 
    className="w-[1280px] h-[720px] relative px-[80px] flex flex-col justify-center" 
    style={{ 
      backgroundColor: COLORS.background.gkPrimary,
      backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}
  >
    {/* 배경이 있을 경우 어둡게 처리하여 텍스트 가독성 확보 */}
    {backgroundImage && <div className="absolute inset-0 bg-black/40 z-0" />}

    {/* 상단: 변환 로고 영역 */}
    <div className="flex items-center gap-6 mb-8 z-10">
      <div className="bg-white px-6 py-3 rounded-xl shadow-md text-3xl font-black text-slate-800">
        {beforeLogo}
      </div>
      <div className="text-5xl font-black text-red-500">➔</div>
      <div className="bg-white px-8 py-4 rounded-xl shadow-lg text-4xl font-black text-blue-600 border-[3px] border-blue-500">
        {afterLogo}
      </div>
    </div>
    
    {/* 하단: 타이틀 스택 */}
    <div className="flex flex-col gap-3 z-10">
      {line1}
      {line2}
    </div>
  </div>
);

// 패턴 2: 핵심 키워드/숫자 도출 실전형 (팁 나열, 강렬한 가치 전달)
export const GkMethodLayout: React.FC<{
  logoNode: React.ReactNode;
  badgeText: string;      
  titleLine1: React.ReactNode; 
  titleLine2: React.ReactNode; 
  backgroundImage?: string;
}> = ({ logoNode, badgeText, titleLine1, titleLine2, backgroundImage }) => (
  <div 
    className="w-[1280px] h-[720px] relative px-[80px] flex flex-col justify-center" 
    style={{ 
      backgroundColor: COLORS.background.gkPrimary,
      backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}
  >
    {backgroundImage && <div className="absolute inset-0 bg-black/40 z-0" />}

    {/* 좌측 상단 고정: 로고 및 뱃지 */}
    <div className="absolute top-[70px] left-[80px] flex items-center gap-5 z-10">
      <div className="bg-white px-5 py-2 rounded-lg shadow-sm">
        {logoNode}
      </div>
      <div className="bg-gradient-to-r from-orange-400 to-red-500 text-white px-5 py-2 rounded-lg text-2xl font-black tracking-tight">
        {badgeText}
      </div>
    </div>
    
    {/* 중앙 하단: 타이틀 스택 */}
    <div className="flex flex-col gap-4 mt-[60px] z-10">
      {titleLine1}
      {titleLine2}
    </div>
  </div>
);


// ==========================================
// ⚡ 사이버 스타일 (사이버, 파괴적 지표, 도발)
// ==========================================

// 패턴 3: 파괴적 지표 강조형 (충격적인 수치 떡락/상승)
export const MeShockLayout: React.FC<{
  shockTitle: React.ReactNode; 
  valueDrop: React.ReactNode;  
  backgroundImage?: string;
}> = ({ shockTitle, valueDrop, backgroundImage }) => (
  <div 
    className="w-[1280px] h-[720px] relative flex flex-col justify-center items-center text-center" 
    style={{ 
      backgroundColor: COLORS.background.mePrimary,
      backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}
  >
    {/* 배경: 강렬한 네온 그린 글로우 방사형 (배경 이미지가 없을 때만 적용하거나 겹침) */}
    <div 
      className="absolute inset-0 pointer-events-none" 
      style={{
        background: `radial-gradient(circle at center, ${COLORS.effects.meCyanGlow} 0%, transparent 60%)`,
        opacity: backgroundImage ? 0.15 : 0.25
      }} 
    />
    
    {backgroundImage && <div className="absolute inset-0 bg-black/30 z-0" />}

    {/* 중앙 정렬 타이틀 스택 */}
    <div className="flex flex-col items-center gap-6 z-10">
      <div className="bg-black/50 px-8 py-3 rounded-2xl border border-white/10 backdrop-blur-sm">
        {shockTitle}
      </div>
      {valueDrop}
    </div>
  </div>
);

// 패턴 4: 미래 사이버 입코딩/터미널 선언형
export const MeCyberTerminalLayout: React.FC<{
  terminalCommand: string; 
  coreStatement: React.ReactNode; 
  statusText: React.ReactNode;    
  backgroundImage?: string;
}> = ({ terminalCommand, coreStatement, statusText, backgroundImage }) => (
  <div 
    className="w-[1280px] h-[720px] relative flex flex-col justify-center p-[90px]" 
    style={{ 
      backgroundColor: COLORS.background.mePrimary,
      backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}
  >
    {/* 배경: 우측 하단에서 올라오는 핑크/사이버 경고 글로우 */}
    <div 
      className="absolute bottom-0 right-0 w-[600px] h-[600px] pointer-events-none" 
      style={{
        background: `radial-gradient(circle at bottom right, ${COLORS.effects.mePinkGlow} 0%, transparent 70%)`,
        opacity: backgroundImage ? 0.1 : 0.15
      }} 
    />

    {backgroundImage && <div className="absolute inset-0 bg-black/40 z-0" />}

    {/* 상단: 터미널 프롬프트 박스 */}
    <div className="border-l-4 border-cyan-500 bg-black/60 p-4 font-mono text-cyan-400 text-2xl max-w-fit mb-8 z-10">
      <span className="text-pink-500 mr-2">$</span>
      {terminalCommand}
      <span className="animate-pulse ml-1">_</span>
    </div>
    
    {/* 하단: 거대한 선언 텍스트 */}
    <div className="flex flex-col gap-2 z-10">
      {coreStatement}
      {statusText}
    </div>
  </div>
);
