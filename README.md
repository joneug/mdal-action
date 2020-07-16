# `mdAL` for GitHub Actions

This action allows you to generate AL code from `mdAL` model files. Find out more about `mdAL` [here](https://github.com/mdal-lang/mdal).

## Inputs

### `model-file`

**Required** The `mdAL` model file.

## Example usage

```yml
uses: mdal-lang/mdal-action@v1
with:
  model-file: 'src/model.mdal'
```

## License

Apache 2.0 (c) Jonathan Neugebauer
