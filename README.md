# `mdAL` generator for GitHub Actions

This action allows you to generate AL code from `mdAL` model files.

## Inputs

### `model-file`

**Required** The mdAL model file.

## Outputs

### `time`

The time we greeted you.

## Example usage

```yml
uses: actions/mdal-generator-action@master
with:
  model-file: './src/seminar.mdal'
```
