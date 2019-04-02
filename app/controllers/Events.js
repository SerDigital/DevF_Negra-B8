const { reportEvent } = require("../actions");

//const 


const createEvent = (req, res) => {

    // TODO: Agregar secciones adicionales necesarias para la evaluación del evento.

    //const varss = req.body;
    // for(var k in varss) {
    //     console.log(k, varss[k]);
    //  }
    //  console.log(varss);
    //res.send(200);


    console.log(req.body)
    reportEvent(req.body).then((event) => {
        res.status(201).json(event);
    }).catch(e=> res.status(400).json(e));
}

module.exports = {
    createEvent
};