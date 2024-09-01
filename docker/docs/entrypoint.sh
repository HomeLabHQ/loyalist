#!/bin/bash
#!/usr/bin/env bash
#!/bin/sh

case "$1" in
    serve)
        exec mkdocs serve -a 0.0.0.0:2000
    ;;
    build)
        exec mkdocs build
    ;;
    bash)
        exec /bin/bash "${@:2}"
    ;;
    *)
        exit 1
    ;;
esac
