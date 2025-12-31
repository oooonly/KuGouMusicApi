module.exports = (params, useAxios) => {
  console.log(JSON.stringify(params))
  return useAxios({
    url: params.targetUrl,
    baseURL: '',
    method: 'GET',
    responseType: 'arraybuffer', 
    clearDefaultParams: true,
    notSignature: true,
  }).then(response => {  
    // 设置响应头，不是请求头  
    response.headers = {  
      'Content-Type': 'audio/mpeg'  
    };  
    return response;  
  });  
};
