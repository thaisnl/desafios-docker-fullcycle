FROM golang:1.21-alpine AS base
WORKDIR /projeto-go
COPY ./main.go .
RUN go build main.go

FROM scratch
WORKDIR /var/www
COPY --from=base /projeto-go .
ENTRYPOINT ["./main"]