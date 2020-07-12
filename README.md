# `mdAL` for GitHub Actions

This action allows you to generate AL code from `mdAL` model files.

## Inputs

### `model-file`

**Required** The `mdAL` model file.

## Example usage

```yml
uses: actions/mdal-action@master
with:
  model-file: 'src/model.mdal'
```
