import os
import cv2
from PIL import Image
import pillow_heif

pillow_heif.register_heif_opener()

BASE_DIR = r"D:\Office\Softwares-Office-Clients\rohan_shahoo_WEBSITE\public\images\projects"
OFFICE_SITE_SRC = os.path.join(BASE_DIR, "office site")
OFFICE_SITE_DEST = os.path.join(BASE_DIR, "office-site")

PROPERTY1_SRC = os.path.join(BASE_DIR, "Property 1")
PROPERTY1_DEST = os.path.join(BASE_DIR, "property-1")

os.makedirs(OFFICE_SITE_DEST, exist_ok=True)
os.makedirs(PROPERTY1_DEST, exist_ok=True)

MAX_DIM = 1920

def resize_image(img, max_dim=1920):
    w, h = img.size
    if max(w, h) > max_dim:
        if w >= h:
            new_w = max_dim
            new_h = int(h * (max_dim / w))
        else:
            new_h = max_dim
            new_w = int(w * (max_dim / h))
        return img.resize((new_w, new_h), Image.Resampling.LANCZOS)
    return img

print("--- Step 1: Processing HEIC images from 'office site' ---")
for filename in sorted(os.listdir(OFFICE_SITE_SRC)):
    if filename.lower().endswith(".heic"):
        src_path = os.path.join(OFFICE_SITE_SRC, filename)
        base_name = os.path.splitext(filename)[0].lower()
        dest_path = os.path.join(OFFICE_SITE_DEST, f"{base_name}.webp")
        
        img = Image.open(src_path)
        if img.mode not in ("RGB", "L"):
            img = img.convert("RGB")
        
        img = resize_image(img, MAX_DIM)
        img.save(dest_path, "WEBP", quality=82, optimize=True)
        
        orig_kb = os.path.getsize(src_path) / 1024
        new_kb = os.path.getsize(dest_path) / 1024
        print(f"[HEIC -> WebP] {filename} ({orig_kb:.1f} KB) -> {os.path.basename(dest_path)} ({new_kb:.1f} KB, {img.size[0]}x{img.size[1]})")

print("\n--- Step 2: Extracting & optimizing MOV keyframes from 'Property 1' ---")
for filename in sorted(os.listdir(PROPERTY1_SRC)):
    if filename.lower().endswith(".mov"):
        src_path = os.path.join(PROPERTY1_SRC, filename)
        base_name = os.path.splitext(filename)[0].lower()
        dest_path = os.path.join(PROPERTY1_DEST, f"{base_name}.webp")
        
        cap = cv2.VideoCapture(src_path)
        if not cap.isOpened():
            print(f"Failed to open video: {filename}")
            continue
            
        total_frames = int(cap.get(cv2.CAP_PROP_FRAME_COUNT))
        target_frame = max(0, min(total_frames // 3, total_frames - 1))
        cap.set(cv2.CAP_PROP_POS_FRAMES, target_frame)
        ret, frame = cap.read()
        cap.release()
        
        if ret and frame is not None:
            rgb_frame = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
            img = Image.fromarray(rgb_frame)
            img = resize_image(img, MAX_DIM)
            img.save(dest_path, "WEBP", quality=82, optimize=True)
            
            orig_mb = os.path.getsize(src_path) / (1024 * 1024)
            new_kb = os.path.getsize(dest_path) / 1024
            print(f"[MOV -> WebP] {filename} ({orig_mb:.2f} MB MOV) -> {os.path.basename(dest_path)} ({new_kb:.1f} KB WebP, {img.size[0]}x{img.size[1]})")

print("\nAll Project Media Optimized Successfully!")
