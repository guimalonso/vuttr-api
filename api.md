FORMAT: 1A

# VUTTR

VUTTR is an API that allows registering and visualization of data about useful tools for different tasks.


# Group tools

Resources related to tool data.

## Tool [/tools?tag={tag}&tagSearch=1]

A tool object has the following attributes:
+ title 
+ link - Link to download or use the specified tool
+ description - More details about the tool
+ Tags - A collection of tags used for tool searching

### View the available tools [GET]
Retrieves all the tools that have a specified tag, or all the registered tools if the tag is not provided.

+ Parameters
  + tag: (optional, string) - term to search for tools
  + tagSearch: (optional, integer) - search for the term only in tags list if value is 1

+ Response 200 (application/json)
[
  {
    "tags": [
      "web",
      "framework",
      "node",
      "http2",
      "https",
      "localhost"
    ],
    "_id": "5dcca3172aca6604c4984090",
    "title": "fastify",
    "link": "https://www.fastify.io/",
    "description": "Extremely fast and simple, low-overhead web framework for NodeJS. Supports HTTP2."
  },
  {
    "tags": [
      "web",
      "framework",
      "node",
      "http2",
      "https",
      "localhost"
    ],
    "_id": "5dceaf507c1e5d06d45e42b2",
    "title": "react",
    "link": "https://reactjs.org/",
    "description": "Extremely fast and simple, low-overhead web framework for NodeJS. Supports HTTP2.",
    "__v": 0
  }
]

### Create a new tool [POST]

You can create a new tool using this action. Requires user authentication (See specification for /sessions).

+ Request (application/json)
  + Headers
    + authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZGNmMDM2MGY1MjY3ODEwODNiOTBmNzkiLCJpYXQiOjE1NzM4NDgwMDIsImV4cCI6MTU3NDQ1MjgwMn0.S7OKrYDE1ROX22ieicC5mR7hKrlvE-AGx35gvzE2JmU
  + Body
    {
      "title": "react",
      "link": "https://reactjs.org/",
      "description": "Powerful, component-based front-end framework for JavaScript.",
      "tags": [
        "web",
        "framework",
        "JavaScript"
      ]
    }

  + Schema
    {
      "$schema": "http://json-schema.org/draft/2019-09/schema#",
      "type": "object",
      "properties": {
        "title": {
          "type": "string"
        },
        "link": {
          "type": "string"
        }
        "description": {
          "type": "string"
        },
        "tags": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "minItems": 0
        }
      }
    }

+ Response 201 (application/json)
  {
    "tags": [
      "web",
      "framework",
      "JavaScript"
    ],
    "_id": "5dcec44fd43513080ade6320",
    "title": "react",
    "link": "https://reactjs.org/",
    "description": "Powerful, component-based front-end framework for JavaScript."
  }

## Tool [/tools/:id]

### Delete a tool [DELETE]

Deletes a tool with the specified id. It will delete the tool only if the authenticated user is the one who created it, otherwise an error will be returned.

+ Response 204 (No response body)
