from typing import Tuple
from rest_framework.request import Request
from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework_simplejwt.tokens import Token

class CookiesAuthentication(JWTAuthentication):
    def authenticate(self, request):
        acess_token = request.COOKIES.get('access_token')

        if not acess_token:
            return None
        
        validated_token = self.get_validated_token(acess_token)

        try:
            user = self.get_user(validated_token)
        except:
            return None
        
        return(user, validated_token)