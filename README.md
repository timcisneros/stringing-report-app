# Stringing Report App

A field-logging tool for pipeline construction work. Crews can record joints
and fittings in reusable tables and generate structured stringing reports
on-site instead of maintaining the same information on paper.

**Project status:** complete portfolio project and not under active feature
development. It remains available as evidence of translating a real field
workflow into a focused React application.

I built it through TimCis Media as part of professional pipeline-support work,
alongside CAD-derived 2D isometric drawings. The public case study uses newly
entered fictional values and contains no client records.

[Live application](https://stringing-report.netlify.app/) ·
[Professional case study](https://timcis.com/projects/stringing-report)

## What it demonstrates

- Reusable tabular entry for pipeline joints and fittings.
- A report workflow shaped around field operations rather than a generic CRUD
  example.
- Responsive React interface suitable for on-site use.
- Row duplication for repeated specifications and spreadsheet export for the
  next reporting handoff.

## Run locally

```sh
npm install
npm start
```

The application UI reflects the period in which it was delivered. Its build
boundary has since been moved from the obsolete Create React App toolchain to
Vite, and the spreadsheet export no longer depends on an unmaintained wrapper.
The workflow and interaction model remain unchanged.
