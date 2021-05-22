import * as React from 'react';
import { useDeveloperProfileForm } from '../../context/developerProfileFormContext';
import DeveloperCard from '../Developers/DeveloperCard';
import { Developer } from '../../types';

const FormPreview = () => {
  const { state } = useDeveloperProfileForm();

  return (
    <>
      <DeveloperCard isPreview developer={state.formData as Developer} />
      <pre>{JSON.stringify(state, null, 2)}</pre>
    </>
  );
};

export default FormPreview;
