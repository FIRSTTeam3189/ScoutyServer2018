const BLUE_ALLIANCE_API_URL = 'www.thebluealliance.com/api/v3'
const BLUE_ALLIANCE_AUTH = '9y8MGbcpw1VKVHhkbdEeMrvBrOmKcHIOw5HlGeeul3E1839wbwEOO8MdZSbOjcim'

/**
 * Joins the paths of the parts array into a single path
 * sep as a separator.
 * @param {[string]} parts an array of paths to join
 * @param {string} sep separates the things
 */
export function pathJoin (parts, sep) {
  let separator = sep || '/'
  let replace = new RegExp(separator + '{1,}', 'g')
  return parts.join(separator).replace(replace, separator)
}

/**
 * Resolves the path of the bluealliance api version 3 and returns a proper axios config.
 * @param {string} apiPath the subpath to the particular blue
 * alliance api such as /teams, /events, etc.
 * @returns {object} configuration object for axios http request library
 */
export function resolveBAPath (apiPath) {
  let axiosConfig = {
    method: 'get',
    url: `http://${pathJoin([BLUE_ALLIANCE_API_URL, apiPath])}`,
    headers: {
      'X-TBA-Auth-Key': BLUE_ALLIANCE_AUTH
    }
  }

  return axiosConfig
}
