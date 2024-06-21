import fs from 'fs'
import path from 'path'

// Set Package Name and Version in case these are filtered out for any reason
if (!process.env.npm_package_name) {
  try {
    const packageJsonPath = path.resolve(__dirname, '../../package.json')
    const packageJsonFile = fs.readFileSync(packageJsonPath).toString()
    const packageJson = JSON.parse(packageJsonFile)

    const { name, version } = packageJson
    process.env.npm_package_name = name
    process.env.npm_package_version = version
  } catch (error) {
    console.error('Error polyfilling nodeEnv:', error)
  }
}
