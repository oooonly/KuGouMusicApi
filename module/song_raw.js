module.exports = (params, useAxios) => {
  return useAxios({
    url: params.targetUrl,
    method: 'GET',
    encryptType: 'android',
    responseType: 'stream', 
    headers: { 'x-router': 'trackercdn.kugou.com' },
    encryptKey: true,
    notSign: true,
    cookie: params?.cookie || {},
  });
};
