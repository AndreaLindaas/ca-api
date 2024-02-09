/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "g3sjstf9wbg6nrb",
    "created": "2024-02-08 09:35:15.284Z",
    "updated": "2024-02-08 09:35:15.284Z",
    "name": "wine_nights",
    "type": "base",
    "system": false,
    "schema": [
      {
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
      },
      {
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
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("g3sjstf9wbg6nrb");

  return dao.deleteCollection(collection);
})
