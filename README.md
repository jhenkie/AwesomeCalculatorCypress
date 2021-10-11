# Awesome factorial application

Welcome to the awesome factorial repository, here you can find the code to run your awesome factorial calculator.

## Contents

1. [💻 Requirements](#requirements)
1. [🚧 Roadmap](#roadmap)
1. [🚀 How to run](#how-to-run)
1. [🕹 How to use](#how-to-use)
1. [🏷 Versioning](#versioning)
1. [🔐 Security](#security)
1. [📜 License](#license)

## Requirements

- [🐳 Docker](https://www.docker.com/get-started)

## Roadmap

Next features to implement can be found in milestone [2.0.0](https://github.com/rui-costa/awesome_factorial_application/milestone/1)

The full roadmap can be found [here](https://github.com/rui-costa/awesome_factorial_application/milestones)

## How to run

- MacOS and LINUX

```
./run
```

- Windows

```
docker-compose build --no-cache --parallel
docker-compose up
```

## How to use

Navigate to http://localhost:8080 and enjoy your calculator

## Versioning

Versioning follows the [Semantic Versioning](https://semver.org/) standard.

## Security

Running code from unknown sources always caries some risk. Luckily, this code is simple to understand and can be easily validated. Never the less, the responsibility is yours.

## License

The source code for this project is released under the [MIT License](https://mit-license.org/).

## How to run test

Navigate to **testcypress** folder and choose one of below commands
```
npm run cy:open

```
```
npm run cy:run:chrome

```
```
npm run cy:run:firefox

```
```
npm run cy:run-dashboard

```
```
npm run cy:run:cucumber

```

```
npm run cy:run:dockerinclude

```

```
npm run cy:run:dockerbase

```
