/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("g3sjstf9wbg6nrb")

  collection.name = "wine_night"

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "e1ffipc5",
    "name": "location",
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

  collection.name = "wine_nights"

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "e1ffipc5",
    "name": "place",
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
