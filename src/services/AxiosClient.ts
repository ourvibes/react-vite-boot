import axios, { AxiosRequestConfig, AxiosResponse, AxiosInstance, AxiosError } from 'axios';

export type RequestConfig = AxiosRequestConfig;

export interface RequestFulfilledInterceptor {
  (value: RequestConfig): RequestConfig | Promise<RequestConfig>;
}

export interface ResponseFilfilledInterceptor {
  (value: AxiosResponse<any>): AxiosResponse<any> | Promise<AxiosResponse<any>>;
}

export interface RejectedInterceptor {
  (error: any): any;
}

export interface Interceptors {
  request?: [RequestFulfilledInterceptor?, RejectedInterceptor?];
  response?: [ResponseFilfilledInterceptor?, RejectedInterceptor?];
}

export function createAxiosInstance(config: RequestConfig = {}, interceptors?: Interceptors) {
  const instance = axios.create(config);

  if (interceptors) {
    const { request, response } = interceptors;

    if (request) {
      instance.interceptors.request.use(...request);
    }

    if (response) {
      instance.interceptors.response.use(...response);
    }
  }

  return instance;
}

class AxiosClient {
  static isAxiosError(target: any): target is AxiosError {
    return axios.isAxiosError(target);
  }

  _config: RequestConfig;

  _interceptors?: Interceptors;

  _instance: AxiosInstance | null;

  constructor(config: RequestConfig = {}, interceptors?: Interceptors) {
    this._config = config;
    this._interceptors = interceptors;
    this._instance = null;
  }

  _buildInstance() {
    const instance = createAxiosInstance(this._config, this._interceptors);

    this._instance = instance;

    return this;
  }

  _getInstance() {
    if (this._instance === null) {
      this._buildInstance();
    }

    return this._instance as AxiosInstance;
  }

  getConfig() {
    return this._config;
  }

  setConfig(config: RequestConfig) {
    this._config = config;

    if (this._instance) {
      this._buildInstance();
    }

    return this;
  }

  patchConfig(config: RequestConfig) {
    return this.setConfig({
      ...this._config,
      ...config,
    });
  }

  getInterceptors() {
    return this._interceptors;
  }

  setInterceptors(interceptors: Interceptors) {
    this._interceptors = interceptors;

    if (this._instance) {
      this._buildInstance();
    }

    return this;
  }

  patchInterceptors(interceptors: Interceptors) {
    return this.setInterceptors({
      ...this._interceptors,
      ...interceptors,
    });
  }

  request<T>(config: RequestConfig) {
    return this._getInstance().request<T>(config);
  }

  options<T>(url: string, config?: RequestConfig) {
    return this._getInstance().options<T>(url, config);
  }

  head<T>(url: string, config?: RequestConfig) {
    return this._getInstance().head<T>(url, config);
  }

  get<T>(url: string, config?: RequestConfig) {
    return this._getInstance().get<T>(url, config);
  }

  post<T, D = any>(url: string, data: D, config?: RequestConfig) {
    return this._getInstance().post<T>(url, data, config);
  }

  put<T, D = any>(url: string, data: D, config?: RequestConfig) {
    return this._getInstance().put<T>(url, data, config);
  }

  patch<T, D = any>(url: string, data: D, config?: RequestConfig) {
    return this._getInstance().patch<T>(url, data, config);
  }

  delete<T>(url: string, config?: RequestConfig) {
    return this._getInstance().delete<T>(url, config);
  }
}

export default AxiosClient;
