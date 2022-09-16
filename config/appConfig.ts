const {
    NEXT_PUBLIC_PUBLIC_URL
} = process.env

type getVarNameArgType = {
    [key: string]: string
}

function getValue(value: string, defaultValue: string) {
    const getVarName = (variable: getVarNameArgType) => Object.keys(variable)[0]
    if (!value) {
        console.error(`Can't find value for ${getVarName({ value })}`)
        return defaultValue
    }
    return value
}

const appConfig = {
    backendUrl: getValue(NEXT_PUBLIC_PUBLIC_URL, 'http://localhost:3000/')
}

export default appConfig