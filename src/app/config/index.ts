import dotenv from 'dotenv'
import path from 'path'

dotenv.config({path:path.join((process.cwd(),'.env'))})


export default {
    port:process.env.PORT,
    databse_url:process.env.DATABASE_URL,
    bcrypt_salt_round:process.env.BCRYPT_SALT_ROUNDS,
    jwt_access_secret:process.env.JWT_ACCESS_SECRET,
    jwt_refresh_secret:process.env.JWT_REFRESH_SECRET,
    jwt_access_expire_in:process.env.JWT_ACCESS_EXPIRE_IN,
    jwt_refresh_expire_in:process.env.JWT_REFRESH_EXPIRE_IN,
    cloudinary_cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  cloudinary_api_key: process.env.CLOUDINARY_API_KEY,
  cloudinary_api_secret: process.env.CLOUDINARY_API_SECRET,
}