@import url('https://fonts.googleapis.com/css2?family=Bangers&family=Roboto:wght@300;400;500;700;900&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 240 10% 3.9%;
    --card: 0 0% 100%;
    --card-foreground: 240 10% 3.9%;
    --popover: 0 0% 100%;
    --popover-foreground: 240 10% 3.9%;
    --primary: 24 95% 53%;
    --primary-foreground: 0 0% 100%;
    --secondary: 240 4.8% 95.9%;
    --secondary-foreground: 240 5.9% 10%;
    --muted: 240 4.8% 95.9%;
    --muted-foreground: 240 3.8% 46.1%;
    --accent: 217 91% 60%;
    --accent-foreground: 0 0% 100%;
    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 0 0% 98%;
    --border: 240 5.9% 90%;
    --input: 240 5.9% 90%;
    --ring: 24 95% 53%;
    --radius: 0.625rem;
    --sidebar-background: 0 0% 98%;
    --sidebar-foreground: 240 5.3% 26.1%;
    --sidebar-primary: 24 95% 53%;
    --sidebar-primary-foreground: 0 0% 100%;
    --sidebar-accent: 240 4.8% 95.9%;
    --sidebar-accent-foreground: 240 5.9% 10%;
    --sidebar-border: 220 13% 91%;
    --sidebar-ring: 24 95% 53%;
  }

  .dark {
    --background: 220 20% 10%;
    --foreground: 0 0% 98%;
    --card: 220 20% 14%;
    --card-foreground: 0 0% 98%;
    --popover: 220 20% 14%;
    --popover-foreground: 0 0% 98%;
    --primary: 24 95% 53%;
    --primary-foreground: 0 0% 100%;
    --secondary: 240 3.7% 15.9%;
    --secondary-foreground: 0 0% 98%;
    --muted: 240 3.7% 15.9%;
    --muted-foreground: 240 5% 64.9%;
    --accent: 217 91% 60%;
    --accent-foreground: 0 0% 100%;
    --destructive: 0 62.8% 30.6%;
    --destructive-foreground: 0 0% 98%;
    --border: 240 3.7% 15.9%;
    --input: 240 3.7% 15.9%;
    --ring: 24 95% 53%;
    --sidebar-background: 240 5.9% 10%;
    --sidebar-foreground: 240 4.8% 95.9%;
    --sidebar-primary: 24 95% 53%;
    --sidebar-primary-foreground: 0 0% 100%;
    --sidebar-accent: 240 3.7% 15.9%;
    --sidebar-accent-foreground: 240 4.8% 95.9%;
    --sidebar-border: 240 3.7% 15.9%;
    --sidebar-ring: 24 95% 53%;
  }
}

@layer base {
  * {
    @apply border-border;
  }
  html {
    scroll-behavior: smooth;
  }
  body {
    @apply bg-background text-foreground font-body;
    background-color: #0a0a0f;
    color: #ffffff;
    overflow-x: hidden;
  }
}

@layer components {
  .text-gradient {
    @apply bg-clip-text text-transparent;
    background-image: linear-gradient(135deg, #f97316 0%, #facc15 50%, #f97316 100%);
  }

  .text-gradient-blue {
    @apply bg-clip-text text-transparent;
    background-image: linear-gradient(135deg, #3b82f6 0%, #38bdf8 100%);
  }

  .glass-effect {
    @apply backdrop-blur-md bg-white/5 border border-white/10;
  }

  .glass-dark {
    @apply backdrop-blur-xl bg-black/40 border border-white/5;
  }

  .chakra-glow {
    box-shadow: 0 0 20px rgba(249, 115, 22, 0.5), 0 0 40px rgba(249, 115, 22, 0.3);
  }

  .chakra-glow-blue {
    box-shadow: 0 0 20px rgba(59, 130, 246, 0.5), 0 0 40px rgba(59, 130, 246, 0.3);
  }

  .hexagon-clip {
    clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  }

  .ninja-card {
    @apply relative overflow-hidden rounded-xl;
    background: linear-gradient(145deg, rgba(31, 41, 55, 0.8), rgba(17, 24, 39, 0.9));
    border: 1px solid rgba(249, 115, 22, 0.2);
    transition: all 0.3s cubic-bezier(0.19, 1, 0.22, 1);
  }

  .ninja-card:hover {
    border-color: rgba(249, 115, 22, 0.5);
    transform: translateY(-5px);
    box-shadow: 0 20px 40px rgba(249, 115, 22, 0.2);
  }

  .section-title {
    @apply font-display text-4xl md:text-5xl lg:text-6xl tracking-wider;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  }

  .btn-primary {
    @apply px-6 py-3 rounded-lg font-medium transition-all duration-300;
    background: linear-gradient(135deg, #f97316 0%, #ea580c 100%);
    color: white;
  }

  .btn-primary:hover {
    transform: scale(1.05);
    box-shadow: 0 0 30px rgba(249, 115, 22, 0.6);
  }

  .btn-secondary {
    @apply px-6 py-3 rounded-lg font-medium transition-all duration-300;
    background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
    color: white;
  }

  .btn-secondary:hover {
    transform: scale(1.05);
    box-shadow: 0 0 30px rgba(59, 130, 246, 0.6);
  }
}

@layer utilities {
  .animation-delay-100 {
    animation-delay: 100ms;
  }
  .animation-delay-200 {
    animation-delay: 200ms;
  }
  .animation-delay-300 {
    animation-delay: 300ms;
  }
  .animation-delay-500 {
    animation-delay: 500ms;
  }
}

/* 自定义滚动条 */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #1f2937;
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(180deg, #f97316, #ea580c);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(180deg, #fb923c, #f97316);
}

/* 选择文本颜色 */
::selection {
  background: rgba(249, 115, 22, 0.3);
  color: #ffffff;
}
