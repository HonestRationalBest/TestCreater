import React from "react";


export const useHttp = () => {
    const [loading, setLoading] = React.useState(false)
    const [error, setError] = React.useState(null)
    const request = React.useCallback(async (url, method = 'GET', body = null, headers = {}) => {
        setLoading(true)
        try {
            if (body) {
                body = JSON.stringify(body)
                headers['Content-Type'] = 'application/json'
            }
            console.log(body)
            const response = await fetch(url, { method, body, headers })
            const data = await response.json()
            setLoading(false)
            return data
        } catch (e) {
            setLoading(false)
            setError(e.message)
            throw e
        }
    }, [])

    const clearError = () => setError(null)

    return { loading, error, request, clearError }
}
