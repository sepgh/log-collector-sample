# Sample Log Collection with fluentd

Here is a sample configuration of collecting logs using fluentd and storing them on a MongoDB database.

## How to run

First, copy `sample.env` to `.env`. Make sure the content of `.env` matches your fluentd mongodb config at `config/fluent.conf`.

Then run `docker compose up`.


## Sample log using HTTP

Use curl to add logs:

```sh
curl -X POST -d 'json={"foo":"bar"}' http://localhost:9880/myapp.access
```

You can visit mongo express on "http://localhost:8081", move to `fluentd` database and check the log collection of the sample app (`myapp`).

