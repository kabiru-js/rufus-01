# Architecture & Design System

The library is organized in modular layers:

```
[ UI Components (MUI + Emotion) ]
         │
         ▼
[ Context Layer (Theme, Auth, Notification) ]
         │
         ▼
[ Custom Hooks (useLocalStorage, useDebounce, etc.) ]
         │
         ▼
[ Pure Helpers & Utilities (Formatters, Validators, Exporters) ]
```

All components adhere to WCAG AA guidelines with high-contrast accessibility tokens.
