import axios from "axios";

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer baX5Ab02DEGqC7pnMHWvHt-wHURidZkSm267VBee_rS8JI3Br3Sz14Ut85OewMTjga7ZwWKD4QDz4hFVnVR0jpKoDI4Br4EDKSv5f8fWOx3zCNQikvdQXL77xRZAZXYx'

    }
})


