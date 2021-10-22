const API_KEY = process.env.REACT_APP_API_KEY;

const requests = {
    popularVideos: `/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=9&regionCode=US&key=${API_KEY}`,
}

export default requests;