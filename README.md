# .github

```shell
docker run --rm \
    --env-file .env \
    -v "./renovate-config.js:/usr/src/app/config.js" \
    -e RENOVATE_DRY_RUN=full \
    -e RENOVATE_TOKEN=$(gh auth token) \
    -e DOCKERHUB_USERNAME="${USER}" \
    -e LOG_LEVEL=debug \
renovate/renovate
```
