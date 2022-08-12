import { FunctionComponent, ReactNode } from 'react'

interface ProviderInterface {
    children: ReactNode
}

export type ProviderType = FunctionComponent<ProviderInterface>
