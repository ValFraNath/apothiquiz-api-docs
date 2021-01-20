define({ "api": [
  {
    "type": "get",
    "url": "/question/:type",
    "title": "Get a random question",
    "name": "GetRandomQuestion",
    "group": "Question",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "size": "1...1",
            "optional": false,
            "field": ":type",
            "description": "<p>Question type</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Object",
            "optional": false,
            "field": "question",
            "description": "<p>Question object</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "question.type",
            "description": "<p>Type of the question</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "question.subject",
            "description": "<p>Question subject</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "question.goodAnswer",
            "description": "<p>The good answer</p>"
          },
          {
            "group": "200",
            "type": "Array[String]",
            "optional": false,
            "field": "question.badAnswers",
            "description": "<p>Three false answers</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "optional": false,
            "field": "BadRequest",
            "description": "<p>Bad request body / parameters</p>"
          }
        ],
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "NotFound",
            "description": "<p>Incorrect type of question</p>"
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
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Connection status to the server</p>"
          },
          {
            "group": "200",
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
    "permission": [
      {
        "name": "LoggedIn"
      }
    ],
    "error": {
      "fields": {
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>User not found</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../server/controllers/user.js",
    "groupTitle": "User",
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
    }
  },
  {
    "type": "patch",
    "url": "/user/:pseudo",
    "title": "Patch user informations",
    "name": "PatchUserInformations",
    "group": "User",
    "description": "<p>At least one field must be filled</p>",
    "permission": [
      {
        "name": "LoggedIn"
      },
      {
        "name": "(for the moment, users can only update themselves)"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "pseudo",
            "description": "<p>ENT login</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "avatar",
            "description": "<p>Avatar object</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "size": "7",
            "allowedValues": [
              "hexColor"
            ],
            "optional": false,
            "field": "avatar.colorBG",
            "description": "<p>Hex background color</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "size": "7",
            "allowedValues": [
              "hexColor"
            ],
            "optional": false,
            "field": "avatar.colorBody",
            "description": "<p>Hex Body color</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "size": "0...",
            "optional": false,
            "field": "avatar.eyes",
            "description": "<p>Number of the eyes</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "size": "0...",
            "optional": false,
            "field": "avatar.hands",
            "description": "<p>Number of the hands</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "size": "0...",
            "optional": false,
            "field": "avatar.hat",
            "description": "<p>Number of the hat</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "size": "0...",
            "optional": false,
            "field": "avatar.mouth",
            "description": "<p>Number of the mouth</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "optional": false,
            "field": "BadRequest",
            "description": "<p>Bad request body / parameters</p>"
          }
        ],
        "403": [
          {
            "group": "403",
            "optional": false,
            "field": "NotAllowed",
            "description": "<p>The current user is not allowed to do this.</p>"
          }
        ],
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "NotFound",
            "description": "<p>User not found</p>"
          }
        ],
        "500": [
          {
            "group": "500",
            "optional": false,
            "field": "ServerError",
            "description": "<p>Server-side error</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../server/controllers/user.js",
    "groupTitle": "User",
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
    }
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
        "200": [
          {
            "group": "200",
            "type": "string",
            "optional": false,
            "field": "pseudo",
            "description": "<p>the ENT login</p>"
          },
          {
            "group": "200",
            "type": "string",
            "optional": false,
            "field": "token",
            "description": "<p>the user token</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "401": [
          {
            "group": "401",
            "optional": false,
            "field": "IncorrectPassword",
            "description": ""
          }
        ],
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "UserNotFound",
            "description": ""
          }
        ],
        "500": [
          {
            "group": "500",
            "optional": false,
            "field": "ServerError",
            "description": "<p>Server-side error</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../server/controllers/user.js",
    "groupTitle": "User"
  }
] });
