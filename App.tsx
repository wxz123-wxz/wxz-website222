/* App specific styles */

/* 平滑滚动 */
html {
  scroll-behavior: smooth;
}

/* 隐藏滚动条但保持功能 */
.hide-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.hide-scrollbar::-webkit-scrollbar {
  display: none;
}

/* 文字阴影效果 */
.text-shadow {
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
}

.text-shadow-lg {
  text-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
}

/* 发光文字效果 */
.glow-text {
  text-shadow: 0 0 10px currentColor, 0 0 20px currentColor, 0 0 30px currentColor;
}

/* 模糊背景 */
.blur-bg {
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
}

/* 3D 变换 */
.preserve-3d {
  transform-style: preserve-3d;
}

.perspective-1000 {
  perspective: 1000px;
}

/* 卡片悬停效果 */
.card-hover {
  transition: transform 0.3s cubic-bezier(0.19, 1, 0.22, 1), box-shadow 0.3s ease;
}

.card-hover:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
}

/* 图片悬停缩放 */
.img-zoom {
  overflow: hidden;
}

.img-zoom img {
  transition: transform 0.5s cubic-bezier(0.19, 1, 0.22, 1);
}

.img-zoom:hover img {
  transform: scale(1.1);
}

/* 边框发光动画 */
@keyframes border-glow {
  0%, 100% {
    border-color: rgba(249, 115, 22, 0.3);
  }
  50% {
    border-color: rgba(249, 115, 22, 0.8);
  }
}

.border-glow {
  animation: border-glow 2s ease-in-out infinite;
}

/* 脉冲动画 */
@keyframes pulse-ring {
  0% {
    transform: scale(0.8);
    opacity: 1;
  }
  100% {
    transform: scale(1.5);
    opacity: 0;
  }
}

.pulse-ring {
  animation: pulse-ring 1.5s cubic-bezier(0.215, 0.61, 0.355, 1) infinite;
}

/* 摇晃动画 */
@keyframes shake {
  0%, 100% {
    transform: translateX(0);
  }
  10%, 30%, 50%, 70%, 90% {
    transform: translateX(-2px);
  }
  20%, 40%, 60%, 80% {
    transform: translateX(2px);
  }
}

.shake:hover {
  animation: shake 0.5s ease-in-out;
}

/* 渐变边框 */
.gradient-border {
  position: relative;
  background: linear-gradient(to right, #1f2937, #1f2937);
  background-clip: padding-box;
  border: 2px solid transparent;
}

.gradient-border::before {
  content: '';
  position: absolute;
  top: -2px;
  right: -2px;
  bottom: -2px;
  left: -2px;
  background: linear-gradient(135deg, #f97316, #3b82f6);
  z-index: -1;
  border-radius: inherit;
}

/* 玻璃拟态效果 */
.glass {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.glass-dark {
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.05);
}

/* 响应式字体大小 */
@media (max-width: 640px) {
  .section-title {
    font-size: 2rem;
  }
}

/* 减少动画偏好 */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
