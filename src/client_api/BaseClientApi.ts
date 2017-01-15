declare var require: any
var request = require('request')

export abstract class BaseClientApi {

    /**
     * [httpGet description]
     * @param  {string}   url      [description]
     * @param  {Object}   data     [description]
     * @param  {Function} callback [description]
     * @return {[type]}            [description]
     */
    public httpGet(url: string, data: Object, callback: Function) {
        request(
            {
              url:url,
              qs:data
            }, function(err: any, response: any, body: any) {
              if(err) {
                console.log(err); return;
              }
              console.log("Get response: " + response.statusCode);
              callback(response, body);
        });
    }

    /**
     * [httpPost description]
     * @param  {string}   url      [description]
     * @param  {Object}   data     [description]
     * @param  {Function} callback [description]
     * @return {[type]}            [description]
     */
    public httpPost(url: string, data: Object, callback: Function) {
        request.post(
            url,
            { json: data },
            function (error: any, response: any, body: any) {
                if (!error && response.statusCode == 200) {
                    console.log(body)
                callback(body)
            }
        });
    }
}
