import { InitialLoginContextProps } from '@/types/auth';
import { LOGIN, LOGOUT, REGISTER } from './account-actions';

type AccountReducerActionProps = {
  type: string;
  payload?: InitialLoginContextProps;
};

const initialState: InitialLoginContextProps = {
  isLoggedIn: false,
  isInitialized: false,
  user: null,
};

export const accountReducer = (
  state = initialState,
  action: AccountReducerActionProps,
) => {
  switch (action.type) {
    case REGISTER: {
      const { user } = action.payload ?? {};
      return {
        ...state,
        user,
      };
    }
    case LOGIN: {
      const { user } = action.payload!;
      return {
        ...state,
        isLoggedIn: true,
        isInitialized: true,
        user,
      };
    }
    case LOGOUT: {
      return {
        ...state,
        isInitialized: true,
        isLoggedIn: false,
        user: null,
      };
    }
    default: {
      return { ...state };
    }
  }
};
