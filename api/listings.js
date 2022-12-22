import http from "./client";

const endPoint = '/listings';

const getListings = async () => await http.get(endPoint)

const addListings = async (listing,onUploadProgress) => {
    const data = new FormData()
    data.append('title', listing.title)
    data.append('price', listing.price)
    data.append('description', listing.description)
    data.append('categoryId', listing.category.value)

    listing.images.forEach((image, idx) => data.append("images", {
        name: `image${idx}`,
        type: 'image/jpeg',
        uri: image
    }))

    if (listing.location)
        data.append("location", listing.location)

    return await http.post(endPoint, data, {
        onUploadProgress:(progress) => onUploadProgress(progress.loaded / progress.total)
    })
}

export default {
    getListings, addListings
}