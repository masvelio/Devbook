import developers from '../constants/developers';
import { Developer } from '../../types';

const useDeveloperDetails = (id: Developer['id']) => {
  const developer = developers.find((dev) => dev.id === id);

  if (!developer) {
    return { developer: null };
  }

  return { developer };
};

export default useDeveloperDetails;
