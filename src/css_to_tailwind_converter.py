```python
import cssutils
import tailwindcss_map

def convert_to_tailwind(css_property, css_value):
    tailwind_class = tailwindcss_map.css_to_tailwind.get(css_property, {}).get(css_value, "")
    return tailwind_class

def parse_css_file(file_path):
    css_file = cssutils.parseFile(file_path)
    return css_file

def convert_css_rules_to_tailwind(css_file):
    for rule in css_file:
        if rule.type == rule.STYLE_RULE:
            for property in rule.style:
                tailwind_class = convert_to_tailwind(property.name, property.value)
                if tailwind_class:
                    rule.style.removeProperty(property.name)
                    rule.selectorText = f"{rule.selectorText} {tailwind_class}"
    return css_file

def write_tailwind_file(css_file, file_path):
    with open(file_path, "w") as f:
        f.write(css_file.cssText)

def main():
    original_css_file_path = "src/original.css"
    converted_css_file_path = "src/converted_to_tailwind.css"

    original_css_file = parse_css_file(original_css_file_path)
    converted_css_file = convert_css_rules_to_tailwind(original_css_file)
    write_tailwind_file(converted_css_file, converted_css_file_path)

if __name__ == "__main__":
    main()
```
This script assumes the existence of a `tailwindcss_map` module that contains a dictionary mapping CSS properties and values to their equivalent Tailwind CSS classes. This module would need to be created and maintained separately.