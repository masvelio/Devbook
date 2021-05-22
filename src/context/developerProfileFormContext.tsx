import * as React from 'react';
import {
  Developer,
  PersonalInfoFormValues,
  SocialMediaFormValues,
  WorkExperienceFormValues,
} from '../types';

enum ActionType {
  SAVE_FORM = 'SAVE_FORM',
  CHANGE_TAB = 'CHANGE_TAB',
}

type Action =
  | {
      developerProfileData: Partial<Developer>;
      type: ActionType.SAVE_FORM;
    }
  | {
      type: ActionType.CHANGE_TAB;
      newTabIndex?: number;
    };
type Dispatch = (action: Action) => void;
type State = { formData: {}; currentTabIndex: number };
type DeveloperProfileFormProviderProps = {
  children: React.ReactNode;
  formData: {};
};

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
        handleTabsChange: (newTabIndex?: number) => void;
      }
    | undefined
  >(undefined);

const developerProfileFormReducer = (state: State, action: Action) => {
  switch (action.type) {
    case ActionType.SAVE_FORM: {
      return {
        ...state,
        formData: { ...state.formData, ...action.developerProfileData },
      };
    }
    case ActionType.CHANGE_TAB: {
      return {
        ...state,
        currentTabIndex:
          action.newTabIndex !== undefined
            ? action.newTabIndex
            : state.currentTabIndex + 1,
      };
    }

    default: {
      throw new Error(`Unhandled action type`);
    }
  }
};

const DeveloperProfileFormProvider = ({
  children,
  formData,
}: DeveloperProfileFormProviderProps) => {
  const [state, dispatch] = React.useReducer(developerProfileFormReducer, {
    formData,
    currentTabIndex: 0,
  });

  const saveFormPartially = React.useCallback((developerProfileData) => {
    dispatch({ type: ActionType.SAVE_FORM, developerProfileData });
    dispatch({ type: ActionType.CHANGE_TAB });
  }, []);

  const handleTabsChange = React.useCallback((newTabIndex) => {
    dispatch({ type: ActionType.CHANGE_TAB, newTabIndex });
  }, []);

  const value = React.useMemo(
    () => ({ state, dispatch, saveFormPartially, handleTabsChange }),
    [handleTabsChange, saveFormPartially, state]
  );

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
