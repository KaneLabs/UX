const { NODE_ENV } = process.env; // TODO:  hardcoded for temp code sharing

export const LOCAL_IP = process.env.LOCAL_IP || '192.168.0.4';

export const API_PROTOCOL_DEV = 'http';
export const API_DOMAIN_DEV = '127.0.0.1';
export const API_PORT_DEV = '4000';
export const API_ROUTE_DEV = 'graphql';

export const API_PROTOCOL_PROD = 'https';
export const API_DOMAIN_PROD = 'api.fora.co';
export const API_PORT_PROD = '80';
export const API_ROUTE_PROD = 'graphql';

export const API_PROTOCOL = NODE_ENV === 'production' ? API_PROTOCOL_PROD : API_PROTOCOL_DEV;
export const API_DOMAIN = NODE_ENV === 'production' ? API_DOMAIN_PROD : API_DOMAIN_DEV;
export const API_PORT = NODE_ENV === 'production' ? API_PORT_PROD : API_PORT_DEV;
export const API_ROUTE = NODE_ENV === 'production' ? API_ROUTE_PROD : API_ROUTE_DEV;

export const API_URI_DEV = `${API_PROTOCOL_DEV}://${API_DOMAIN_DEV}:${API_PORT_DEV}/${API_ROUTE_DEV}`;
export const API_URI_PROD = 'https://api.fora.co/graphql';
export const API_URI = NODE_ENV === 'production' ? API_URI_PROD : API_URI_DEV;

export const WS_API_URI_DEV = `ws://127.0.0.1:${API_PORT_DEV}/${API_ROUTE_DEV}`;
export const WS_API_URI_PROD = 'wss://api.fora.co/graphql';
export const WS_API_URI = NODE_ENV === 'production' ? WS_API_URI_PROD : WS_API_URI_DEV;
