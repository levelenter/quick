
openssl genrsa -out key.pem 1024
openssl req -new -key key.pem -out csr.pem
openssl x509 -req -in csr.pem -signkey key.pem -out cert.pem

//https express
https://qiita.com/MahoTakara/items/71977be2d18405fe7339