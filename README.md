# Lazarum AI Training Platform

A modern, production-ready AI model training and deployment platform built with React, TypeScript, and Tailwind CSS.

## Features

- 🧠 **AI Model Training**: Train and manage custom AI models
- 📊 **Real-time Analytics**: Monitor training progress and model performance
- 🔒 **Secure Authentication**: Protected routes and user management
- 💾 **Dataset Management**: Upload and organize training datasets
- 🎮 **AI Playground**: Test models with different capabilities
  - Financial Analysis
  - Image Generation
  - Cryptocurrency Analysis
- 🎯 **Model Context Protocol (MCP)**: Advanced context management for AI models
- 💼 **EVM Wallet Integration**: Secure cryptocurrency wallet management
- 📈 **CoinGecko API Integration**: Real-time crypto market data

## Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS
- **State Management**: React Context
- **Routing**: React Router v6
- **Icons**: Lucide React
- **API Integration**: Supabase
- **Development**: ESLint, TypeScript

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/LazarumAI/training-platform.git
   cd training-platform
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

## Project Structure

```
lazarum-ai/
├── public/
│   └── lz.png
├── src/
│   ├── components/
│   │   ├── Dashboard/
│   │   ├── Models/
│   │   ├── Navigation/
│   │   ├── Playground/
│   │   ├── Staking/
│   │   └── UI/
│   ├── pages/
│   │   ├── Dashboard.tsx
│   │   ├── Models.tsx
│   │   ├── Datasets.tsx
│   │   └── Playground/
│   ├── utils/
│   │   └── helpers.ts
│   ├── App.tsx
│   └── main.tsx
├── index.html
└── package.json
```

## Available Scripts

- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm run preview`: Preview production build
- `npm run lint`: Run ESLint

## Environment Variables

Create a `.env` file in the root directory:

```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

For support, email support@lazarum.org or join our Discord community.

## Acknowledgments

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Lucide Icons](https://lucide.dev/)
- [Supabase](https://supabase.io/)