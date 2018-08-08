create table bins (bin_id serial primary key, shelf_id varchar(1), bin_number SMALLINT, product_name varchar(200), price NUMERIC(8, 2), img_url varchar)
-- shelf_id can be: a, b, c, or d
--bin-num can be: 1, 2, 3, 4, or 5