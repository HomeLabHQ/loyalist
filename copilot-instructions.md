# Copilot Instructions

## Coding Standards

- Project contains django + DRF application in backend folder and React app in frontend folder
- Inside backend we use logfire for logging. Please use logfire format below:
- Use `logfire.debug`, `logfire.info`, `logfire.warning`, `logfire.error`, and `logfire.critical` for logging.
- Use `logfire.exception` for logging exceptions.
- General Usage: `logfire.info("Response failed for  url:{url} details:{resp}", url=url, resp=resp)` message template should have variables that later passed as keyword arguments, never suggest f-strings for logfire methods.
- For backend follow the coding standards from ruff linter
- For frontend follow eslint rules from `frontend/eslint.config.js`
- For backend follow the [Django Coding Style](https://docs.djangoproject.com/en/stable/internals/contributing/codingstyle/).
- For backend when working with ORM (in `get_queryset` and calling objects managers `Model.objects.`) follow [ORM docs](https://docs.djangoproject.com/en/5.1/topics/db/queries/)
- Use descriptive variable names.
- Use comments to explain complex logic.
- Keep templates readable and maintainable.
