import * as React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/reducer';
import { ItemsListF } from '../ItemsList/ItemsListF';
import { ItemsListM } from '../ItemsList/ItemsListM';

export function Layout() {
    const filtering = useSelector<RootState, boolean>(state => state.filtering);    
    return (<>
        {filtering && <ItemsListF />}
        {!filtering && <ItemsListM />}
    </>
    );
}