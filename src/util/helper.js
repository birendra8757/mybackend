const today = new Date();
const curentMonth = today.getMonth();
function getBatchInfo(){
    return "lithium,W3D5,the topic for today is Nodejs module system"
};


module.exports.date = today;
module.exports.month = curentMonth +1;
module.exports.batchinfo = getBatchInfo;