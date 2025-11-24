import { useState } from 'react';
import { ControlledForm } from './ControlledForm';
import { ControlledModal } from './ControlledModal';
import { UncontrolledForm } from './UncontrolledForm';

function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <ControlledModal
        shouldShow={showModal}
        onRequestClose={() => setShowModal(false)}
      >
        <ControlledForm
          initialName='Shaun'
          initialAge={123}
          initialHairColor='Brown'
        />
      </ControlledModal>
      <button onClick={() => setShowModal(true)}>Open Modal</button>
    </>
  );
}

export default App;
