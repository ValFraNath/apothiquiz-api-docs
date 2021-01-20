define({ "api": [
  {
    "type": "get",
    "url": "/question/:type",
    "title": "Get a random question",
    "name": "GetRandomQuestion",
    "group": "Question",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "question",
            "description": "<p>Question object</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "question.type",
            "description": "<p>Type of the question</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "question.subject",
            "description": "<p>Question subject</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "question.goodAnswer",
            "description": "<p>The good answer</p>"
          },
          {
            "group": "Success 200",
            "type": "Array[String]",
            "optional": false,
            "field": "question.badAnswers",
            "description": "<p>Three false answers</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../server/controllers/question.js",
    "groupTitle": "Question"
  },
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
  },
  {
    "type": "get",
    "url": "/user/:pseudo",
    "title": "Get user informations",
    "name": "GetUserInformations",
    "group": "User",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "pseudo",
            "description": "<p>ENT login</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "wins",
            "description": "<p>Number of wins</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "losses",
            "description": "<p>Number of losses</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "avatar",
            "description": "<p>Avatar object</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "avatar.colorBG",
            "description": "<p>Hex background color</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "avatar.colorBody",
            "description": "<p>Hex Body colod</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "avatar.eyes",
            "description": "<p>Number of the eyes</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "avatar.hands",
            "description": "<p>Number of the hands</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "avatar.hat",
            "description": "<p>Number of the hat</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "avatar.mouth",
            "description": "<p>Number of the mouth</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../server/controllers/user.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/user/login",
    "title": "Post a user login",
    "name": "PostUserLogin",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userPseudo",
            "description": "<p>ENT Login</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userPassword",
            "description": "<p>ENT password</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "pseudo",
            "description": "<p>the ENT login</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "token",
            "description": "<p>the user token</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../server/controllers/user.js",
    "groupTitle": "User"
  }
] });
