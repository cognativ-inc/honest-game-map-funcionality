/** @format */
'use client';

import { useTooltip } from '@/hooks/useTooltips';
import countries from './map/countries';
import Tooltip from './Tooltip';

// Define los colores
const colors: { counted: string; unCounted: string } = {
  counted: '#015AB5',
  unCounted: '#D3D3D3',
};

export default function WorldMap(): JSX.Element {
  const { tooltip, handleMouseEnter, handleMouseMove, handleMouseLeave } =
    useTooltip();

  return (
    <>
      <svg
        viewBox='0 0 710 390'
        version='1.1'
        xmlns='http://www.w3.org/2000/svg'
        style={{ maxWidth: '100%' }}
      >
        <title>world-map</title>
        <g fillRule='nonzero'>
          {countries.map(({ code, type, trace, count }) =>
            type === 'path' ? (
              <path
                key={code}
                d={trace}
                fill={count > 0 ? colors.counted : colors.unCounted}
                cursor={count > 0 ? 'pointer' : 'not-allowed'}
                strokeWidth={0.5}
                onMouseEnter={e => handleMouseEnter(count, e)}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
              />
            ) : (
              <polygon
                key={code}
                points={trace}
                fill={count > 0 ? colors.counted : colors.unCounted}
                cursor={count > 0 ? 'pointer' : 'not-allowed'}
                strokeWidth={0.5}
                onMouseEnter={e => handleMouseEnter(count, e)}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
              />
            )
          )}
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
