class AboutInfoAPI {
    static async get() {
        const response = await fetch('./assets/database/about_info.json');
        const data = await response.json();
        return data;
    }
}

export { AboutInfoAPI };
