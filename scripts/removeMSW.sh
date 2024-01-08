#!/bin/bash
echo "Deleting msw server related code"

script_dir="$(dirname "$(readlink -f "$0")")"

file_to_modify="../src/app/layout.tsx"  # Example relative path

# Use sed to perform the deletion in-place
sed -i '
   /^\/\/#region msw/,/^\/\/#endregion/ {
     d
   }
' "$script_dir/$file_to_modify"

echo "Finishing..."
