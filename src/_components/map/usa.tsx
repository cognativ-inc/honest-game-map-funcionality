/** @format */
'use client';

import states from './states';
import Tooltip from '../Tooltip';
import { useTooltip } from '@/hooks/useTooltips';

export default function UsaMap(): JSX.Element {
  const { tooltip, handleMouseEnter, handleMouseMove, handleMouseLeave } =
    useTooltip();

  // Define los colores
  const colors = {
    counted: '#015AB5',
    unCounted: '#D3D3D3',
  };

  return (
    <>
      <svg
        width='982px'
        height='612px'
        style={{ maxWidth: '100%' }}
        viewBox='0 0 982 612'
      >
        <g fillRule='nonzero'>
          {Object.entries(states).map(([state, { path, count }]) => (
            <path
              key={state}
              d={path}
              fill={count > 0 ? colors.counted : colors.unCounted}
              cursor={count > 0 ? 'pointer' : 'not-allowed'}
              onMouseEnter={e => handleMouseEnter(count, e)}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            />
          ))}
        </g>
      </svg>
      <Tooltip
        x={tooltip.x}
        y={tooltip.y}
        content={tooltip.content}
        visible={tooltip.visible}
      />
    </>
  );
}
