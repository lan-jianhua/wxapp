function request(url, data = {}, header = {}, method = "GET") {
    return new Promise((resolve, reject) => {
        wx.request({
            url, //开发者服务器接口地址",
            data, //请求的参数",
            method,
            header,
            success: res => {
                resolve(res)
            },
            fail: () => {
                reject();
            }
        });
    })
}
request.baseUrl = "https://www.zhengzhicheng.cn/api/public/v1/";
request.get = function(url, data) {
    return request(request.baseUrl + url, data, {}, "GET")
}
request.POST = function(url, data) {
    return request(request.baseUrl + url, data, {}, "POST")
}
export default request;