MONGO_DBNAME = 'emergence'
MONGO_HOST = 'localhost'
MONGO_PORT = 27017

# MONGO_USERNAME = '<your username>'
# MONGO_PASSWORD = '<your password>'

# needed if --auth mode is enabled
# MONGO_AUTH_SOURCE = 'admin'

# Default is ['GET'] read-only access
RESOURCE_METHODS = ['GET', 'POST', 'DELETE']
ITEM_METHODS = ['GET', 'PATCH', 'PUT', 'DELETE']

X_DOMAINS = '*'
X_HEADERS = ['Authorization','Content-type']

ALLOW_UNKNOWN = True

DOMAIN = {
    'people': {},
    'posts': {}
}
