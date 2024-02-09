/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("g3sjstf9wbg6nrb")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "9sdzvhnq",
    "name": "participants",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("g3sjstf9wbg6nrb")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "9sdzvhnq",
    "name": "participant",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
})
