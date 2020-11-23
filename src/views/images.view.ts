import Image from '../models/Image';

export default {
    render(image: Image) {
        return {
            id: image.id,
            url: `http://192.168.15.19:3333/uploads/${image.path}`,
        }
    },
    renderMany(imagens: Image[]) {
        return imagens.map(image => this.render(image));
    },
}