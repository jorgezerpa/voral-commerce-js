import { encode } from 'js-base64'

export function convertToBase64(str){
    return encode(str)
}