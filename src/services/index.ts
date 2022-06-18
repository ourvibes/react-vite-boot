import { message } from 'antd';
import { AxiosResponse } from 'axios';

import AxiosClient, { Interceptors } from './AxiosClient';

export enum ResponseCode {
  Success = 200,
  UnAuthorized = 401,
}

export interface NormalResponse<T = unknown> {
  code: number;
  msg: string;
  data: T;
}

const interceptors: Interceptors = {
  response: [
    (response: AxiosResponse<NormalResponse<any>>) => {
      const {
        data: { code },
      } = response;
      if (code === ResponseCode.UnAuthorized) {

        window.location.hash = '/login';
      }

      return response;
    },
    (error) => {
      if (AxiosClient.isAxiosError(error)) {
        if (error.response?.status === ResponseCode.UnAuthorized) {
          window.location.hash = '/login';
        }
      }
      throw error;
    },
  ],
};

export const baseClient = new AxiosClient(
  {
    baseURL: `${process.env.REACT_APP_API}`,
  },
  interceptors,
);

export function verification(token: string) {
  [baseClient].forEach((client) => {
    client.patchConfig({
      headers: {
        ...client.getConfig().headers,
        [`${process.env.REACT_APP_AUTH_HEADER}`]: `Bearer ${token}`,
      },
    });
  });
}