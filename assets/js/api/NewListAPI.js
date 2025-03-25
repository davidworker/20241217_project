class NewListAPI {
    static async get() {
        const response = await fetch('./assets/database/news_list.json');
        const data = await response.json();
        return data;
    }
}

export { NewListAPI };
