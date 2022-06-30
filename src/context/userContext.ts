import React from 'react';
import { ACTIONTYPE } from '../reducer';

export interface StoreInterface {
    username: string
}
export interface ContextInterface {
    state: StoreInterface;
    dispatch: React.Dispatch<ACTIONTYPE>
}

export const UserContext = React.createContext<ContextInterface | null>(null);