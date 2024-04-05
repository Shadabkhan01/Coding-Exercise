Run the app using "npm start"

Demo url : https://exercise.cyclic.app/fizzbuzz,

Curl request can be tested using postman :-
curl --location --request POST 'https://exercise.cyclic.app/fizzbuzz' \
--header 'Content-Type: application/json' \
--data-raw '{
    "data":[1, 3, 5, 15, 23, 27]
}'
