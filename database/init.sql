CREATE TABLE IF NOT EXISTS players
(
    id              SERIAL PRIMARY KEY NOT NULL,
    firstname       VARCHAR(100) NOT NULL,
    lastname        VARCHAR(100) NOT NULL,
    player_number   INTEGER NOT NULL
);
CREATE UNIQUE INDEX players_id ON players (id);

INSERT INTO players (firstname, lastname, player_number) VALUES ('test', 'test', 0);
