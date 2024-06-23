#!/bin/bash

# Create directories if they don't exist
mkdir -p icons pngs

# Array of required sizes
sizes=(16 32 48 64 128 256 512 1024)

# Loop through the sizes and create images
for size in "${sizes[@]}"; do
  convert pic-original.png -resize ${size}x${size} pngs/pic-${size}x${size}.png
  convert pic-original.png -resize ${size}x${size} icons/pic-${size}x${size}.ico
done
