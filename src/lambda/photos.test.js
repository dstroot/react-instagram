import _ from 'lodash';

function sanitize(data, keys) {
  return keys.reduce((result, key) => {
    const val = _.get(result, key);
    if (!val || _.isArray(val) || _.isObject(val)) {
      return result;
    } else {
      return _.set(_.cloneDeep(result), key, '[SANITIZED]');
    }
  }, data);
}

test('API call', async () => {
  // arrange
  const username = 'ferrytalecreative';

  try {
    // act
    const response = await realFetch(
      // use real fetch, not mocked
      `https://www.instagram.com/${username}/?__a=1`
    );

    // assert (test response)
    expect(response).not.toBeNull();
    expect(response).toMatchSnapshot();

    let json = await response.json();
    expect(json).not.toBeNull();

    // sanitize the results
    json = sanitize(json, [
      'graphql.user.biography',
      'graphql.user.external_url_linkshimmed',
      'graphql.user.edge_owner_to_timeline_media.page_info.end_cursor',
    ]);
    expect(json).toMatchSnapshot();
  } catch (e) {
    expect(e).toBeNull();
  }
});
