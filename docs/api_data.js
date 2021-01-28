define({ "api": [
  {
    "type": "post",
    "url": "/duel/new",
    "title": "Create a new duel",
    "name": "CreateNewDuel",
    "group": "Duel",
    "permission": [
      {
        "name": "LoggedIn"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "opponent",
            "description": "<p>The user you are challenging</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"opponent\": \"nhoun\"\n}",
          "type": "string"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"id\" : 42\n}",
          "type": "number"
        }
      ],
      "fields": {
        "201": [
          {
            "group": "201",
            "type": "number",
            "optional": false,
            "field": "id",
            "description": "<p>The created duel ID</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "OpponentNotFound",
            "description": "<p>The specified opponent does not exist</p>"
          }
        ],
        "422": [
          {
            "group": "422",
            "optional": false,
            "field": "NotEnoughData",
            "description": "<p>There is not enough data to generate questions</p>"
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
    "filename": "../glowing-octo-guacamole/server/controllers/duels.js",
    "groupTitle": "Duel"
  },
  {
    "type": "get",
    "url": "/duel",
    "title": "Get all duels of the logged user",
    "name": "GetAllDuels",
    "group": "Duel",
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "object[]",
            "optional": false,
            "field": ".",
            "description": "<p>All duels in an array</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "LoggedIn"
      }
    ],
    "version": "0.0.0",
    "filename": "../glowing-octo-guacamole/server/controllers/duels.js",
    "groupTitle": "Duel",
    "error": {
      "fields": {
        "500": [
          {
            "group": "500",
            "optional": false,
            "field": "ServerError",
            "description": "<p>Server-side error</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/duel/:id",
    "title": "Get a duel by its ID",
    "name": "GetDuel",
    "group": "Duel",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "id",
            "description": "<p>The duel ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "id",
            "description": "<p>The duel id</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "opponent",
            "description": "<p>The opponent's username</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "userScore",
            "description": "<p>The current score of the user</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "opponentScore",
            "description": "<p>The current score of the opponent</p>"
          },
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "inProgress",
            "description": "<p><code>true</code> if the duel is not finished yet</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "currentRound",
            "description": "<p>Current round number</p>"
          },
          {
            "group": "Success 200",
            "type": "array[]",
            "optional": false,
            "field": "rounds",
            "description": "<p>The list of rounds</p>"
          },
          {
            "group": "Success 200",
            "type": "object[]",
            "optional": false,
            "field": "rounds.round",
            "description": "<p>The list of questions</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "rounds.round.type",
            "description": "<p>The type of the question</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "rounds.round.title",
            "description": "<p>The title of this type of question</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "rounds.round.subject",
            "description": "<p>The question subject - <em>if the round is the current one, or finished</em></p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "rounds.round.wording",
            "description": "<p>The wording of the question - <em>if the round is the current one, or finished</em></p>"
          },
          {
            "group": "Success 200",
            "type": "string[]",
            "optional": false,
            "field": "rounds.round.answers",
            "description": "<p>The list of answers - <em>if the round is the current one, or finished</em></p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "rounds.round.goodAnswer",
            "description": "<p>Index of the good answer - <em>if the round is played by the user</em></p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "rounds.round.userAnswer",
            "description": "<p>Index of the user answer - <em>if the round is played by the user</em></p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "rounds.round.opponentAnswer",
            "description": "<p>Index of the opponent's answer - <em>if the round is played by the user &amp; the opponent</em></p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n     \"id\" : 42,\n     \"inProgress\" : true,\n     \"currentRound\" : 2,\n     \"opponent\" : \"jjgoldman\",\n     \"userScore\" : 3,\n     \"opponentScore\" : 6,\n     \"rounds\" : [\n                    [\n                      {\n                        \"type\": 3,\n                        \"title\" : \"1 système - 4 molécules\",\n                        \"subject\": \"ANTIBIOTIQUE\",\n                        \"wording\": \"Quelle molécule appartient au système 'ANTIBIOTIQUE' ?\"\n                        \"answers\": [\"TELBIVUDINE\", \"PYRAZINAMIDE\", \"RITONAVIR\", \"TINIDAZOLE\"],\n                        \"goodAnswer\": 1,\n                        \"userAnswer\" : 0,\n                        \"opponentAnswer\" : 1\n                      },\n                      {\n                        \"type\": 3,\n                        \"title\" : \"1 système - 4 molécules\",\n                        \"subject\": \"ANTIVIRAL\",\n                        \"wording\": \"Quelle molécule appartient au système 'ANTIVIRAL' ?\"\n                        \"answers\": [\"CEFIXIME\", \"SPIRAMYCINE\", \"RILPIVIRINE\", \"ALBENDAZOLE\"],\n                        \"goodAnswer\": 2,\n                        \"userAnswer\" : 1,\n                        \"opponentAnswer\" : 3\n                      },\n                      ...\n                    ],\n                    [\n                      {\n                        \"type\": 2,\n                        \"title\" : \"1 molécule - 4 classes\"\n                        \"subject\": \"ZANAMIVIR\",\n                        \"wording\": \"À quelle classe appartient la molécule 'ZANAMIVIR' ?\"\n                        \"answers\": [\n                          \"INHIBITEURS DE NEURAMINISASE\", \n                          \"INHIBITEUR POLYMERASE NS5B\", \n                          \"PHENICOLES\", \n                          \"OXAZOLIDINONES\"\n                        ],\n                        \"goodAnswer\": 0,\n                        \"userAnswer\" : 0,\n                      },...\n                    ],\n                    [\n                      {\n                        \"type\" : 4,\n                        \"title\" : \"1 molécule - 4 systèmes\"\n                      },\n                      ...\n                    ]\n                    ...\n                  ]\n}",
          "type": "object"
        }
      ]
    },
    "error": {
      "fields": {
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "NotFound",
            "description": "<p>The duel does not exist</p>"
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
    "filename": "../glowing-octo-guacamole/server/controllers/duels.js",
    "groupTitle": "Duel"
  },
  {
    "type": "post",
    "url": "/duel/:id/:round",
    "title": "Play a round of a duel",
    "name": "PlayDuelRound",
    "group": "Duel",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "id",
            "description": "<p>The duel ID</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "round",
            "description": "<p>The round number</p>"
          },
          {
            "group": "Parameter",
            "type": "number[]",
            "optional": false,
            "field": "answers",
            "description": "<p>The user answers</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"answers\" : [1,3,0,0,2]\n}",
          "type": "type"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "object",
            "optional": false,
            "field": "duel",
            "description": "<p>The updated duel</p>"
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
            "field": "InvalidRound",
            "description": "<p>The round is invalid</p>"
          },
          {
            "group": "400",
            "optional": false,
            "field": "FinishedDuel",
            "description": "<p>The duel is finished</p>"
          },
          {
            "group": "400",
            "optional": false,
            "field": "AlreadyPlayed",
            "description": "<p>The user has already played this round</p>"
          },
          {
            "group": "400",
            "optional": false,
            "field": "InvalidAnswers",
            "description": "<p>The user answers are invalid</p>"
          }
        ],
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "NotFound",
            "description": "<p>Duel does not exist</p>"
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
    "filename": "../glowing-octo-guacamole/server/controllers/duels.js",
    "groupTitle": "Duel"
  },
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
            "type": "Number",
            "optional": false,
            "field": "question.goodAnswer",
            "description": "<p>The good answer index</p>"
          },
          {
            "group": "200",
            "type": "Array[String]",
            "optional": false,
            "field": "question.answers",
            "description": "<p>All answers possible</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "question.wording",
            "description": "<p>The question wording</p>"
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
        ],
        "422": [
          {
            "group": "422",
            "optional": false,
            "field": "NotEnoughData",
            "description": "<p>There is not enough data to generate questions</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../glowing-octo-guacamole/server/controllers/question.js",
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
    "filename": "../glowing-octo-guacamole/server/controllers/api.js",
    "groupTitle": "Server"
  },
  {
    "type": "get",
    "url": "/users/",
    "title": "Get data of all users",
    "name": "GetAllUsersData",
    "group": "User",
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "object[]",
            "optional": false,
            "field": "users",
            "description": "<p>All users in an array</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../glowing-octo-guacamole/server/controllers/user.js",
    "groupTitle": "User",
    "error": {
      "fields": {
        "500": [
          {
            "group": "500",
            "optional": false,
            "field": "ServerError",
            "description": "<p>Server-side error</p>"
          }
        ]
      }
    }
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
    "filename": "../glowing-octo-guacamole/server/controllers/user.js",
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
            "field": "victories",
            "description": "<p>Number of victories</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "defeats",
            "description": "<p>Number of defeats</p>"
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
    "url": "/users/",
    "title": "Get data of several users",
    "name": "GetUsersData",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string[]",
            "optional": false,
            "field": "listOfUsers",
            "description": "<p>Pseudo of several users</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "object[]",
            "optional": false,
            "field": "users",
            "description": "<p>All users in an array</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../glowing-octo-guacamole/server/controllers/user.js",
    "groupTitle": "User",
    "error": {
      "fields": {
        "500": [
          {
            "group": "500",
            "optional": false,
            "field": "ServerError",
            "description": "<p>Server-side error</p>"
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
    "filename": "../glowing-octo-guacamole/server/controllers/user.js",
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
            "field": "victories",
            "description": "<p>Number of victories</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "defeats",
            "description": "<p>Number of defeats</p>"
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
    "filename": "../glowing-octo-guacamole/server/controllers/user.js",
    "groupTitle": "User"
  }
] });
