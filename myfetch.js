
const axios = require('axios');

async function main() {
    let joke = await axios.get("https://api.chucknorris.io/jokes/random")
    console.log(joke.data.value)
}
main()