"""
Django settings for photobooth project.

Generated by 'django-admin startproject' using Django 4.2.4.

For more information on this file, see
https://docs.djangoproject.com/en/4.2/topics/settings/

For the full list of settings and their values, see
https://docs.djangoproject.com/en/4.2/ref/settings/
"""

from pathlib import Path
import os

# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = Path(__file__).resolve().parent.parent


# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/4.2/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = 'django-insecure-9n4elz6(s=k0e3v+j8z37(42nap*v35f^+d6z32h92-hwg4*ao'

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

ALLOWED_HOSTS = ['*']


# Application definition

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'booth',
    'storages',
    'users',
    'crispy_forms',
]

MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
    'whitenoise.middleware.WhiteNoiseMiddleware',

]

ROOT_URLCONF = 'photobooth.urls'

CRISPY_TEMPLATE_PACK = 'bootstrap4'  # Use the appropriate template pack for your project

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [os.path.join(BASE_DIR, 'templates')],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'photobooth.wsgi.application'

AUTH_USER_MODEL = 'users.CustomUser'





# Database
# https://docs.djangoproject.com/en/4.2/ref/settings/#databases

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': BASE_DIR / 'db.sqlite3',
    }
}


# Password validation
# https://docs.djangoproject.com/en/4.2/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]


# Internationalization
# https://docs.djangoproject.com/en/4.2/topics/i18n/

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_TZ = True


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/4.2/howto/static-files/

STATIC_URL = 'static/'
STATIC_ROOT = os.path.join(BASE_DIR, 'staticfiles')
STATICFILES_DIRS = (
    os.path.join(BASE_DIR, 'static'),
)

MEDIA_URL = '/media/'
MEDIA_ROOT = os.path.join(BASE_DIR, 'media')

# Default primary key field type
# https://docs.djangoproject.com/en/4.2/ref/settings/#default-auto-field

DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'

# email settings
EMAIL_BACKEND = 'django.core.mail.backends.smtp.EmailBackend'
EMAIL_HOST = 'smtp.gmail.com'
EMAIL_PORT = 587
EMAIL_USE_TLS = True
EMAIL_HOST_USER = 'josenyamos@gmail.com'
EMAIL_HOST_PASSWORD = 'tliihcsaykdmycrw'

# The Mpesa environment to use
# Possible values: sandbox, production

MPESA_ENVIRONMENT = 'sandbox'

# Credentials for the daraja app

MPESA_CONSUMER_KEY = 'wigA2Jh1XEgfsOlSS93tITBsG48Tp67U'
MPESA_CONSUMER_SECRET = 'lXSPRulGhKz96vZX'

#Shortcode to use for transactions. For sandbox  use the Shortcode 1 provided on test credentials page

MPESA_SHORTCODE = 'mpesa_shortcode'

# Shortcode to use for Lipa na MPESA Online (MPESA Express) transactions
# This is only used on sandbox, do not set this variable in production
# For sandbox use the Lipa na MPESA Online Shorcode provided on test credentials page

MPESA_EXPRESS_SHORTCODE = 'mpesa_express_shortcode'

# Type of shortcode
# Possible values:
# - paybill (For Paybill)
# - till_number (For Buy Goods Till Number)

MPESA_SHORTCODE_TYPE = 'paybill'

# Lipa na MPESA Online passkey
# Sandbox passkey is available on test credentials page
# Production passkey is sent via email once you go live

MPESA_PASSKEY = 'mpesa_passkey'

# Username for initiator (to be used in B2C, B2B, AccountBalance and TransactionStatusQuery Transactions)

MPESA_INITIATOR_USERNAME = 'initiator_username'

# Plaintext password for initiator (to be used in B2C, B2B, AccountBalance and TransactionStatusQuery Transactions)

MPESA_INITIATOR_SECURITY_CREDENTIAL = 'initiator_security_credential'
