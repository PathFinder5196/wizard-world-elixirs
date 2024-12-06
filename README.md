# React Project Setup

## Prerequisites

Make sure you have the following installed on your machine:

- **Node.js**
- **npm** or **Yarn** as your package manager

You can verify your versions with the following commands:

```bash
node -v
npm -v
```

---

## Setup Instructions

### 1. Clone the Repository

Clone this repository to your local machine (if applicable):

```bash
git clone https://github.com/PathFinder5196/wizard-world-elixirs.git
cd wizard-world-elixirs
```

### 2. Install Dependencies

Install the required dependencies specified in `package.json`:

```bash
npm install
```

Alternatively, if you are using Yarn:

```bash
yarn install
```

---

## Running the Project

### 1. Start the Development Server

Run the following command to start the development server:

```bash
npm start
```

This will start the React development server and open the application in your default browser. If it doesn't open automatically, navigate to [http://localhost:3000](http://localhost:3000) in your browser.

### 2. Build for Production

To create a production-ready build, use:

```bash
npm run build
```

The optimized build will be available in the `build/` directory.

---

## Troubleshooting

- If you encounter issues with dependencies or outdated versions, try deleting `node_modules` and `package-lock.json` (or `yarn.lock`) and re-installing:

```bash
rm -rf node_modules package-lock.json
npm install
```

- For further assistance, refer to the official [React documentation](https://reactjs.org/docs/getting-started.html).

## Author

Lavesh K.
