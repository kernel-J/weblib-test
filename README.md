# README

## Installation

Ensure you have docker and docker-compose installed.

Run:
```
docker-compose up
```

## USAGE

To get all players in the database
```
<docker machine ip>:3000/all
```

To get one player, make a POST http request to:
```
<docker machine ip>:3000/player
```
with body:
```
id: <player_id>

```

To create a player, make a POST http request to:
```
<docker machine ip>:3000/create
```
with body:
```
firstname: <string>
lastname: <string>
player_number: <integer>

```

To modify a player, make a POST request to:
```
<docker machine ip>:3000/update
```
with body:
```
id: <player_id>
newData: {
    firstname: <string>
    lastname: <string>
    player_number: <integer>
}

```

To delete a player, make a POST request to:
```
<docker machine ip>:3000/delete
```
with body:
```
id: <player_id>
```
