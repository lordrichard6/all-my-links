# How to Add Your Profile Image

1.  **Prepare your image**:
    *   Find the image you want to use.
    *   Rename it to `avatar.png`.

2.  **Move the image**:
    *   Place the `avatar.png` file into the `public` folder inside your project directory: `/Users/paulolopes/Desktop/lopes2tech/projects/link-in-bio/public/`.

3.  **Verify**:
    *   The website should automatically update to show your new profile picture.
    *   If you see your initials, it means the image is not found or named incorrectly.

## Using a Different Name or Format

If you want to use a different file name (e.g., `profile.png`):

1.  Place your image in the `public` folder.
2.  Open `data.ts`.
3.  Find the `avatar` line inside the `profile` object:
    ```typescript
    avatar: "/avatar.png",
    ```
4.  Change `"/avatar.png"` to your new file name (e.g., `"/profile.png"`).
