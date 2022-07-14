import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
import { useCallback, useState } from 'react'

export const useRequest = () => {
    const [loading, setLoading] = useState<boolean>(false)
    const [errors, setErrors] = useState<Error | null>(null)
    const request = useCallback(
        async (
            requestConfig: AxiosRequestConfig,
            onComplete?: (response?: AxiosResponse) => void,
            onError?: (error?: Error) => void
        ) => {
            try {
                setLoading(true)
                const response = await axios(requestConfig)
                onComplete?.(response)
                setLoading(false)
                return response
            } catch (error) {
                if (error instanceof Error && error) {
                    setErrors(error)
                    onError?.(error)
                    setLoading(false)
                }
            } finally {
                setLoading(false)
            }
        },
        []
    )
    return { loading, errors, request }
}
