FORMAT: 1A
HOST: http://example.org/

# Activites

Activities is a simple API allowing end-users to create, view, update and delete their activity list.

# Activities API Root [/]

This resource does not have any attributes. Instead it offers the initial API affordances in the form of the links in the JSON body.

# View Activities

### [GET] /Activities

+ Response 200 (application/json)
	{
            
            "activities": [
                {
                    "activity": "Vue.js",
                    "url": "/activities/todo/1",
                    "value": true
                }, {
                    "activity": "Blockchain Research",
                    "url": "/activities/todo/2",
                    "value": true
                }, {
                    "activity": "DLT",
                    "url": "/activities/todo/3",
                    "value": false
                }
            ],
	    "published_at": "2018-11-11T08:40:51.620Z",
            "url": "/activities/"
            
        }

# Create Activities
 
### [POST] /Activities/create        

You may create activity using this action. It takes a JSON object containing an activity.

+ activity (string) - The activity

+ Request (application/json)

        {
            "activities": { "python", true }
        }

+ Response 201 (application/json)

    + Headers

            Location: /activities/todo/4

    + Body

           {

             "activities": [
                {
                    "activity": "Vue.js",
                    "url": "/activities/todo/1",
                    "value": true
                }, {
                    "activity": "Blockchain Research",
                    "url": "/activities/todo/2",
                    "value": true
                }, {
                    "activity": "DLT",
                    "url": "/activities/todo/3",
                    "value": false
                }, {
                    "activity": "python",
                    "url": "/activities/todo/4",
                    "value": true
                }
              ],
  	     "published_at": "2018-11-11T08:40:51.620Z",
             "url": "/activities/todo/4"

           }

	
# [POST] /Activities/update{?id=$id}

This action allows you to vote on a question's choice.

+ Response 201

    + Headers

            Location: /activities/todo/$id



# DELETE 

### [DELETE] /Activities/remove/{id}

+ Response 204
