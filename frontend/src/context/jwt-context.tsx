import { createContext, ReactElement, useEffect, useReducer } from 'react';
import { InitialLoginContextProps, JWTContextType } from '@/types/auth';
import { KeyedObject } from '@/types/keyed-object';

import { Chance } from 'chance';

import { jwtDecode } from 'jwt-decode';
import { accountReducer } from '@/store/account-reducer';
import { LOGIN, LOGOUT } from '@/store/account-actions';
// import axios from 'axios';
import { axiosServices } from '@/utils/axios';

const chance = new Chance();

const initialState: InitialLoginContextProps = {
  isLoggedIn: false,
  isInitialized: false,
  user: null,
};

const verifyToken: (st: string) => boolean = (serviceToken) => {
  if (!serviceToken) {
    return false;
  }

  const decoded: KeyedObject = jwtDecode(serviceToken);

  if (typeof decoded.exp !== 'number') {
    return false;
  }

  return decoded.exp > Date.now() / 1000;
};

const setSession = (serviceToken: string | null) => {
  if (serviceToken) {
    localStorage.setItem('serviceToken', serviceToken);
    // axios.defaults.headers.common.Authorization = `Bearer ${serviceToken}`;
  } else {
    localStorage.removeItem('serviceToken');
    // delete axios.defaults.hede;
  }
};

const JWTContext = createContext<JWTContextType | null>(null);

export const JWTProvider = ({ children }: { children: ReactElement }) => {
  // const [state, setState] = React.useState<InitialLoginContextProps>(initialState);

  const [state, dispatch] = useReducer(accountReducer, initialState);

  useEffect(() => {
    const init = async () => {
      try {
        const serviceToken = window.localStorage.getItem('serviceToken');
        if (serviceToken && verifyToken(serviceToken)) {
          setSession(serviceToken);
          const response = await axiosServices.get('api/account/me');
          const { user } = response.data;
          dispatch({
            type: LOGIN,
            payload: {
              isLoggedIn: true,
              user,
            },
          });
        } else {
          dispatch({ type: LOGOUT });
        }
      } catch (err) {
        console.error(err);
        dispatch({ type: LOGOUT });
      }
    };

    init();
  }, []);

  const login = async (email: string, password: string) => {
    const response = await axiosServices.post('/api/account/login', {
      email,
      password,
    });
    const { serviceToken, user } = response.data;
    setSession(serviceToken);
    dispatch({
      type: LOGIN,
      payload: {
        isLoggedIn: true,
        user,
      },
    });
  };

  const register = async (
    email: string,
    password: string,
    firstName: string,
    lastName: string,
  ) => {
    // todo: this flow need to be recode as it not verified
    const id = chance.bb_pin();
    const response = await axiosServices.post('/api/account/register', {
      id,
      email,
      password,
      firstName,
      lastName,
    });
    let users = response.data;

    if (
      window.localStorage.getItem('users') !== undefined &&
      window.localStorage.getItem('users') !== null
    ) {
      const localUsers = window.localStorage.getItem('users');
      users = [
        ...JSON.parse(localUsers!),
        {
          id,
          email,
          password,
          name: `${firstName} ${lastName}`,
        },
      ];
    }

    window.localStorage.setItem('users', JSON.stringify(users));
  };

  const logout = () => {
    setSession(null);
    dispatch({ type: LOGOUT });
  };

  const resetPassword = (email: string) => console.log(email);

  const updateProfile = () => {};

  return (
    <JWTContext.Provider
      value={{
        ...state,
        login,
        logout,
        register,
        resetPassword,
        updateProfile,
      }}
    >
      {children}
    </JWTContext.Provider>
  );
};
