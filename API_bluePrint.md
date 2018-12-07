FORMAT: 1A
HOST: http://example.org/

# Activites

Activities is a simple API allowing end-users to create, view, update and delete their activity list.

# Activities API Root [/]

This resource does not have any attributes. Instead it offers the initial API affordances in the form of the links in the JSON body.

# View Activities

### [GET] /activities

+ Response 200 (application/json)
	{
            
            "activities": [
                {
		    "id": 1,		
                    "activity": "Vue.js",
                    "value": true,
                    "published_at": "2018-11-11T08:40:51.620Z"
                }, {
		    "id": 2,
                    "activity": "Blockchain Research",
                    "value": true,
                    "published_at": "2018-11-11T08:40:51.620Z"
                }, {
		    "id": 3,
                    "activity": "DLT",
                    "value": false,
                    "published_at": "2018-11-11T08:40:51.620Z"
                }
            ]
        }

# Get a Particular activity

### [GET] /activity?id={$id}

+ Response 200 (application/json)
	{
            
            "activities": [
                {
		    "id": 1,		
                    "activity": "Vue.js",
                    "value": true,
                    "published_at": "2018-11-11T08:40:51.620Z"
                }
            ]
        }


# Create Activities
 
### [POST] /activity/create        

You may create activity using this action. It takes a JSON object containing an activity.

+ activity (string) - The activity

+ Request (application/json)

        {
            "activities": [
		{ 
		    "id": 4,
		    "activity": "python",
		    "value": true, 
	            "published_at": "2018-11-13T08:40:51.620Z"
		}
        }

+ Response 201 (application/json)

    + Headers

            Location: /activities/4

    + Body

           {

             "activities": [
                {
		    "id": 1,		
                    "activity": "Vue.js",
                    "value": true,
                    "published_at": "2018-11-11T08:40:51.620Z"
                }, {
		    "id": 2,
                    "activity": "Blockchain Research",
                    "value": true,
                    "published_at": "2018-11-11T08:40:51.620Z"
                }, {
		    "id": 3,
                    "activity": "DLT",
                    "value": false,
                    "published_at": "2018-11-11T08:40:51.620Z"
                },{ 
		    "id": 4,
		    "activity": "python",
		    "value": true 
	            "published_at": "2018-11-13T08:40:51.620Z"
		}
              ]
           }

	
# [PUT] /activities/update?id={$id}

This action allows you to vote on a question's choice.

+ Response 201

    + Headers

            Location: /activities?id{$id}



# DELETE 

### [DELETE] /activities/remove/{$id}

+ Response 204

