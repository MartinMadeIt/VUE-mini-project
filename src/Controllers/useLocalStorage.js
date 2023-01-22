export const setPositionInLStorage = (name, value) => {
    window.localStorage.removeItem(name);
    window.localStorage.setItem(name, `${value}`);
};

export const getPositionFromLStorage = (name) => window.localStorage.getItem(`${name}`);

export const clearLStorageData = () => window.localStorage.clear()