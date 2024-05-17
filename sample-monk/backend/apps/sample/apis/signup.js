// export function doService(request, _servObject, headers, _url, _apiconf) {return {request}}

exports.doService = async (jsonReq) => {
      return { result: true, req: jsonReq }
}
