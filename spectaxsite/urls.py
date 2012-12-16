from django.conf.urls.defaults import *

urlpatterns = patterns('',
    (r'oauth/github/$', 'spectaxsite.views.oauth'),
    (r'home/(?P<email>[A-Za-z0-9_.@-]+)/(?P<sid>[A-Za-z0-9_-]+)/$', 'spectaxsite.views.home'),
	(r'profile/(?P<email>[A-Za-z0-9_.@-]+)/(?P<sid>[A-Za-z0-9_-]+)/$', 'spectaxsite.views.profile'),
    (r'update/(?P<email>[A-Za-z0-9_.@-]+)/(?P<sid>[A-Za-z0-9_-]+)/$', 'spectaxsite.views.update'),
	(r'logout/(?P<email>[A-Za-z0-9_.@-]+)/(?P<sid>[A-Za-z0-9_-]+)/$', 'spectaxsite.views.logout'),
	(r'register/$', 'spectaxsite.views.register'),
	(r'login/$', 'spectaxsite.views.login'),
    (r'$', 'spectaxsite.views.index'),
)