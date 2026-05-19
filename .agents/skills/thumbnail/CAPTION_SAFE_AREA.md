# CAPTION_SAFE_AREA.md

## 🛡️ 자막 및 UI 안전 영역(Safe Area) 원칙
유튜브의 네이티브 UI 요소(플레이어 바, 시간 배지, 워터마크 등)가 썸네일의 주요 텍스트나 로고를 가리지 않도록, 모든 템플릿 컴포넌트는 반드시 최상위 래퍼를 통해 안전 여백을 확보해야 한다.

## 🧱 캡션 안전 영역 래퍼 컴포넌트 (TSX)

```tsx
import React from 'react';

// 개발 모드(디버깅) 플래그: true일 경우 붉은색 데드존 오버레이가 화면에 표시됨.
// 실제 프로덕션 렌더링 시에는 에이전트가 이 값을 false로 두고 캡처해야 함.
const IS_DEBUG_MODE = false;

export const ThumbnailSafeArea: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="relative w-[1280px] h-[720px] overflow-hidden bg-black">
      
      {/* 1. 실제 콘텐츠가 렌더링되는 안전 영역 (Padding 강제) */}
      {/* 좌상단 80px, 우측 140px(워터마크/시간배지 피함), 하단 90px(플레이어 바 피함) 여백 확보 */}
      <div className="absolute top-[80px] bottom-[90px] left-[80px] right-[140px] flex flex-col">
        {children}
      </div>

      {/* 2. 디버깅용 데드존(Dead Zone) 오버레이 */}
      {/* 에이전트가 레이아웃을 테스트할 때 텍스트 침범 여부를 시각적으로 확인하기 위한 UI */}
      {IS_DEBUG_MODE && (
        <div className="absolute inset-0 pointer-events-none z-50">
          
          {/* [우측 하단] 영상 런타임 타임스탬프 (예: 21:50) */}
          <div className="absolute bottom-4 right-4 w-[120px] h-[45px] bg-red-500/40 border border-red-500 flex items-center justify-center">
            <span className="text-white font-bold text-sm drop-shadow-md">Time Badge</span>
          </div>
          
          {/* [하단] 유튜브 플레이어 프로그레스 바 영역 */}
          <div className="absolute bottom-0 left-0 right-0 h-[60px] bg-red-500/20 border-t border-red-500 flex items-center justify-center">
            <span className="text-white font-bold text-sm drop-shadow-md">Player Control Bar</span>
          </div>
          
          {/* [우측 상단] 채널 워터마크 및 정보 카드(i) 아이콘 영역 */}
          <div className="absolute top-4 right-4 w-[80px] h-[80px] bg-red-500/40 border border-red-500 flex items-center justify-center">
            <span className="text-white font-bold text-xs text-center drop-shadow-md">Water<br/>Mark</span>
          </div>
          
        </div>
      )}
    </div>
  );
};