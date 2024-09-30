###############################################
# Base Image
###############################################
FROM python:3.12-slim AS python_base

ENV PYTHONUNBUFFERED=1 \
    UV_COMPILE_BYTECODE=1 \
    UV_LINK_MODE=copy \
    PIP_DISABLE_PIP_VERSION_CHECK=on \
    PIP_DEFAULT_TIMEOUT=100 \
    PYSETUP_PATH="/code" \
    VENV_PATH="/code/.venv"

# prepend venv to path
ENV PATH="$VENV_PATH/bin:$PATH"
###############################################
# Builder Image
###############################################
FROM python_base AS builder_base
RUN apt-get update && \
    apt-get --no-install-recommends -y install &&\
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

# Install uv
COPY --from=ghcr.io/astral-sh/uv:latest /uv /bin/uv

# Copy project requirement files here to ensure they will be cached.
WORKDIR $PYSETUP_PATH
COPY ./backend/uv.lock ./backend/pyproject.toml ./
RUN --mount=type=cache,target=/root/.cache/uv \
    uv sync --frozen --no-install-project

###############################################
# Production Image
###############################################
FROM python_base AS production
COPY --from=builder_base $PYSETUP_PATH $PYSETUP_PATH
WORKDIR $PYSETUP_PATH
COPY ./backend $PYSETUP_PATH
COPY ./docker/backend/entrypoint.sh $PYSETUP_PATH
ENTRYPOINT [ "./entrypoint.sh" ]
