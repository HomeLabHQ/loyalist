#!/bin/bash
#!/usr/bin/env bash
#!/bin/sh

case "$1" in
    serve)
        exec yarn run dev
    ;;
    build)
        exec yarn build
    ;;
    *)
        exit 1
    ;;
esac
