class NewListAPI {
    static async get(id = 1) {
        const response = await fetch(`./assets/database/news/${id}.json`);
        try {
            const data = await response.json();
            return data;
        } catch (error) {
            return null;
        }
    }
}

export { NewListAPI };
