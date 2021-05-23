/* eslint-disable @typescript-eslint/naming-convention */
import React from 'react';
import { Developers } from '../generated/graphql';
import {
  PersonalInfoFormValues,
  SocialMediaFormValues,
  WorkExperienceFormValues,
} from '../types';

enum ActionType {
  SAVE_FORM = 'SAVE_FORM',
  CHANGE_TAB = 'CHANGE_TAB',
  CALCULATE_IF_FORM_COMPLETED = 'CALCULATE_IF_FORM_COMPLETED',
}

type Action =
  | {
      developerProfileData: Partial<Developers>;
      type: ActionType.SAVE_FORM;
    }
  | {
      type: ActionType.CHANGE_TAB;
      newTabIndex?: number;
    }
  | {
      type: ActionType.CALCULATE_IF_FORM_COMPLETED;
    };
type Dispatch = (action: Action) => void;
type State = {
  formData: Partial<Developers> | undefined;
  isFormCompleted: boolean;
  currentTabIndex: number;
};

type DeveloperProfileFormProviderProps = {
  children: React.ReactNode;
  formData: Partial<Developers> | undefined;
};

interface DeveloperProfileFormContextInterface {
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

const DeveloperProfileFormContext =
  React.createContext<DeveloperProfileFormContextInterface | undefined>(
    undefined
  );

const developerProfileFormReducer = (state: State, action: Action) => {
  switch (action.type) {
    case ActionType.SAVE_FORM: {
      return {
        ...state,
        formData: { ...state.formData, ...action.developerProfileData },
      };
    }
    case ActionType.CALCULATE_IF_FORM_COMPLETED: {
      if (state.formData?.id) {
        return {
          ...state,
          isFormCompleted: true,
        };
      }

      const {
        first_name,
        last_name,
        bio,
        country_code,
        image_url,
        job_position,
        years_of_experience,
        super_powers,
        technologies,
      } = state.formData as Developers;

      const areRequiredFieldsFilledOut = [
        first_name,
        last_name,
        bio,
        country_code,
        image_url,
        job_position,
        years_of_experience,
        super_powers,
        technologies,
      ].every(Boolean);

      return {
        ...state,
        isFormCompleted: areRequiredFieldsFilledOut,
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
    isFormCompleted: !!formData?.id,
    currentTabIndex: 0,
  });

  const saveFormPartially = React.useCallback((developerProfileData) => {
    dispatch({ type: ActionType.SAVE_FORM, developerProfileData });
    dispatch({ type: ActionType.CALCULATE_IF_FORM_COMPLETED });
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

const useDeveloperProfileForm = (): DeveloperProfileFormContextInterface => {
  const context = React.useContext(DeveloperProfileFormContext);

  if (context === undefined) {
    throw new Error(
      'useDeveloperProfileForm must be used within a DeveloperProfileFormProvider'
    );
  }

  return context;
};

export { DeveloperProfileFormProvider, useDeveloperProfileForm };
