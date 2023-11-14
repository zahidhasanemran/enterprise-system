# Enterprise System

Welcome to the Enterprise System, a versatile web application built using Next.js and various technologies. This documentation will guide you through installation, usage, and testing of the app.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Testing](#testing)
- [Folder Structure](#folder-structure)
- [Dependencies](#dependencies)
- [Screenshots](#screenshots)
- [Contributing](#contributing)
- [License](#license)

## Features

The Enterprise System comprises three main features:

1. **Generate Code:**

   - It can generate code based on user requirements

2. **General Chat:**

   - Anyone can chat to learn anything

3. **Image Generation:**
   - Provide description and generate image

## Installation

To install the app locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/enterprise-system.git
   ```
2. cd enterprise-system
3. npm install

## Usage

To run the app locally, use the following command:

1. npm run dev

The app will be accessible at http://localhost:3000.

## Testing

To run unit and integration tests, use the following command:

1. npm test

For continuous testing during development, you can use:

1. npm run test:watch

## Folder Structure

The project is organized into the following folders:

- **app:** Contains the main application code.
  - **dashboard:** Subfolder for dashboard-related components and features.
  - **landing:** Subfolder for landing page components.
  - **pages:** Subfolder for shared pages.
- **components:** Reusable UI components.
- **Config:** Configuration files.
- **constants:** Constants used throughout the app.
- **HOC:** Higher Order Components.
- **hooks:** Custom React hooks.
- **lib:** Utility functions and libraries.
- **locales:** Localization files.
- **prisma:** Prisma database configuration.
- **public:** Public assets.
- **package.json:** Project dependencies and scripts.
- **next.config.js:** Next.js configuration.
- **tsconfig.json:** TypeScript configuration.

## Dependencies

The app relies on the following key dependencies:

- **Next.js:** React framework for server-rendered React applications.
- **Axios:** HTTP client for making requests.
- **React Hook Form, Formik:** Form libraries for handling forms.
- **Next-Auth:** Authentication library for Next.js applications.
- **OpenAI:** Integration for OpenAI's services.
- **React 18:** Latest version of React.
- **Tailwind CSS:** Utility-first CSS framework.
- **Yup, Zod:** Schema validation libraries.
- ... (Other dependencies)

## Screenshots

- **Code Feature**
  ![Code Feature](https://i.ibb.co/mRN9gTT/Code-ai.png)

- **Chat Feature**
  ![Chat Feature](https://i.ibb.co/0ypmdjm/chat-ai.png)

- **Image Generation Feature**
  ![Image Generation Feature](https://i.ibb.co/ZK8XZRF/image-ai.png)

## Contributing

<!-- If you want to contribute to the project, please follow the guidelines outlined in the [CONTRIBUTING.md](CONTRIBUTING.md) file. -->

## License

<!--
This project is licensed under the [LICENSE_NAME](LICENSE_URL) License - see the [LICENSE.md](LICENSE.md) file for details. -->
