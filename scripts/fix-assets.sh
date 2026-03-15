#!/bin/bash

# Replace all 'figma:asset' imports with '/assets/' references

find . -type f -exec sed -i 's/figma:asset/assets/g' {} +
