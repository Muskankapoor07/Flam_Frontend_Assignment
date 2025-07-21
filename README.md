# React Bottom Sheet Component

A responsive and accessible **Bottom Sheet** component built using **React**. It supports **keyboard navigation**, **smooth snap transitions**, and **accessibility features**, making it user-friendly across devices.

---

## 🚀 Features

- ✅ Smooth snap animations
- ✅ Keyboard support (↑ ↓ Esc)
- ✅ Accessible with ARIA roles
- ✅ Responsive on all devices
- ✅ Easily customizable and extendable

---

## 🛠️ Technologies Used

- React (via Create React App)
- JavaScript (ES6+)
- CSS (no UI framework used)
- Git for version control

---

## 📁 Folder Structure

react-bottom-sheet/
│
├── public/ # Static files
│ └── index.html
│
├── src/ # React source code
│ ├── components/ # Reusable components
│ │ └── BottomSheet.jsx # Bottom sheet logic
│ │
│ ├── styles/ # Custom CSS
│ │ └── bottomsheet.css # Styles for bottom sheet
│ │
│ ├── App.js # Root app component
│ ├── index.js # ReactDOM entry point
│ └── index.css # Global styles
│
├── .gitignore
├── package.json
├── README.md
└── vite.config.js (if using Vite)

## 🧑‍💻 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Muskankapoor07/Flam_Frontend_Assignment.git

cd react-bottom-sheet

Install Dependencies
npm install
Run the Application Locally
npm start
This will run your app on http://localhost:3000.

🎹 Keyboard & Accessibility Support
↑ and ↓ arrow keys move the sheet between snap points.

ESC closes the bottom sheet.

ARIA attributes are included for screen reader compatibility.

Use tab to navigate through buttons.

Deployment on Netlify
1. Create a Production Build

npm run build
This will generate a dist/ (Vite) or build/ (CRA) folder.

2. Deploy to Netlify
Visit https://app.netlify.com

Click “Add new site” > “Import an existing project”

Connect your GitHub repo

Choose build command:

For Vite: npm run build

For CRA: npm run build

Set publish directory:

For Vite: dist

For CRA: build

Click Deploy Site

✅ Optional: Live Demo Link
Once deployed, you can add:

md

## 🔗 Live Demo

Check it out here: [Live App](https://your-project-name.netlify.app/)
🤝 Contributing
Contributions are welcome! Feel free to fork the repo, create a feature branch, and submit a pull request.

📄 License
This project is licensed under the MIT License.

🙌 Acknowledgments
Thanks to Netlify for free hosting and to all open-source tools that made this project possible.
