# 🎨 YouTube Thumbnail Generator

이 프로젝트는 React, Tailwind CSS, 그리고 Puppeteer를 결합하여 고품질의 유튜브 썸네일을 프로그래밍 방식으로 생성하는 도구입니다. 특정 스타일 가이드에 맞춘 레이아웃을 제공합니다.

---

## 🚀 작동 원리 (How it Works)

이 썸네일 생성기는 다음과 같은 흐름으로 작동합니다:

1. **React + Vite 환경**: 
   - 썸네일의 레이아웃과 텍스트 스타일을 React 컴포넌트로 작성합니다.
   - Vite의 초고속 개발 서버를 활용하여 실시간으로 디자인을 확인하고 수정할 수 있습니다.
2. **Tailwind CSS**:
   - 유틸리티 퍼스트 CSS 프레임워크인 Tailwind를 사용하여 컴포넌트의 스타일(폰트 크기, 색상, 레이아웃 등)을 빠르고 유연하게 조정합니다.
3. **Puppeteer (스크린샷 자동화)**:
   - Puppeteer는 크롬(Chrome) 브라우저를 코드로 제어할 수 있게 해주는 Node.js 라이브러리입니다.
   - Vite 서버가 실행 중인 로컬 페이지(`http://localhost:5173`)에 Puppeteer가 보이지 않는(Headless) 브라우저로 접속합니다.
   - 페이지가 완전히 렌더링되면 지정된 해상도(유튜브 썸네일 표준인 1280x720)로 화면을 캡처하여 PNG 이미지 파일로 저장합니다.

---

## 📁 폴더 구조 (Folder Structure)

```text
thumbnail_skill/
├── .agents/skills/
│   └── thumbnail/        # 썸네일 생성 가이드 및 스킬 정의 ⭐️
│       ├── CAPTION_SAFE_AREA.md  # 유튜브 UI(자막, 시간 등) 세이프 존 가이드
│       ├── COLOR_PALETTE.md      # 브랜드별 색상 및 효과(글로우 등) 가이드
│       ├── DESIGN_GUIDE.md       # 텍스트 크기 및 계층 구조 가이드
│       ├── LAYOUT_AND_PATTERNS.md # 썸네일 레이아웃 템플릿 가이드
│       └── SKILL.md              # 썸네일 생성 스킬 정의 및 명령어 가이드
├── outputs/              # 생성된 썸네일 및 배경 이미지 결과물 (주제별 저장)
│   ├── 260518_antigravity/
│   ├── 260518_ppt/
│   └── ax_trend/
├── public/               # Vite 서버가 서빙하는 임시 배경 이미지 폴더
├── src/                  # React 소스 코드
│   ├── COLOR_PALETTE.ts  # 브랜드별 색상 및 효과 정의 (코드)
│   ├── DESIGN_GUIDE.tsx  # 공통 및 브랜드별 텍스트 컴포넌트
│   ├── LAYOUT_AND_PATTERNS.tsx # 썸네일 레이아웃 템플릿
│   ├── App.tsx           # 현재 렌더링할 썸네일 설정 파일
│   └── main.tsx          # React 엔트리 포인트
├── .gitignore            # Git 제외 파일 설정 (node_modules 등)
├── package.json          # 프로젝트 의존성 및 스크립트 설정
├── screenshot.js         # Puppeteer 기반 캡처 스크립트
└── README.md             # 프로젝트 설명서 (현재 파일)
```

### 📚 가이드 파일 설명 (Guide Files)

`.agents/skills/thumbnail/` 폴더 내의 마크다운 파일들은 썸네일의 퀄리티와 일관성을 유지하기 위한 핵심 가이드라인입니다:

- **`CAPTION_SAFE_AREA.md`**: 유튜브의 기본 UI(재생 시간, 자막 등)에 가려지지 않도록 텍스트나 중요 요소를 배치하는 안전 영역(Safe Area)을 정의합니다.
- **`COLOR_PALETTE.md`**: 스타일별 메인 컬러, 서브 컬러 및 텍스트 글로우(Glow) 효과 등의 색상 시스템을 정의합니다.
- **`DESIGN_GUIDE.md`**: 시선을 사로잡는 텍스트의 크기(100px 이상), 강조 순서, 폰트 굵기 등 타이포그래피 규칙을 정의합니다.
- **`LAYOUT_AND_PATTERNS.md`**: 주제나 감정에 따른 4가지 핵심 레이아웃(화제 전환, 방법론 제시, 충격 효과, 사이버 터미널)의 구조와 사용 처를 정의합니다.
- **`SKILL.md`**: AI 에이전트가 이 프로젝트를 '스킬'로서 인식하고 실행할 수 있도록 하는 명령어 및 워크플로우 정의 파일입니다.


---

## 🛠️ 설치 및 사용 방법 (Installation & Usage)

### 1. 의존성 설치
프로젝트 루트 폴더에서 아래 명령어를 실행하여 필요한 패키지들을 설치합니다.
```bash
npm install
```

### 2. 썸네일 생성 워크플로우

1. **배경 이미지 준비**
   - AI나 다른 툴로 생성한 배경 이미지를 프로젝트의 **`public/`** 폴더에 넣어줍니다. (예: `public/my_bg.png`)
   - Vite 서버가 이 폴더의 파일만 읽어서 화면에 띄울 수 있기 때문입니다.

2. **코드 수정 (`src/App.tsx`)**
   - **`src/App.tsx`** 파일을 열어서 원하는 썸네일 스타일을 고릅니다.
   - 컴포넌트의 프롭스(Props)에 들어갈 **제목 글씨**와 방금 넣은 **배경 이미지 경로**(`/my_bg.png`)를 적어줍니다.

3. **서버 켜기 (화면 그리기)**
   - 터미널에서 아래 명령어를 실행하여 Vite 개발 서버를 켭니다.
     ```bash
     npm run dev
     ```
   - 이 서버가 켜져 있어야 Puppeteer라는 가상 브라우저가 접속해서 사진을 찍을 수 있습니다.

4. **찰칵! 캡처하기 (스크린샷)**
   - 서버가 켜진 상태에서 **새 터미널 창**을 하나 더 열고, 아래 명령어를 실행하면 끝납니다!
     ```bash
     node screenshot.js outputs/원하는폴더명/썸네일이름.png
     ```
   - 이렇게 하면 지정한 폴더에 최종 썸네일 PNG 파일이 생성됩니다. (폴더가 없으면 알아서 만들어줍니다!)

