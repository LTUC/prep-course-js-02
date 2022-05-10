DROP TABLE IF EXISTS recipe;

CREATE TABLE IF NOT EXISTS recipe (
    id SERIAL PRIMARY KEY,
    title varchar(255),
    time varchar(255),
    summary varchar(255),
    image varchar(255)
);