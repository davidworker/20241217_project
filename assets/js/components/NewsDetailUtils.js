const getId = function () {
    try {
        return location.search.split('?')[1].split('=')[1];
    } catch (error) {
        return 1;
    }
};

export { getId };
