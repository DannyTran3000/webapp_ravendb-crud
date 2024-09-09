const CATEGORY_MODEL = require('../models/CategoryModel')

const insertCategory = (req, res) => {
  const ID = req.body?.ID
  const Name = req.body?.Name
  const Description = req.body?.Description

  if ([!!ID, !!Name, !!Description].includes(false)) {
    console.log('Error: Invalid inputs.')
    return
  }

  CATEGORY_MODEL.create(ID, Name, Description)
}

const selectAll = (req, res) => {
  CATEGORY_MODEL.read()
}

const selectByID = (req, res) => {
  const id = req.params.id

  CATEGORY_MODEL.readSingle(id)
}

const update = (req, res) => {
  const id = req.params.id
  const newData = req.body?.newData

  CATEGORY_MODEL.update(id, newData)
}

const drop = (req, res) => {
  const id = req.params.id
  const newData = req.body?.newData

  CATEGORY_MODEL.delete(id, newData)
}

module.exports = { insertCategory, selectAll, selectByID, update, drop }
