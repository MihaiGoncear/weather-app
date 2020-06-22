export function getCityFromLocalStorage() {
    return JSON.parse(localStorage.getItem('city'));
};

export function setCityToLocalStorage(city) {
    localStorage.setItem('city', JSON.stringify(city))
};