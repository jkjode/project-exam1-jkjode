# Project Exam 1

To put into practice the skills learned over your first year of studies.

## Description

Was tasked to create a blog site with optional design and topics covered on the blog but with at least the following pages:

- Home page
- About page
- List of blog posts
- Blog post specific pages
- Contact page.

### Home Page

The home page should have a ‘Latest Posts’ section which uses a carousel (slider) for users to click to view more posts. For example, by default the user can see four posts,
then they can click an arrow on the right to view the next four posts, and click it again to view the next four posts. The user can also click back to view results they had previously seen.
This must be implemented for desktop at least, but if you want a simpler layout for mobile, you can change it from being in a carousel.

### Blog Page

The blog posts page should show the first 10 blogs, and the user should click to view more results which then show underneath the first 10 blogs.

### Blog Specific Page

The content of the blog specific page should be dynamically built using a query string parameter based on whatever link the user clicked.
The title of the blog specific page should change based on the blog that has been clicked on e.g. “My Blog | An Article I Wrote”.

If images on the blog post page are clicked, a modal should appear giving the user a bigger view of that image. Clicking outside the image should hide the modal.

### Contact page

Create a contact us page, there should be 4 textboxes on this page.

- Name (Should be more than 5 characters long)
- Email address (Must be a valid email address)
- Subject (Should be more than 15 characters long)
- Message content (Should be more than 25 characters long)

### WordPress/Rest API

The Rest API was set up on a seperate website with a WordPress installation used as a Headless CMS. Using JavaScript I have fetched the data to this project from there.

## Built With

- HTML
- CSS
- JavaScript

## Acknowledgments

I am still limited in my JS skills at this moment and the handling of innerHTML is functional but I am aware of the security dangers of doing it this way.
Also with CSS I am still learning and experimenting but I try to keep it semantic along the way. Allthough I must admit it is not easy to practise the correct mindsets on coding at this moment.
Everything is still fairly new.
