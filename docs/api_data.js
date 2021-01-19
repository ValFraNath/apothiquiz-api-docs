define({ "api": [
  {
    "type": "get",
    "url": "/status/",
    "title": "Get server status",
    "name": "GetServerStatus",
    "group": "Server",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Connection status to the server</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "db_version",
            "description": "<p>Database date-based version (AAAA-MM-DD)</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../server/controllers/api.js",
    "groupTitle": "Server"
  }
] });
