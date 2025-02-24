# ai-ar-dashboard

A futuristic AI-driven Augmented Reality (AR) dashboard leveraging Angular, StencilJS, WebAssembly, and AI-powered voice interactions.

## 🚀 Features
- **AI-powered Augmented Reality (AR)** integrated with **Angular & StencilJS**.
- **AI voice assistant** powered by WebAssembly (Rust).
- **Futuristic AR interaction UI** for next-gen applications.

## 📂 Project Structure
```
ai-ar-dashboard/
│── stencil-ar-ui/  # Stencil-powered AR vision components
│   ├── src/components/ar-vision/  # AR scanning interface
│   ├── stencil.config.ts  # Stencil configuration
│── angular-ar-dashboard/  # Angular host for AI-AR UI
│   ├── src/app/  # Angular app with AI-powered AR interactions
│   ├── package.json  # Angular dependencies
│── wasm-ai-assistant/  # WebAssembly AI Voice Assistant (Rust-based)
│   ├── src/main.rs  # AI speech processing logic
│   ├── Cargo.toml  # Rust package file
│── README.md
```

## 🛠 Installation & Usage

1. Clone the repository:
   ```bash
   git clone https://github.com/tktarun03/ai-ar-dashboard.git
   cd ai-ar-dashboard
   ```

2. Install dependencies and build Stencil AR UI:
   ```bash
   cd stencil-ar-ui
   npm install
   npm run build
   ```

3. Link Stencil components to Angular:
   ```bash
   cd ../angular-ar-dashboard
   npm install
   npm start
   ```

4. Compile the WebAssembly AI Assistant:
   ```bash
   cd ../wasm-ai-assistant
   cargo build --target wasm32-unknown-unknown --release
   ```

5. Open **http://localhost:4200** to experience AI-powered AR interactions.

## 👨‍💻 About the Author

🚀 Created by [Arunkumar Thamilarasu](https://github.com/tktarun03) | UI Technical Architect | AI & AR Expert

## ⭐ Contribute & Support
- Fork & Star this repository! ⭐
- Submit Issues and PRs to improve AI-powered AR dashboards.

---
🎯 **Follow me on GitHub**: [@tktarun03](https://github.com/tktarun03)
