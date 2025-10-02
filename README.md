# UniHero (Python + aiogram 3) — Starter


This starter gives you two Telegram bots sharing one SQLite DB:
- **User Bot**: registration + approval gate + main menu (2×4 inline grid)
- **Admin Bot**: approve/reject users


## Quick start (VS Code)
1) Create a virtualenv and install deps:
```bash
python -m venv .venv
. .venv/bin/activate # Windows: .venv\\Scripts\\activate
pip install -r requirements.txt