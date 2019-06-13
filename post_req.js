exports.uploadFile = (data) => {
    return new Promise((resolve, reject) => {
        let uploadToken = 'uptoken'
        let opt = {
            url: 'http://upload.qiniup.com/putb64/-1',
            headers: {
                'Authorization': "UpToken " + uploadToken,
                "Content-Type": "application/octet-stream"
            },
            body: data
        }
        request.post(opt, (err, res, body) => {
            if (err) {
                return reject(err)
            }
            let jsonData = JSON.parse(body)
            return resolve(jsonData)
        })
    })
}