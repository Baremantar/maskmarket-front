export type DataType = {
    username: string
    password: string
}

export class ResponseData {
    public token
    constructor(token: string) {
        this.token = token
    }
}