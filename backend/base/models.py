from django.db import models
from django.contrib.auth.models import AbstractUser

class MyUser(AbstractUser):
    username= models.CharField(max_length=50, unique=True, primary_key=True)
    bio = models.CharField(max_length=500)
    profile_image = models.ImageField(upload_to='profile_images/', blank=True, null=True)

    followers = models.ManyToManyField('self', symmetrical=False, related_name='following', blank=True) # symmetrical=False (eu posso seguir alguem e ela nao me seguir de volta); 

    def __str__(self):
        return self.username

