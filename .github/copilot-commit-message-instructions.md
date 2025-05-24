Now, please generate a commit message from current changes.
Make sure it includes an accurate and informative subject line that succinctly summarizes the key
points of the changes, the response must only have commit message content and must have blank line in message template.
Commit should follow conventional commit [specs](https://www.conventionalcommits.org/en/v1.0.0/#specification)

Below is the commit message template:

<type>(<scope>): <subject>

<body>

<footer>

The Header is mandatory, while the Body and Footer are optional.

Regardless of which part, no line should exceed 72 characters.

Below is the type Enum:

- feat: new feature
- fix: bugfix
- docs: documentation
- style: formatting (changes that do not affect code execution)
- refactor: refactoring (code changes that are neither new features nor bug fixes)
- test: adding tests
- chore: changes to the build process or auxiliary tools

Bellow is the scope Enum:

- backend: Changes made in backend part of app
- frontend: Changes made in frontend part of app
- docker: Changes made for docker configurations(dockerfile,docker compose, caddyfile)
- config: Changes made in other files

The body section is a detailed description of this commit and can be split into multiple lines.
