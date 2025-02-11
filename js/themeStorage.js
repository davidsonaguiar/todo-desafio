const key = "theme";

function getPrefersColorScheme() {
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export const themeStorage = {
    get() {
        return localStorage.getItem(key) ?? getPrefersColorScheme();
    },

    set(value) {
        localStorage.setItem(key, value);
    }
};