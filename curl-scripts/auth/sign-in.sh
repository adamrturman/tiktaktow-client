curl "https://tic-tac-toe-api.herokuapp.com/sign-in" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --data '{
    "credentials": {
      "user": "'"${USER}"'",
      "password": "'"${PASSWORD}"'"
    }
  }'
echo
