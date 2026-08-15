.DEFAULT_GOAL := help

.PHONY: help install start build serve lint clean

help: ## Muestra esta ayuda
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | \
		awk 'BEGIN {FS = ":.*?## "}; {printf "  \033[36m%-10s\033[0m %s\n", $$1, $$2}'

install: ## Instala dependencias
	npm install

start: ## Levanta el servidor de desarrollo
	npm run dev

build: ## Compila la app para producción
	npm run build

serve: ## Sirve el build de producción (requiere `make build` antes)
	npm run start

lint: ## Corre el linter
	npm run lint

clean: ## Borra artefactos de build y dependencias
	rm -rf .next node_modules
