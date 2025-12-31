module.exports = (params, useAxios) => {
  console.log(JSON.stringify(params))
  return useAxios({
    url: params.targetUrl,
    baseURL: '',
    method: 'GET',
    encryptType: 'android',
    responseType: 'stream', 
    headers: { 'x-router': 'trackercdn.kugou.com' },
    encryptKey: true,
    notSign: true,
    cookie: params?.cookie || {},
  });
};
