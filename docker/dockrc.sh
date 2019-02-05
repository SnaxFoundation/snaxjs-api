
function clisnax() {
  docker-compose exec kxd clisnax -u http://snaxnoded:8888 --wallet-url http://localhost:8900 "$@"
}

function kxd() {
  docker exec docker_snaxnoded_1 kxd "$@"
}

function pkill() {
  docker exec docker_snaxnoded_1 pkill "$@"
}
