UPDATE bins
set product_name = $2, price = $3, img_url = $4
where bin_id = $1
-- RETURNING *
