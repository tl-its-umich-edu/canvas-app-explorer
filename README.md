## Usage

With Docker installed run
`docker-compose down; docker-compose build && docker-compose up`

Then the app in development should be accessible on http://localhost:5000/

Now you can make changes to `frontend/js/app.jsx` and the changes **should** show up in the browser automagically.

To run the initial migrations and create a user you should run this. These will be automated soon as part of a start script.

```
docker exec -it canvas_app_explorer python manage.py migrate
docker exec -it canvas_app_explorer ./manage.py shell -c "from django.contrib.auth.models import User; User.objects.create_superuser('admin', 'admin@example.com', 'admin')"
```
