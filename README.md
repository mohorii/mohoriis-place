## Welcome. This is mohorii.

### こんにちは。モホリ—です。

Based on the assumption that nodeJS and npm are available you
can make the build-folder by using
``` npm install ``` to install the dev dependencies followed
by the ``` npm run build ``` command.

``` docker-compose up``` will start the project and mount the build folder finally.

Those commands will build the node_modules folder as well as the build folder.
The build folder is essential for starting the docker environment because it
gets mounted into the var/html and is accessible on port:8000 after container started.

----

_V1.1.1_ \
Setting up Docker configuration for starting the docker out of the project.

_V1.1.0_ \
Adding first own Docker configuration

_V1.0.0_ \
Setting up the project, starting a little basic templating.