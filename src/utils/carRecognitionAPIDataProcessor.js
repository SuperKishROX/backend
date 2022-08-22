function processData(jsonResponseDate) {
    var detections
    var color
    var mode_info

    var detections = jsonResponseDate.detections[0]
    if (detections.color){
        var color = detections.color[0]
    }

    if (detections.mmg){
        var mode_info = detections.mmg[0]
    }

    return {color : color, mode_info : mode_info}

}

module.exports = {
    processData
}