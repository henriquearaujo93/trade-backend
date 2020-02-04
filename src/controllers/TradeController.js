const Trade = require('../models/Trade');

module.exports = {
    store (request, response) {

        response.setHeader("Access-Control-Allow-Origin", "*");
        response.setHeader("Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE");
        response.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

        next();
    
        const { paper, entryDate, endDate, openDays, entryValue, exitValue, diference, madeProfit } = request.body;

        const trade = ({
            paper: paper,
            entryDate: entryDate,
            endDate: endDate,
            openDays: openDays,
            entryValue: entryValue,
            exitValue: exitValue,
            diference: diference,
            madeProfit: madeProfit
        });

        Trade.create(trade, (err, result) => {
            if(err){
                return response.json({success: false});
            } else {
                return response.json({result});
            }
        })
    },

    list (request, response) {

        response.header("Access-Control-Allow-Origin", "*");
        response.setHeader("Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE");
        response.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

        next();
         
       Trade.find(function(err, result) {
            if(err){
                console.log(err);
                return response.json({success:false});
            } else {
                console.log(result);
                return response.json({result});
            }
        })
    },

    destroy (request, response) {

        response.header("Access-Control-Allow-Origin", "*");
        response.setHeader("Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE");
        response.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

        next();

        Trade.findOneAndDelete({_id:request.params.id}, (err, result) => {
            if(err){
                console.log(err);
                return response.json({success: false});
            } else {
                console.log(result);
                return response.json({result});
            }
        });
    },

    edit (request, response){

        response.header("Access-Control-Allow-Origin", "*");
        response.setHeader("Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE");
        response.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

        next();

        const { paper, entryDate, endDate, openDays, entryValue, exitValue, diference, madeProfit } = request.body;

        const trade = {
            paper: paper,
            entryDate: entryDate,
            endDate: endDate,
            openDays: openDays,
            entryValue: entryValue,
            exitValue: exitValue,
            diference: diference,
            madeProfit: madeProfit
        };

        Trade.updateOne({_id:request.params.id}, trade, (err, result) => {
            if(err){
                console.log(err);
                return response.json({success:false});
            } else {
                console.log(result);
                return response.json({result});
            }
        })
    }
}