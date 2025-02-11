import * as React from 'react';
import { render } from '@testing-library/react';
import { composeStories } from '@storybook/react';

// importar historia por defecto y el resto de historias
import defaultStory, * as stories from './Button.stories';

// crear las posiciones de las historias
const composedStories = composeStories(stories);

// en la descripción de cada historia, se llamara segun el titulo de la historia
describe(`[ ${defaultStory.title}]`, () => {
    // sacar cada llave segun la posición de la historia
    Object.entries(composedStories).forEach(([story, Component]) => {
        it(`should render ${story}`, () => {
            const { asFragment } = render(<Component />);
            expect(asFragment()).toMatchSnapshot();
        })
    })
});