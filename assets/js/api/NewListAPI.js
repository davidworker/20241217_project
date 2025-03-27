class NewListAPI {
    static async get() {
        const response = await fetch('./assets/database/news_list.json');
        try {
            const data = await response.json();
            return data;
        } catch (error) {
            return [];
        }
    }
}

export { NewListAPI };
