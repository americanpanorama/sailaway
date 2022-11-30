import React from 'react';

import { Dimensions } from './index.d';

export const AppContext = React.createContext<Dimensions>({} as Dimensions);
export const PageNumberOffsetsContexts = React.createContext({} as { isAutoScrolling: boolean, activePage: number; });

