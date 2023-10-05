import React, { useMemo, useState } from 'react';

const UseMemoExapmle = () => {
  const [planets, setPlanets] = useState(['Earth', 'Mars', 'Jupiter', 'Venus']);
  const [query, setQuery] = useState('');
  const [clicks, setClicks] = useState(0);

  const filteredPlanets = useMemo(
    () =>
      planets.filter(planet => {
        for (let i = 0; i < 1_000_000_000; i++) {}

        return planet.includes(query);
      }),
    [planets, query]
  );

  return (
    <div>
      <button onClick={() => setClicks(clicks + 1)}>
        Number of clicks: {clicks}
      </button>
      <div>
        {filteredPlanets.map(planet => (
          <div key={planet}>{planet}</div>
        ))}
      </div>
    </div>
  );
};

export default UseMemoExapmle;
