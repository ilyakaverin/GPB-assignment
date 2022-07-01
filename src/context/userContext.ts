import React from 'react';
import { ACTIONTYPE } from '../reducer';

export interface StoreInterface {
    username: string,
    registryNumber: string,
    fullName: string,
    dateOfBirth: string,
    placeOfBirth: string,
    citizenship: string,
    snils?: string,
    registerAdress: string,
    livingAdress: string
}
export interface ContextInterface {
    state: StoreInterface;
    dispatch: React.Dispatch<ACTIONTYPE>
}

export const UserContext = React.createContext<ContextInterface | null>(null);