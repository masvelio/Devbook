import * as React from 'react';
import { useDeveloperProfileForm } from '../../context/developerProfileFormContext';

const FormPreview = () => {
  const { state } = useDeveloperProfileForm();
  console.log('state!', state);
  return (
    <>
      <h1>form preview</h1>
      <pre>{JSON.stringify(state, null, 2)}</pre>
    </>
  );
};
export default FormPreview;
