NODE_MVC_STRUCTURE
+---app
|   +---modules
|   |   +---Pages
|   |   |   +---Commands
|   |   |   |       ace_commands.js
|   |   |   +---Controllers
|   |   |   |   |   index.js
|   |   |   |   \---Admin
|   |   |   |           edit.js
|   |   |   |           list.js
|   |   |   +---Database
|   |   |   |       setup_data.js
|   |   |   |       setup_schema.js
|   |   |   +---Events
|   |   |   |       events_by_listeners_actions.js
|   |   |   +---Models
|   |   |   |       Pages.js
|   |   |   \---Sockets
|   |   |           web_sockets.js
|   |   \---Users
|   |       +---Commands
|   |       |       ace_commands.js
|   |       +---Controllers
|   |       |   |   index.js
|   |       |   \---Admin
|   |       |           edit.js
|   |       |           list.js
|   |       +---Database
|   |       |       setup_data.js
|   |       |       setup_schema.js
|   |       +---Events
|   |       |       events_by_listeners_actions.js
|   |       +---Models
|   |       |       Users.js
|   |       \---Sockets
|   |               web_sockets.js
|   \---themes
|       +---admin
|       |   +---globals
|       |   |       footer.edge
|       |   |       header.edge
|       |   +---layouts
|       |   |       admin.edge
|       |   +---Pages
|       |   |       edit.edge
|       |   |       list.edge
|       |   \---Users
|       |           dashboard.edge
|       |           login.edge
|       \---frontend
|           \---October
|               +---globals
|               |       footer.edge
|               |       header.edge
|               +---layouts
|               |       home.edge
|               +---Pages
|               |       list.edge
|               |       view.edge
|               \---Users
|                       dashboard.edge
|                       login_register.edge
+---config
|       app.js
|       database.js
+---public
|   +---admin
|   |   +---css
|   |   |       styles.css
|   |   +---images
|   |   |       splash.png
|   |   \---js
|   |           scripts.js
|   \---frontend
|       \---October
|           +---css
|           |       styles.css
|           +---images
|           |       splash.png
|           \---js
|                   scripts.js
\---storage
    \---log
|   .env
|   .gitignore
|   ace
|   app.js
|   package.json
|   README.md



=========

MVC_STRUCTURE
├───app
│   ├───modules
│   │   ├───Pages
│   │   │   ├───Commands
│   │   │   │       ace_commands.js
│   │   │   │
│   │   │   ├───Controllers
│   │   │   │   │   index.js
│   │   │   │   │   list.js
│   │   │   │   │   view.js
│   │   │   │   │
│   │   │   │   └───Admin
│   │   │   │           edit.js
│   │   │   │           list.js
│   │   │   │
│   │   │   ├───Database
│   │   │   │       setup_data.js
│   │   │   │       setup_schema.js
│   │   │   │
│   │   │   ├───Events
│   │   │   │       events_by_listeners_actions.js
│   │   │   │
│   │   │   ├───i18n
│   │   │   │       en.csv
│   │   │   │       fr.csv
│   │   │   │
│   │   │   ├───Models
│   │   │   │       Pages.js
│   │   │   │
│   │   │   └───Sockets
│   │   │           web_sockets.js
│   │   │
│   │   └───Users
│   │       ├───Commands
│   │       │       ace_commands.js
│   │       │
│   │       ├───Controllers
│   │       │   │   dashboard.js
│   │       │   │   login.js
│   │       │   │   register.js
│   │       │   │
│   │       │   └───Admin
│   │       │           edit.js
│   │       │           list.js
│   │       │
│   │       ├───Database
│   │       │       setup_data.js
│   │       │       setup_schema.js
│   │       │
│   │       ├───Events
│   │       │       events_by_listeners_actions.js
│   │       │
│   │       ├───i18n
│   │       │       en.csv
│   │       │       fr.csv
│   │       │
│   │       ├───Models
│   │       │       Users.js
│   │       │
│   │       └───Sockets
│   │               web_sockets.js
│   │
│   └───themes
│       ├───admin
│       │   ├───globals
│       │   │       footer.edge
│       │   │       header.edge
│       │   │
│       │   ├───i18n
│       │   │       en.csv
│       │   │       fr.csv
│       │   │
│       │   ├───layouts
│       │   │       admin.edge
│       │   │
│       │   ├───Pages
│       │   │       edit.edge
│       │   │       list.edge
│       │   │
│       │   └───Users
│       │           dashboard.edge
│       │           login.edge
│       │
│       └───frontend
│           └───October
│               ├───globals
│               │       footer.edge
│               │       header.edge
│               │
│               ├───i18n
│               │       en.csv
│               │       fr.csv
│               │
│               ├───layouts
│               │       home.edge
│               │
│               ├───Pages
│               │       list.edge
│               │       view.edge
│               │
│               └───Users
│                       dashboard.edge
│                       login_register.edge
│
├───config
│       app.js
│       database.js
│
├───public
│   ├───admin
│   │   ├───css
│   │   │       styles.css
│   │   │
│   │   ├───images
│   │   │       splash.png
│   │   │
│   │   └───js
│   │           scripts.js
│   │
│   ├───frontend
│   │   └───October
│   │       ├───css
│   │       │       styles.css
│   │       │
│   │       ├───images
│   │       │       splash.png
│   │       │
│   │       └───js
│   │               scripts.js
│   │
│   └───media
│       └───uploads
└───storage
│    └───log
│   .env
│   .gitignore
│   ace
│   app.js
│   package.json
│   README.md