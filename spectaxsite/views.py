# Create your views here.

import urllib2
import urllib


from django.shortcuts import render_to_response,get_object_or_404
from django.http import HttpResponseRedirect,HttpResponse
from spectaxsite.models import Users
from django.template import RequestContext
from google.appengine.ext import db
import uuid
import os


client_id="3f824830e9bad969e0e2"
client_secret="12f1dcf5c1b3eda229bed2f1008dedb08cd33e97"

def oauth(request):
	#return HttpResponse(request.GET['code'])
	code = request.GET['code']
	url = 'https://github.com/login/oauth/access_token?'
	values = {'client_id' : client_id,
			  'redirect_uri' : 'http://nitinapp10.appspot.com/oauth/github',
			  'client_secret' : client_secret,
			  'code': code,}
	req = urllib2.Request(url+urllib.urlencode(values))
	response = urllib2.urlopen(req)
	the_page = response.read()
	token = the_page.split('&')
	token = token[0].split('=')
	token = token[1]
	url = 'https://api.github.com/user?'
	
	#return HttpResponse(url+'access_token='+token)
	values = {'access_token' : token,}
	req = urllib2.Request(url+urllib.urlencode(values))
	
	response = urllib2.urlopen(req)
	the_page = response.read()
	null = None
	false = False
	obj = eval(the_page)
	p=Users(key_name=str(obj['id']),email=obj['html_url'],name=obj['name'],password=None)
	p.put();
	 
	#return HttpResponse(token)		
	#return render_to_response('home.html', {
    #        'access_token': token,
    #    },)
	x=uuid.uuid1()
	a=str(x)
	p.sid = a
	p.put()
	return HttpResponseRedirect('/home/'+str(obj['id'])+'/'+ a)
def index(request):
	address = 'https://github.com/login/oauth/authorize?client_id='+client_id+'&redirect_uri=http://nitinapp10.appspot.com/oauth/github'
	return render_to_response('index.html', {
            'address': address,
        }, )
	#return HttpResponse(os.path.dirname(__file__))
def register(request):
	p_k=employee_k = db.Key.from_path('Users', request.POST['userid'])
	p=db.get(p_k)
	a=""
	if(p!=None):
		a="this email is already registered"
	else:
		a="registered successfully,login above"
		p=Users(key_name=request.POST['userid'],email=request.POST['userid'],name=request.POST['name'],password=request.POST['pass'])
		p.put();
	return render_to_response('index.html', {
            'error_message': a,
        }, )
def login(request):
	p_k=employee_k = db.Key.from_path('Users', request.POST['userid'])
	p=db.get(p_k)
	if(p==None):
		return render_to_response('index.html', {
            'login_error': "email or password dosent match",
        }, )
	
	if(p.password != request.POST['pass']):
		return render_to_response('index.html', {
            'login_error': "email or password dosent match",
        }, )
	x=uuid.uuid1()
	a=str(x)
	p.sid = a
	p.put()
	return HttpResponseRedirect('/home/'+request.POST['userid']+'/'+ a)
	#return render_to_response('home.html',{
    #        'name': p.name,
	#		'sid':a,
    #    },)
def home(request,email,sid):
	p_k=employee_k = db.Key.from_path('Users', email)
	p=db.get(p_k);

	if(p == None or p.sid != sid):
		return render_to_response('index.html', {
            'login_error': "error loging in try again",
        }, )
	return render_to_response('home.html',{
            'name': p.name,
			'sid':sid,
			'email':p.email,
			'id':email,
        },)
def profile(request,email,sid):
	p_k=employee_k = db.Key.from_path('Users', email)
	p=db.get(p_k);
	
	if(p == None or p.sid == None or p.sid != sid):
		return render_to_response('index.html', {
            'login_error': "error loging in try again",
        }, )
	return render_to_response('profile.html',{
            'name': p.name,
			'sid':sid,
			'email':p.email,
			'id':email,
        },)
def update(request,email,sid):
	p_k=employee_k = db.Key.from_path('Users', email)
	p=db.get(p_k)

	if(p == None or p.sid == None or p.sid != sid):
		return render_to_response('index.html', {
            'login_error': "error loging in try again",
        }, )
	a = " "
	if(request.POST['name'] != "Enter Your Full Name To Change"):
		p.name = request.POST['name']
		a = " name "
	if(request.POST['pass'] != "Enter A New Password"):
		p.password = request.POST['pass']
		a += " password "
	p.put()
	return render_to_response('profile.html',{
        'name': p.name,
		'sid':sid,
		'email':p.email,
		'id':email,
		'update_msg':a + "successfully updated",
    },)
def logout(request,email,sid):
	p_k=employee_k = db.Key.from_path('Users', email)
	p=db.get(p_k)
	if(p != None or p.sid != None or p.sid == sid):
			p.sid = None
			p.put()
	return HttpResponseRedirect('/')