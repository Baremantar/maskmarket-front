import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
import { useCallback, useState } from 'react'

interface IRequestArgs {
    onComplete?: (response: AxiosResponse) => void
    onError?: () => void
}

export const useRequest = () => {
    const [loading, setLoading] = useState<boolean>(false)
    const [errors, setErrors] = useState<Error | null>(null)
    const request = useCallback(
        async (
            requestConfig: AxiosRequestConfig,
            options: IRequestArgs = {}
        ) => {
            const { onComplete, onError } = options
            try {
                setLoading(true)
                const response = await axios(requestConfig)
                onComplete?.(response)
                setLoading(false)
                return response
            } catch (error) {
                if (error instanceof Error && error) {
                    setErrors(error)
                    onError?.()
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
