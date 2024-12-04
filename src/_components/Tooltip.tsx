/** @format */

interface TooltipProps {
  x: number;
  y: number;
  content: string;
  visible: boolean;
}

export default function Tooltip({
  x,
  y,
  content,
  visible,
}: Readonly<TooltipProps>): JSX.Element | null {
  if (!visible) return null;

  return (
    <div
      style={{
        position: 'absolute',
        top: y - 20,
        left: x + 10,
        backgroundColor: 'black',
        color: 'white',
        padding: '5px 10px',
        borderRadius: '4px',
        fontSize: '12px',
        pointerEvents: 'none',
        zIndex: 1000,
        boxShadow:
          '0px 10px 15px -3px rgba(0, 0, 0, 0.2), 0px 4px 6px -2px rgba(0, 0, 0, 0.1)',
      }}
    >
      {content}
    </div>
  );
}
