/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("g3sjstf9wbg6nrb")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "4o4onnrv",
    "name": "date",
    "type": "date",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("g3sjstf9wbg6nrb")

  // remove
  collection.schema.removeField("4o4onnrv")

  return dao.saveCollection(collection)
})
