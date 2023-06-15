import { atom } from 'recoil';

export const signedInState = atom({
    key: 'signedInState',
    default: false,
});

export const pageState = atom({
    key: 'pageState',
    default: 'signin',
});
