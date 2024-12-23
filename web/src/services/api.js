import axios from 'axios';

const API_BASE_URL = '/todolist'; // note that the base URL is set in package.json:proxy


function getURL(path) {
    return `${API_BASE_URL}/${path}`;
}

const API = {
    getLists: async function () {
        try {
            return (await axios.get(getURL(""))).data
        } catch (error) {
            console.log("API error: ", error);
            throw error;
        }
    },
    getList: async function (listId) {
        console.log(`getList ${listId}`);
        const lists = await this.getLists();
        const filtered = lists.filter(list => list.id == listId);
        if (filtered.length == 0) {
            throw Error("invalid listId");
        }
        return filtered[0];
    },

    createList: async function (title) {
        const data = {
            name: title
        };
        return axios.post(getURL(""), data);
    },

    createTodo: async function (listId, title) {
        return axios.post(getURL(listId), { title });
    },

    // completeTodo: async function (id, todoid) {
    //     return axios.post(getURL(`${id}/${todoid}`))
    // }

}

export default API;