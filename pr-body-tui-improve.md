## Summary
Improve TUI explore UX based on feedback:

### Changes
- **Top navbar** instead of navigation panel - press `1`/`2`/`3` to switch JOBS/TABLES/METADATA
- **Tab key** cycles between panels (items → content → details → items)
- **Scrolling in all panels** - content, details, and items all support scrolling
- **PgUp/PgDown** for fast scrolling
- **Scroll indicators** showing "↑ more above" / "↓ more below"
- **Line count display** (e.g., "1-20/150") when content exceeds panel
- **Elipsis (...)** for text exceeding panel width
- **Focused panel highlighting** with double border and cyan color

### Keyboard
| Key | Action |
|-----|--------|
| `Tab` | Cycle panels |
| `←→` or `h/l` | Switch panels |
| `↑↓` or `j/k` | Navigate/scroll in focused panel |
| `PgUp/PgDown` | Fast scroll |
| `1/2/3` | Switch section |
| `/` | Search |
| `Q` | Quit |
| `?` | Help |

### Layout
```
┌─────────────────────────────────────────────────────────┐
│ 📁 d_motor.prg                          [Q]uit [?]Help  │
│ [JOBS]  TABLES   METADATA                               │
│ ─────────────────────────────────────────────────────── │
│ ┌─Jobs────────┐ ┌─Content──────────────────1-20/47────┐ │
│ │▸ INFO       │ │ 000000A0: clear S1                  │ │
│ │  INITIALISIE│ │ 000000A3: move S1,"allgemeine Fu... │ │
│ │  STATUS_UBAT│ │ ...                                 │ │
│ │  ↓          │ │ ↓ more below                        │ │
│ └─────────────┘ └─────────────────────────────────────┘ │
│                 ┌─Details─────────────────────────────┐ │
│                 │ Name: INFO                          │ │
│                 │ Results: ECU, ORIGIN, REVISION...   │ │
│                 └─────────────────────────────────────┘ │
│ ↑↓/jk Navigate  Tab/←→ Panels  1/2/3 Section  Q Quit   │
└─────────────────────────────────────────────────────────┘
```
