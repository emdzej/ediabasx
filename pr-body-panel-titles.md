## Summary
Embed panel title and item count directly in the border, classic TUI style.

## Before
```
┌─────────────┐
│ Jobs        │  1/16
│ ▸ INFO      │
```

## After
```
╔═Jobs═══════════1/16═╗
║ ▸ INFO              ║
║   INITIALISIERUNG   ║
╚═════════════════════╝
```

## Changes
- Title embedded in left side of top border
- Count (e.g., `1/16` or `1-20/150`) embedded in right side
- Single border (`┌─┐`) for unfocused panels
- Double border (`╔═╗`) for focused panels
- Cyan color for focused panel borders
- Custom text-based border rendering (replaces Ink's borderStyle)
- Applied to all panels: Items, Content, Details
