const { store } = require('../config/db')

class CategoryModel {
  async create(ID, Name, Description) {
    const session = store.openSession()

    const category = {
      Name,
      Description,
      '@metadata': { '@collection': 'Categories' },
    }

    await session.store(category, ID)
    await session.saveChanges()

    const newID = session.advanced.getMetadataFor(category)['@id']
    console.log('New document ID: ', newID)
  }

  async read() {
    const session = store.openSession()

    const categories = await session.query({ collection: 'Categories' }).all()
    console.log(categories)
  }

  async readSingle(id) {
    const session = store.openSession()

    const category = await session.load(id)
    console.log(category)
  }

  async update(id, fields) {
    const session = store.openSession()

    let category = await session.load(id)

    if (!category) {
      console.log('Category not found!')
      return
    }

    Object.entries(fields).forEach(([key, value]) => {
      category[key] = value
    })

    await session.saveChanges()
    console.log('Category updated successfully!')
  }

  async delete(id) {
    const session = store.openSession()

    session.delete(id)

    await session.saveChanges();
    console.log('Category deleted successfully!');
  }
}

const CATEGORY_MODEL = new CategoryModel()

module.exports = CATEGORY_MODEL
