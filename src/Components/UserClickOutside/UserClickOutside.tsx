import { useEffect, RefObject } from 'react';

interface IUseClickOutside {
    ref: RefObject<HTMLElement>;
    callback: () => void;
}

const UseClickOutside = ({ ref, callback }: IUseClickOutside) => {
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                callback();
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [ref, callback]);
};

export default UseClickOutside;