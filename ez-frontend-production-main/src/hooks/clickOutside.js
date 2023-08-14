import { useEffect } from 'react';

export function useOutsideClick(onOutsideClick, modalRef, isCalendarOpen) {
    const handleClickOutside = (event) => {
        if (modalRef.current && !modalRef.current.contains(event.target)) {
            if (isCalendarOpen) return;
            onOutsideClick();
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [onOutsideClick, modalRef]);
};


// export function useOutsideClick(onOutsideClick, modalRef) {
//     const handleClickOutside = (event) => {
//         if (modalRef.current && !modalRef.current.contains(event.target)) {
//             onOutsideClick();
//         }
//     };

//     useEffect(() => {
//         document.addEventListener('mousedown', handleClickOutside);
//         return () => {
//             document.removeEventListener('mousedown', handleClickOutside);
//         };
//     }, [onOutsideClick, modalRef]);
// }