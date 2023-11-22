/// <reference types="vite/client" />

interface Props<T> {
    label: T
    type: T
    name: T
    setDisabled: Dispatch<SetStateAction<boolean>>
}
interface Values {
    fullname: string
    email: string
    password: string
    confirmPassword: string
}
interface Status {
    error: boolean
    success: boolean
    message: string
}
interface Error {
    status: string | number
    error: string
}
interface Action {
    resetForm: () => null
}

interface SumzArticlesType {
    copied: string
    copiedURL: (string) => unknown
    articles: { url: string; summary: string }
    allArticles: string[]
    error: FetchBaseQueryError | SerializedError | undefined
    isFetching: boolean
    setAllArticles: React.Dispatch<>
}
interface CustomHooks {
    getEmail: string
    setGetEmail: React.Dispatch<React.SetStateAction<string>>
}
interface ResponseTypes<T, B> {
    error: B
    success: T
    message: T
}
interface Articles {
    url: string
    summary: string
}
interface Params {
    url: string
    summary?: string
}
type NewParamsType = Partial<Params>
