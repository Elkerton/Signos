var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

module.exports = (() => {
    var signoSchema = new Schema ({
        nome : String,
        signo : String,
        createdIn : { type: Date, default : Date.now()},
        done : { type : Boolean, default : false}

    });

    return mongoose.model('Signos', signoSchema);
})();