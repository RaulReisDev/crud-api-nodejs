const crudSchema = require("../schemas/crudSchema");
const { Op } = require("sequelize");

const getAll = () => {

    return crudSchema.findAll({
        attributes: ['uuid', 'name', 'email', 'creationDateTime']
    })

}

const getCRUDDetails = (uuid) => {

    return crudSchema.findAll({
        attributes: ['uuid', 'name', 'email', 'creationDateTime'],
        where: {
            uuid: uuid
        }
    })

}

const create = async (data) => {
    const createdData = await crudSchema.create(data)
    return createdData.uuid
}

const patch = async (uuid, data) => {
    const patchedData = await crudSchema.update(data, {
        where: {
            uuid: uuid
        }
    });
    return patchedData
}

const destroy = async (uuid, data) => {
    const destroyedData = await crudSchema.destroy({
        where: {
            uuid: uuid
        }
    });
    return destroyedData
}

module.exports = {
    getAll,
    getCRUDDetails,
    create,
    patch,
    destroy
};