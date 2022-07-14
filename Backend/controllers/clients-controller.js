const {validationResult} = require('express-validator');
const uuid = require('uuid').v4;
const Client = require('../models/client');

const createClientRecord = async (req,res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
     return res.status(500).json({message: 'Failed to add a client, missing required field information.'});
    }


        const {
            ClientCode,
            LastName,
            FirstName,
            Address,
            City,
            State,
            Zip,
            Phone,
            Phone2,
            Cell,
            Notes,
            Email,
          }  = req.body;

    let existingUser;
    try {
        existingUser = await Client.findOne({Email : Email});

    } catch (error) {
        return res.status(500).json({message: 'Issue verifying if user exists'});
    }
   
    if(existingUser){
        return res.status(500).json({message: 'Client Record exists already.. please login instead..'});
    }
    

    const createdUser = new Client({
        ClientCode,
        LastName,
        FirstName,
        Address,
        City,
        State,
        Zip,
        Phone,
        Phone2,
        Cell,
        Notes,
        Email,
    });

    
    await createdUser.save().then(() => {
        res.status(201).json({user: createdUser.toObject({getters: true})});
    })
    .catch((error) => {
        return res.status(500).json({message: 'Failed add up client record. please try again: -' + error});
    });

    res.status(201);

}

exports.createClientRecord = createClientRecord;
