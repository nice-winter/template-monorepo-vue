import rootConfig from 'configs/prettier/prettier.config.js'

/**
 * @see https://prettier.io/docs/configuration
 * @type {import('prettier').Config}
 */
const config = {
  printWidth: 80,
  singleAttributePerLine: true
}

export default Object.assign(rootConfig, config)
