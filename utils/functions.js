import {MAX_LENGTH_OF_MESSAGE} from "@env";

const truncateText = (text) => {
    const maxLength = Number(MAX_LENGTH_OF_MESSAGE);
    if (text.length <= maxLength) {
        return text;
    }
    return text.substring(0, maxLength) + '....';
};


export  {
    truncateText
};