import { useRef, useState } from "react"
import appConfig from "../config/appConfig"

type Response = {
    message: string
}

const useAuth = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const userToken = localStorage.getItem('token')
    const userLogined = useRef<boolean>(false)

    function checkIsTokenValid(token: string) {
        setIsLoading(true)
        fetch(appConfig.backendUrl, {
            method: 'GET',
            body: JSON.stringify({
                token: token
            })
        })
        .then(res => res.status < 400 ? true : false)
    }


}

export default useAuth