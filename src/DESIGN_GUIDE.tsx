import React from 'react';
import { COLORS } from './COLOR_PALETTE';

// 1. 공통 기본 텍스트 (흰색)
// 용도: 설명, 서브 타이틀 등 가독성이 최우선인 텍스트
export const BaseWhiteText: React.FC<{ text: string; fontSize?: string }> = ({ text, fontSize = '90px' }) => (
  <span 
    className="font-black tracking-tight text-white whitespace-nowrap"
    style={{ fontSize, lineHeight: '1.2' }}
  >
    {text}
  </span>
);

// [신규] 단색 텍스트 (효과 없음)
// 용도: 사용자의 요청으로 추가된 그림자/글로우 효과가 없는 깔끔한 단색 텍스트
export const SolidColorText: React.FC<{ text: string; color: string; fontSize?: string }> = ({ text, color, fontSize = '110px' }) => (
  <span 
    className="font-black tracking-tighter whitespace-nowrap"
    style={{ color, fontSize, lineHeight: '1.2' }}
  >
    {text}
  </span>
);

// 2. 네온 글로우 텍스트
// 특징: 깔끔하고 투명한 빛 번짐 효과 (Green or Yellow or Rose)
export const GkNeonText: React.FC<{ text: string; type: 'green' | 'yellow' | 'rose'; fontSize?: string }> = ({ text, type, fontSize = '110px' }) => {
  let color = COLORS.text.gkNeonYellow;
  let glow = COLORS.effects.gkYellowGlow;
  
  if (type === 'green') {
    color = COLORS.text.gkNeonGreen;
    glow = COLORS.effects.gkGreenGlow;
  } else if (type === 'rose') {
    color = '#f43f5e';
    glow = 'rgba(244, 63, 94, 0.5)'; // 로즈 핑크 글로우
  }
  
  return (
    <span 
      className="font-black tracking-tighter whitespace-nowrap" 
      style={{
        color: color,
        textShadow: `0 0 10px ${glow}, 0 0 25px ${glow}`,
        fontSize,
        lineHeight: '1.1'
      }}
    >
      {text}
    </span>
  );
};

// 3. 사이버 펑크 텍스트
// 특징: 극단적인 대비와 어두운 배경에서도 묻히지 않는 강한 윤곽선 (Cyan or Pink)
export const MeCyberText: React.FC<{ text: string; type: 'cyan' | 'pink'; fontSize?: string }> = ({ text, type, fontSize = '120px' }) => {
  const color = type === 'cyan' ? COLORS.text.meCyberCyan : COLORS.text.meWarningPink;
  const glow = type === 'cyan' ? COLORS.effects.meCyanGlow : COLORS.effects.mePinkGlow;
  
  return (
    <span 
      className="font-black tracking-tighter whitespace-nowrap" 
      style={{
        color: color,
        textShadow: `0 0 12px ${glow}, 0 0 30px rgba(0,0,0,0.8)`,
        fontSize,
        lineHeight: '1.05'
      }}
    >
      {text}
    </span>
  );
};
