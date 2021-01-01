# Develop Locally
## How to develop locally and collaborate remotely
1. Commit your working branch to not loose changes <code>$ git add . $ git commit -m "styling homepage 75%"</code>
2. Delete local development branch <code>$ git branch -d development</code>
3. Checkout new local development branch <code>$ git checkout -b development</code>
4. Pull latest development branch from gitlab <code>$ git pull origin development</code>
5. Merge your working branch into your fresh pulled local development branch 
    * Be on development branch <code>$ git merge your-branch-to-integrate</code>
    * Resolve conflicts locally via PyCharm "Commit" > Resolve Tab 
    * Commit after merge (tip: to save and quit the command line commit editor "vim" <code>$ :wq</code>)
6. Create your a new working branch <code>$ git checkout -b your-branch-name</code> (e.g., branch name: create-login, styling-posts, ...)
7. Start remote interpreter (Docker containers) with the configured PyCharm command <code>RUNSERVER</code>
    * If you experience postgres relationship errors consider dropping your local database (see below)
8. Start the frontend react app <code>$ cd frontend/ $ npm start</code>
9. Happy Hacking!
10. Commit after every new and working feature <code>$ git add . $ git commit -m "login page styling 85% done"</code>
11. After several features push to GitLab development branch<code>$ git push origin your-branch-name</code>
    * Consider pulling and merging <strong>development</strong> first locally if development got updated (repeat 1. to 5) 
    * Also only push code which works locally    
12. Create a merge request on GitLab to <strong>development</strong> branch and assign the DevOps person. Begin at 6. 

# Tips and Tricks
* Go into the running container for creating a superuser and accessing the django admin panel
    * List container IDs <code>$ docker ps</code>
    * Access the container <code>$ docker exec -ti first_three_digits_of_id bash</code> 
    * Create superuser on DB with <code>$ python manage.py createsuperuser</code>
* Use the Debbuger for REST API development
    * Set a breakpoint
    * Evaluate datastructures and expressions with the PyCharm Evaluate function
    * Step over for run down of your code
* Check the "Network" Tab of your browser inspect for request / fetch activities

# Drop a Postgres Database 
<strong>Warning: this will delete all database data if not backed up and reintegrated properly</strong>
1. If you're running a remote server (i.e. example DigitalOcean) access it <code>$ ssh root@serverIPv4</code>
2. Step 1. must be skipped if you drop the DB on your local machine (most common case)
3. Stop all running Docker containers <code>$ docker stop $(docker ps -a -q)</code>
4. Delete Docker containers <code>$ docker rm $(docker ps -a -q)</code>
5. Get a list of all Docker volumes <code>$ docker volume list</code>
6. Delete the postgres volume <code>$ docker volume rm some_project-name_postgres</code>
7. Delete Delete in some_project-name > backend > apps all migration files (not the <code>__ini__.py</code>)
    * If your dropping the DB on DigitalOcean push, merge and run the CI/CD to master at this point
8. Recreate the postgres DB with your PyCharm configuration for the remote interpreter (see <code>README.md</code> Setup Guide if your missing those)
    * Click <code>MAKEMIGRATIONS</code>  
    * Click <code>MIGRATE</code>
9. Start the Docker containers via our remote interpreter
    * Click <code>RUNSERVER</code>  
