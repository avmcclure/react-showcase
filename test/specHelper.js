const Enzyme = require('enzyme');
const EnzymeAdapter = require('enzyme-adapter-react-16');
const Chance = require('chance');

// Setup enzyme's react adapter
Enzyme.configure({ adapter: new EnzymeAdapter() });

global.chance = new Chance();

chance.mixin({
    photo: (overrides = {}) =>
        Object.assign(
            {},
            {
                id: chance.natural(),
                albumId: chance.natural(),
                title: chance.sentence(),
                url: chance.url(),
                thumbnailUrl: chance.url()
            },
            overrides
        )
});
