#!/bin/bash

# List of all Shadcn components to add
components=(
  "alert"
  "avatar"
  "button"
  "card"
  "checkbox"
  "dialog"
  "dropdown-menu"
  "input"
  "label"
  "popover"
  "progress"
  "radio-group"
  "select"
  "switch"
  "tabs"
  "textarea"
  "tooltip"
  "accordion"
  "badge"
  "breadcrumb"
  "collapsible"
  "context-menu"
  "date-picker"
  "drawer"
  "link"
  "menu"
  "navbar"
  "notification"
  "pagination"
  "stepper"
  "tabs"
  "toast"
  "tooltip"
  "typography"
  # Add any additional components here if available
)

# Loop through and add each component using npx
for component in "${components[@]}"; do
  echo "Adding $component..."
  npx shadcn add "$component"
done

echo "All components added successfully!"
