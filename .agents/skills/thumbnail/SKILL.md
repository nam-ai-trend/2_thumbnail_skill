---
name: thumbnail
description: Generate YouTube thumbnails using React, Tailwind, and Puppeteer based on specific style guides.
---

# 🎨 thumbnail Skill

Generate YouTube thumbnails using React, Tailwind, and Puppeteer based on specific style guides.

## 🛠 Prerequisites
- React + Vite environment
- Tailwind CSS v3
- Puppeteer

## 📁 Structure
- `.agents/skills/thumbnail/COLOR_PALETTE.md`
- `.agents/skills/thumbnail/DESIGN_GUIDE.md`
- `.agents/skills/thumbnail/LAYOUT_AND_PATTERNS.md`
- `.agents/skills/thumbnail/CAPTION_SAFE_AREA.md`

## 📁 워크플로우 및 파일 관리 규칙
- 사용자가 `script.md`를 제공할 경우, 해당 파일이 있는 폴더(예: `outputs/yymmdd_title`)에 모든 결과물(생성된 배경 이미지, 최종 썸네일)을 저장한다.
- 배경 이미지는 `public/` 폴더에 복사하여 Vite가 서빙할 수 있게 하고, 최종 결과물은 `outputs/` 하위 폴더에 모아둔다.
- 캡처 시 `node screenshot.js outputs/폴더명/파일명.png` 식으로 실행하면 폴더가 자동 생성된다.

## 🚀 Usage
1. Use the components in `src/` extracted from these guides.
2. Run Vite server.
3. Use `screenshot.js` to capture the thumbnail: `node screenshot.js path/to/output.png`
