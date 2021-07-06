
from db_file_storage import storage
from django.urls import reverse
from django.utils.http import urlencode

class DatabaseFileStorage(storage.DatabaseFileStorage):
    def url(self, name):
        _url = reverse('db_file_storage.get_file')
        return _url + '?' + urlencode({'name': name})

