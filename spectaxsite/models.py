from google.appengine.ext import db

class Users(db.Model):
	def __unicode__(self):
        	return self.email
	
			
	email=db.StringProperty()
	name=db.StringProperty()
	password=db.StringProperty()
	sid=db.StringProperty()