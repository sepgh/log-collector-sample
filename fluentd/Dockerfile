FROM fluentd:v1.16.0-debian-1.0
USER root
RUN ["apt", "update"]
RUN ["apt", "install", "-y", "build-essential"]
RUN ["fluent-gem", "install", "fluent-plugin-mongo", "-v", "1.6.0"]
RUN ["fluent-gem", "install", "bson_ext", "-v", "1.12.1"]
USER fluent
