export const repeatComponent = (Component, length) => {
    if (typeof Component !== 'function' || typeof length !== 'number') {
        throw new Error('Invalid arguments: Expected a component and a length number');
    }

    return Array.from({length}, (_, i) => <Component key={i}/>);
};

export const formatDate = (date = new Date(), locale = 'en-GB') => {
    date = new Date(date);

    if (isNaN(date.getTime())) {
        throw new Error('Invalid date');
    }

    return new Intl.DateTimeFormat(locale, {
        dateStyle: 'full',
        timeStyle: 'short',
    }).format(date);
};

export const slugify = (str) => {
    return String(str)
        .normalize('NFKD') // split accented characters into their base characters and diacritical marks
        .replace(/[\u0300-\u036f]/g, '') // remove all the accents, which happen to be all in the \u03xx UNICODE block.
        .trim() // trim leading or trailing whitespace
        .toLowerCase() // convert to lowercase
        .replace(/[^a-z0-9 -]/g, '') // remove non-alphanumeric characters
        .replace(/\s+/g, '-') // replace spaces with hyphens
        .replace(/-+/g, '-'); // remove consecutive hyphens
}