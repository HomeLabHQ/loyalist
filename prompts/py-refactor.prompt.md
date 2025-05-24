---
mode: "edit"
description: "Refactor python function/method and suggest improvements"
---

Please review and refactor selected python code for the following aspects:

## Review Goals

1. **Correctness**  
   Identify any logic or functional bugs, incorrect usage of language features, or potential exceptions.

2. **Clarity & Maintainability**  
   Ensure the code is easy to read and follow. Look for opportunities to improve naming, structure, and readability.

3. **Performance**  
   Suggest optimizations for speed or memory usage where appropriate.

4. **Style Compliance (Ruff)**  
   Ensure the code complies with the style rules configured in `pyproject.toml`, using [Ruff](https://docs.astral.sh/ruff/).

5. **Pythonic Refactoring**  
   Recommend changes that make the code more idiomatic and in line with common best practices in Python.
   Do not insert empty new lines.

6. **Comments & Documentation**  
   Ensure comments are clear, concise, and relevant. Add docstrings for functions and classes.
   Comment should identified as # \* - info, # ! - important, # ? - questions
