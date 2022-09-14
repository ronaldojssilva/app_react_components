import axios from "axios";

const getTodos = async () => {
    return await axios.get('https://jsonplaceholder.typicode.com/todos');
}

const getWeatherInfo =  async (q) => {
    return await axios.get(`http://api.weatherstack.com/current?access_key=0678d211d5ba68e1a23dec70cd829307&query=${q}`);
}

export{
    getTodos,
    getWeatherInfo
}