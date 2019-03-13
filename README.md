# contentful-migrations-demo

## Development
- Create a migration in the `contentful/migrations` directory **Note always split migration in the smallest stop possible to prevent partial failures. See other migrations for inspiration.**
- Test the migration by running `CONTENTFUL_ENVIRONMENT_ID={a-test-environment} make contentful-migrations` command (this will automatically create an environment if it does not exist!)
- Check if the migration has succeeded in the test environment.
- Commit the migration and let the pipeline execute the migration against the acceptance/master environments.
- Check if the migrations have succeeded at acceptance/production environments.
- To reduce the build time suffix the the migration with `.executed`, this way the migration tool will ignore the already executed migration.




  
