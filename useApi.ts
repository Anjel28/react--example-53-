import { useState, useEffect }from 'react';
import {apiClient} from './apiClient';

type ApiStatus = 'idle' | 'loading' | 'success' | 'error';

export function useApi<T>(endpoint: string) {
    const [data, setData] = useState<T | null>(null);
    const [status, setStatus] = useState<ApiStatus>('idle');
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
        setStatus('loading');
        try{
            const response = await apiClient.get<T>(endpoint);
            setData(response.data);
            setStatus('success');

        }catch (err: any){
            setError(err.message);
            setStatus('error');
        }
    };
    fetchData();
    }, [endpoint]);

    return {data, status, error};
}