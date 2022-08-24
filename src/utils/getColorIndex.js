import {colors} from '../asset/constains.js';

// get current color index
 const getColorIndex = (color) => {
    const index = colors.findIndex((c) => c.value == color);
    if (index !== -1) {
        return index;
    }
    return 1;
};

export default getColorIndex;