module.exports = function(sequelize, Datatypes){

    var Contacted = sequelize.define("Contacted", {
        
        sendername: {
            type: Datatypes.STRING

        },
         
        email: {
            type: Datatypes.STRING,
            validate: {
                isEmail: true 
            } 
        },

        subject: {
            type: Datatypes.STRING
        },

        message:{

            type: Datatypes.STRING

        }

        

        

    });

    console.log(Contacted);

    return Contacted;
}
