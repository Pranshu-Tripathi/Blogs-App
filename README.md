# Blogs-App
This is a web app to support blogging. The challenging aspect of this is that we want to implement it as a micro-service arcitecture.


# Application Overview
- User should be able to post blogs. (No need on maintaining user data and authentication)
- We want to see comments added to each blog
- Total number of comments on a single blog post.


# Approach

- React frontend application that will handle the GUI interface for clients.
- Post Blogs service. (Handles posting blogs and other post related requests).
- Comment Blogs service. (Handles comment on blogs and other comment related requests).

# Complications

- We need to add a asynchoronous communication to the posts service from comments service, to map requests related to particular post.
- We won't couple any of the services with this and try a event based communication.
