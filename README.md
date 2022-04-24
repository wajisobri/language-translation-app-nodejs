
# Translation App with Express NodeJS
Language translation app using Google Translate API


## Features

- Change source and target language
- Change text for translate


## API Reference

#### Translate text

```http
  POST /translate
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `sourceLang` | `string` | Original language to be translated |
| `targetLang` | `string` | Destination language to be translated |
| `text` | `string` | Text to be translated |


## How to Run

To run this project

```bash
  node app.js
```

Then, you can access the browser or postman to make a post request to the url

```bash
  POST localhost:3001/translate
```

```json
  {
    "text": "Hello, my name is James",
    "sourceLang": "en",
    "targetLang": "id"
  }
```
## Demo

#### Postman Request Example
![App Screenshot](https://i.ibb.co/JpkQDjb/Postman-Demo.png)