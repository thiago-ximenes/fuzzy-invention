import {useState} from 'react';

type Props = {
    delayInMs?: number;
    callback: (value: unknown) => void;
}

export function useDebounce({delayInMs = 500, callback}: Props) {
    const [typingTimeout, setTypingTimeout] = useState<NodeJS.Timeout | null>(null);

    return (value: unknown) => {
        if (typingTimeout) {
            clearTimeout(typingTimeout);
        }

        setTypingTimeout(setTimeout(() => {
            callback(value);
        }, delayInMs));
    }
}