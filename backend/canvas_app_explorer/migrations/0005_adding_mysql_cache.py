from django.db import migrations

class Migration(migrations.Migration):

    dependencies = [
        # Add a dependency in here on an existing migration in the app you
        # put this migration in, for example:
        ('canvas_app_explorer', '0004_auto_20211103_1846'),
    ]

    operations = [
        migrations.RunSQL(
            """
            CREATE TABLE `canvas_app_explorer_cache` (
                cache_key varchar(255) CHARACTER SET utf8 COLLATE utf8_bin
                                       NOT NULL PRIMARY KEY,
                value longblob NOT NULL,
                value_type char(1) CHARACTER SET latin1 COLLATE latin1_bin
                                   NOT NULL DEFAULT 'p',
                expires BIGINT UNSIGNED NOT NULL
            );
            """,
            "DROP TABLE `canvas_app_explorer_cache`",
        ),
    ]
