# API (Go) — placeholder

Backend scaffold only. **No code yet** by explicit request: the project is being built
front-first.

Planned layout once the Go stack is confirmed:

```text
apps/api
├── cmd/         # entrypoints (main packages)
└── internal/    # domain, transport, persistence
```

Pending before the first line of code:

- `go.mod` / `go.sum` (module path + Go version)
- HTTP framework / router choice
- data source (database + driver)
- environment configuration strategy
