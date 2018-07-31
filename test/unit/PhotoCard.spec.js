import React from 'react';
import { createShallow } from '@material-ui/core/test-utils';
import PhotoCard from 'Components/PhotoCard';
import { Card, CardMedia, CardContent, Typography } from '@material-ui/core';

describe('PhotoCard', () => {
    let defaultProps;
    let shallow;

    beforeEach(() => {
        shallow = createShallow();
        defaultProps = chance.photo();
    });

    it('should render a Card', () => {
        const wrapper = shallowRender();
        expect(wrapper.type()).toEqual(Card);
        expect(wrapper.prop('className')).toEqual(
            expect.stringContaining('card')
        );
    });

    it('should add CardMedia', () => {
        const wrapper = shallowRender();
        const cardMedia = wrapper.find(CardMedia).first();
        expect(cardMedia.prop('className')).toEqual(
            expect.stringContaining('media')
        );
        expect(cardMedia.prop('image')).toBe(defaultProps.url);
        expect(cardMedia.prop('title')).toBe(defaultProps.title);
    });

    it('should add CardContent', () => {
        const wrapper = shallowRender();
        const cardContent = wrapper.find(CardContent).first();
        expect(cardContent.prop('className')).toEqual(
            expect.stringContaining('content')
        );
        expect(cardContent.find(Typography)).toBe(defaultProps.url);
        expect(cardContent.prop('title')).toBe(defaultProps.title);
    });

    function shallowRender(props) {
        return shallow(<PhotoCard {...defaultProps} {...props} />).dive();
    }
});
