# DESIGN_GUIDE.md

## ✍️ 타이포그래피 및 렌더링 원칙
- **[IMPORTANT]** 글자 크기는 화면을 꽉 채울 정도로 거대하게 사용한다. 가이드의 기본값보다 더 크게 키워도 좋다.
- **두께:** 무조건 가장 두꺼운 Black(900) 굵기 강제 (`font-black`).
- **자간/행간:** 텍스트가 흩어지지 않게 자간은 좁게(`tracking-tighter`), 행간은 타이트하게(`leading-[1.1]`) 묶어 시각적 덩어리감을 만든다.

## 🧱 텍스트 컴포넌트 명세 (TSX)

```tsx
import React from 'react';
import { COLORS } from './COLOR_PALETTE';

// 1. 공통 기본 텍스트 (흰색)
// 용도: 설명, 서브 타이틀 등 가독성이 최우선인 텍스트
// [수정] 기본 폰트 크기를 72px -> 90px로 상향
export const BaseWhiteText: React.FC<{ text: string; fontSize?: string }> = ({ text, fontSize = '90px' }) => (
  <span 
    className="font-black tracking-tight text-white whitespace-nowrap"
    style={{ fontSize, lineHeight: '1.2' }}
  >
    {text}
  </span>
);

// 2. 네온 글로우 텍스트
// 특징: 깔끔하고 투명한 빛 번짐 효과 (Green or Yellow)
// [수정] 기본 폰트 크기를 82px -> 110px로 상향
export const GkNeonText: React.FC<{ text: string; type: 'green' | 'yellow'; fontSize?: string }> = ({ text, type, fontSize = '110px' }) => {
  const color = type === 'green' ? COLORS.text.gkNeonGreen : COLORS.text.gkNeonYellow;
  const glow = type === 'green' ? COLORS.effects.gkGreenGlow : COLORS.effects.gkYellowGlow;
  
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
// [수정] 기본 폰트 크기를 90px -> 120px로 상향
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
```