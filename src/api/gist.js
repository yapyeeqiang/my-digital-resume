import axios from 'axios'

const GIST_ID = '275897e95e83b01380a8e58fa89fbfd7'
const ENDPOINT = `https://api.github.com/gists/${GIST_ID}`

export const getBasicInfo = async () => {
    const { data } = await axios.get(ENDPOINT)
    const basicInfo = JSON.parse(data.files['me.json'].content)

    return basicInfo
}
