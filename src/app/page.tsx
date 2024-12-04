/** @format */

import UsaMap from '@/_components/map/usa';
import WorldMap from '@/_components/world';

export default function Home() {
  return (
    <>
      <WorldMap />
      <div>
        <UsaMap />
      </div>
    </>
  );
}
