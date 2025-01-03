from django.db import models


class BulgThoughtRegistration(models.Model):
   firstName=models.CharField(max_length=100)
   lastName=models.CharField(max_length=100)
   contact=models.CharField(max_length=200)
   email=models.EmailField()
   address=models.TextField()
   password=models.CharField(max_length=200)

class Contact(models.Model):
   Email=models.EmailField(blank=True)

class PostPoem(models.Model):
   Name=models.CharField(max_length=200)
   Description=models.TextField()
   Title=models.CharField(max_length=200)
   Poem=models.ImageField(upload_to='bulgthoughts')
   Type=models.CharField(max_length=209)

    