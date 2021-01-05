# [pegas.is](https://pegas.is)

[me.pegasis.site](https://me.pegasis.site/), [www.pegasis.site](https://www.pegasis.site/) and [pegasis.site](https://pegasis.site/) redirects to here.

## Build

```
npm run build
```

## Nginx Rules

```
server {
	listen 80;

	server_name pegasis.site me.pegasis.site www.pegasis.site pegas.is;
	return 302 https://pegas.is$request_uri;
}

server {
	listen 443 ssl http2;
	# add ssl certificates here

	server_name pegasis.site me.pegasis.site www.pegasis.site;
	return 302 https://pegas.is$request_uri;
}

server {
	listen 443 ssl http2;
	# add ssl certificates here

	server_name pegas.is;
	root /var/www/me.pegasis.site;

	location /old {
		error_page 404 /old/404.html;
		index index.html;
	}

	location / {
		try_files $uri /index.html;
	}
}

```
