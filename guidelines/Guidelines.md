# Earthing design system

Use `@juan-ds/earthing-design-system` for Earthing React interfaces. The library provides travel content primitives, cards, page sections, typography, and light/dark CSS themes. These guidelines reflect this repository's 0.1.0 API; the installed registry artifact was not fetched.

Prefer existing package components before building equivalent controls or sections. Use the shipped semantic CSS variables for custom styling. Preserve component behavior; do not invent variants, providers, token names, or mobile menus. Supply application URLs, meaningful text, image alternatives, and form handlers instead of leaving demonstration defaults in production.

Read [setup](setup.md) before integration, [styles](styles.md) before composing layouts, and [tokens](tokens.md) before custom styling. Find exports in the [component overview](components/overview.md), then read each component's linked file before using it. The component files describe implemented behavior and limitations, rather than inferred brand rules.

This structure follows [Figma's Make kit guideline guidance](https://help.figma.com/hc/en-us/articles/43602393097239-Write-design-system-guidelines-for-Make-kits): a brief entry point and focused linked documentation. Copy this entire `guidelines/` tree into the kit, preserving paths.
