const { REACT_APP_BACKEND_URL: backendUrl, NODE_ENV: nodeEnv } = process.env

function getValue(value: string | undefined, defaultValue = '') {
    return value || defaultValue
}

export const appConfig = {
    backendUrl: getValue(backendUrl, 'localhost:3000'),
    nodeEnv: getValue(nodeEnv, 'production'),
    marketName: 'maskmarket',
}
