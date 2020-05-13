# NodeJS Server 

Backend server application 

# Features
- Databse is `mongodb`
- placeholder for request verifier

# Folder structure
```bash
.
├── LICENSE
├── README.md
├── app
│   ├── api
│   │   ├── error
│   │   │   └── controllers
│   │   │       └── errorController.js
│   │   ├── fulfillment
│   │   │   ├── controllers
│   │   │   │   └── appController.js
│   │   │   ├── domains
│   │   │   │   └── item.js
│   │   │   └── services
│   │   │       └── appService.js
│   │   └── healthcheck
│   │       └── controllers
│   │           └── healthCheckController.js
│   └── authentication
│       └── requestVerifier.js
├── index.js
├── jsconfig.json
├── package-lock.json
└── package.json
```