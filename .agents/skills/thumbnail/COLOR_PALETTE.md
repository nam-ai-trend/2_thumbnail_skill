# COLOR_PALETTE.md

## 🎨 팔레트 철학
모든 강조, 하이라이트, 긍정, 핵심, 데이터 시각화에는 오직 정해진 시그니처 색상만 사용한다.
"AI가 임의의 색상이나 그라데이션을 섞어 쓰는 것을 엄격하게 금지한다."

## 🔴 채널별 색상 상수 통제 (TSX / CSS Variables)
그린코끼리(gk)와 메이커에반(me)의 스타일이 섞이지 않도록 접두사(Prefix)로 완전히 분리하여 관리한다.

```tsx
export const COLORS = {
  // 1. 배경색 (Background)
  background: {
    gkPrimary: "#121212",   // 딥 슬레이트 블랙 (매트하고 차분한 질감)
    mePrimary: "#050508",   // 사이버 다크 블랙 (아주 약간의 블루 톤이 섞인 심연)
  },

  // 2. 텍스트 색상 (Text)
  text: {
    baseWhite: "#FFFFFF",   // 기본 고대비 백색 텍스트
    gkNeonGreen: "#00E676", // 시그니처 형광 녹색 (가장 중요한 키워드)
    gkNeonYellow: "#FEEA3B",// 강조 형광 노랑 (숫자, 결과치 강조)
    meCyberCyan: "#00F0FF", // 테크/미래지향적 사이언 블루
    meWarningPink: "#FF007F",// 도발, 경고, 충격적인 지표(예: 폭락) 강조
  },

  // 3. 발광 효과 (Glow / Text-Shadow)
  effects: {
    gkGreenGlow: "rgba(0, 230, 118, 0.65)",
    gkYellowGlow: "rgba(254, 234, 59, 0.7)",
    meCyanGlow: "rgba(0, 240, 255, 0.6)",
    mePinkGlow: "rgba(255, 0, 127, 0.6)",
  }
} as const;