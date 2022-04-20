const crudModel = require("../models/crudModel")

const getAll = async (req, res) => {

    const getAll = await crudModel.getAll()
    if (!getAll) return res.status(400).send("Empty!");

    // Send data
    res.send({
        "status": 'success',
        "result": getAll
    });

}

const getDetails = async (req, res) => {

    // Get data
    let {uuid} = req.params

    const crudDetails = await crudModel.getCRUDDetails(uuid)
    if (!crudDetails) return res.status(400).send("Empty!");

    // Send data
    res.send({
        "status": 'success',
        "result": crudDetails
    });

}

const create = async (req, res) => {

    const create = await crudModel.create(req.body)
    if (!create) return res.status(400).send("Empty!");

    // Send data
    res.send({
        "status": 'success',
        "result": create
    });

}

const patch = async (req, res) => {

    const {uuid} = req.params

    const patch = await crudModel.patch(uuid, req.body)

    // Send data
    res.send({
        "status": 'success',
        "result": patch
    });

}

const destroy = async (req, res) => {

    const {uuid} = req.params

    const destroy = await crudModel.destroy(uuid)

    // Send data
    res.send({
        "status": 'success',
        "result": destroy
    });

}

module.exports = {
    getAll,
    getDetails,
    create,
    patch,
    destroy
}