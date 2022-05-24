import exifr from 'exifr/dist/full.esm.mjs'
import { sortBy } from 'underscore'
import { format } from 'date-fns'

export async function get() {
 
  const {
    result: { images }
  } = await response.json()

  const urls = images
    .map((image) => image.variants[0])
    .map(
      (src) =>
        new Object({
          src
        })
    )

  return { body: images }

  //   async function getEXIF(image) {
  //     const output = await exifr.parse(image.variants[0], [
  //       'FNumber',
  //       'ISO',
  //       'Make',
  //       'Model',
  //       'ShutterSpeedValue',
  //       'FocalLengthIn35mmFormat',
  //       'DateTimeOriginal',
  //       'ExposureTime',
  //       'userComment',
  //       'ImageDescription',
  //       'Artist'
  //     ])

  //     return {
  //       filename: image.filename,
  //       id: image.id,
  //       src: image.variants[0],
  //       metadata: output,
  //       month: format(new Date(output.DateTimeOriginal), 'MMMM yyyy')
  //     }
  //   }

  //   const imagesWithMeta = await Promise.all(images.map((image) => getEXIF(image)))

  //   const sortedImages = sortBy(imagesWithMeta, (image) => image.metadata.DateTimeOriginal).reverse()
}
