from django.shortcuts import render, redirect, get_object_or_404
from django.contrib.auth import login, logout, authenticate, get_user_model
from django.contrib import messages
from django.contrib.auth.decorators import login_required

from .forms import UserRegistrationForm, UserLoginForm,UserUpdateForm
from .decorators import user_not_authenticated

from .models import*



app_name='users'

# Create your views here.
# def index(request):
#     return render(request, 'index.html')


@login_required(login_url='login')
def gallery(request):
    user = request.user
    category = request.GET.get('category')
    if category == None:
        photos = Photo.objects.filter(category__user=user)
    else:
        photos = Photo.objects.filter(
            category__name=category, category__user=user)

    categories = Category.objects.filter(user=user)
    context = {'categories': categories, 'photos': photos}
    return render(request, 'booth/gallery.html', context)


# @login_required(login_url='login')
def viewPhoto(request, pk):
    photo = Photo.objects.get(id=pk)
    return render(request, 'booth/photo.html', {'photo': photo})

def view_home(request):
    photos=Photo.objects.all()[:16]
    context={
        'photos':photos
    }

    return render(request,'booth/view_home.html', context)


@login_required(login_url='login')
def addPhoto(request):
    user = request.user

    categories = user.category_set.all()

    if request.method == 'POST':
        data = request.POST
        images = request.FILES.getlist('images')

        if data['category'] != 'none':
            category = Category.objects.get(id=data['category'])
        elif data['category_new'] != '':
            category, created = Category.objects.get_or_create(
                user=user,
                name=data['category_new'])
        else:
            category = None

        for image in images:
            photo = Photo.objects.create(
                category=category,
                description=data['description'],
                image=image,
            )

        return redirect('gallery')

    context = {'categories': categories}
    return render(request, 'booth/add.html', context)


@login_required(login_url='login')
def deletePhoto(request, photo_id):
    user = request.user
    photo = get_object_or_404(Photo, id=photo_id)

    # Ensure the user trying to delete the photo is the owner
    if photo.category.user != user:
        return redirect('gallery')  # or handle unauthorized deletion differently

    if request.method == 'POST':
        # Call the delete method on the Photo model
        photo.delete()
        return redirect('gallery')

    return render(request, 'booth/delete_photo.html', {'photo': photo})



# @user_not_authenticated
def register(request):
    if request.method == "POST":
        form = UserRegistrationForm(request.POST)
        if form.is_valid():
            user = form.save()
            login(request, user)
            messages.success(request, f"New account created: {user.username}")
            return redirect('login')

        else:
            for error in list(form.errors.values()):
                messages.error(request, error)

    else:
        form = UserRegistrationForm()

    return render(request=request,template_name="users/register.html",context={"form": form})

@login_required
def custom_logout(request):
    logout(request)
    messages.info(request, "Logged out successfully!")
    return redirect("/")

# @user_not_authenticated
def custom_login(request):
    if request.method == "POST":
        form = UserLoginForm(request=request, data=request.POST)
        if form.is_valid():
            user = authenticate(
                username=form.cleaned_data["username"],
                password=form.cleaned_data["password"],
            )
            if user is not None:
                login(request, user)
                # messages.success(request, f"Hello {user.username} You have been logged in")
                return redirect("gallery")

        else:
            for error in list(form.errors.values()):
                messages.error(request, error) 

    form = UserLoginForm()

    return render(request=request,template_name="users/login.html",context={"form": form})



def profile(request, pk):
    if request.method == "POST":
        user = request.user
        form = UserUpdateForm(request.POST, request.FILES, instance=user)
        if form.is_valid():
            user_form = form.save()
            messages.success(request, f'Your profile has been updated!')
            # Check if the user is redirected correctly
            print(f"Redirecting to profile for user {user_form.pk}")
            return redirect("profile", user_form.pk)
        else:
            # Print form errors for debugging
            for error in list(form.errors.values()):
                print(error)
            messages.error(request, "There was an error updating your profile.")

    user = get_user_model().objects.filter(pk=pk).first()
    if user:
        form = UserUpdateForm(instance=user)
        form.fields['description'].widget.attrs = {'rows': 1}
        return render(
            request=request,
            template_name="profile.html",
            context={"form": form}
        )
    
    return redirect("/")



