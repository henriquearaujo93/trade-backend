const Trade = require('../models/Trade');

module.exports = {
    store (request, response) {
    
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