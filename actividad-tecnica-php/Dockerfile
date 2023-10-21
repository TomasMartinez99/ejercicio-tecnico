# Use an official PHP runtime with Apache as the parent image
FROM php:8.0-apache

# Install system dependencies and PHP extensions required for Laravel
RUN apt-get update && apt-get install -y libpng-dev libjpeg-dev libfreetype6-dev zip git unzip && \
    docker-php-ext-configure gd --with-freetype --with-jpeg && \
    docker-php-ext-install pdo pdo_mysql gd

# Set the working directory in the container
WORKDIR /var/www/html

# Remove default Apache index.html
RUN rm -rf /var/www/html/*

# Copy the current directory contents into the container at /var/www/html
COPY . /var/www/html/

# Install Composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# Install PHP dependencies
RUN composer install

# Set necessary permissions for Laravel to operate correctly
RUN chown -R www-data:www-data /var/www/html/storage && \
    chown -R www-data:www-data /var/www/html/bootstrap/cache

# Make port 80 available to the world outside this container
EXPOSE 80

# Copy existing virtual host configuration to enable mod_rewrite for Laravel (optional)
# COPY ./your-laravel-apache.conf /etc/apache2/sites-available/000-default.conf

# Enable mod_rewrite for Apache (Required for Laravel's .htaccess file)
RUN a2enmod rewrite

# Start Apache in the foreground
CMD ["apache2-foreground"]
