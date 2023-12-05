import app from './app'
import config from './app/config'
import mongoose from 'mongoose'

//souravbera515
//FvgjFWhekC0LCn2G

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
async function main() {
  try {
    await mongoose.connect(config.database_url as string)
    app.listen(config.port, () => {
      console.log(`Example app listening on port ${config.port}`)
    })
  } catch (err) {
    console.log(err)
  }
}
void main()
