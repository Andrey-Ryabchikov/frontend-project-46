install: 
	npm ci

gendiff: 
	node bin/gendiff.js

publish:
	npm publish --dry-run

lint:
	npx eslint .

lint-fix:
	npx eslint --fix .

tests:
	npm test --watchAll
	npx jest --coverage

