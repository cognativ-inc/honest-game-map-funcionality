/** @format */
import { useState } from 'react';

export interface TooltipState {
  visible: boolean;
  content: string;
  x: number;
  y: number;
}

export function useTooltip() {
  const [tooltip, setTooltip] = useState<TooltipState>({
    visible: false,
    content: '',
    x: 0,
    y: 0,
  });

  function handleMouseEnter(count: number, e: React.MouseEvent): void {
    const { clientX, clientY } = e;
    setTooltip({
      visible: true,
      content: `count: ${count}`,
      x: clientX,
      y: clientY,
    });
  }

  function handleMouseMove(e: React.MouseEvent): void {
    const { clientX, clientY } = e;
    setTooltip(prev => ({
      ...prev,
      x: clientX,
      y: clientY,
    }));
  }

  function handleMouseLeave(): void {
    setTooltip({ visible: false, content: '', x: 0, y: 0 });
  }

  return {
    tooltip,
    handleMouseEnter,
    handleMouseMove,
    handleMouseLeave,
  };
}
