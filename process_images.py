"""
Player image processor
- Center crops to square
- Resizes to 400x400
- Saves as WebP (quality 80)

Usage:
  python3 process_images.py <input_folder> <output_folder>

Example:
  python3 process_images.py ~/Desktop/player_photos images/players
"""

import sys
import os
from PIL import Image

def process_image(input_path, output_path, size=400, quality=80):
    img = Image.open(input_path).convert("RGB")

    # Crop: take top 75% of height, then square crop from center horizontally
    w, h = img.size
    crop_h = int(h * 0.75)
    img = img.crop((0, 0, w, crop_h))

    # Now center-crop to square
    w, h = img.size
    min_dim = min(w, h)
    left = (w - min_dim) // 2
    img = img.crop((left, 0, left + min_dim, min_dim))

    # Resize to target size
    img = img.resize((size, size), Image.LANCZOS)

    # Save as WebP
    img.save(output_path, "WEBP", quality=quality)
    print(f"✓ {os.path.basename(output_path)} ({os.path.getsize(output_path) // 1024}KB)")

def main():
    if len(sys.argv) < 3:
        print("Usage: python3 process_images.py <input_folder> <output_folder>")
        sys.exit(1)

    input_folder = sys.argv[1]
    output_folder = sys.argv[2]
    os.makedirs(output_folder, exist_ok=True)

    supported = (".jpg", ".jpeg", ".png", ".webp", ".heic")
    files = [f for f in os.listdir(input_folder) if f.lower().endswith(supported)]

    if not files:
        print("No images found in input folder.")
        sys.exit(1)

    print(f"Processing {len(files)} images...\n")
    for filename in files:
        input_path = os.path.join(input_folder, filename)
        name = os.path.splitext(filename)[0]
        output_path = os.path.join(output_folder, f"{name}.webp")
        process_image(input_path, output_path)

    print(f"\nDone. Files saved to: {output_folder}")

if __name__ == "__main__":
    main()
