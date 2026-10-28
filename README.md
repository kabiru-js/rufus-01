# GitHub-X Core UI

A production-ready React component ecosystem and enterprise dashboard toolkit built with TypeScript and Material-UI (MUI v5).

![Build Status](https://img.shields.io/badge/build-passing-brightgreen)
![Version](https://img.shields.io/badge/version-1.0.0-blue)
![License](https://img.shields.io/badge/license-MIT-green)

## Key Highlights
- **Design Tokens & Theme**: Dark/light mode theme provider with customizable palette overrides.
- **Enterprise Controls**: Polymorphic `Button`, `Card`, `Modal`, `Badge`, and `DataTable`.
- **Dashboard Modules**: `StatCard`, `MetricChart`, `ActivityFeed`, and responsive `OverviewGrid`.
- **Form Suite**: `FormField`, `FileUpload` with drag-and-drop, and validator utilities.
- **Productivity Hooks**: `useLocalStorage`, `useDebounce`, `useClipboard`, `useClickAway`, `useKeyNavigation`.

## Quickstart

```tsx
import React from 'react';
import { CustomThemeProvider, AppShell, OverviewGrid, DataTable } from '@github-x/core-ui';

export function App() {
  return (
    <CustomThemeProvider>
      <AppShell>
        <OverviewGrid />
      </AppShell>
    </CustomThemeProvider>
  );
}
```

## Contributing
1. Clone the repository
2. Install dependencies: `npm install`
3. Run dev server: `npm run dev`
