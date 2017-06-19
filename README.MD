#  CREATION OF ALEXA APP

### NODEJS

1. Create package.json with alexa dependecy
2. Run 'npm install' to install the dependencies 
3. Write down the index.js code


### CONFIG FOR LAMBDA FUNCTION

1. Handler should be _index.handler_(__Why?__)
2. Create a skill and upload the zip
3. The zip should only compress the index.js and node_modules it should not compress SRC folder containing these
4. Compressing _wrongly_ might lead to __missing Modules__ error.

#### Working
1. Get the input from the user
    STARTMODE
    GUESSMODE
2. Once the app starts it asks for users favourite singer
3. Once the singer is given it fetches the top 10
4. User can also ask top songs, to fetch the latest songs

### Utterances

Alexa ask top fetcher to fetch top {10} songs
Alexa ask top fetcher to fetch top {} albums
Alexa ask top fetcher to fetch top {} apps
Alexa help
Alexa stop
Alexa cancel
Alexa


