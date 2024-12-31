import { Suspense } from 'react';
import { getPlanets } from './actions/get-planets.action';
import Planets from './pages/Planets';

function App() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Planetas del Sistema Solar</h1>

      {/* <ErrorBoundary> */}
        <Suspense
          fallback={<p className="text-gray-500">Cargando planetas...</p>}
        >
          <Planets getPlanets={getPlanets()} />
        </Suspense>
      {/* </ErrorBoundary> */}
    </div>
  );
}

export default App;
