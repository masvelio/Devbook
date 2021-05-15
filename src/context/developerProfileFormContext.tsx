import * as React from 'react';
import {
  PersonalInfoFormValues,
  SocialMediaFormValues,
  WorkExperienceFormValues,
} from '../types';

const SAVE_FORM = 'SAVE_FORM';

type Action = { type: typeof SAVE_FORM; developerProfileData: {} };
type Dispatch = (action: Action) => void;
type State = { formData: {} };
type DeveloperProfileFormProviderProps = { children: React.ReactNode };

const DeveloperProfileFormContext =
  React.createContext<
    | {
        state: State;
        dispatch: Dispatch;
        saveFormPartially: (
          data:
            | PersonalInfoFormValues
            | WorkExperienceFormValues
            | SocialMediaFormValues
        ) => void;
      }
    | undefined
  >(undefined);

const developerProfileFormReducer = (state: State, action: Action) => {
  switch (action.type) {
    case SAVE_FORM: {
      return {
        formData: { ...state.formData, ...action.developerProfileData },
      };
    }

    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};

const DeveloperProfileFormProvider = ({
  children,
}: DeveloperProfileFormProviderProps) => {
  const [state, dispatch] = React.useReducer(developerProfileFormReducer, {
    formData: {},
  });

  const saveFormPartially = React.useCallback(
    (developerProfileData) =>
      dispatch({ type: SAVE_FORM, developerProfileData }),
    []
  );

  const value = { state, dispatch, saveFormPartially };

  return (
    <DeveloperProfileFormContext.Provider value={value}>
      {children}
    </DeveloperProfileFormContext.Provider>
  );
};

const useDeveloperProfileForm = () => {
  const context = React.useContext(DeveloperProfileFormContext);

  if (context === undefined) {
    throw new Error(
      'useDeveloperProfileForm must be used within a DeveloperProfileFormProvider'
    );
  }

  return context;
};

export { DeveloperProfileFormProvider, useDeveloperProfileForm };
