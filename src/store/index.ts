import Cache from './Cache';

const globalLocalStorageStore = new Cache(localStorage);

const globalSessionStorageStore = new Cache(sessionStorage);

const TOKEN_CIPHER = `@${process.env.REACT_APP_NAME ?? ''}/token`;
const globalTokenStore = new Cache(localStorage, TOKEN_CIPHER);

export { globalLocalStorageStore, globalTokenStore, globalSessionStorageStore, TOKEN_CIPHER };
