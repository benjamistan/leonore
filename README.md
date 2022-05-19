![alt text](https://github.com/benjamistan/leonore/blob/master/src/assets/Leonore-logo.png)

Léonore is a simple platform to generate mathematical expressions that children can do to help them learn the basics. You can deploy Leonore on your own infra, or simply visit the running instance [here](https://leonore.vercel.app/).

## Running in Docker

From the root of the repo, build yourself an image for Leonore on your local machine as follows:
`docker build -t leonore .`

Then run an instance of Leonore using the image you've just created
`docker run --rm -it --name leonore -p 80:80 leonore`

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate!
