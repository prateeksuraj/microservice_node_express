
##### Then run the following commands to start up the app
yarn install
npm start


Test cases:

1. localhost:8000/api/signup
{
        "email":"test@test.com",
        "contact":"997766554422",
        "name":"prateek",
        "role":"admin",
        "password":"1_password_1"
 }
 response:
 {
        "message": "Signup success! Please login."
    }


2. localhost:8000/api/signin

{
        "email":"test@test.com",
        "password":"password"
                
}
  response:
{
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTJjMGJhNjhmZDNmMTE0NmRjNmM3NDciLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2MzAyNzY3ODB9.qAsGAF4f5CYtrw4WG9O_O514si_Z6z_tgelEDhp7d6s",
        "user": {
            "_id": "612c0ba68fd3f1146dc6c747",
            "email": "prateek.suraj@gmail.com",
            "name": "prateek",
            "role": "admin"
        }
    }

3. localhost:8000/api/posts    get

4. localhost:8000/api/post/new/612c0ba68fd3f1146dc6c747

{
	"title":"Test-12",
	"body":"this is test post-3"
}
response
{
    "data": {
        "title": "Test-12",
        "body": "this is test post-3",
        "postedBy": "612c0ba68fd3f1146dc6c747",
        "ladtUpdatedBy": "612c0ba68fd3f1146dc6c747",
        "_id": "612c1de7e3ec5205054da589",
        "created": "2021-08-29T23:53:11.327Z",
        "__v": 0
    },
    "message": "post saved successfully."
}

5. localhost:8000/api/post/612c1a4763d3d4b3dcd4fb30

{
	"title":"Test-2_31",
	"body":"this is test post-3_2"
}
response
{
    "message": "Post Updated",
    "data": {
        "_id": "612c1a4763d3d4b3dcd4fb30",
        "title": "Test-2_31",
        "body": "this is test post-3_2",
        "created": "2021-08-29T23:37:43.869Z",
        "__v": 0,
        "ladtUpdatedBy": "612c0ba68fd3f1146dc6c747"
    }
}

6. localhost:8000/api/post/delete/612c17a9030f6f968ecbfced get



response
{
    "message": "Post Deleted"
}
