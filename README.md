             
<img src="https://i.ibb.co/Ldr99460/ascii-text-art.png"/>
<i>Fast. Reliable. Eternal</i>

## About EternaDrive

EternaDrive is a new file hosting service web application, made with a powerful stack technology, providing a great user experience. Stop worrying about your storage!

- Secure and reliable way of storing files.
- Smooth user experience with a high quality frontend.
- High quality software deployment
- [Real-time event broadcasting](https://laravel.com/docs/broadcasting).



## Security Vulnerabilities

If you discover a security vulnerability within EternaDrive, please send an e-mail to Anchie via [wyhwtf@gmail.com](mailto:wyhwtf@gmail.com). All security vulnerabilities will be promptly addressed.

## License

EternaDrive app is under [MIT license](https://opensource.org/licenses/MIT).

## Tech stack
Backend:
- Laravel
- MySQL
- Pest

Frontend:
 - React.js
 - TailwindCSS

EternaDrive leverages Inertia.js for API-less development, significantly improving the developer experience.


## Project start up and configuration

#### Download the repo
```bash
git clone https://github.com/Anchiee/EternaDrive
cd EternaDrive
```

#### Install dependencies
```bash
npm install
composer install
```

#### Generate .env keys
```bash
cp .env.example .env
php artisan key:generate
```

**NOTE THAT FOR THINGS LIKE OAUTH2 ETC YOU WILL HAVE TO SET UP ENV KEYS MANUALLY**


#### Before running the project
Locate Authenticate.php file inside ``/vendor/laravel/framework/src/Illuminate/Auth/Middleware/`` and change the ``redirectTo`` method to this

```php
    protected function redirectTo(Request $request)
    {
        return route("session.create");
    }
```

Do the same with RedirectIfAuthenticated.php

```php
    protected function redirectTo(Request $request): ?string
    {
        return route("file.index", ["type" => "all"]);
    }
```

Create a database named eternadrive and run
```bash
php artisan migrate
```

 #### Run the project
```bash
php artisan serve
npm run dev
```

#### Run the tests(optional) 
```bash
cd tests
mkdir Unit
cd ..
php artisan test
```

## Contribution

#### Fork the repository
#### Clone your fork
```bash
git clone https://github.com/YOUR_USERNAME/EternaDrive.git
```
#### Create a new branch for changes
```bash
git checkout -b feature-branch
```
#### Make your changes and push them
```bash
git commit -m "Describe your changes"
```
```bash
git push origin feature-branch
```
#### Open a pull request



## Contact
For any inquiries, feel free to reach out via my social media links on my GitHub profile.

