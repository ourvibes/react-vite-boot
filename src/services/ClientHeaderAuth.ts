import AxiosClient from './AxiosClient';

class ClientHeaderAuth {
  _header: string;

  _prefix: string;

  constructor(header: string, prefix: string = '') {
    this._header = header;
    this._prefix = prefix;
  }

  authorize(client: AxiosClient, token: string) {
    return client.patchConfig({
      headers: {
        ...client.getConfig().headers,
        [this._header]: `${this._prefix ? `${this._prefix} ` : ''}${token}`,
      },
    });
  }
}

export default ClientHeaderAuth;
