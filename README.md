## Usage

### Development mode

Development mode for this application starts up 2 processes in the same container, one running on port 5000 (Python/Django backend) and one that writes to the disk and recompiles the frontend. This allows for changes to be picked up and re-built from the mounted local volumes.

With Docker installed run
`docker-compose down; docker-compose build && docker-compose up`

Then the app in development should be accessible on http://localhost:5000/

Now you can make changes to files in `frontend` and the changes **should** show up in the browser automagically.

To create a local admin user you should run this.

```
docker exec -it canvas_app_explorer ./manage.py shell -c "from django.contrib.auth.models import User; User.objects.create_superuser('admin', 'admin@example.com', 'admin')"
```

Please see the Wiki for instructions on configuring with LTI

### Testing production (Openshift) build

The openshift build compiles all of the frontend assets into the container during the build. It uses whitenoise currently to serve up the content.

To build, use the separate docker-compose-openshift-test.yml file. This uses a slightly different dockerfiles/Dockerfile.openshift that uses a static path and disables DEBUG.

`docker compose -f docker-compose-openshift-test.yml build`

Then to start it you can run
`docker compose -f docker-compose-openshift-test.yml up`

This should start up as expected on http://localhost:5000
