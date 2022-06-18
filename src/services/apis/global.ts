import { baseClient, NormalResponse } from "..";
import { RequestConfig } from "../AxiosClient";

export function fetchUser(config?: RequestConfig) {
  return baseClient.get<NormalResponse<string>>('/user', {
    ...config,
  });
}