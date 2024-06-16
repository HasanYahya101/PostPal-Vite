import React from 'react';
import { Playground } from './components/component/playground';
import { NextUIProvider } from '@nextui-org/react';

function App() {
    return (
        <NextUIProvider>
            <Playground />
        </NextUIProvider>
    )
}

export default App